<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use App\Models\VideoProgress;
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
                    $completedVideos = VideoProgress::where('user_id', $enrollment->user_id)
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
                        'first_video_id' => $class->modules()
                            ->orderBy('sort_order')
                            ->first()
                            ?->videos()
                            ->orderBy('sort_order')
                            ->first()
                            ?->id,
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
