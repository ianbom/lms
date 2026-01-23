<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VideoNote extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'video_id',
        'content',
    ];

    /**
     * The user who created this note
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The video this note belongs to
     */
    public function video(): BelongsTo
    {
        return $this->belongsTo(Video::class);
    }
}
