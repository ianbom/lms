<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreTestimonyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'content' => 'required|string|min:10',
            'rating' => 'required|integer|min:1|max:5',
            'person_name' => 'required|string|max:255',
            'person_position' => 'required|string|max:255',
            'person_photo_url' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ];
    }

    public function messages(): array
    {
        return [
            'content.required' => 'Konten testimoni wajib diisi.',
            'content.min' => 'Konten testimoni minimal 10 karakter.',
            'rating.required' => 'Rating wajib diisi.',
            'rating.integer' => 'Rating harus berupa angka.',
            'rating.min' => 'Rating minimal 1.',
            'rating.max' => 'Rating maksimal 5.',
            'person_name.required' => 'Nama orang wajib diisi.',
            'person_name.max' => 'Nama orang maksimal 255 karakter.',
            'person_position.required' => 'Jabatan wajib diisi.',
            'person_position.max' => 'Jabatan maksimal 255 karakter.',
            'person_photo_url.image' => 'File harus berupa gambar.',
            'person_photo_url.mimes' => 'Format foto harus JPG, JPEG, PNG, atau WebP.',
            'person_photo_url.max' => 'Ukuran foto maksimal 2MB.',
        ];
    }
}
