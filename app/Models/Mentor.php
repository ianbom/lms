<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Mentor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'headline',
        'bio',
        'avatar_url',
    ];

    /**
     * Classes this mentor teaches
     */
    public function classes(): BelongsToMany
    {
        return $this->belongsToMany(Classes::class, 'class_mentors', 'mentor_id', 'class_id')
            ->withPivot('sort_order')
            ->withTimestamps()
            ->orderByPivot('sort_order');
    }
}
