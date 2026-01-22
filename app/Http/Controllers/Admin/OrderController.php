<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{   
    protected $orderService; 

    public function __construct(OrderService $orderService){ 
        $this->orderService = $orderService;
    }


    public function listOrderPage(Request $request){ 
        $filters = $request->only(['search', 'status', 'sort', 'direction', 'per_page']);
        $orders = $this->orderService->getAllOrders($filters);
        $stats = $this->orderService->getOrderStats();

        // return response()->json($orders);

        return Inertia::render('Admin/Order/ListOrder', [
            'orders' => $orders,
            'stats' => $stats,
            'filters' => $filters,
        ]);
    }
}
