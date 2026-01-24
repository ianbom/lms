<?php

namespace App\Services;

use App\Models\ClassOrder;
use App\Models\Enrollment;
use App\Models\QuizAttempt;
use App\Models\VideoProgress;
use Illuminate\Support\Facades\Auth;

class UserDashboardService
{
    /**
     * Get user dashboard stats
     */
    public function getStats(int $userId): array
    {
        $activeClasses = Enrollment::where('user_id', $userId)
            ->where('status', 'active')
            ->count();

        $completedClasses = Enrollment::where('user_id', $userId)
            ->where('status', 'completed')
            ->count();

        $pendingOrders = ClassOrder::where('user_id', $userId)
            ->where('status', 'pending')
            ->count();

        // Count quizzes that user hasn't attempted yet from enrolled classes
        $enrolledClassIds = Enrollment::where('user_id', $userId)
            ->whereIn('status', ['active', 'completed'])
            ->pluck('class_id');

        $attemptedQuizIds = QuizAttempt::where('user_id', $userId)
            ->pluck('quiz_id');

        $pendingQuizzes = \App\Models\Quiz::whereHas('module', function ($query) use ($enrolledClassIds) {
                $query->whereIn('class_id', $enrolledClassIds);
            })
            ->whereNotIn('id', $attemptedQuizIds)
            ->count();

        return [
            'activeClasses' => $activeClasses,
            'completedClasses' => $completedClasses,
            'pendingOrders' => $pendingOrders,
            'pendingQuizzes' => $pendingQuizzes,
        ];
    }

    /**
     * Get current learning class (last accessed or most recent enrollment)
     */
    public function getCurrentLearning(int $userId): ?array
    {
        // Get the most recent active enrollment with progress
        $enrollment = Enrollment::where('user_id', $userId)
            ->where('status', 'active')
            ->with(['class' => function ($query) {
                $query->with(['modules' => function ($q) {
                    $q->orderBy('sort_order')->with(['videos' => function ($v) {
                        $v->orderBy('sort_order');
                    }]);
                }, 'mentors']);
            }])
            ->latest('updated_at')
            ->first();

        if (!$enrollment || !$enrollment->class) {
            return null;
        }

        $class = $enrollment->class;

        // Calculate progress
        $totalVideos = 0;
        $completedVideos = 0;
        $currentModule = null;
        $currentVideo = null;
        $currentModuleIndex = 1;
        $currentVideoIndex = 1;

        foreach ($class->modules as $moduleIndex => $module) {
            foreach ($module->videos as $videoIndex => $video) {
                $totalVideos++;

                $isCompleted = VideoProgress::where('user_id', $userId)
                    ->where('video_id', $video->id)
                    ->where('is_completed', true)
                    ->exists();

                if ($isCompleted) {
                    $completedVideos++;
                } else if (!$currentVideo) {
                    // First uncompleted video is the current one
                    $currentModule = $module;
                    $currentVideo = $video;
                    $currentModuleIndex = $moduleIndex + 1;
                    $currentVideoIndex = $videoIndex + 1;
                }
            }
        }

        // If all videos completed, use last video
        if (!$currentVideo && $class->modules->count() > 0) {
            $lastModule = $class->modules->last();
            $currentModule = $lastModule;
            $currentVideo = $lastModule->videos->last();
            $currentModuleIndex = $class->modules->count();
            $currentVideoIndex = $lastModule->videos->count();
        }

        $progress = $totalVideos > 0 ? round(($completedVideos / $totalVideos) * 100) : 0;

        return [
            'id' => $class->id,
            'title' => $class->title,
            'slug' => $class->slug,
            'thumbnail_url' => $class->thumbnail_url,
            'progress' => $progress,
            'currentModule' => $currentModuleIndex,
            'currentVideo' => $currentVideoIndex,
            'currentVideoId' => $currentVideo?->id,
            'mentors' => $class->mentors->map(fn($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'avatar_url' => $m->avatar_url,
            ])->toArray(),
        ];
    }

    /**
     * Get user's enrolled classes with progress
     */
    public function getMyClasses(int $userId, int $limit = 4): array
    {
        $enrollments = Enrollment::where('user_id', $userId)
            ->with(['class' => function ($query) {
                $query->with(['mentors' => function ($q) {
                    $q->select('mentors.id', 'mentors.name', 'mentors.avatar_url');
                }]);
            }])
            ->whereIn('status', ['active', 'completed'])
            ->latest('updated_at')
            ->limit($limit)
            ->get();

        return $enrollments->map(function ($enrollment) {
            $class = $enrollment->class;

            // Calculate progress
            $totalVideos = $class->modules()->withCount('videos')->get()->sum('videos_count');
            $completedVideos = 0;

            if ($totalVideos > 0) {
                $completedVideos = VideoProgress::where('user_id', $enrollment->user_id)
                    ->whereHas('video', function ($query) use ($class) {
                        $query->whereHas('module', function ($q) use ($class) {
                            $q->where('class_id', $class->id);
                        });
                    })
                    ->where('is_completed', true)
                    ->count();
            }

            $progress = $totalVideos > 0 ? round(($completedVideos / $totalVideos) * 100) : 0;

            // Get first video for continue learning link
            $firstVideo = $class->modules()
                ->orderBy('sort_order')
                ->first()
                ?->videos()
                ->orderBy('sort_order')
                ->first();

            $mentor = $class->mentors->first();

            return [
                'id' => $enrollment->id,
                'classId' => $class->id,
                'title' => $class->title,
                'slug' => $class->slug,
                'thumbnail_url' => $class->thumbnail_url,
                'progress' => $progress,
                'status' => $enrollment->status,
                'firstVideoId' => $firstVideo?->id,
                'mentor' => $mentor ? [
                    'name' => $mentor->name,
                    'avatar_url' => $mentor->avatar_url,
                ] : null,
            ];
        })->toArray();
    }
}
