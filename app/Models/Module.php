<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Module extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_id',
        'title',
        'description',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * The class this module belongs to
     */
    public function class(): BelongsTo
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }

    /**
     * Videos in this module
     */
    public function videos(): HasMany
    {
        return $this->hasMany(Video::class)->orderBy('sort_order');
    }

    /**
     * Quizzes in this module
     */
    public function quizzes(): HasMany
    {
        return $this->hasMany(Quiz::class)->orderBy('sort_order');
    }

    /**
     * Pretest quizzes
     */
    public function pretests(): HasMany
    {
        return $this->hasMany(Quiz::class)->where('is_pretest', true)->orderBy('sort_order');
    }

    /**
     * Module progress records
     */
    public function progress(): HasMany
    {
        return $this->hasMany(ModuleProgress::class);
    }

    /**
     * Get total video duration in seconds
     */
    public function getTotalDurationAttribute(): int
    {
        return $this->videos()->sum('duration_sec') ?? 0;
    }

    /**
     * Get formatted duration
     */
    public function getFormattedDurationAttribute(): string
    {
        $seconds = $this->total_duration;
        $hours = floor($seconds / 3600);
        $minutes = floor(($seconds % 3600) / 60);

        if ($hours > 0) {
            return "{$hours} jam {$minutes} menit";
        }

        return "{$minutes} menit";
    }
}
