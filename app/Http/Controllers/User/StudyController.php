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


    public function watchClassPage($classId, $videoId)
    {
        $studyData = $this->studyService->getClassStudyDetails($classId, $videoId);

        return Inertia::render('User/Study/WatchVideo', [
            'classData' => $studyData['class'],
            'currentVideo' => $studyData['current_video'],
            'progressStats' => $studyData['progress_stats'],
            'navigation' => $studyData['navigation'],
            'certificateStatus' => $studyData['certificate_status'],
        ]);
    }

    /**
     * Update video progress (AJAX)
     */
    public function updateProgress(Request $request, $classId, $videoId)
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

    public function markCompleted($classId, $videoId)
    {
        try {
        $progress = $this->studyService->markVideoCompleted($videoId);
        return response()->json([
            'success' => true,
            'progress' => $progress,
        ]);
    } catch (\Throwable $th) {
        return response()->json([
            'success' => false,
            'message' => $th->getMessage(),
        ], 500);
    }

    }

    public function addNote(Request $request, $classId, $videoId)
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
    public function startQuiz($classId, $quizId)
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
    public function submitQuiz(Request $request, $classId, $quizId)
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
