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
            $module = Module::create([
                'class_id' => $classId,
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
            ]);

            if (isset($data['videos']) && is_array($data['videos'])) {
                foreach ($data['videos'] as $videoData) {
                    $this->videoService->createVideoWithResources($module->id, $videoData);
                }
            }

            return $module;
        });
    }

    public function updateModule(int $moduleId, array $data): Module
    {
        return DB::transaction(function () use ($moduleId, $data) {
            $module = Module::findOrFail($moduleId);


            $module->update([
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
            ]);

            // Handle videos
            if (isset($data['videos']) && is_array($data['videos'])) {
                $existingVideoIds = $module->videos()->pluck('id')->toArray();
                foreach ($existingVideoIds as $videoId) {
                    $video = Video::find($videoId);
                    if ($video) {
                        foreach ($video->resources as $resource) {
                            if ($resource->file_url && str_starts_with($resource->file_url, '/storage/')) {
                                $path = str_replace('/storage/', '', $resource->file_url);
                                Storage::disk('public')->delete($path);
                            }
                            $resource->delete();
                        }
                        $video->delete();
                    }
                }

                foreach ($data['videos'] as $index => $videoData) {
                    $this->videoService->createVideoWithResources($module->id, $videoData, $index);
                }
            }

            return $module->fresh(['videos.resources']);
        });
    }
}
