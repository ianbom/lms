<?php

namespace App\Services;

use App\Models\Classes;
use App\Models\Quiz;
use App\Models\QuizAnswer;
use App\Models\QuizAttempt;
use App\Models\Video;
use App\Models\VideoNote;
use App\Models\VideoProgress;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StudyService
{
    protected $classService;

    public function __construct(ClassService $classService)
    {
        $this->classService = $classService;
    }

    /**
     * Get class study details with video progress for watch/study page
     */
    public function getClassStudyDetails($classId, $videoId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        // Get class with modules, videos, and user's progress
        $class = Classes::with([
            'category',
            'mentors',
            'modules' => function ($query) use ($userId) {
                $query->orderBy('sort_order')
                    ->with([
                        'videos' => function ($q) use ($userId) {
                            $q->orderBy('sort_order')
                                ->with([
                                    'progress' => function ($p) use ($userId) {
                                        $p->where('user_id', $userId);
                                    }
                                ]);
                        },
                        'quizzes' => function ($q) {
                            $q->withCount('questions');
                        }
                    ]);
            }
        ])->findOrFail($classId);

        // Get current video with resources, notes, and progress
        $currentVideo = $this->getVideoStudyDetails($videoId, $userId);

        // Calculate overall progress
        $progressStats = $this->calculateStudyProgress($class, $userId);

        // Get navigation info (prev/next video)
        $navigation = $this->getVideoNavigation($class, $videoId);

        return [
            'class' => $class,
            'current_video' => $currentVideo,
            'progress_stats' => $progressStats,
            'navigation' => $navigation,
        ];
    }

    /**
     * Get video details with resources, notes, and progress for study
     */
    public function getVideoStudyDetails($videoId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        $video = Video::with([
            'module.class',
            'resources' => function ($query) {
                $query->orderBy('created_at', 'desc');
            },
        ])->findOrFail($videoId);

        // Get user's progress for this video
        $progress = VideoProgress::where('user_id', $userId)
            ->where('video_id', $videoId)
            ->first();

        // Get user's notes for this video
        $notes = VideoNote::where('user_id', $userId)
            ->where('video_id', $videoId)
            ->orderBy('created_at', 'desc')
            ->get();

        return [
            'video' => $video,
            'progress' => $progress,
            'notes' => $notes,
            'resources' => $video->resources,
        ];
    }

    /**
     * Calculate overall study progress for a class
     */
    public function calculateStudyProgress($class, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        $totalVideos = 0;
        $completedVideos = 0;
        $totalDuration = 0;
        $watchedDuration = 0;

        foreach ($class->modules as $module) {
            foreach ($module->videos as $video) {
                $totalVideos++;
                $totalDuration += $video->duration_sec ?? 0;

                $progress = $video->progress->first();
                if ($progress) {
                    $watchedDuration += $progress->last_time_sec;
                    if ($progress->is_completed) {
                        $completedVideos++;
                    }
                }
            }
        }

        $progressPercent = $totalVideos > 0
            ? round(($completedVideos / $totalVideos) * 100)
            : 0;

        return [
            'total_videos' => $totalVideos,
            'completed_videos' => $completedVideos,
            'progress_percent' => $progressPercent,
            'total_duration' => $totalDuration,
            'watched_duration' => $watchedDuration,
        ];
    }

    /**
     * Get previous and next video for navigation
     */
    public function getVideoNavigation($class, $currentVideoId)
    {
        $allVideos = [];

        // Flatten all videos in order
        foreach ($class->modules as $module) {
            foreach ($module->videos as $video) {
                $allVideos[] = [
                    'id' => $video->id,
                    'title' => $video->title,
                    'module_title' => $module->title,
                    'duration_sec' => $video->duration_sec,
                ];
            }
        }

        $currentIndex = null;
        foreach ($allVideos as $index => $video) {
            if ($video['id'] == $currentVideoId) {
                $currentIndex = $index;
                break;
            }
        }

        return [
            'previous' => $currentIndex > 0 ? $allVideos[$currentIndex - 1] : null,
            'next' => $currentIndex !== null && $currentIndex < count($allVideos) - 1
                ? $allVideos[$currentIndex + 1]
                : null,
            'current_index' => $currentIndex !== null ? $currentIndex + 1 : null,
            'total_videos' => count($allVideos),
        ];
    }

    /**
     * Update video progress
     */
    public function updateVideoProgress($videoId, $lastTimeSec, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        $progress = VideoProgress::firstOrCreate(
            ['user_id' => $userId, 'video_id' => $videoId],
            ['last_time_sec' => 0, 'is_completed' => false]
        );

        $progress->updateProgress($lastTimeSec);

        return $progress;
    }

    /**
     * Mark video as completed
     */
    public function markVideoCompleted($videoId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        $progress = VideoProgress::firstOrCreate(
            ['user_id' => $userId, 'video_id' => $videoId],
            ['last_time_sec' => 0]
        );

        $progress->update([
            'is_completed' => true,
            'completed_at' => now(),
        ]);

        return $progress;
    }

    /**
     * Add a note to a video
     */
    public function addVideoNote($videoId, $content, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        return VideoNote::create([
            'user_id' => $userId,
            'video_id' => $videoId,
            'content' => $content,
        ]);
    }

    /**
     * Update a video note
     */
    public function updateVideoNote($noteId, $content, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        $note = VideoNote::where('id', $noteId)
            ->where('user_id', $userId)
            ->firstOrFail();

        $note->update(['content' => $content]);

        return $note;
    }

    /**
     * Delete a video note
     */
    public function deleteVideoNote($noteId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        return VideoNote::where('id', $noteId)
            ->where('user_id', $userId)
            ->delete();
    }

    /**
     * Get all notes for a class by user
     */
    public function getClassNotes($classId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        return VideoNote::where('user_id', $userId)
            ->whereHas('video.module', function ($query) use ($classId) {
                $query->where('class_id', $classId);
            })
            ->with(['video:id,title,module_id', 'video.module:id,title'])
            ->orderBy('created_at', 'desc')
            ->get();
    }

    // ============ QUIZ METHODS ============

    /**
     * Get quiz details for take quiz page
     */
    public function getQuizStudyDetails($classId, $quizId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        // Get class with modules for sidebar
        $class = Classes::with([
            'category',
            'mentors',
            'modules' => function ($query) use ($userId) {
                $query->orderBy('sort_order')
                    ->with([
                        'videos' => function ($q) use ($userId) {
                            $q->orderBy('sort_order')
                                ->with([
                                    'progress' => function ($p) use ($userId) {
                                        $p->where('user_id', $userId);
                                    }
                                ]);
                        },
                        'quizzes' => function ($q) {
                            $q->withCount('questions');
                        }
                    ]);
            }
        ])->findOrFail($classId);

        // Get quiz with questions and options
        $quiz = Quiz::with([
            'module:id,title,class_id',
            'questions' => function ($query) {
                $query->orderBy('sort_order')
                    ->with(['options' => function ($q) {
                        $q->orderBy('sort_order');
                    }]);
            }
        ])->findOrFail($quizId);

        // Get current active attempt (not submitted yet)
        $activeAttempt = QuizAttempt::where('user_id', $userId)
            ->where('quiz_id', $quizId)
            ->whereNull('submitted_at')
            ->first();

        // Get previous attempts
        $previousAttempts = QuizAttempt::where('user_id', $userId)
            ->where('quiz_id', $quizId)
            ->whereNotNull('submitted_at')
            ->orderBy('submitted_at', 'desc')
            ->get();

        // Calculate progress stats
        $progressStats = $this->calculateStudyProgress($class, $userId);

        return [
            'class' => $class,
            'quiz' => $quiz,
            'attempt' => $activeAttempt,
            'previous_attempts' => $previousAttempts,
            'progress_stats' => $progressStats,
        ];
    }

    /**
     * Start a new quiz attempt
     */
    public function startQuizAttempt($quizId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        // Check if there's an active attempt
        $existingAttempt = QuizAttempt::where('user_id', $userId)
            ->where('quiz_id', $quizId)
            ->whereNull('submitted_at')
            ->first();

        if ($existingAttempt) {
            return $existingAttempt;
        }

        // Create new attempt
        return QuizAttempt::create([
            'user_id' => $userId,
            'quiz_id' => $quizId,
            'started_at' => now(),
            'score' => 0,
            'is_passed' => false,
        ]);
    }

    /**
     * Submit quiz answers
     */
    public function submitQuizAnswers($quizId, array $answers, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        return DB::transaction(function () use ($quizId, $answers, $userId) {
            // Get or create attempt
            $attempt = QuizAttempt::where('user_id', $userId)
                ->where('quiz_id', $quizId)
                ->whereNull('submitted_at')
                ->first();

            if (!$attempt) {
                $attempt = QuizAttempt::create([
                    'user_id' => $userId,
                    'quiz_id' => $quizId,
                    'started_at' => now(),
                    'score' => 0,
                    'is_passed' => false,
                ]);
            }

            // Get quiz with questions to validate and check answers
            $quiz = Quiz::with(['questions.options'])->findOrFail($quizId);

            $correctAnswers = 0;
            $totalQuestions = $quiz->questions->count();
            $answerResults = [];

            // Process each answer
            foreach ($answers as $answer) {
                $questionId = $answer['questionId'];
                $optionId = $answer['optionId'];

                if (!$optionId) continue;

                // Find the question
                $question = $quiz->questions->firstWhere('id', $questionId);
                if (!$question) continue;

                // Find the selected option
                $selectedOption = $question->options->firstWhere('id', $optionId);
                if (!$selectedOption) continue;

                // Find the correct option
                $correctOption = $question->options->firstWhere('is_correct', true);

                $isCorrect = $selectedOption->is_correct ?? false;

                // Save the answer
                QuizAnswer::updateOrCreate(
                    [
                        'attempt_id' => $attempt->id,
                        'question_id' => $questionId,
                    ],
                    [
                        'option_id' => $optionId,
                        'is_correct' => $isCorrect,
                    ]
                );

                if ($isCorrect) {
                    $correctAnswers++;
                }

                $answerResults[] = [
                    'questionId' => $questionId,
                    'selectedOptionId' => $optionId,
                    'correctOptionId' => $correctOption?->id,
                    'isCorrect' => $isCorrect,
                ];
            }

            // Calculate score
            $score = $totalQuestions > 0
                ? round(($correctAnswers / $totalQuestions) * 100)
                : 0;

            $isPassed = $score >= 70;

            // Update attempt
            $attempt->update([
                'submitted_at' => now(),
                'score' => $score,
                'is_passed' => $isPassed,
            ]);

            return [
                'attempt' => $attempt->fresh(),
                'correctAnswers' => $correctAnswers,
                'totalQuestions' => $totalQuestions,
                'score' => $score,
                'isPassed' => $isPassed,
                'answers' => $answerResults,
            ];
        });
    }

    /**
     * Get quiz result for review
     */
    public function getQuizResult($attemptId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        $attempt = QuizAttempt::with([
            'quiz.questions.options',
            'answers'
        ])
            ->where('id', $attemptId)
            ->where('user_id', $userId)
            ->firstOrFail();

        $answerResults = [];
        foreach ($attempt->quiz->questions as $question) {
            $userAnswer = $attempt->answers->firstWhere('question_id', $question->id);
            $correctOption = $question->options->firstWhere('is_correct', true);

            $answerResults[] = [
                'questionId' => $question->id,
                'selectedOptionId' => $userAnswer?->option_id,
                'correctOptionId' => $correctOption?->id,
                'isCorrect' => $userAnswer?->is_correct ?? false,
            ];
        }

        return [
            'attempt' => $attempt,
            'correctAnswers' => $attempt->answers->where('is_correct', true)->count(),
            'totalQuestions' => $attempt->quiz->questions->count(),
            'score' => $attempt->score,
            'isPassed' => $attempt->is_passed,
            'answers' => $answerResults,
        ];
    }
}
