<?php

namespace App\Services;

use App\Models\Classes;
use App\Models\ClassOrder;
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
        $classes = Classes::with(['category', 'mentors'])->withCount('modules')->orderBy('title', 'asc')->where('status', 'published')->get();
        return $classes;
    }

    public function createClass(array $data, $thumbnail = null)
    {
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
            $query->with(['videos' => function($q) {
                $q->with('resources')->orderBy('sort_order');
            }, 'quizzes' => function($q) {
                $q->withCount('questions');
            }]);
        }])->findOrFail($classId);
    }

    public function getClassPreviewVideoById($clasId){
        $videos = Classes::with(['modules' => function($query) {
            $query->with(['videos' => function($q) {
                $q->where('is_preview', true);
            }]);
        }])->findOrFail($clasId);
        return $videos;
    }

    public function getClassDetailsBySlug($slug)
    {
        return Classes::with(['category', 'creator', 'mentors', 'modules' => function($query) {
            $query->with(['videos', 'quizzes' => function($q) {
                $q->withCount('questions');
            }]);
        }])->findOrFail($slug);
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

    public function updateClass($classId, array $data, $thumbnail = null)
    {
        $class = Classes::findOrFail($classId);

        if ($thumbnail) {
            $path = $thumbnail->store('classes/thumbnails', 'public');
            $data['thumbnail_url'] = '/storage/' . $path;
        }

        $price = $data['price'] ?? $class->price;
        $discount = $data['discount'] ?? $class->discount;
        $data['price_final'] = $price * (1 - $discount / 100);

        if (isset($data['status']) && $data['status'] === 'published' && !$class->published_at) {
            $data['published_at'] = now();
        }

        $mentors = $data['mentors'] ?? [];
        unset($data['mentors']);

        $class->update($data);

        if (!empty($mentors) && is_array($mentors)) {
            $class->mentors()->sync($mentors);
        }

        return $class;
    }

    public function publishClass($classId){
        $class = Classes::findOrFail($classId);
        if (!$class->published_at) {
            $class->published_at = now();
            $class->status = 'published';
            $class->save();
        }
        return $class;
    }

    /**
     * Delete a class by ID.
     * Only draft classes can be deleted.
     * All related data will be cascaded deleted.
     */
    public function deleteClass(int $classId): bool
    {
        $class = Classes::findOrFail($classId);

        // Only draft classes can be deleted
        if ($class->status !== 'draft') {
            throw new \Exception('Hanya kelas dengan status draft yang dapat dihapus.');
        }

        // Delete related data manually (in case cascade not set in DB)
        // Delete mentors pivot
        $class->mentors()->detach();

        // Delete modules and their children
        foreach ($class->modules as $module) {
            // Delete videos and their resources
            foreach ($module->videos as $video) {
                $video->resources()->delete();
                $video->notes()->delete();
                $video->progress()->delete();
                $video->delete();
            }
            
            // Delete quizzes and their children
            foreach ($module->quizzes as $quiz) {
                foreach ($quiz->questions as $question) {
                    $question->options()->delete();
                    $question->delete();
                }
                $quiz->attempts()->delete();
                $quiz->delete();
            }
            
            $module->delete();
        }

        // Delete enrollments and related
        $class->enrollments()->delete();
        
        // Delete orders
        $class->orders()->delete();
        
        // Delete reviews
        $class->reviews()->delete();

        // Finally delete the class
        return $class->delete();
    }
}

