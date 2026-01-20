<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Classes extends Model
{
    use HasFactory;

    protected $table = 'classes';

    protected $fillable = [
        'created_by',
        'category_id',
        'title',
        'slug',
        'description',
        'price',
        'discount',
        'price_final',
        'thumbnail_url',
        'status',
        'published_at',
    ];

    protected $casts = [
        'price' => 'integer',
        'discount' => 'integer',
        'price_final' => 'integer',
        'published_at' => 'datetime',
    ];

    /**
     * Boot the model
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($class) {
            if (empty($class->slug)) {
                $class->slug = Str::slug($class->title);
            }
        });

        static::saving(function ($class) {
            // Calculate final price
            if ($class->discount > 0) {
                $class->price_final = $class->price - ($class->price * $class->discount / 100);
            } else {
                $class->price_final = $class->price;
            }
        });
    }

    /**
     * Scope for published classes
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    /**
     * Scope for draft classes
     */
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    /**
     * Creator (admin) of this class
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Category of this class
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Mentors teaching this class
     */
    public function mentors(): BelongsToMany
    {
        return $this->belongsToMany(Mentor::class, 'class_mentors', 'class_id', 'mentor_id')
            ->withPivot('sort_order')
            ->withTimestamps()
            ->orderByPivot('sort_order');
    }

    /**
     * Modules in this class
     */
    public function modules(): HasMany
    {
        return $this->hasMany(Module::class, 'class_id')->orderBy('sort_order');
    }

    /**
     * Enrollments for this class
     */
    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class, 'class_id');
    }

    /**
     * Orders for this class
     */
    public function orders(): HasMany
    {
        return $this->hasMany(ClassOrder::class, 'class_id');
    }

    /**
     * Certificates issued for this class
     */
    public function certificates(): HasMany
    {
        return $this->hasMany(CertificateIssuance::class, 'class_id');
    }

    /**
     * Check if class is published
     */
    public function isPublished(): bool
    {
        return $this->status === 'published';
    }

    /**
     * Publish the class
     */
    public function publish(): void
    {
        $this->update([
            'status' => 'published',
            'published_at' => now(),
        ]);
    }

    /**
     * Get formatted price
     */
    public function getFormattedPriceAttribute(): string
    {
        return 'Rp ' . number_format($this->price, 0, ',', '.');
    }

    /**
     * Get formatted final price
     */
    public function getFormattedFinalPriceAttribute(): string
    {
        return 'Rp ' . number_format($this->price_final ?? $this->price, 0, ',', '.');
    }
}
