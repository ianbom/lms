<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreTestimonyRequest;
use App\Http\Requests\Admin\UpdateTestimonyRequest;
use App\Services\TestimonyService;
use Inertia\Inertia;

class TestimonyController extends Controller
{
    protected $testimonyService;

    public function __construct(TestimonyService $testimonyService)
    {
        $this->testimonyService = $testimonyService;
    }

    public function listTestimonyPage()
    {
        $testimonies = $this->testimonyService->getAllTestimonies();
        return Inertia::render('Admin/Testimony/ListTestimony', [
            'testimonies' => $testimonies,
        ]);
    }

    public function storeTestimony(StoreTestimonyRequest $request)
    {
        $data = $request->validated();
        $photo = $request->file('person_photo_url');
        unset($data['person_photo_url']);

        $this->testimonyService->createTestimony($data, $photo);
        return redirect()->back()->with('success', 'Testimoni berhasil ditambahkan.');
    }

    public function updateTestimony(UpdateTestimonyRequest $request, $testimonyId)
    {
        try {
            $data = $request->validated();
            $photo = $request->file('person_photo_url');
            unset($data['person_photo_url']);

            $this->testimonyService->updateTestimony((int) $testimonyId, $data, $photo);
            return redirect()->back()->with('success', 'Testimoni berhasil diperbarui.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }

    public function deleteTestimony($testimonyId)
    {
        try {
            $this->testimonyService->deleteTestimony((int) $testimonyId);
            return redirect()->back()->with('success', 'Testimoni berhasil dihapus.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }
}
