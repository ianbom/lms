<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class CertificateIssuance extends Model
{
    use HasFactory;

    protected $table = 'certificate_issuances';

    protected $fillable = [
        'class_id',
        'user_id',
        'issued_code',
        'issued_at',
        'file_url',
    ];

    protected $casts = [
        'issued_at' => 'datetime',
    ];

    /**
     * Boot the model
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($certificate) {
            if (empty($certificate->issued_code)) {
                $certificate->issued_code = static::generateUniqueCode();
            }
            if (empty($certificate->issued_at)) {
                $certificate->issued_at = now();
            }
        });
    }

    /**
     * Generate a unique certificate code
     */
    public static function generateUniqueCode(): string
    {
        do {
            $code = 'CERT-' . strtoupper(Str::random(8));
        } while (static::where('issued_code', $code)->exists());

        return $code;
    }

    /**
     * The class this certificate is for
     */
    public function class(): BelongsTo
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }

    /**
     * The user who received this certificate
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Verify certificate by code
     */
    public static function verify(string $code): ?self
    {
        return static::where('issued_code', $code)->first();
    }

    /**
     * Issue certificate for a user who completed a class
     */
    public static function issue(int $userId, int $classId): self
    {
        return static::firstOrCreate([
            'user_id' => $userId,
            'class_id' => $classId,
        ], [
            'issued_code' => static::generateUniqueCode(),
            'issued_at' => now(),
        ]);
    }
}
