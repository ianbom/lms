<?php

namespace App\Services;

use App\Models\CertificateIssuance;
use App\Models\Classes;
use App\Models\ClassOrder;
use App\Models\ClassReview;
use App\Models\Enrollment;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\Video;
use App\Models\VideoProgress;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
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

    public function getAllClasses()
    {
        $classes = Classes::with(['category', 'mentors'])
            ->withCount('modules')
            ->withCount(['enrollments as students_count' => function ($q) {
                $q->whereIn('status', ['active', 'completed']);
            }])
            ->withSum(['orders as total_revenue' => function ($query) {
                $query->where('status', 'approved');
            }], 'amount')
            ->orderBy('title', 'asc')
            ->get();

        return $classes;
    }

    public function getPriorityClasses($type = null)
    {
        $query = Classes::with(['category', 'mentors'])->withCount('modules')
            ->withCount(['enrollments as students_count' => function ($q) {
                $q->whereIn('status', ['active', 'completed']);
            }])
            ->orderBy('title', 'asc')
            ->where('status', 'published')
            ->where('is_priority', true);

        if ($type) {
            $query->where('type', $type);
        }

        return $query->get();
    }

    public function getAllPublishedClasses($type = null)
    {
        $query = Classes::with(['category', 'mentors'])->withCount('modules')
            ->withCount(['enrollments as students_count' => function ($q) {
                $q->whereIn('status', ['active', 'completed']);
            }])
            ->orderBy('title', 'asc')
            ->where('status', 'published');

        if ($type) {
            $query->where('type', $type);
        }

        return $query->get();
    }

    public function createClass(array $data, $thumbnail = null)
    {
        if ($thumbnail) {
            $path = $thumbnail->store('classes/thumbnails', 'public');
            $data['thumbnail_url'] = '/storage/'.$path;
        }

        $data['created_by'] = Auth::id();

        if (isset($data['status']) && $data['status'] === 'published') {
            $data['published_at'] = now();
        }

        $mentors = $data['mentors'] ?? [];
        unset($data['mentors']);

        $class = Classes::create($data);

        if (! empty($mentors) && is_array($mentors)) {
            $class->mentors()->sync($mentors);
        }

        return $class;
    }

    public function getClassDetailsById($classId)
    {
        return Classes::with(['category', 'creator', 'mentors', 'modules' => function ($query) {
            $query->orderBy('sort_order')->with(['videos' => function ($q) {
                $q->with('resources')->orderBy('sort_order');
            }, 'quizzes' => function ($q) {
                $q->withCount('questions');
            }]);
        }])
            ->withCount(['enrollments as students_count' => function ($q) {
                $q->whereIn('status', ['active', 'completed']);
            }])
            ->findOrFail($classId);
    }

    public function getClassPreviewVideoById($clasId)
    {
        $videos = Classes::with(['modules' => function ($query) {
            $query->with(['videos' => function ($q) {
                $q->where('is_preview', true);
            }]);
        }])->findOrFail($clasId);

        return $videos;
    }

    public function getClassDetailsBySlug($slug)
    {
        return Classes::with(['category', 'creator', 'mentors', 'modules' => function ($query) {
            $query->with(['videos', 'quizzes' => function ($q) {
                $q->withCount('questions');
            }]);
        }])
            ->withCount(['enrollments as students_count' => function ($q) {
                $q->whereIn('status', ['active', 'completed']);
            }])
            ->findOrFail($slug);
    }

    public function calculateClassStats($class)
    {
        return [
            'total_modules' => $class->modules->count(),
            'total_videos' => $class->modules->sum(fn ($module) => $module->videos->count()),
            'total_quizzes' => $class->modules->sum(fn ($module) => $module->quizzes->count()),
            'total_duration_seconds' => $class->modules->sum(fn ($module) => $module->total_duration),
        ];
    }

    public function updateClass($classId, array $data, $thumbnail = null)
    {
        $class = Classes::findOrFail($classId);

        if ($thumbnail) {
            $path = $thumbnail->store('classes/thumbnails', 'public');
            $data['thumbnail_url'] = '/storage/'.$path;
        }

        $price = $data['price'] ?? $class->price;
        $discount = $data['discount'] ?? $class->discount;
        $data['price_final'] = $price * (1 - $discount / 100);

        if (isset($data['status']) && $data['status'] === 'published' && ! $class->published_at) {
            $data['published_at'] = now();
        }

        $mentors = $data['mentors'] ?? [];
        unset($data['mentors']);

        $class->update($data);

        if (! empty($mentors) && is_array($mentors)) {
            $class->mentors()->sync($mentors);
        }

        return $class;
    }

    public function publishClass($classId)
    {
        $class = Classes::findOrFail($classId);
        if (! $class->published_at) {
            $class->published_at = now();
            $class->status = 'published';
            $class->save();
        }

        return $class;
    }

    public function getClassEnrolledUsers($classId, array $filters = [])
    {
        $query = $this->buildClassEnrollmentQuery($classId, $filters);

        $sortField = $filters['sort'] ?? 'created_at';
        $sortDirection = $filters['direction'] ?? 'desc';

        if ($sortField === 'video_progress') {
            $query->orderBy('completed_videos_count', $sortDirection)
                ->orderBy('enrollments.created_at', 'desc');
        } elseif (in_array($sortField, ['created_at', 'activated_at'], true)) {
            $query->orderBy($sortField, $sortDirection);
        } else {
            $query->orderBy('created_at', 'desc');
        }

        $perPage = $filters['per_page'] ?? 10;

        $enrollments = $query->paginate($perPage)->withQueryString();

        $this->appendEnrollmentLearningStatus((int) $classId, $enrollments->getCollection());

        return $enrollments;
    }

    public function getClassEnrollmentExportData($classId, array $filters = []): array
    {
        $class = Classes::with([
            'modules' => function ($query) {
                $query->orderBy('sort_order')
                    ->with([
                        'quizzes' => function ($quizQuery) {
                            $quizQuery->orderBy('sort_order');
                        },
                    ]);
            },
        ])->findOrFail($classId);

        $enrollments = $this->buildClassEnrollmentQuery($classId, $filters)
            ->orderBy('activated_at')
            ->orderBy('created_at')
            ->get();

        $quizzes = $class->modules
            ->flatMap(function ($module) {
                return $module->quizzes->map(function ($quiz) use ($module) {
                    return [
                        'id' => $quiz->id,
                        'label' => trim($module->title.' - '.$quiz->title),
                    ];
                });
            })
            ->values();

        $scoresByUser = $this->getBestQuizScoresForUsers(
            $enrollments->pluck('user_id')->all(),
            $quizzes->pluck('id')->all(),
        );

        $rows = $enrollments->map(function ($enrollment) use ($quizzes, $scoresByUser) {
            $row = [
                'Nama Kelas' => $enrollment->class->title ?? '-',
                'Nama User' => $enrollment->user->name,
                'Telepon' => $enrollment->user->phone ?: '-',
                'Perusahaan' => $enrollment->user->company ?: '-',
                'Position' => $enrollment->user->position ?: '-',
                'Tanggal Gabung Kelas' => ($enrollment->activated_at ?? $enrollment->created_at)
                    ?->format('d-m-Y H:i:s') ?? '-',
            ];

            $userScores = $scoresByUser->get($enrollment->user_id, collect());

            foreach ($quizzes as $quiz) {
                $score = $userScores->get($quiz['id']);
                $row[$quiz['label']] = $score !== null ? $score : '-';
            }

            return $row;
        })->all();

        return [
            'class_title' => $class->title,
            'rows' => $rows,
        ];
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
            'total_revenue' => (int) $totalRevenue,
            'app_share' => (int) round($appShare),
            'mentor_total' => (int) round($mentorTotal),
            'per_mentor_share' => (int) round($perMentorShare),
            'mentor_count' => $mentorCount,
            'mentors' => $mentors->map(fn ($m) => [
                'id' => $m->id,
                'name' => $m->name,
                'share' => (int) round($perMentorShare),
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
            ->with(['quizzes' => function ($q) {
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

        foreach ($modules as $module) {
            foreach ($module->quizzes as $quiz) {
                $quizAttempts = $attempts->get($quiz->id) ?? collect();

                // Get highest score
                $bestAttempt = $quizAttempts->sortByDesc('score')->first();

                $results[] = [
                    'no' => $no++,
                    'module_title' => $module->title,
                    'quiz_title' => $quiz->title,
                    'score' => $bestAttempt ? ((float) $bestAttempt->score) : null,
                    'is_passed' => $bestAttempt ? $bestAttempt->is_passed : null,
                    'attempted' => $bestAttempt ? true : false,
                ];
            }
        }

        return $results;
    }

    protected function buildClassEnrollmentQuery($classId, array $filters = []): Builder
    {
        $completedVideosQuery = VideoProgress::query()
            ->selectRaw('video_progress.user_id, COUNT(DISTINCT video_progress.video_id) as completed_videos_count')
            ->join('videos', 'videos.id', '=', 'video_progress.video_id')
            ->join('modules', 'modules.id', '=', 'videos.module_id')
            ->where('modules.class_id', $classId)
            ->where('video_progress.is_completed', true)
            ->groupBy('video_progress.user_id');

        $query = Enrollment::with('user')
            ->with('class:id,title')
            ->select('enrollments.*')
            ->selectRaw('COALESCE(video_progress_summary.completed_videos_count, 0) as completed_videos_count')
            ->leftJoinSub($completedVideosQuery, 'video_progress_summary', function ($join) {
                $join->on('video_progress_summary.user_id', '=', 'enrollments.user_id');
            })
            ->where('class_id', $classId)
            ->where('status', 'active');

        if (! empty($filters['search'])) {
            $search = $filters['search'];
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        if (! empty($filters['joined_from'])) {
            $query->whereDate('activated_at', '>=', $filters['joined_from']);
        }

        if (! empty($filters['joined_to'])) {
            $query->whereDate('activated_at', '<=', $filters['joined_to']);
        }

        if (! empty($filters['review_status'])) {
            $reviewConstraint = function ($query) use ($classId) {
                $query->selectRaw('1')
                    ->from('class_reviews')
                    ->whereColumn('class_reviews.user_id', 'enrollments.user_id')
                    ->where('class_reviews.class_id', $classId)
                    ->whereNotNull('rating')
                    ->whereNotNull('comment')
                    ->whereRaw('TRIM(comment) <> ""');
            };

            $filters['review_status'] === 'reviewed'
                ? $query->whereExists($reviewConstraint)
                : $query->whereNotExists($reviewConstraint);
        }

        if (! empty($filters['certificate_status'])) {
            $certificateConstraint = fn ($query) => $query->selectRaw('1')
                ->from('certificate_issuances')
                ->whereColumn('certificate_issuances.user_id', 'enrollments.user_id')
                ->where('certificate_issuances.class_id', $classId);

            $filters['certificate_status'] === 'issued'
                ? $query->whereExists($certificateConstraint)
                : $query->whereNotExists($certificateConstraint);
        }

        return $query;
    }

    protected function appendEnrollmentLearningStatus(int $classId, Collection $enrollments): void
    {
        if ($enrollments->isEmpty()) {
            return;
        }

        $userIds = $enrollments->pluck('user_id')->unique()->values();
        $totalVideos = Video::query()
            ->whereHas('module', function ($query) use ($classId) {
                $query->where('class_id', $classId);
            })
            ->count();

        $totalQuizzes = Quiz::query()
            ->whereHas('module', function ($query) use ($classId) {
                $query->where('class_id', $classId);
            })
            ->count();

        $completedVideosByUser = VideoProgress::query()
            ->selectRaw('video_progress.user_id, COUNT(DISTINCT video_progress.video_id) as completed_videos')
            ->join('videos', 'videos.id', '=', 'video_progress.video_id')
            ->join('modules', 'modules.id', '=', 'videos.module_id')
            ->where('modules.class_id', $classId)
            ->whereIn('video_progress.user_id', $userIds)
            ->where('video_progress.is_completed', true)
            ->groupBy('video_progress.user_id')
            ->pluck('completed_videos', 'video_progress.user_id');

        $passedQuizzesByUser = QuizAttempt::query()
            ->selectRaw('quiz_attempts.user_id, quiz_attempts.quiz_id, MAX(quiz_attempts.score) as best_score')
            ->join('quizzes', 'quizzes.id', '=', 'quiz_attempts.quiz_id')
            ->join('modules', 'modules.id', '=', 'quizzes.module_id')
            ->where('modules.class_id', $classId)
            ->whereIn('quiz_attempts.user_id', $userIds)
            ->whereNotNull('quiz_attempts.submitted_at')
            ->groupBy('quiz_attempts.user_id', 'quiz_attempts.quiz_id')
            ->get()
            ->groupBy('user_id')
            ->map(function ($attempts) {
                return $attempts->filter(function ($attempt) {
                    return (int) $attempt->best_score >= 80;
                })->count();
            });

        $reviewsByUser = ClassReview::query()
            ->where('class_id', $classId)
            ->whereIn('user_id', $userIds)
            ->whereNotNull('rating')
            ->whereNotNull('comment')
            ->whereRaw('TRIM(comment) <> ""')
            ->pluck('id', 'user_id');

        $certificatesByUser = CertificateIssuance::query()
            ->where('class_id', $classId)
            ->whereIn('user_id', $userIds)
            ->pluck('id', 'user_id');

        $enrollments->transform(function ($enrollment) use ($completedVideosByUser, $passedQuizzesByUser, $reviewsByUser, $certificatesByUser, $totalVideos, $totalQuizzes) {
            $completedVideos = (int) ($completedVideosByUser[$enrollment->user_id] ?? 0);
            $passedQuizzes = (int) ($passedQuizzesByUser[$enrollment->user_id] ?? 0);
            $hasReviewed = $reviewsByUser->has($enrollment->user_id);
            $hasCertificate = $certificatesByUser->has($enrollment->user_id);

            $allVideosCompleted = $totalVideos > 0 && $completedVideos >= $totalVideos;
            $allQuizzesPassed = $totalQuizzes === 0 || $passedQuizzes >= $totalQuizzes;
            $isCertificateEligible = $allVideosCompleted && $allQuizzesPassed && $hasReviewed;

            $enrollment->setAttribute('video_progress', [
                'completed' => $completedVideos,
                'total' => $totalVideos,
                'percent' => $totalVideos > 0
                    ? (int) round(($completedVideos / $totalVideos) * 100)
                    : 0,
            ]);
            $enrollment->setAttribute('has_reviewed', $hasReviewed);
            $enrollment->setAttribute('certificate_eligible', $isCertificateEligible);
            $enrollment->setAttribute('certificate_issued', $hasCertificate);

            return $enrollment;
        });
    }

    protected function getBestQuizScoresForUsers(array $userIds, array $quizIds): Collection
    {
        if (empty($userIds) || empty($quizIds)) {
            return collect();
        }

        return QuizAttempt::query()
            ->selectRaw('user_id, quiz_id, MAX(score) as best_score')
            ->whereIn('user_id', $userIds)
            ->whereIn('quiz_id', $quizIds)
            ->groupBy('user_id', 'quiz_id')
            ->get()
            ->groupBy('user_id')
            ->map(function ($attempts) {
                return $attempts->mapWithKeys(function ($attempt) {
                    return [$attempt->quiz_id => $attempt->best_score];
                });
            });
    }
}
