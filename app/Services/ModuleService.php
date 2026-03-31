<?php

namespace App\Services;

use App\Models\Module;
use App\Models\Video;
use App\Models\VideoResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ModuleService
{
    protected VideoService $videoService;

    public function __construct(VideoService $videoService)
    {
        $this->videoService = $videoService;
    }

    public function getAllModuleByClassId($classId){
        $modules = Module::orderBy('sort_order', 'asc')->where('class_id', $classId)->get();
        return $modules;
    }

    public function createModule(array $data, int $classId): Module
    {
        return DB::transaction(function () use ($data, $classId) {
            $maxSortOrder = Module::where('class_id', $classId)->max('sort_order') ?? 0;

            $module = Module::create([
                'class_id' => $classId,
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'url_link' => $data['url_link'] ?? null,
                'sort_order' => $maxSortOrder + 1,
            ]);

            if (isset($data['videos']) && is_array($data['videos'])) {
                foreach ($data['videos'] as $videoData) {
                    $this->videoService->createVideoWithResources($module->id, $videoData);
                }
            }

            return $module;
        });
    }

    public function updateModule(int $moduleId, array $data, bool $clearVideos = false): Module
    {
        return DB::transaction(function () use ($moduleId, $data, $clearVideos) {
            $module = Module::findOrFail($moduleId);

            $module->update([
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'url_link' => array_key_exists('url_link', $data) ? ($data['url_link'] ?: null) : $module->url_link,
            ]);

            // Handle videos
            $hasVideosData = isset($data['videos']) && is_array($data['videos']);

            if ($clearVideos || $hasVideosData) {
                $videos = [];
                $preservedUrls = [];

                if ($hasVideosData) {
                    $videos = array_filter($data['videos'], fn($v) => is_array($v) && !empty($v['title']));

                    foreach ($videos as $videoData) {
                        if (isset($videoData['resources']) && is_array($videoData['resources'])) {
                            foreach ($videoData['resources'] as $resourceData) {
                                if (!empty($resourceData['existing_url'])) {
                                    $preservedUrls[] = $resourceData['existing_url'];
                                }
                            }
                        }
                    }
                }

                // Delete existing videos and their resources
                $existingVideoIds = $module->videos()->pluck('id')->toArray();
                foreach ($existingVideoIds as $videoId) {
                    $video = Video::find($videoId);
                    if ($video) {
                        foreach ($video->resources as $resource) {
                            if ($resource->file_url && str_starts_with($resource->file_url, '/storage/') && !in_array($resource->file_url, $preservedUrls)) {
                                $path = str_replace('/storage/', '', $resource->file_url);
                                Storage::disk('public')->delete($path);
                            }
                            $resource->delete();
                        }
                        $video->delete();
                    }
                }

                // Create new videos
                foreach ($videos as $index => $videoData) {
                    $this->videoService->createVideoWithResources($module->id, $videoData, $index);
                }
            }

            return $module->fresh(['videos.resources']);
        });
    }

    public function reorderModules(int $classId, array $moduleIds): void
    {
        DB::transaction(function () use ($classId, $moduleIds) {
            foreach ($moduleIds as $index => $moduleId) {
                Module::where('id', $moduleId)
                    ->where('class_id', $classId)
                    ->update(['sort_order' => $index + 1]);
            }
        });
    }
}

