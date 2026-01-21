<?php

namespace App\Services;

use App\Models\Module;
use Illuminate\Support\Facades\DB;

class ModuleService
{
    protected VideoService $videoService;

    public function __construct(VideoService $videoService)
    {
        $this->videoService = $videoService;
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
}
