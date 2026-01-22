<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\StudyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StudyController extends Controller
{
    protected $studyService;

    public function __construct(StudyService $studyService)
    {
        $this->studyService = $studyService;
    }

    /**
     * Display the video study/watch page
     */
    public function watchClassPage($classId, $videoId)
    {
        $studyData = $this->studyService->getClassStudyDetails($classId, $videoId);

        return Inertia::render('User/Study/WatchVideo', [
            'classData' => $studyData['class'],
            'currentVideo' => $studyData['current_video'],
            'progressStats' => $studyData['progress_stats'],
            'navigation' => $studyData['navigation'],
        ]);
    }

    /**
     * Update video progress (AJAX)
     */
    public function updateProgress(Request $request, $videoId)
    {
        $request->validate([
            'last_time_sec' => 'required|integer|min:0',
        ]);

        $progress = $this->studyService->updateVideoProgress(
            $videoId,
            $request->last_time_sec
        );

        return response()->json([
            'success' => true,
            'progress' => $progress,
        ]);
    }

    /**
     * Mark video as completed (AJAX)
     */
    public function markCompleted($videoId)
    {
        $progress = $this->studyService->markVideoCompleted($videoId);

        return response()->json([
            'success' => true,
            'progress' => $progress,
        ]);
    }

    /**
     * Add a note to a video (AJAX)
     */
    public function addNote(Request $request, $videoId)
    {
        $request->validate([
            'content' => 'required|string|max:5000',
        ]);

        $note = $this->studyService->addVideoNote($videoId, $request->input('content'));

        return response()->json([
            'success' => true,
            'note' => $note,
        ]);
    }

    /**
     * Update a note (AJAX)
     */
    public function updateNote(Request $request, $noteId)
    {
        $request->validate([
            'content' => 'required|string|max:5000',
        ]);

        $note = $this->studyService->updateVideoNote($noteId, $request->input('content'));

        return response()->json([
            'success' => true,
            'note' => $note,
        ]);
    }

    /**
     * Delete a note (AJAX)
     */
    public function deleteNote($noteId)
    {
        $this->studyService->deleteVideoNote($noteId);

        return response()->json([
            'success' => true,
        ]);
    }

    // ============ QUIZ METHODS ============

    /**
     * Display the take quiz page
     */
    public function takeQuizPage($classId, $quizId)
    {
        $quizData = $this->studyService->getQuizStudyDetails($classId, $quizId);

        return Inertia::render('User/Study/TakeQuiz', [
            'classData' => $quizData['class'],
            'quiz' => $quizData['quiz'],
            'attempt' => $quizData['attempt'],
            'previousAttempts' => $quizData['previous_attempts'],
            'progressStats' => $quizData['progress_stats'],
        ]);
    }

    /**
     * Start quiz attempt (AJAX)
     */
    public function startQuiz($quizId)
    {
        $attempt = $this->studyService->startQuizAttempt($quizId);

        return response()->json([
            'success' => true,
            'attempt' => $attempt,
        ]);
    }

    /**
     * Submit quiz answers (AJAX)
     */
    public function submitQuiz(Request $request, $quizId)
    {
        $request->validate([
            'answers' => 'required|array',
            'answers.*.questionId' => 'required|integer',
            'answers.*.optionId' => 'nullable|integer',
        ]);

        $result = $this->studyService->submitQuizAnswers($quizId, $request->input('answers'));

        return response()->json([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * Get quiz result for review (AJAX)
     */
    public function getQuizResult($attemptId)
    {
        $result = $this->studyService->getQuizResult($attemptId);

        return response()->json([
            'success' => true,
            'result' => $result,
        ]);
    }
}
