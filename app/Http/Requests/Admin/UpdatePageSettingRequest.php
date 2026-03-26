<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePageSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Auth checks usually happen in middleware
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // the id parameter from URL is named "id" in route /page-settings/{id}
        $id = $this->route('id');

        return [
            'type' => [
                'required',
                'in:e-learning,learning-package,webinar',
                Rule::unique('page_settings', 'type')->ignore($id),
            ],
            'title'       => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     */
    public function messages(): array
    {
        return [
            'type.required' => 'Tipe halaman wajib dipilih.',
            'type.in'       => 'Tipe halaman tidak valid.',
            'type.unique'   => 'Page setting untuk tipe ini sudah ada.',
            'title.required' => 'Judul halaman wajib diisi.',
            'description.required' => 'Deskripsi halaman wajib diisi.',
        ];
    }
}
