<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'module_id',
        'title',
        'description',
        'youtube_url',
        'duration_sec',
        'sort_order',
        'is_preview',
    ];

    protected $casts = [
        'is_preview' => 'boolean',
        'duration_sec' => 'integer',
    ];

    /**
     * The module this video belongs to
     */
    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class);
    }

    /**
     * Resources attached to this video
     */
    public function resources(): HasMany
    {
        return $this->hasMany(VideoResource::class);
    }

    /**
     * Notes for this video
     */
    public function notes(): HasMany
    {
        return $this->hasMany(VideoNote::class);
    }

    /**
     * Progress records for this video
     */
    public function progress(): HasMany
    {
        return $this->hasMany(VideoProgress::class);
    }

    /**
     * Get formatted duration (mm:ss or hh:mm:ss)
     */
    public function getFormattedDurationAttribute(): string
    {
        if (!$this->duration_sec) {
            return '0:00';
        }

        $hours = floor($this->duration_sec / 3600);
        $minutes = floor(($this->duration_sec % 3600) / 60);
        $seconds = $this->duration_sec % 60;

        if ($hours > 0) {
            return sprintf('%d:%02d:%02d', $hours, $minutes, $seconds);
        }

        return sprintf('%d:%02d', $minutes, $seconds);
    }

    /**
     * Extract YouTube video ID from URL
     */
    public function getYoutubeIdAttribute(): ?string
    {
        $pattern = '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/';

        if (preg_match($pattern, $this->youtube_url, $matches)) {
            return $matches[1];
        }

        return null;
    }

    /**
     * Get YouTube embed URL
     */
    public function getEmbedUrlAttribute(): ?string
    {
        $id = $this->youtube_id;
        return $id ? "https://www.youtube.com/embed/{$id}" : null;
    }

    /**
     * Get YouTube thumbnail URL
     */
    public function getThumbnailUrlAttribute(): ?string
    {
        $id = $this->youtube_id;
        return $id ? "https://img.youtube.com/vi/{$id}/maxresdefault.jpg" : null;
    }
}
