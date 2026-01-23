<?php

namespace App\Services;

use App\Models\Mentor;

class MentorService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllMentors(){ 
        $mentors = Mentor::orderBy('name', 'asc')->get(); 
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
}
