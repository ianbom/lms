<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use App\Services\ClassService;
use App\Services\MentorService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassController extends Controller
{   

    protected $classService, $mentorService, $categoryService;

    public function __construct(ClassService $classService, MentorService $mentorService, CategoryService $categoryService){ 
        $this->classService = $classService;
        $this->mentorService = $mentorService;
        $this->categoryService = $categoryService;

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

    public function detailClassPage(){ 

        return Inertia::render('User/Classes/DetailClass');
    }

    public function purchaseClassPage(){ 
        return Inertia::render('User/Classes/PurchaseClass');
    }
}
