<?php

namespace App\Services;

use App\Models\Mentor;
use Illuminate\Support\Facades\Storage;

class MentorService
{

    public function getAllMentors(){ 
        $mentors = Mentor::withCount('classes')
            ->with(['classes' => function($query) {
                $query->withCount('enrollments');
            }])
            ->orderBy('name', 'asc')
            ->get();
            
        $mentors->each(function($mentor) {
            $mentor->students_count = $mentor->classes->sum('enrollments_count');
            unset($mentor->classes); 
        });

        return $mentors;
    }

    public function storeMentor(array $data, $avatar = null)
    {
        if ($avatar) {
            $path = $avatar->store('mentors', 'public');
            $data['avatar_url'] = '/storage/' . $path;
        }

        return Mentor::create($data);
    }

    public function updateMentor($id, array $data, $avatar = null)
    {
        $mentor = Mentor::findOrFail($id);

        if ($avatar) {
            if ($mentor->avatar_url) {
                $oldPath = str_replace('/storage/', '', $mentor->avatar_url);
                Storage::disk('public')->delete($oldPath);
            }   
            $path = $avatar->store('mentors', 'public');
            $data['avatar_url'] = '/storage/' . $path;
        }

        $mentor->update($data);
        return $mentor;
    }
}
