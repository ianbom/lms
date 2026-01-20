<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClassMentor extends Model
{
    use HasFactory;

    protected $table = 'class_mentors';

    protected $fillable = [
        'class_id',
        'mentor_id',
        'sort_order',
    ];

    /**
     * The class
     */
    public function class(): BelongsTo
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }

    /**
     * The mentor
     */
    public function mentor(): BelongsTo
    {
        return $this->belongsTo(Mentor::class);
    }
}
