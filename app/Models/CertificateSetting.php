<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CertificateSetting extends Model
{
    use HasFactory;

    protected $table = 'certificate_settings';

    protected $fillable = [
        'template_url',
        'title',
    ];

    /**
     * Get the default/active certificate setting
     */
    public static function getActive(): ?self
    {
        return static::latest()->first();
    }
}
