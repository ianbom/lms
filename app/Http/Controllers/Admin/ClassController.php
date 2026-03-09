<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateClassRequest;
use App\Http\Requests\Admin\UpdateClassRequest;
use App\Models\Category;
use App\Models\Classes;
use App\Models\Mentor;
use App\Services\CategoryService;
use App\Services\ClassReviewService;
use App\Services\ClassService;
use App\Services\MentorService;
use App\Services\ModuleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassController extends Controller
{
    protected $classService, $mentorService, $categoryService, $moduleService, $classReviewService;

    public function __construct(ClassService $classService, MentorService $mentorService, CategoryService $categoryService, ModuleService $moduleService, ClassReviewService $classReviewService){
        $this->classService = $classService;
        $this->mentorService = $mentorService;
        $this->categoryService = $categoryService;
        $this->moduleService = $moduleService;
        $this->classReviewService = $classReviewService;
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

    public function publishClass($classId){
        try {
            $this->classService->publishClass($classId);
            return redirect()->back()->with('success', 'Kelas berhasil dipublikasikan');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan');
        }
    }

    public function reviewClassPage(Request $request, $classId)
    {
        // Get filters from query params
        $filters = [
            'search' => $request->query('search', ''),
            'class_id' => $classId,
            'sort' => $request->query('sort', 'newest'),
        ];

        // Fetch data
        $stats = $this->classReviewService->getReviewStats((int) $classId);
        $distribution = $this->classReviewService->getRatingDistribution((int) $classId);
        $reviews = $this->classReviewService->getReviewsPaginated($filters);

        // Get class info for breadcrumb
        $class = $this->classService->getClassDetailsById($classId);

        return Inertia::render('Admin/Class/ClassReviewDetail', [
            'classData' => [
                'id' => $class->id,
                'title' => $class->title,
            ],
            'stats' => $stats,
            'distribution' => $distribution,
            'reviews' => $reviews,
            'filters' => $filters,
        ]);
    }

    public function deleteClass($classId)
    {
        try {
            $this->classService->deleteClass((int) $classId);
            return redirect()->route('admin.classes')->with('success', 'Kelas berhasil dihapus');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    public function classUserListPage(Request $request, $classId)
    {
        $filters = $request->only(['search', 'sort', 'direction', 'per_page']);
        $class = Classes::select('id', 'title')->findOrFail($classId);
        $enrollments = $this->classService->getClassEnrolledUsers($classId, $filters);

        return Inertia::render('Admin/Class/ClassUserList', [
            'classData' => $class,
            'enrollments' => $enrollments,
            'filters' => $filters,
        ]);
    }
}

