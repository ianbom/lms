<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateOrderRequest;
use App\Models\ClassOrder;
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
        
        $pendingOrder = $this->orderService->checkPendingOrder($classId, $userId);
        $ownedClass = $this->orderService->checkOwnedClass($classId, $userId);

        if ($pendingOrder) {
            return redirect()->back()->withErrors([
                'order' => 'Anda sudah memiliki pesanan tertunda untuk kelas ini. Silakan tunggu proses verifikasi.'
            ]);
        }

        if ($ownedClass) {
            return redirect()->back()->withErrors([
                'order' => 'Anda sudah memiliki kelas ini. Tidak dapat melakukan pembelian ulang.'
            ]);
        }

        try {
            $order = $this->orderService->orderClass(
                $userId,
                $classId,
                $request->file('proof_file')
            );

            return redirect()->route('user.order.success', ['order' => $order->id]);
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors(['order' => $th->getMessage()]);
        }
    }

    public function orderSuccessPage(Request $request)
    {
        $orderId = $request->query('order');
        $order = ClassOrder::with(['class', 'user'])
            ->where('id', $orderId)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        return Inertia::render('User/Order/Success', [
            'order' => $order,
        ]);
    }
}
