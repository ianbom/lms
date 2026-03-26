<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CreatePageSettingRequest extends FormRequest
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
            'type'        => 'required|in:e-learning,learning-package,webinar|unique:page_settings,type',
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
