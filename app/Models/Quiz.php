<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'module_id',
        'title',
        'sort_order',
        'is_pretest',
    ];

    protected $casts = [
        'is_pretest' => 'boolean',
    ];

    /**
     * The module this quiz belongs to
     */
    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class);
    }

    /**
     * Questions in this quiz
     */
    public function questions(): HasMany
    {
        return $this->hasMany(QuizQuestion::class)->orderBy('sort_order');
    }

    /**
     * Attempts for this quiz
     */
    public function attempts(): HasMany
    {
        return $this->hasMany(QuizAttempt::class);
    }

    /**
     * Get total points
     */
    public function getTotalPointsAttribute(): int
    {
        return $this->questions()->sum('points') ?? 0;
    }

    /**
     * Get question count
     */
    public function getQuestionCountAttribute(): int
    {
        return $this->questions()->count();
    }
}
