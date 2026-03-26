<?php

namespace App\Services;

use App\Models\PageSetting;

class PageSettingService
{
    public function getAllPageSettings()
    {
        return PageSetting::orderBy('type')->get();
    }

    public function createPageSetting(array $data): PageSetting
    {
        return PageSetting::create($data);
    }

    public function updatePageSetting(int $id, array $data): PageSetting
    {
        $setting = PageSetting::findOrFail($id);
        $setting->update($data);
        return $setting;
    }

    public function deletePageSetting(int $id): bool
    {
        return PageSetting::findOrFail($id)->delete();
    }
}
