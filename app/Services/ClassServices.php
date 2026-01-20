<?php

namespace App\Services;

use App\Models\Classes;
use Illuminate\Support\Facades\Auth;

class ClassServices
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllClasses(){ 
        $classes = Classes::with(['category'])->withCount('modules')->orderBy('title', 'asc')->get(); 
        return $classes;
    }

    public function createClass(array $data, $thumbnail = null)
    {
        // Handle thumbnail upload
        if ($thumbnail) {
            $path = $thumbnail->store('classes/thumbnails', 'public');
            $data['thumbnail_url'] = '/storage/' . $path; 
        }

        $data['created_by'] = Auth::id();

        if (isset($data['status']) && $data['status'] === 'published') {
            $data['published_at'] = now();
        }

        $mentors = $data['mentors'] ?? [];
        unset($data['mentors']);

        $class = Classes::create($data);
        
        if (!empty($mentors) && is_array($mentors)) {
            $class->mentors()->sync($mentors);
        }

        return $class;
    }
}
