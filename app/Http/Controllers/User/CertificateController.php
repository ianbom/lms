<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\CertificateService;
use App\Services\ClassService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    protected $certificateService, $classService;

    public function __construct(CertificateService $certificateService, ClassService $classService)
    {
        $this->certificateService = $certificateService;
        $this->classService = $classService;
    }

    /**
     * Display list of user's certificates
     */
    public function listCertificatePage()
    {
        $certificates = $this->certificateService->getUserCertificates();

        return Inertia::render('User/Dashboard/MyCertificate', [
            'certificates' => $certificates,
        ]);
    }

    /**
     * Claim certificate for a class
     */
    public function claimCertificate(Request $request, $classId)
    {
        try {
            $certificate = $this->certificateService->claimCertificate($classId);

            return response()->json([
                'success' => true,
                'message' => 'Sertifikat berhasil diklaim!',
                'certificate' => $certificate,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    /**
     * Download certificate as PDF
     */
    public function downloadCertificate($certificateId)
    {
        try {
            return $this->certificateService->downloadCertificate($certificateId);
        } catch (\Exception $e) {
            return back()->with('error', 'Gagal mengunduh sertifikat: ' . $e->getMessage());
        }
    }

    /**
     * View certificate in browser (stream PDF)
     */
    public function viewCertificate($certificateId)
    {
        try {
            return $this->certificateService->streamCertificate($certificateId);
        } catch (\Exception $e) {
            return back()->with('error', 'Gagal menampilkan sertifikat: ' . $e->getMessage());
        }
    }

    /**
     * Verify certificate by code (public route)
     */
    public function verifyCertificate(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
        ]);

        $result = $this->certificateService->verifyCertificate($request->code);

        if ($request->wantsJson()) {
            return response()->json($result);
        }

        return Inertia::render('Certificate/Verify', [
            'result' => $result,
        ]);
    }
    
}
