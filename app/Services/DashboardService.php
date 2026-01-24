<?php

namespace App\Services;

use App\Models\ClassOrder;
use App\Models\Classes;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardService
{
    /**
     * Get dashboard statistics
     */
    public function getStats(): array
    {
        $totalClasses = Classes::count();
        $totalUsers = User::where('role', 'user')->count();
        $totalOrders = ClassOrder::count();
        $totalRevenue = ClassOrder::where('status', 'approved')->sum('amount');

        // Calculate trends (comparing with last month)
        $lastMonthUsers = User::where('role', 'user')
            ->where('created_at', '<', Carbon::now()->startOfMonth())
            ->where('created_at', '>=', Carbon::now()->subMonth()->startOfMonth())
            ->count();

        $thisMonthUsers = User::where('role', 'user')
            ->where('created_at', '>=', Carbon::now()->startOfMonth())
            ->count();

        $userTrend = $lastMonthUsers > 0
            ? round((($thisMonthUsers - $lastMonthUsers) / $lastMonthUsers) * 100)
            : ($thisMonthUsers > 0 ? 100 : 0);

        $lastMonthOrders = ClassOrder::where('created_at', '<', Carbon::now()->startOfMonth())
            ->where('created_at', '>=', Carbon::now()->subMonth()->startOfMonth())
            ->count();

        $thisMonthOrders = ClassOrder::where('created_at', '>=', Carbon::now()->startOfMonth())
            ->count();

        $orderTrend = $lastMonthOrders > 0
            ? round((($thisMonthOrders - $lastMonthOrders) / $lastMonthOrders) * 100)
            : ($thisMonthOrders > 0 ? 100 : 0);

        $lastMonthRevenue = ClassOrder::where('status', 'approved')
            ->where('created_at', '<', Carbon::now()->startOfMonth())
            ->where('created_at', '>=', Carbon::now()->subMonth()->startOfMonth())
            ->sum('amount');

        $thisMonthRevenue = ClassOrder::where('status', 'approved')
            ->where('created_at', '>=', Carbon::now()->startOfMonth())
            ->sum('amount');

        $revenueTrend = $lastMonthRevenue > 0
            ? round((($thisMonthRevenue - $lastMonthRevenue) / $lastMonthRevenue) * 100)
            : ($thisMonthRevenue > 0 ? 100 : 0);

        return [
            [
                'icon' => 'library_books',
                'label' => 'Total Classes',
                'value' => number_format($totalClasses),
                'trend' => 'up',
                'trendValue' => '+0%',
            ],
            [
                'icon' => 'group',
                'label' => 'Total Users',
                'value' => number_format($totalUsers),
                'trend' => $userTrend >= 0 ? 'up' : 'down',
                'trendValue' => ($userTrend >= 0 ? '+' : '') . $userTrend . '%',
            ],
            [
                'icon' => 'shopping_bag',
                'label' => 'Total Orders',
                'value' => number_format($totalOrders),
                'trend' => $orderTrend >= 0 ? 'up' : 'down',
                'trendValue' => ($orderTrend >= 0 ? '+' : '') . $orderTrend . '%',
            ],
            [
                'icon' => 'payments',
                'label' => 'Total Revenue',
                'value' => 'Rp ' . number_format($totalRevenue, 0, ',', '.'),
                'trend' => $revenueTrend >= 0 ? 'up' : 'down',
                'trendValue' => ($revenueTrend >= 0 ? '+' : '') . $revenueTrend . '%',
            ],
        ];
    }

    /**
     * Get recent orders
     */
    public function getRecentOrders(int $limit = 5): array
    {
        $orders = ClassOrder::with(['user', 'class'])
            ->orderBy('created_at', 'desc')
            ->limit($limit)
            ->get();

        $colors = [
            'bg-blue-100 text-blue-700',
            'bg-purple-100 text-purple-700',
            'bg-green-100 text-green-700',
            'bg-pink-100 text-pink-700',
            'bg-orange-100 text-orange-700',
        ];

        return $orders->map(function ($order, $index) use ($colors) {
            $initials = collect(explode(' ', $order->user->name))
                ->map(fn($word) => strtoupper(substr($word, 0, 1)))
                ->take(2)
                ->join('');

            $statusMap = [
                'pending' => 'pending',
                'approved' => 'paid',
                'rejected' => 'failed',
            ];

            return [
                'id' => '#ORD-' . str_pad($order->id, 4, '0', STR_PAD_LEFT),
                'user' => [
                    'name' => $order->user->name,
                    'initials' => $initials,
                    'color' => $colors[$index % count($colors)],
                ],
                'date' => $order->created_at->format('M d, Y'),
                'amount' => 'Rp ' . number_format($order->amount, 0, ',', '.'),
                'status' => $statusMap[$order->status] ?? 'pending',
            ];
        })->toArray();
    }

    /**
     * Get popular classes
     */
    public function getPopularClasses(int $limit = 5): array
    {
        $classes = Classes::withCount('enrollments')
            ->orderBy('enrollments_count', 'desc')
            ->limit($limit)
            ->get();

        $maxEnrollments = $classes->max('enrollments_count') ?: 1;

        return $classes->map(function ($class) use ($maxEnrollments) {
            return [
                'id' => $class->id,
                'title' => $class->title,
                'instructor' => $class->creator?->name ?? 'Unknown',
                'enrolled' => $class->enrollments_count,
                'progress' => round(($class->enrollments_count / $maxEnrollments) * 100),
                'thumbnail' => $class->thumbnail_url ?? 'https://via.placeholder.com/100x60',
            ];
        })->toArray();
    }

    /**
     * Get chart data for users, orders, or revenue
     */
    public function getChartData(string $type, int $year, ?int $month = null): array
    {
        $data = [];
        $labels = [];

        if ($month) {
            // Daily data for specific month
            $daysInMonth = Carbon::create($year, $month)->daysInMonth;

            for ($day = 1; $day <= $daysInMonth; $day++) {
                $date = Carbon::create($year, $month, $day);
                $labels[] = $day;

                switch ($type) {
                    case 'users':
                        $data[] = User::where('role', 'user')
                            ->whereDate('created_at', $date)
                            ->count();
                        break;
                    case 'orders':
                        $data[] = ClassOrder::whereDate('created_at', $date)->count();
                        break;
                    case 'revenue':
                        $data[] = ClassOrder::where('status', 'approved')
                            ->whereDate('created_at', $date)
                            ->sum('amount');
                        break;
                }
            }
        } else {
            // Monthly data for entire year
            $monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            for ($m = 1; $m <= 12; $m++) {
                $labels[] = $monthNames[$m - 1];

                switch ($type) {
                    case 'users':
                        $data[] = User::where('role', 'user')
                            ->whereYear('created_at', $year)
                            ->whereMonth('created_at', $m)
                            ->count();
                        break;
                    case 'orders':
                        $data[] = ClassOrder::whereYear('created_at', $year)
                            ->whereMonth('created_at', $m)
                            ->count();
                        break;
                    case 'revenue':
                        $data[] = ClassOrder::where('status', 'approved')
                            ->whereYear('created_at', $year)
                            ->whereMonth('created_at', $m)
                            ->sum('amount');
                        break;
                }
            }
        }

        return [
            'labels' => $labels,
            'data' => $data,
            'type' => $type,
            'year' => $year,
            'month' => $month,
        ];
    }

    /**
     * Get available years for filter
     */
    public function getAvailableYears(): array
    {
        $minYear = min(
            User::min('created_at') ? Carbon::parse(User::min('created_at'))->year : now()->year,
            ClassOrder::min('created_at') ? Carbon::parse(ClassOrder::min('created_at'))->year : now()->year
        );

        $currentYear = now()->year;
        $years = [];

        for ($year = $currentYear; $year >= $minYear; $year--) {
            $years[] = $year;
        }

        return $years ?: [$currentYear];
    }
}
