<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PageSetting;
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

    public function listClassPage(Request $request){
        $type = $request->query('type', null);
        $classes = $this->classService->getAllPublishedClasses($type);
        $mentors = $this->mentorService->getAllMentors();
        $categories = $this->categoryService->getAllCategories();

        // Load page setting matching the selected type (default e-learning)
        $settingType = $type ?: 'e-learning';
        $pageSetting = PageSetting::where('type', $settingType)->first();

        return Inertia::render('User/Classes/ListClass', [
            'classes'      => $classes,
            'mentors'      => $mentors,
            'categories'   => $categories,
            'selectedType' => $type,
            'pageSetting'  => $pageSetting,
        ]);
    }

    public function detailClassPage($classId){
        $userId = Auth::id();
        $class = $this->classService->getClassDetailsById($classId);
        //  dd($class);
        $previewVideos = $this->classService->getClassPreviewVideoById($classId);

        // Check if user has enrollment for this class
        $isEnrolled = false;
        $firstVideoId = null;
        $firstModuleId = null;

        if ($userId) {
            $isEnrolled = $this->orderService->checkOwnedClass($classId, $userId);

            // Get first video ID if enrolled
            if ($isEnrolled && $class->modules->isNotEmpty()) {
                foreach ($class->modules as $module) {
                    if ($module->videos->isNotEmpty()) {
                        $firstVideoId = $module->videos->first()->id;
                        break;
                    }
                }

                // Fallback: get first module ID if no video found
                if (!$firstVideoId) {
                    $firstModuleId = $class->modules->first()->id;
                }
            }
        }

        return Inertia::render('User/Classes/DetailClass', [
            'class' => $class,
            'previewVideos' => $previewVideos,
            'isEnrolled' => $isEnrolled,
            'firstVideoId' => $firstVideoId,
            'firstModuleId' => $firstModuleId,
        ]);
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
