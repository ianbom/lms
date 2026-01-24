<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DashboardService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct(
        private DashboardService $dashboardService
    ) {}

    /**
     * Display the dashboard page
     */
    public function index()
    {
        $stats = $this->dashboardService->getStats();
        $recentOrders = $this->dashboardService->getRecentOrders();
        $popularClasses = $this->dashboardService->getPopularClasses();
        $availableYears = $this->dashboardService->getAvailableYears();
        $chartData = $this->dashboardService->getChartData('users', now()->year);

        return Inertia::render('Admin/Dashboard/Dashboard', [
            'stats' => $stats,
            'recentOrders' => $recentOrders,
            'popularClasses' => $popularClasses,
            'availableYears' => $availableYears,
            'initialChartData' => $chartData,
        ]);
    }
    public function getChartData(Request $request)
    {
        $request->validate([
            'type' => 'required|in:users,orders,revenue',
            'year' => 'required|integer|min:2020|max:2100',
            'month' => 'nullable|integer|min:1|max:12',
        ]);

        $chartData = $this->dashboardService->getChartData(
            $request->type,
            $request->year,
            $request->month
        );

        return response()->json($chartData);
    }
}
