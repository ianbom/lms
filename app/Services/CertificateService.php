<?php

namespace App\Services;

use App\Models\CertificateIssuance;
use App\Models\CertificateSetting;
use App\Models\Classes;
use App\Models\Enrollment;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;

class CertificateService
{
    protected $studyService;

    public function __construct(StudyService $studyService)
    {
        $this->studyService = $studyService;
    }

    /**
     * Get user's certificates
     */
    public function getUserCertificates($userId = null)
    {
        $userId = $userId ?? Auth::id();

        return CertificateIssuance::with(['class', 'user'])
            ->where('user_id', $userId)
            ->orderBy('issued_at', 'desc')
            ->get();
    }

    /**
     * Get certificate by ID
     */
    public function getCertificate($certificateId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        return CertificateIssuance::with(['class', 'user'])
            ->where('id', $certificateId)
            ->where('user_id', $userId)
            ->firstOrFail();
    }

    /**
     * Get certificate by class ID
     */
    public function getCertificateByClass($classId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        return CertificateIssuance::with(['class', 'user'])
            ->where('class_id', $classId)
            ->where('user_id', $userId)
            ->first();
    }

    /**
     * Check if user can claim certificate for a class
     */
    public function canClaimCertificate($classId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        // Check if already has certificate
        $existingCertificate = $this->getCertificateByClass($classId, $userId);
        if ($existingCertificate) {
            return [
                'can_claim' => false,
                'reason' => 'already_claimed',
                'certificate' => $existingCertificate,
            ];
        }

        // Check enrollment
        $enrollment = Enrollment::where('user_id', $userId)
            ->where('class_id', $classId)
            ->first();

        if (!$enrollment) {
            return [
                'can_claim' => false,
                'reason' => 'not_enrolled',
            ];
        }

        // Check eligibility (all videos completed + all quizzes passed)
        $class = Classes::with([
            'modules' => function ($query) use ($userId) {
                $query->orderBy('sort_order')
                    ->with([
                        'videos' => function ($q) use ($userId) {
                            $q->orderBy('sort_order')
                                ->with([
                                    'progress' => function ($p) use ($userId) {
                                        $p->where('user_id', $userId);
                                    }
                                ]);
                        },
                        'quizzes' => function ($q) use ($userId) {
                            $q->withCount('questions')
                                ->with(['attempts' => function ($a) use ($userId) {
                                    $a->where('user_id', $userId)
                                        ->whereNotNull('submitted_at')
                                        ->orderBy('score', 'desc');
                                }]);
                        }
                    ]);
            }
        ])->findOrFail($classId);

        $eligibility = $this->studyService->checkCertificateEligibility($class, $userId);

        if (!$eligibility['is_eligible']) {
            return [
                'can_claim' => false,
                'reason' => 'not_eligible',
                'eligibility' => $eligibility,
            ];
        }

        return [
            'can_claim' => true,
        ];
    }

    /**
     * Claim/Issue certificate for a class
     */
    public function claimCertificate($classId, $userId = null)
    {
        $userId = $userId ?? Auth::id();

        // Check if can claim
        $canClaim = $this->canClaimCertificate($classId, $userId);

        if (!$canClaim['can_claim']) {
            if ($canClaim['reason'] === 'already_claimed') {
                return $canClaim['certificate'];
            }
            throw new \Exception('Tidak dapat mengklaim sertifikat: ' . $canClaim['reason']);
        }

        // Create certificate
        $certificate = CertificateIssuance::create([
            'class_id' => $classId,
            'user_id' => $userId,
            'issued_at' => now(),
        ]);

        return $certificate->load(['class', 'user']);
    }

    /**
     * Generate PDF certificate
     */
    public function generateCertificatePdf($certificateId, $userId = null)
    {
        $certificate = $this->getCertificate($certificateId, $userId);
        $settings = CertificateSetting::getActive();

        $data = [
            'certificate' => $certificate,
            'settings' => $settings,
            'userName' => $certificate->user->name,
            'classTitle' => $certificate->class->title,
            'issuedAt' => $certificate->issued_at->format('d F Y'),
            'certificateNumber' => $certificate->issued_code,
        ];

        $pdf = Pdf::loadView('certificate1', $data);
        $pdf->setPaper('a4', 'landscape');

        return $pdf;
    }

    /**
     * Download certificate as PDF
     */
    public function downloadCertificate($certificateId, $userId = null)
    {
        $certificate = $this->getCertificate($certificateId, $userId);
        $pdf = $this->generateCertificatePdf($certificateId, $userId);

        $filename = 'certificate_' . $certificate->issued_code . '.pdf';

        return $pdf->download($filename);
    }

    /**
     * View certificate in browser
     */
    public function streamCertificate($certificateId, $userId = null)
    {
        $certificate = $this->getCertificate($certificateId, $userId);
        $pdf = $this->generateCertificatePdf($certificateId, $userId);

        $filename = 'certificate_' . $certificate->issued_code . '.pdf';

        return $pdf->stream($filename);
    }

    /**
     * Verify certificate by code
     */
    public function verifyCertificate($code)
    {
        $certificate = CertificateIssuance::verify($code);

        if (!$certificate) {
            return [
                'valid' => false,
                'message' => 'Sertifikat tidak ditemukan',
            ];
        }

        return [
            'valid' => true,
            'certificate' => $certificate->load(['class', 'user']),
        ];
    }
}
