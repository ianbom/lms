<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ClassOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'class_id',
        'amount',
        'status',
        'pending_lock',
        'target_bank_name',
        'target_account_no',
        'target_account_name',
        'sender_name',
        'sender_bank',
        'transfer_date',
        'proof_url',
        'decided_at',
    ];

    protected $casts = [
        'amount' => 'integer',
        'transfer_date' => 'date',
        'decided_at' => 'datetime',
    ];

    /**
     * Scope for pending orders
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope for approved orders
     */
    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }

    /**
     * Scope for rejected orders
     */
    public function scopeRejected($query)
    {
        return $query->where('status', 'rejected');
    }

    /**
     * The user who made this order
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The class being ordered
     */
    public function class(): BelongsTo
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }

    /**
     * Status logs for this order
     */
    public function statusLogs(): HasMany
    {
        return $this->hasMany(ClassOrderStatusLog::class, 'order_id');
    }

    /**
     * Approve the order
     */
    public function approve(int $actorId, ?string $note = null): void
    {
        $this->update([
            'status' => 'approved',
            'pending_lock' => null,
            'decided_at' => now(),
        ]);

        $this->statusLogs()->create([
            'status' => 'approved',
            'actor_id' => $actorId,
            'note' => $note,
        ]);

        // Activate enrollment
        $enrollment = Enrollment::firstOrCreate([
            'user_id' => $this->user_id,
            'class_id' => $this->class_id,
        ]);
        $enrollment->activate();
    }

    /**
     * Reject the order
     */
    public function reject(int $actorId, ?string $note = null): void
    {
        $this->update([
            'status' => 'rejected',
            'pending_lock' => null,
            'decided_at' => now(),
        ]);

        $this->statusLogs()->create([
            'status' => 'rejected',
            'actor_id' => $actorId,
            'note' => $note,
        ]);
    }

    /**
     * Check if order is pending
     */
    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    /**
     * Check if order is approved
     */
    public function isApproved(): bool
    {
        return $this->status === 'approved';
    }

    /**
     * Get formatted amount
     */
    public function getFormattedAmountAttribute(): string
    {
        return 'Rp ' . number_format($this->amount, 0, ',', '.');
    }
}
