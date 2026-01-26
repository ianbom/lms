<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\OrderService;
use App\Services\UserDashboardService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{

    protected $orderService;
    protected $userDashboardService;

    public function __construct(OrderService $orderService, UserDashboardService $userDashboardService)
    {
        $this->orderService = $orderService;
        $this->userDashboardService = $userDashboardService;
    }

    public function dashboardPage(){
        $user = Auth::user();
        $userId = $user->id;

        $stats = $this->userDashboardService->getStats($userId);
        $currentLearning = $this->userDashboardService->getCurrentLearning($userId);
        $myClasses = $this->userDashboardService->getMyClasses($userId, 4);

        return Inertia::render('User/Dashboard/Dashboard', [
            'user' => [
                'name' => $user->name,
            ],
            'stats' => $stats,
            'currentLearning' => $currentLearning,
            'myClasses' => $myClasses,
        ]);
    }

    public function myClassPage()
    {
        $userId = Auth::id();
        $enrollments = $this->userDashboardService->getAllEnrollments($userId);

        return Inertia::render('User/Dashboard/MyClass', [
            'enrollments' => $enrollments,
        ]);
    }

    public function myOrderPage(Request $request){
        $userId = Auth::id();
        $filters = $request->only(['search', 'status', 'sort', 'direction', 'per_page']);
        $orders = $this->orderService->getAllOrders($filters, $userId);
        $stats = $this->orderService->getOrderStatsByUser($userId);

        return Inertia::render('User/Dashboard/MyOrder', [
            'orders' => $orders,
            'stats' => $stats,
            'filters' => $filters,
        ]);
    }


}
