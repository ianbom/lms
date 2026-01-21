<?php

namespace App\Services;

use App\Models\Module;
use App\Models\Video;
use App\Models\VideoResource;
use Illuminate\Support\Facades\DB;

class ModuleService
{
    /**
     * Create a new module and optionally videos with resources.
     */
    public function createModule(array $data, int $classId)
    {
        return DB::transaction(function () use ($data, $classId) {
            $module = Module::create([
                'class_id' => $classId,
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
            ]);

            if (isset($data['videos']) && is_array($data['videos'])) {
                foreach ($data['videos'] as $videoData) {
                    $video = Video::create([
                        'module_id' => $module->id,
                        'title' => $videoData['title'],
                        'description' => $videoData['description'] ?? null,
                        'youtube_url' => $videoData['youtube_url'],
                        'is_preview' => $videoData['is_preview'] ?? false,
                        'duration_sec' => $videoData['duration_sec'] ?? 0,
                    ]);

                    // Create video resources if provided
                    if (isset($videoData['resources']) && is_array($videoData['resources'])) {
                        foreach ($videoData['resources'] as $resourceData) {
                            $fileUrl = null;
                            $fileSize = null;
                            $fileType = $resourceData['file_type'] ?? 'other';

                            // Handle file upload if file is provided
                            if (isset($resourceData['file']) && $resourceData['file'] instanceof \Illuminate\Http\UploadedFile) {
                                $file = $resourceData['file'];
                                $path = $file->store('resources', 'public');
                                $fileUrl = '/storage/' . $path;
                                $fileSize = $file->getSize();
                                
                                // Determine file type from extension
                                $extension = strtolower($file->getClientOriginalExtension());
                                $fileType = match ($extension) {
                                    'pdf' => 'pdf',
                                    'doc', 'docx' => 'doc',
                                    'ppt', 'pptx' => 'ppt',
                                    'xls', 'xlsx' => 'xls',
                                    'zip' => 'zip',
                                    default => 'other',
                                };
                            }

                            VideoResource::create([
                                'video_id' => $video->id,
                                'title' => $resourceData['title'],
                                'file_url' => $fileUrl ?? '',
                                'file_type' => $fileType,
                                'file_size' => $fileSize,
                            ]);
                        }
                    }
                }
            }

            return $module;
        });
    }
}
