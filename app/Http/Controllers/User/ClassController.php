<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use App\Services\ClassService;
use App\Services\MentorService;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClassController extends Controller
{

    protected $classService, $mentorService, $categoryService, $orderService;

    public function __construct(ClassService $classService, MentorService $mentorService, CategoryService $categoryService, OrderService $orderService){
        $this->classService = $classService;
        $this->mentorService = $mentorService;
        $this->categoryService = $categoryService;
        $this->orderService = $orderService;
    }

    public function listClassPage(){
        $classes = $this->classService->getAllClasses();
        $mentors = $this->mentorService->getAllMentors();
        $categories = $this->categoryService->getAllCategories();
        return Inertia::render('User/Classes/ListClass', [
            'classes' => $classes,
            'mentors' => $mentors,
            'categories' => $categories
        ]);
    }

    public function detailClassPage($classId){
        $class = $this->classService->getClassDetailsById($classId);
        $previewVideos = $this->classService->getClassPreviewVideoById($classId);
        return Inertia::render('User/Classes/DetailClass', ['class' => $class,
        'previewVideos' => $previewVideos]);
    }

    public function purchaseClassPage($classId){
        $userId = Auth::id();
        $class = $this->classService->getClassDetailsById($classId);
        $hasPendingOrder = $this->orderService->checkPendingOrder($classId, $userId);
        $hasOwnedClass = $this->orderService->checkOwnedClass($classId, $userId);

        return Inertia::render('User/Classes/PurchaseClass', [
            'class' => $class,
            'hasPendingOrder' => $hasPendingOrder,
            'hasOwnedClass' => $hasOwnedClass,
        ]);
    }


}
