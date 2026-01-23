<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VideoProgress extends Model
{
    use HasFactory;

    protected $table = 'video_progress';

    protected $fillable = [
        'user_id',
        'video_id',
        'last_time_sec',
        'is_completed',
        'completed_at',
    ];

    protected $casts = [
        'last_time_sec' => 'integer',
        'is_completed' => 'boolean',
        'completed_at' => 'datetime',
    ];

    /**
     * The user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The video
     */
    public function video(): BelongsTo
    {
        return $this->belongsTo(Video::class);
    }

    /**
     * Update progress
     */
    public function updateProgress(int $timeSec, int $completionThreshold = 90): void
    {
        $this->last_time_sec = $timeSec;

        // Check if video is completed (watched >= threshold% of duration)
        $video = $this->video;
        if ($video->duration_sec && $video->duration_sec > 0) {
            $percentWatched = ($timeSec / $video->duration_sec) * 100;
            if ($percentWatched >= $completionThreshold && !$this->is_completed) {
                $this->is_completed = true;
                $this->completed_at = now();
            }
        }

        $this->save();
    }

    /**
     * Get progress percentage
     */
    public function getProgressPercentAttribute(): int
    {
        $video = $this->video;
        if (!$video->duration_sec || $video->duration_sec == 0) {
            return 0;
        }

        return min(100, round(($this->last_time_sec / $video->duration_sec) * 100));
    }
}
