<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class QuizAttempt extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'quiz_id',
        'started_at',
        'submitted_at',
        'score',
        'is_passed',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'submitted_at' => 'datetime',
        'score' => 'integer',
        'is_passed' => 'boolean',
    ];

    /**
     * The user who made this attempt
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The quiz this attempt is for
     */
    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    /**
     * Answers in this attempt
     */
    public function answers(): HasMany
    {
        return $this->hasMany(QuizAnswer::class, 'attempt_id');
    }

    /**
     * Calculate and update score
     */
    public function calculateScore(int $passingScore = 70): void
    {
        $correctAnswers = $this->answers()->where('is_correct', true)->count();
        $totalQuestions = $this->quiz->questions()->count();

        if ($totalQuestions > 0) {
            $this->score = round(($correctAnswers / $totalQuestions) * 100);
            $this->is_passed = $this->score >= $passingScore;
            $this->save();
        }
    }
}
