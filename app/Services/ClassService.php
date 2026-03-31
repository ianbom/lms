<?php

namespace App\Services;

use App\Models\Classes;
use App\Models\ClassOrder;
use Illuminate\Support\Facades\Auth;

class ClassService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllClasses(){
        $classes = Classes::with(['category', 'mentors'])
            ->withCount('modules')
            ->withCount(['enrollments as students_count' => function($q) {
                $q->whereIn('status', ['active', 'completed']);
            }])
            ->withSum(['orders as total_revenue' => function ($query) {
                $query->where('status', 'approved');
            }], 'amount')
            ->orderBy('title', 'asc')
            ->get();
        return $classes;
    }

    public function getPriorityClasses($type = null){
        $query = Classes::with(['category', 'mentors'])->withCount('modules')
        ->orderBy('title', 'asc')
        ->where('status', 'published')
        ->where('is_priority', true);

        if ($type) {
            $query->where('type', $type);
        }

        return $query->get();
    }


    public function getAllPublishedClasses($type = null){
        $query = Classes::with(['category', 'mentors'])->withCount('modules')->orderBy('title', 'asc')->where('status', 'published');

        if ($type) {
            $query->where('type', $type);
        }

        return $query->get();
    }

    public function createClass(array $data, $thumbnail = null)
    {
        if ($thumbnail) {
            $path = $thumbnail->store('classes/thumbnails', 'public');
            $data['thumbnail_url'] = '/storage/' . $path;
        }

        $data['created_by'] = Auth::id();

        if (isset($data['status']) && $data['status'] === 'published') {
            $data['published_at'] = now();
        }

        $mentors = $data['mentors'] ?? [];
        unset($data['mentors']);

        $class = Classes::create($data);

        if (!empty($mentors) && is_array($mentors)) {
            $class->mentors()->sync($mentors);
        }

        return $class;
    }
    public function getClassDetailsById($classId)
    {
        return Classes::with(['category', 'creator', 'mentors', 'modules' => function($query) {
            $query->orderBy('sort_order')->with(['videos' => function($q) {
                $q->with('resources')->orderBy('sort_order');
            }, 'quizzes' => function($q) {
                $q->withCount('questions');
            }]);
        }])->findOrFail($classId);
    }

    public function getClassPreviewVideoById($clasId){
        $videos = Classes::with(['modules' => function($query) {
            $query->with(['videos' => function($q) {
                $q->where('is_preview', true);
            }]);
        }])->findOrFail($clasId);
        return $videos;
    }

    public function getClassDetailsBySlug($slug)
    {
        return Classes::with(['category', 'creator', 'mentors', 'modules' => function($query) {
            $query->with(['videos', 'quizzes' => function($q) {
                $q->withCount('questions');
            }]);
        }])->findOrFail($slug);
    }

    public function calculateClassStats($class)
    {
        return [
            'total_modules' => $class->modules->count(),
            'total_videos' => $class->modules->sum(fn($module) => $module->videos->count()),
            'total_quizzes' => $class->modules->sum(fn($module) => $module->quizzes->count()),
            'total_duration_seconds' => $class->modules->sum(fn($module) => $module->total_duration),
        ];
    }

    public function updateClass($classId, array $data, $thumbnail = null)
    {
        $class = Classes::findOrFail($classId);

        if ($thumbnail) {
            $path = $thumbnail->store('classes/thumbnails', 'public');
            $data['thumbnail_url'] = '/storage/' . $path;
        }

        $price = $data['price'] ?? $class->price;
        $discount = $data['discount'] ?? $class->discount;
        $data['price_final'] = $price * (1 - $discount / 100);

        if (isset($data['status']) && $data['status'] === 'published' && !$class->published_at) {
            $data['published_at'] = now();
        }

        $mentors = $data['mentors'] ?? [];
        unset($data['mentors']);

        $class->update($data);

        if (!empty($mentors) && is_array($mentors)) {
            $class->mentors()->sync($mentors);
        }

        return $class;
    }

    public function publishClass($classId){
        $class = Classes::findOrFail($classId);
        if (!$class->published_at) {
            $class->published_at = now();
            $class->status = 'published';
            $class->save();
        }
        return $class;
    }

    public function getClassEnrolledUsers($classId, array $filters = [])
    {
        $query = \App\Models\Enrollment::with('user')
            ->where('class_id', $classId)
            ->where('status', 'active');

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $sortField = $filters['sort'] ?? 'created_at';
        $sortDirection = $filters['direction'] ?? 'desc';

        $allowedSorts = ['created_at', 'activated_at'];
        if (in_array($sortField, $allowedSorts)) {
            $query->orderBy($sortField, $sortDirection);
        } else {
            $query->orderBy('created_at', 'desc');
        }

        $perPage = $filters['per_page'] ?? 10;

        return $query->paginate($perPage)->withQueryString();
    }

    /**
     * Calculate revenue split for a class (40% app, 60% split among mentors).
     */
    public function getClassRevenueSplit($classId): array
    {
        $class = Classes::with('mentors')->findOrFail($classId);

        $totalRevenue = ClassOrder::where('class_id', $classId)
            ->where('status', 'approved')
            ->sum('amount');

        $appShare = $totalRevenue * 0.40;
        $mentorTotal = $totalRevenue * 0.60;

        $mentors = $class->mentors;
        $mentorCount = $mentors->count();
        $perMentorShare = $mentorCount > 0 ? $mentorTotal / $mentorCount : 0;

        return [
            'total_revenue'    => (int) $totalRevenue,
            'app_share'        => (int) round($appShare),
            'mentor_total'     => (int) round($mentorTotal),
            'per_mentor_share' => (int) round($perMentorShare),
            'mentor_count'     => $mentorCount,
            'mentors'          => $mentors->map(fn($m) => [
                'id'     => $m->id,
                'name'   => $m->name,
                'share'  => (int) round($perMentorShare),
            ])->values()->toArray(),
        ];
    }

    /**
     * Delete a class by ID.
     * Only draft classes can be deleted.
     * All related data will be cascaded deleted.
     */
    public function deleteClass(int $classId): bool
    {
        $class = Classes::findOrFail($classId);

        // Only draft classes can be deleted
        if ($class->status !== 'draft') {
            throw new \Exception('Hanya kelas dengan status draft yang dapat dihapus.');
        }

        // Delete related data manually (in case cascade not set in DB)
        // Delete mentors pivot
        $class->mentors()->detach();

        // Delete modules and their children
        foreach ($class->modules as $module) {
            // Delete videos and their resources
            foreach ($module->videos as $video) {
                $video->resources()->delete();
                $video->notes()->delete();
                $video->progress()->delete();
                $video->delete();
            }

            // Delete quizzes and their children
            foreach ($module->quizzes as $quiz) {
                foreach ($quiz->questions as $question) {
                    $question->options()->delete();
                    $question->delete();
                }
                $quiz->attempts()->delete();
                $quiz->delete();
            }

            $module->delete();
        }

        // Delete enrollments and related
        $class->enrollments()->delete();

        // Delete orders
        $class->orders()->delete();

        // Delete reviews
        $class->reviews()->delete();

        // Finally delete the class
        return $class->delete();
    }

    /**
     * Get user quiz scores for a specific class.
     */
    public function getUserQuizScores($classId, $userId)
    {
        $modules = \App\Models\Module::where('class_id', $classId)
            ->with(['quizzes' => function($q) {
                $q->orderBy('sort_order');
            }])
            ->orderBy('sort_order')
            ->get();

        $quizIds = $modules->flatMap->quizzes->pluck('id');

        $attempts = \App\Models\QuizAttempt::where('user_id', $userId)
            ->whereIn('quiz_id', $quizIds)
            ->get()
            ->groupBy('quiz_id');

        $results = [];
        $no = 1;

        foreach($modules as $module) {
            foreach($module->quizzes as $quiz) {
                $quizAttempts = $attempts->get($quiz->id) ?? collect();
                
                // Get highest score
                $bestAttempt = $quizAttempts->sortByDesc('score')->first();

                $results[] = [
                    'no' => $no++,
                    'module_title' => $module->title,
                    'quiz_title' => $quiz->title,
                    'score' => $bestAttempt ? ((float)$bestAttempt->score) : null,
                    'is_passed' => $bestAttempt ? $bestAttempt->is_passed : null,
                    'attempted' => $bestAttempt ? true : false,
                ];
            }
        }

        return $results;
    }
}

