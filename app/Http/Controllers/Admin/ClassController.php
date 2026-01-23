<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateClassRequest;
use App\Http\Requests\Admin\UpdateClassRequest;
use App\Models\Category;
use App\Models\Classes;
use App\Models\Mentor;
use App\Services\CategoryService;
use App\Services\ClassService;
use App\Services\MentorService;
use App\Services\ModuleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassController extends Controller
{
    protected $classService, $mentorService, $categoryService, $moduleService;

    public function __construct(ClassService $classService, MentorService $mentorService, CategoryService $categoryService, ModuleService $moduleService){
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
            return redirect()->route('admin.classes')->with('success', 'Kelas berhasil dibuat');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan');
        }
    }

    public function detailClassPage($classId){
        $class = $this->classService->getClassDetailsById($classId);
        $stats = $this->classService->calculateClassStats($class);
        $categories = $this->categoryService->getAllCategories();
        $mentors = $this->mentorService->getAllMentors();

        return Inertia::render('Admin/Class/DetailClass', [
            'classData' => $class,
            'stats' => $stats,
            'categories' => $categories,
            'mentors' => $mentors,
        ]);
    }

    public function updateClass(UpdateClassRequest $request, $classId){
        $data = $request->validated();
        $thumbnail = $request->file('thumbnail');

        try {
            $this->classService->updateClass($classId, $data, $thumbnail);
            return redirect()->back()->with('success', 'Kelas berhasil diperbarui');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }
}
