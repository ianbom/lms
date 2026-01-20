<?php

namespace App\Services;

use App\Models\Mentor;

class MentorServices
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
}
