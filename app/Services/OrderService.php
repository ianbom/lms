<?php

namespace App\Services;

use App\Models\Classes;
use App\Models\ClassOrder;
use App\Models\ClassOrderStatusLog;
use App\Models\Enrollment;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class OrderService
{
    /**
     * Handle class purchase request
     */
    public function orderClass($userId, $classId, UploadedFile $proofFile)
    {
        $class = Classes::findOrFail($classId);

        $proofPath = $proofFile->store('proofs', 'public');
        $proofUrl = Storage::url($proofPath);

        $order = ClassOrder::create([
            'user_id' => $userId,
            'class_id' => $class->id,
            'amount' => $class->price_final,
            'status' => 'pending',
            'transfer_date' => now(),
            'proof_url' => $proofUrl,

        ]);

        ClassOrderStatusLog::create([
            'order_id' => $order->id,
            'status' => 'pending',
        ]);

        return $order;
    }

    public function getAllOrders(array $filters = [], $userId = null)
    {
        if ($userId) {
            $query = ClassOrder::with(['class', 'user', 'statusLogs'])->where('user_id', $userId);
        }
        else {
            $query = ClassOrder::with(['class', 'user', 'statusLogs']);
        }

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                if (preg_match('/^#?ORD-(\d+)$/i', $search, $matches)) {
                    $q->where('id', intval($matches[1]));
                }
                // Fallback: standard search if not explicitly an ID format
                else {
                    $q->where('id', 'like', "%{$search}%")
                      ->orWhereHas('user', function ($q) use ($search) {
                          $q->where('name', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%");
                      });
                }
            });
        }

        if (!empty($filters['status']) && in_array($filters['status'], ['pending', 'approved', 'rejected'])) {
            $query->where('status', $filters['status']);
        }

        // Handle sorting
        if (!empty($filters['sort']) && !empty($filters['direction'])) {
            $query->orderBy($filters['sort'], $filters['direction']);
        } else {
            $query->orderBy('created_at', 'desc');
        }

        $perPage = $filters['per_page'] ?? 10;

        return $query->paginate($perPage)->withQueryString();
    }

    public function getOrderStats()
    {
        return [
            'total' => ClassOrder::count(),
            'pending' => ClassOrder::where('status', 'pending')->count(),
            'approved' => ClassOrder::where('status', 'approved')->count(),
            'rejected' => ClassOrder::where('status', 'rejected')->count(),
        ];
    }

    public function getOrderStatsByUser($userId)
    {
        return [
            'total' => ClassOrder::where('user_id', $userId)->count(),
            'pending' => ClassOrder::where('user_id', $userId)->where('status', 'pending')->count(),
            'approved' => ClassOrder::where('user_id', $userId)->where('status', 'approved')->count(),
            'rejected' => ClassOrder::where('user_id', $userId)->where('status', 'rejected')->count(),
        ];
    }

    public function approveOrder($orderId){
        $order = ClassOrder::findOrFail($orderId);
        $order->status = 'approved';
        $order->decided_at = now();
        $order->save();

        ClassOrderStatusLog::create([
            'order_id' => $order->id,
            'status' => 'approved',
        ]);

        $this->enrollUserToClass($orderId);
    }

    public function enrollUserToClass($orderId){
        $order = ClassOrder::findOrFail($orderId);
        Enrollment::create([
            'user_id' => $order->user_id,
            'class_id' => $order->class_id,
            'status' => 'active',
            'activated_at' => now(),
        ]);
    }

    public function rejectOrder($orderId){
        $order = ClassOrder::findOrFail($orderId);
        $order->status = 'rejected';
        $order->decided_at = now();
        $order->save();

        ClassOrderStatusLog::create([
            'order_id' => $order->id,
            'status' => 'rejected',
        ]);
    }

    public function checkPendingOrder($classId, $userId){
        $pendingOrder = ClassOrder::where('class_id', $classId)
        ->where('user_id', $userId)
        ->where('status', 'pending')->exists();
        return $pendingOrder;
    }

    public function checkOwnedClass($classId, $userId){
        $ownedClass = ClassOrder::where('class_id', $classId)
        ->where('user_id', $userId)
        ->where('status', 'approved')->exists();
        return $ownedClass;
    }
}
