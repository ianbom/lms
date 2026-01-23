<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClassOrderStatusLog extends Model
{
    use HasFactory;

    protected $table = 'class_order_status_logs';

    protected $fillable = [
        'order_id',
        'status',
        'note',
    ];

    /**
     * The order this log belongs to
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(ClassOrder::class, 'order_id');
    }
}
