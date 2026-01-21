<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateOrderRequest;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    protected $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function orderClass($classId, CreateOrderRequest $request)
    {   
        $userId = Auth::id();
        $order = $this->orderService->orderClass(
            $userId,
            $classId,
            $request->file('proof_file')
        );

        return redirect()->route('user.order.success')
            ->with('orderNumber', 'ORD-' . str_pad($order->id, 8, '0', STR_PAD_LEFT));
    }

    public function orderSuccessPage()
    {
        return Inertia::render('User/Order/Success', [
            'orderNumber' => session('orderNumber', 'ORD-00000000'),
        ]);
    }
}
