<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VideoResource extends Model
{
    use HasFactory;

    protected $fillable = [
        'video_id',
        'title',
        'file_url',
        'file_type',
        'mime_type',
        'file_size',
    ];

    protected $casts = [
        'file_size' => 'integer',
    ];

    /**
     * The video this resource belongs to
     */
    public function video(): BelongsTo
    {
        return $this->belongsTo(Video::class);
    }

    /**
     * Get formatted file size
     */
    public function getFormattedSizeAttribute(): string
    {
        if (!$this->file_size) {
            return '0 KB';
        }

        $bytes = $this->file_size;
        $units = ['B', 'KB', 'MB', 'GB'];
        $unitIndex = 0;

        while ($bytes >= 1024 && $unitIndex < count($units) - 1) {
            $bytes /= 1024;
            $unitIndex++;
        }

        return round($bytes, 2) . ' ' . $units[$unitIndex];
    }

    /**
     * Get file icon based on type
     */
    public function getIconAttribute(): string
    {
        return match ($this->file_type) {
            'pdf' => 'picture_as_pdf',
            'doc', 'docx' => 'description',
            'ppt', 'pptx' => 'slideshow',
            'xls', 'xlsx' => 'table_chart',
            'zip' => 'folder_zip',
            default => 'insert_drive_file',
        };
    }
}
