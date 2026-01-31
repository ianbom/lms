<?php

namespace App\Services;

use App\Models\Classes;
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

    // ========================================
    // Admin Methods
    // ========================================

    /**
     * Get review statistics (total and average rating).
     * 
     * @param int|null $classId Filter by specific class
     */
    public function getReviewStats(?int $classId = null): array
    {
        $query = ClassReview::query();

        if ($classId) {
            $query->where('class_id', $classId);
        }

        $stats = $query->selectRaw('COUNT(*) as total, AVG(rating) as avg_rating')->first();

        return [
            'totalReviews' => (int) $stats->total,
            'avgRating' => round((float) $stats->avg_rating, 1),
        ];
    }

    /**
     * Get rating distribution as percentages.
     * 
     * @param int|null $classId Filter by specific class
     */
    public function getRatingDistribution(?int $classId = null): array
    {
        $query = ClassReview::query();

        if ($classId) {
            $query->where('class_id', $classId);
        }

        $total = $query->count();

        if ($total === 0) {
            return [
                'fiveStar' => 0,
                'fourStar' => 0,
                'threeStar' => 0,
                'lowRating' => 0,
            ];
        }

        $distribution = ClassReview::query()
            ->when($classId, fn($q) => $q->where('class_id', $classId))
            ->selectRaw("
                SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) as five_star,
                SUM(CASE WHEN rating = 4 THEN 1 ELSE 0 END) as four_star,
                SUM(CASE WHEN rating = 3 THEN 1 ELSE 0 END) as three_star,
                SUM(CASE WHEN rating <= 2 THEN 1 ELSE 0 END) as low_rating
            ")
            ->first();

        return [
            'fiveStar' => round(($distribution->five_star / $total) * 100),
            'fourStar' => round(($distribution->four_star / $total) * 100),
            'threeStar' => round(($distribution->three_star / $total) * 100),
            'lowRating' => round(($distribution->low_rating / $total) * 100),
        ];
    }

    /**
     * Get paginated reviews with sorting, filtering, and search.
     * 
     * @param array $filters ['search', 'class_id', 'sort']
     * @param int $perPage Items per page
     */
    public function getReviewsPaginated(array $filters = [], int $perPage = 9)
    {
        $query = ClassReview::with(['user', 'class']);

        // Filter by class
        if (!empty($filters['class_id'])) {
            $query->where('class_id', $filters['class_id']);
        }

        // Search by user name or comment
        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->whereHas('user', fn($userQuery) => 
                    $userQuery->where('name', 'LIKE', "%{$search}%")
                )
                ->orWhere('comment', 'LIKE', "%{$search}%");
            });
        }

        // Sorting
        $sort = $filters['sort'] ?? 'newest';
        match ($sort) {
            'oldest' => $query->oldest(),
            'highest' => $query->orderBy('rating', 'desc')->latest(),
            'lowest' => $query->orderBy('rating', 'asc')->latest(),
            default => $query->latest(),
        };

        return $query->paginate($perPage)->withQueryString();
    }

    /**
     * Get all classes for class filter dropdown.
     */
    public function getClassOptions(): array
    {
        return Classes::select('id', 'title')
            ->orderBy('title')
            ->get()
            ->map(fn($class) => [
                'value' => (string) $class->id,
                'label' => $class->title,
            ])
            ->toArray();
    }
}
