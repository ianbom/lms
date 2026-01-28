<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CreateMentorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:150',
            'headline' => 'nullable|string|max:200',
            'bio' => 'nullable|string',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama mentor wajib diisi.',
            'name.max' => 'Nama mentor maksimal 150 karakter.',
            'headline.max' => 'Headline maksimal 200 karakter.',
            'bio.max' => 'Bio maksimal 200 karakter.',
            'avatar.max' => 'Avatar maksimal 2048 KB.',
        ];
    }
}
