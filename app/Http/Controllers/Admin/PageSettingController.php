<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\PageSettingService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageSettingController extends Controller
{
    protected PageSettingService $pageSettingService;

    public function __construct(PageSettingService $pageSettingService)
    {
        $this->pageSettingService = $pageSettingService;
    }

    public function listPageSettingPage()
    {
        $pageSettings = $this->pageSettingService->getAllPageSettings();

        return Inertia::render('Admin/PageSetting/ListPageSetting', [
            'pageSettings' => $pageSettings,
        ]);
    }

    public function store(\App\Http\Requests\Admin\CreatePageSettingRequest $request)
    {
        $data = $request->validated();

        try {
            $this->pageSettingService->createPageSetting($data);
            return redirect()->back()->with('success', 'Page setting berhasil dibuat.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }

    public function update(\App\Http\Requests\Admin\UpdatePageSettingRequest $request, int $id)
    {
        $data = $request->validated();

        try {
            $this->pageSettingService->updatePageSetting($id, $data);
            return redirect()->back()->with('success', 'Page setting berhasil diperbarui.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }

    public function destroy(int $id)
    {
        try {
            $this->pageSettingService->deletePageSetting($id);
            return redirect()->back()->with('success', 'Page setting berhasil dihapus.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }
}
