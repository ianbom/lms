<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateQuizRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:200'],
            'is_pretest' => ['nullable', 'boolean'],

            // Questions array
            'questions' => ['required', 'array', 'min:1'],
            'questions.*.question' => ['required', 'string'],
            'questions.*.points' => ['nullable', 'integer', 'min:1'],
            'questions.*.sort_order' => ['nullable', 'integer', 'min:1'],

            // Options for each question
            'questions.*.options' => ['required', 'array', 'min:2'],
            'questions.*.options.*.label' => ['required', 'string'],
            'questions.*.options.*.is_correct' => ['nullable', 'boolean'],
            'questions.*.options.*.sort_order' => ['nullable', 'integer', 'min:1'],
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul kuis wajib diisi.',
            'title.max' => 'Judul kuis maksimal 200 karakter.',
            'questions.required' => 'Minimal harus ada 1 pertanyaan.',
            'questions.min' => 'Minimal harus ada 1 pertanyaan.',
            'questions.*.question.required' => 'Pertanyaan wajib diisi.',
            'questions.*.options.required' => 'Setiap pertanyaan harus memiliki opsi jawaban.',
            'questions.*.options.min' => 'Setiap pertanyaan minimal harus memiliki 2 opsi jawaban.',
            'questions.*.options.*.label.required' => 'Label opsi jawaban wajib diisi.',
        ];
    }
}
