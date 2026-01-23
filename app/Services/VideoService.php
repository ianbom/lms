<?php

namespace App\Services;

use App\Models\Video;
use App\Models\VideoResource;
use Illuminate\Http\UploadedFile;

class VideoService
{

    public function createVideo(int $moduleId, array $videoData, int $sortOrder = 0): Video
    {
        return Video::create([
            'module_id' => $moduleId,
            'title' => $videoData['title'],
            'description' => $videoData['description'] ?? null,
            'youtube_url' => $videoData['youtube_url'],
            'is_preview' => filter_var($videoData['is_preview'] ?? false, FILTER_VALIDATE_BOOLEAN),
            'duration_sec' => $videoData['duration_sec'] ?? 0,
            'sort_order' => $sortOrder,
        ]);
    }

    public function createVideoResource(int $videoId, array $resourceData): VideoResource
    {
        $fileUrl = null;
        $fileSize = null;
        $fileType = $resourceData['file_type'] ?? 'other';

        if (isset($resourceData['file']) && $resourceData['file'] instanceof UploadedFile) {
            $file = $resourceData['file'];
            $path = $file->store('resources', 'public');
            $fileUrl = '/storage/' . $path;
            $fileSize = $file->getSize();

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

        return VideoResource::create([
            'video_id' => $videoId,
            'title' => $resourceData['title'],
            'file_url' => $fileUrl ?? '',
            'file_type' => $fileType,
            'file_size' => $fileSize,
        ]);
    }

    public function createVideoWithResources(int $moduleId, array $videoData, int $sortOrder = 0): Video
    {
        $video = $this->createVideo($moduleId, $videoData, $sortOrder);
        if (isset($videoData['resources']) && is_array($videoData['resources'])) {
            foreach ($videoData['resources'] as $resourceData) {
                $this->createVideoResource($video->id, $resourceData);
            }
        }

        return $video;
    }


}
