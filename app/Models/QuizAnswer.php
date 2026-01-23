<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuizAnswer extends Model
{
    use HasFactory;

    protected $fillable = [
        'attempt_id',
        'question_id',
        'option_id',
        'is_correct',
    ];

    protected $casts = [
        'is_correct' => 'boolean',
    ];

    /**
     * The attempt this answer belongs to
     */
    public function attempt(): BelongsTo
    {
        return $this->belongsTo(QuizAttempt::class, 'attempt_id');
    }

    /**
     * The question this answer is for
     */
    public function question(): BelongsTo
    {
        return $this->belongsTo(QuizQuestion::class, 'question_id');
    }

    /**
     * The selected option
     */
    public function option(): BelongsTo
    {
        return $this->belongsTo(QuizOption::class, 'option_id');
    }

    /**
     * Check if answer is correct and update
     */
    public function checkCorrectness(): void
    {
        $this->is_correct = $this->option->is_correct ?? false;
        $this->save();
    }
}
