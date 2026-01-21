<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateClassRequest;
use App\Models\Category;
use App\Models\Classes;
use App\Models\Mentor;
use App\Services\CategoryServices;
use App\Services\ClassServices;
use App\Services\MentorServices;
use App\Services\ModuleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassController extends Controller
{
    protected $classService, $mentorService, $categoryService, $moduleService;

    public function __construct(ClassServices $classService, MentorServices $mentorService, CategoryServices $categoryService, ModuleService $moduleService){ 
        $this->classService = $classService;
        $this->mentorService = $mentorService;
        $this->categoryService = $categoryService;
        $this->moduleService = $moduleService;
    }

    public function listClassPage(){ 
        
        $classes = $this->classService->getAllClasses();
        return Inertia::render('Admin/Class/ListClass', ['classes' => $classes]);        
    }

    public function createClassPage(){ 
        $categories = $this->categoryService->getAllCategories(); 
        $mentors = $this->mentorService->getAllMentors();
        return Inertia::render('Admin/Class/CreateClass', ['categories' => $categories, 'mentors' => $mentors]);
    }

    public function storeClass(CreateClassRequest $request){
        $data = $request->validated();
        $thumbnail = $request->file('thumbnail');
        
        try {
            $this->classService->createClass($data, $thumbnail);
            return redirect()->route('admin.classes')->with('success', 'Class created successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan');
        }
    }

    public function detailClassPage($classId){ 
        $class = Classes::with(['category', 'mentors', 'modules' => function($query) {
            $query->with(['videos', 'quizzes']);
        }])->findOrFail($classId);

        $totalModules = $class->modules->count();
        $totalVideos = $class->modules->sum(function($module) {
            return $module->videos->count();
        });
        $totalQuizzes = $class->modules->sum(function($module) {
            return $module->quizzes->count();
        });
        $totalDurationSeconds = $class->modules->sum(function($module) {
            return $module->total_duration;
        });

        return Inertia::render('Admin/Class/DetailClass', [
            'classData' => $class,
            'stats' => [
                'total_modules' => $totalModules,
                'total_videos' => $totalVideos,
                'total_quizzes' => $totalQuizzes,
                'total_duration_seconds' => $totalDurationSeconds,
            ]
        ]);
    }
}
