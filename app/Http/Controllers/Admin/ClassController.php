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
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassController extends Controller
{
    protected $classService, $mentorService, $categoryService;

    public function __construct(ClassServices $classService, MentorServices $mentorService, CategoryServices $categoryService){ 
        $this->classService = $classService;
        $this->mentorService = $mentorService;
        $this->categoryService = $categoryService;
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
}
