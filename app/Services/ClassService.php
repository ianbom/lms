<?php

namespace App\Services;

use App\Models\Classes;
use Illuminate\Support\Facades\Auth;

class ClassService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllClasses(){ 
        $classes = Classes::with(['category', 'mentors'])->withCount('modules')->orderBy('title', 'asc')->get(); 
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
    public function getClassDetailsById($classId)
    {
        return Classes::with(['category', 'creator', 'mentors', 'modules' => function($query) {
            $query->with(['videos', 'quizzes' => function($q) {
                $q->withCount('questions');
            }]);
        }])->findOrFail($classId);
    }

    public function calculateClassStats($class)
    {
        return [
            'total_modules' => $class->modules->count(),
            'total_videos' => $class->modules->sum(fn($module) => $module->videos->count()),
            'total_quizzes' => $class->modules->sum(fn($module) => $module->quizzes->count()),
            'total_duration_seconds' => $class->modules->sum(fn($module) => $module->total_duration),
        ];
    }
}
