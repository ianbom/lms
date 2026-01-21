<?php

namespace App\Services;

use App\Models\Classes;
use App\Models\ClassOrder;
use App\Models\ClassOrderStatusLog;
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
}
