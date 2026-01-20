<?php

namespace App\Services;

use App\Models\Module;
use App\Models\Video;
use Illuminate\Support\Facades\DB;

class ModuleService
{
    /**
     * Create a new module and optionally videos.
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
                    Video::create([
                        'module_id' => $module->id,
                        'title' => $videoData['title'],
                        'youtube_url' => $videoData['youtube_url'],
                        'is_preview' => $videoData['is_preview'] ?? false,
                        'duration_sec' => $videoData['duration_sec'] ?? 0,
                    ]);
                }
            }

            return $module;
        });
    }
}
