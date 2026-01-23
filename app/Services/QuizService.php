<?php

namespace App\Services;

use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizOption;
use Illuminate\Support\Facades\DB;

class QuizService
{
    public function createQuiz(int $moduleId, array $data): Quiz
    {
        return DB::transaction(function () use ($moduleId, $data) {
            $quiz = Quiz::create([
                'module_id' => $moduleId,
                'title' => $data['title'],
                'sort_order' => $data['sort_order'] ?? 1,
                'is_pretest' => $data['is_pretest'] ?? false,
            ]);

            if (isset($data['questions']) && is_array($data['questions'])) {
                foreach ($data['questions'] as $index => $questionData) {
                    $this->createQuizQuestion($quiz->id, $questionData, $index + 1);
                }
            }

            return $quiz;
        });
    }

    public function updateQuiz(int $quizId, array $data): Quiz
    {
        return DB::transaction(function () use ($quizId, $data) {
            $quiz = Quiz::findOrFail($quizId);

            // Update quiz basic info
            $quiz->update([
                'title' => $data['title'],
                'is_pretest' => $data['is_pretest'] ?? false,
            ]);

            // Delete old questions and options
            foreach ($quiz->questions as $question) {
                $question->options()->delete();
            }
            $quiz->questions()->delete();

            // Create new questions
            if (isset($data['questions']) && is_array($data['questions'])) {
                foreach ($data['questions'] as $index => $questionData) {
                    $this->createQuizQuestion($quiz->id, $questionData, $index + 1);
                }
            }

            return $quiz->fresh(['questions.options']);
        });
    }

    public function getQuizById(int $quizId): Quiz
    {
        return Quiz::with(['questions' => function ($query) {
            $query->orderBy('sort_order');
        }, 'questions.options' => function ($query) {
            $query->orderBy('sort_order');
        }])->findOrFail($quizId);
    }

    public function createQuizQuestion(int $quizId, array $questionData, int $sortOrder = 1): QuizQuestion
    {
        $question = QuizQuestion::create([
            'quiz_id' => $quizId,
            'question' => $questionData['question'],
            'points' => $questionData['points'] ?? 1,
            'sort_order' => $questionData['sort_order'] ?? $sortOrder,
        ]);

        if (isset($questionData['options']) && is_array($questionData['options'])) {
            foreach ($questionData['options'] as $optionIndex => $optionData) {
                $this->createQuizOption($question->id, $optionData, $optionIndex + 1);
            }
        }

        return $question;
    }

    public function createQuizOption(int $questionId, array $optionData, int $sortOrder = 1): QuizOption
    {
        return QuizOption::create([
            'question_id' => $questionId,
            'label' => $optionData['label'],
            'is_correct' => $optionData['is_correct'] ?? false,
            'sort_order' => $optionData['sort_order'] ?? $sortOrder,
        ]);
    }
}
