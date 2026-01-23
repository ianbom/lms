<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateQuizRequest;
use App\Http\Requests\Admin\UpdateQuizRequest;
use App\Models\Classes;
use App\Services\ModuleService;
use App\Services\QuizService;
use Inertia\Inertia;

class QuizController extends Controller
{
    protected $quizService, $moduleService;

    public function __construct(QuizService $quizService, ModuleService $moduleService)
    {
        $this->quizService = $quizService;
        $this->moduleService = $moduleService;
    }

    public function createQuizPage($classId)
    {   $class = Classes::findOrFail($classId);
        $modules = $this->moduleService->getAllModuleByClassId($classId);

        return Inertia::render('Admin/Class/CreateQuiz', [
            'class' => $class,
            'modules' => $modules
        ]);
    }

    public function storeQuiz(CreateQuizRequest $request)
    {
        try {
            $moduleId = $request->input('module_id');
            $this->quizService->createQuiz($moduleId, $request->validated());

            return redirect()
                ->route('admin.classes')
                ->with('success', 'Kuis berhasil dibuat.');
        } catch (\Exception $e) {
            return back()
                ->withInput()
                ->with('error', 'Gagal membuat kuis: ' . $e->getMessage());
        }
    }

    public function updateQuiz(UpdateQuizRequest $request, $quizId)
    {
        try {
            $this->quizService->updateQuiz($quizId, $request->validated());

            return back()->with('success', 'Kuis berhasil diperbarui.');
        } catch (\Exception $e) {
            return back()
                ->withInput()
                ->with('error', 'Gagal memperbarui kuis: ' . $e->getMessage());
        }
    }

    public function getQuiz($quizId)
    {
        try {
            $quiz = $this->quizService->getQuizById($quizId);
            return response()->json($quiz);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Quiz not found'], 404);
        }
    }
}
