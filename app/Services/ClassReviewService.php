<?php

namespace App\Services;

use App\Models\ClassReview;
use App\Models\Enrollment;
use Illuminate\Support\Facades\Auth;

class ClassReviewService
{
    
    public function getUserReviewForClass(int $classId): ?ClassReview
    {
        return ClassReview::where('user_id', Auth::id())
            ->where('class_id', $classId)
            ->first();
    }

    public function getReviewsForClass(int $classId)
    {
        return ClassReview::with('user')
            ->where('class_id', $classId)
            ->latest()
            ->get();
    }

    /**
     * Create a new review.
     */
    public function createReview(int $classId, array $data): ClassReview
    {
        $userId = Auth::id();

        $enrollment = Enrollment::where('user_id', $userId)
            ->where('class_id', $classId)
            ->whereIn('status', ['active', 'completed'])
            ->firstOrFail();

        return ClassReview::create([
            'user_id' => $userId,
            'class_id' => $classId,
            'enrollment_id' => $enrollment->id,
            'rating' => $data['rating'],
            'comment' => $data['comment'] ?? null,
        ]);
    }

    /**
     * Update an existing review.
     */
    public function updateReview(int $reviewId, array $data): ClassReview
    {
        $review = ClassReview::where('id', $reviewId)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $review->update([
            'rating' => $data['rating'],
            'comment' => $data['comment'] ?? null,
        ]);

        return $review;
    }

    /**
     * Delete a review.
     */
    public function deleteReview(int $reviewId): bool
    {
        $review = ClassReview::where('id', $reviewId)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        return $review->delete();
    }

    /**
     * Check if user has already reviewed a class.
     */
    public function hasUserReviewed(int $classId): bool
    {
        return ClassReview::where('user_id', Auth::id())
            ->where('class_id', $classId)
            ->exists();
    }

    /**
     * Check if user has enrollment for the class.
     */
    public function hasEnrollment(int $classId): bool
    {
        return Enrollment::where('user_id', Auth::id())
            ->where('class_id', $classId)
            ->whereIn('status', ['active', 'completed'])
            ->exists();
    }
}
