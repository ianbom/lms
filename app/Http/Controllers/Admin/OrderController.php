<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ClassService;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    protected $orderService, $classService;

    public function __construct(OrderService $orderService, ClassService $classService){
        $this->orderService = $orderService;
        $this->classService = $classService;
    }


    public function listOrderPage(Request $request){
        $filters = $request->only(['search', 'status', 'sort', 'direction', 'per_page', 'class_id']);
        $orders = $this->orderService->getAllOrders($filters);
        $stats = $this->orderService->getOrderStats();
        $classes = $this->classService->getAllClasses()->map(fn($c) => ['id' => $c->id, 'title' => $c->title]);

        return Inertia::render('Admin/Order/ListOrder', [
            'orders' => $orders,
            'stats' => $stats,
            'filters' => $filters,
            'classes' => $classes,
        ]);
    }

    public function approveOrder($orderId){
        try {
        $this->orderService->approveOrder($orderId);
        return redirect()->back()->with('success', 'Order berhasil disetujui dan peserta telah didaftarkan ke kelas.');
        } catch (\Throwable $th) {
        return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }

    public function rejectOrder($orderId){
        try {
        $this->orderService->rejectOrder($orderId);
        return redirect()->back()->with('success', 'Order berhasil ditolak.');
        } catch (\Throwable $th) {
        return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }

    public function pendingOrder($orderId){
        try {
        $this->orderService->pendingOrder($orderId);
        return redirect()->back()->with('success', 'Order berhasil dipending.');
        } catch (\Throwable $th) {
        return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }
}
