<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClassOrderStatusLog extends Model
{
    use HasFactory;

    protected $table = 'class_order_status_logs';

    public $timestamps = false;

    protected $fillable = [
        'order_id',
        'status',
        'actor_id',
        'note',
        'created_at',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    /**
     * Boot the model
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($log) {
            if (empty($log->created_at)) {
                $log->created_at = now();
            }
        });
    }

    /**
     * The order this log belongs to
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(ClassOrder::class, 'order_id');
    }

    /**
     * The actor (admin) who changed the status
     */
    public function actor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'actor_id');
    }
}
