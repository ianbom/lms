<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{

    protected $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function dashboardPage(){
        return Inertia::render('User/Dashboard/Dashboard');
    }

    public function myClassPage()
    {
        $user = Auth::user();

        $enrollments = Enrollment::where('user_id', $user->id)
            ->with(['class' => function ($query) {
                $query->with(['mentors' => function ($q) {
                    $q->select('mentors.id', 'mentors.name', 'mentors.avatar_url');
                }])
                ->select('id', 'title', 'slug', 'thumbnail_url');
            }])
            ->whereIn('status', ['active', 'completed'])
            ->get()
            ->map(function ($enrollment) {
                // Calculate progress based on completed videos/modules
                $class = $enrollment->class;
                $totalVideos = $class->modules()->withCount('videos')->get()->sum('videos_count');

                $completedVideos = 0;
                if ($totalVideos > 0) {
                    $completedVideos = \App\Models\VideoProgress::where('user_id', $enrollment->user_id)
                        ->whereHas('video', function ($query) use ($class) {
                            $query->whereHas('module', function ($q) use ($class) {
                                $q->where('class_id', $class->id);
                            });
                        })
                        ->where('is_completed', true)
                        ->count();
                }

                $progress = $totalVideos > 0 ? round(($completedVideos / $totalVideos) * 100) : 0;

                return [
                    'id' => $enrollment->id,
                    'status' => $enrollment->status,
                    'activated_at' => $enrollment->activated_at,
                    'completed_at' => $enrollment->completed_at,
                    'created_at' => $enrollment->created_at,
                    'progress' => $progress,
                    'class' => [
                        'id' => $class->id,
                        'title' => $class->title,
                        'slug' => $class->slug,
                        'thumbnail_url' => $class->thumbnail_url,
                        'mentors' => $class->mentors->map(function ($mentor) {
                            return [
                                'id' => $mentor->id,
                                'name' => $mentor->name,
                                'profile_picture_url' => $mentor->avatar_url,
                            ];
                        }),
                    ],
                ];
            });

        // return response()->json($enrollments);

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
