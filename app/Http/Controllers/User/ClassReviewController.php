<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ClassReviewRequest;
use App\Services\ClassReviewService;
use App\Services\ClassService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ClassReviewController extends Controller
{
    public function __construct(
        private ClassReviewService $classReviewService,
        private ClassService $classService
    ) {}

    /**
     * Show the review page.
     */
    public function reviewPage(int $classId): Response
    {
        $class = $this->classService->getClassDetailsById($classId);
        $userReview = $this->classReviewService->getUserReviewForClass($classId);

        return Inertia::render('User/Study/ReviewClass', [
            'classData' => $class,
            'userReview' => $userReview,
        ]);
    }

    /**
     * Store a new review.
     */
    public function store(int $classId, ClassReviewRequest $request): RedirectResponse
    {   
        try {
        if (!$this->classReviewService->hasEnrollment($classId)) {
            return back()->withErrors(['error' => 'Anda harus membeli kelas ini terlebih dahulu']);
        }

        if ($this->classReviewService->hasUserReviewed($classId)) {
            return back()->withErrors(['error' => 'Anda sudah memberikan review untuk kelas ini']);
        }

        $this->classReviewService->createReview($classId, $request->validated());

        return back()->with('success', 'Review berhasil ditambahkan');
        } catch (\Throwable $th) {
            return redirect()->back()->with(['error', 'Terjadi kesalahan']);
        }

    }

    public function update(int $reviewId, ClassReviewRequest $request): RedirectResponse
    {
        $this->classReviewService->updateReview($reviewId, $request->validated());

        return back()->with('success', 'Review berhasil diperbarui');
    }

    public function destroy(int $reviewId): RedirectResponse
    {
        $this->classReviewService->deleteReview($reviewId);

        return back()->with('success', 'Review berhasil dihapus');
    }
}

