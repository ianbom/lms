<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateModuleRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:200'],
            'description' => ['nullable', 'string'],
            'url_link' => ['nullable', 'string', 'max:500'],
            'videos' => ['nullable', 'array'],
            'videos.*.title' => ['required_with:videos', 'string', 'max:200'],
            'videos.*.description' => ['nullable', 'string'],
            'videos.*.youtube_url' => ['required_with:videos', 'string', 'url', 'regex:/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/'],
            'videos.*.is_preview' => ['nullable'],
            'videos.*.duration_sec' => ['nullable', 'integer'],
            'videos.*.resources' => ['nullable', 'array'],
            'videos.*.resources.*.title' => ['required_with:videos.*.resources', 'string', 'max:200'],
            'videos.*.resources.*.file' => ['nullable', 'file', 'max:25600', function ($attribute, $value, $fail) {
                $allowed = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'zip'];
                $ext = strtolower($value->getClientOriginalExtension());
                if (!in_array($ext, $allowed)) {
                    $fail('File harus berformat: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, atau ZIP.');
                }
            }],
            'videos.*.resources.*.file_type' => ['nullable', 'string', 'in:pdf,doc,docx,ppt,pptx,xls,xlsx,zip,other'],
            'videos.*.resources.*.existing_url' => ['nullable', 'string'],
            'videos.*.resources.*.existing_file_size' => ['nullable', 'integer'],
        ];
    }

    public function messages(): array
    {
        return [
            'videos.*.resources.*.file.mimes' => 'File harus berformat: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, atau ZIP.',
            'videos.*.resources.*.file.max' => 'Ukuran file maksimal 25MB.',
        ];
    }
}
