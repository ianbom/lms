<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CreateClassRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'type' => 'required|string|in:e-learning,webinar,learning-package',
            'thumbnail' => 'required|image|max:2048',
            'price' => 'required|numeric|min:0',
            'discount' => 'nullable|numeric|min:0|max:100',
            'mentors' => 'required|array',
            'mentors.*' => 'exists:mentors,id',
            'status' => 'required|in:published,draft',
            'location' => 'nullable|string|max:255',
            'is_priority' => 'nullable|boolean',
            'url_link' => 'nullable|string|max:500',
            'implementation_date' => 'nullable|date',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul kelas wajib diisi.',
            'title.max' => 'Judul kelas maksimal 200 karakter.',
            'type.required' => 'Tipe wajib diisi',
            'description.required' => 'Deskripsi wajib diisi',
            'category_id.required' => 'Kategori wajib diisi',
            'category_id.exists' => 'Kategori tidak valid.',
            'price.required' => 'Harga wajib diisi.',
            'price.numeric' => 'Harga harus berupa angka.',
            'price.min' => 'Harga tidak boleh negatif.',
            'discount.numeric' => 'Diskon harus berupa angka.',
            'discount.min' => 'Diskon tidak boleh negatif.',
            'discount.max' => 'Diskon maksimal 100%.',
            'mentors.required' => 'Mentor wajib diisi.',
            'mentors.*.exists' => 'Mentor tidak valid.',
            'thumbnail.required' => 'Thumbnail wajib diisi.',
            'thumbnail.image' => 'Thumbnail harus berupa gambar.',
            'thumbnail.max' => 'Ukuran thumbnail maksimal 2MB.',
            'status.in' => 'Status tidak valid.',
        ];
    }
}
