<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimony extends Model
{
    protected $fillable = [
        'content',
        'rating',
        'person_name',
        'person_position',
        'person_photo_url',
    ];

    protected $casts = [
        'rating' => 'integer',
    ];
}
