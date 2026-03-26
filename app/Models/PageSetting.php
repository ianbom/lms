<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageSetting extends Model
{
    protected $table = 'page_settings'; 
    protected $fillable = [
        'type',
        'title',
        'description',
    ];

    
}
