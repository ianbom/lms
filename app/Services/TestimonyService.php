<?php

namespace App\Services;

use App\Models\Testimony;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class TestimonyService
{
    public function getAllTestimonies()
    {
        return Testimony::orderBy('created_at', 'desc')->get();
    }

    public function createTestimony(array $data, ?UploadedFile $photo = null): Testimony
    {
        if ($photo) {
            $path = $photo->store('testimonies', 'public');
            $data['person_photo_url'] = '/storage/' . $path;
        }

        return Testimony::create($data);
    }

    public function updateTestimony(int $id, array $data, ?UploadedFile $photo = null): Testimony
    {
        $testimony = Testimony::findOrFail($id);

        if ($photo) {
            if ($testimony->person_photo_url) {
                $oldPath = str_replace('/storage/', '', $testimony->person_photo_url);
                Storage::disk('public')->delete($oldPath);
            }
            $path = $photo->store('testimonies', 'public');
            $data['person_photo_url'] = '/storage/' . $path;
        }

        $testimony->update($data);
        return $testimony->fresh();
    }

    public function deleteTestimony(int $id): bool
    {
        $testimony = Testimony::findOrFail($id);

        if ($testimony->person_photo_url) {
            $oldPath = str_replace('/storage/', '', $testimony->person_photo_url);
            Storage::disk('public')->delete($oldPath);
        }

        return $testimony->delete();
    }
}
