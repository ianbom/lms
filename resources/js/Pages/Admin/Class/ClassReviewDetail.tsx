import {
    RatingDistribution,
    ReviewCard,
    ReviewPagination,
    ReviewSearchFilter,
    ReviewStatsCard,
} from '@/Components/Admin/Review';
import { ReviewData } from '@/Components/Admin/Review/ReviewCard';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import debounce from 'lodash/debounce';
import { useCallback, useMemo, useState } from 'react';

// Types for backend data
interface ClassData {
    id: number;
    title: string;
}

interface Stats {
    totalReviews: number;
    avgRating: number;
}

interface Distribution {
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    lowRating: number;
}

interface BackendReview {
    id: number;
    user: {
        id: number;
        name: string;
        avatar_url?: string;
    };
    class: {
        id: number;
        title: string;
    };
    rating: number;
    comment: string | null;
    created_at: string;
}

interface PaginatedReviews {
    data: BackendReview[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Filters {
    search: string;
    class_id: string;
    sort: string;
}

interface PageProps {
    classData: ClassData;
    stats: Stats;
    distribution: Distribution;
    reviews: PaginatedReviews;
    filters: Filters;
}

// Helper to format time ago
function formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
}

// Transform backend review to frontend format
function transformReview(review: BackendReview): ReviewData {
    return {
        id: review.id,
        user: {
            name: review.user.name,
            avatarUrl: review.user.avatar_url,
        },
        className: review.class.title,
        rating: review.rating,
        comment: review.comment || '',
        createdAt: formatTimeAgo(review.created_at),
        isFlagged: review.rating <= 2,
    };
}

export default function ClassReviewDetail({
    classData,
    stats,
    distribution,
    reviews,
    filters,
}: PageProps) {
    const [searchValue, setSearchValue] = useState(filters.search);
    const [sortBy, setSortBy] = useState(filters.sort);

    // Debounced search to avoid too many requests
    const debouncedSearch = useMemo(
        () =>
            debounce((value: string) => {
                router.get(
                    `/admin/classes/${classData.id}/review`,
                    { search: value, sort: sortBy },
                    { preserveState: true, preserveScroll: true },
                );
            }, 300),
        [classData.id, sortBy],
    );

    const handleSearchChange = useCallback(
        (value: string) => {
            setSearchValue(value);
            debouncedSearch(value);
        },
        [debouncedSearch],
    );

    const handleSortChange = useCallback(
        (value: string) => {
            setSortBy(value);
            router.get(
                `/admin/classes/${classData.id}/review`,
                { search: searchValue, sort: value },
                { preserveState: true, preserveScroll: true },
            );
        },
        [classData.id, searchValue],
    );

    const handlePageChange = useCallback(
        (page: number) => {
            router.get(
                `/admin/classes/${classData.id}/review`,
                { search: searchValue, sort: sortBy, page },
                { preserveState: true, preserveScroll: true },
            );
        },
        [classData.id, searchValue, sortBy],
    );

    const handleApprove = (id: number) => {
        console.log('Approve review:', id);
        // TODO: Implement approve logic with router.post
    };

    const handleReject = (id: number) => {
        console.log('Reject review:', id);
        // TODO: Implement reject logic with router.post
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus review ini?')) {
            router.delete(`/admin/reviews/${id}`, {
                preserveScroll: true,
            });
        }
    };

    // Transform reviews for display
    const transformedReviews = reviews.data.map(transformReview);

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Classes', href: '/admin/classes' },
                {
                    label: classData.title,
                    href: `/admin/classes/${classData.id}`,
                },
                { label: 'Reviews' },
            ]}
        >
            <Head title={`Reviews - ${classData.title}`} />

            <div className="flex flex-col gap-6">
                {/* Stats Section */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <ReviewStatsCard
                        label="Total Reviews"
                        value={stats.totalReviews.toLocaleString()}
                        icon="reviews"
                        trendType="positive"
                    />
                    <ReviewStatsCard
                        label="Average Rating"
                        value={stats.avgRating.toFixed(1)}
                        icon="trending_up"
                        trend="out of 5.0"
                        trendType="neutral"
                    />
                    <RatingDistribution data={distribution} />
                </div>

                {/* Search and Filters */}
                <ReviewSearchFilter
                    searchValue={searchValue}
                    onSearchChange={handleSearchChange}
                    classFilter=""
                    onClassFilterChange={() => {}}
                    sortBy={sortBy}
                    onSortChange={handleSortChange}
                    classOptions={[]}
                />

                {/* Reviews Grid */}
                {transformedReviews.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {transformedReviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                onApprove={handleApprove}
                                onReject={handleReject}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-16">
                        <svg
                            className="mb-4 h-16 w-16 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                        </svg>
                        <p className="text-lg font-medium text-gray-500">
                            Belum ada review
                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                            Review dari siswa akan muncul di sini
                        </p>
                    </div>
                )}

                {/* Pagination */}
                {reviews.total > 0 && (
                    <ReviewPagination
                        currentPage={reviews.current_page}
                        totalItems={reviews.total}
                        itemsPerPage={reviews.per_page}
                        onPrevious={() =>
                            handlePageChange(reviews.current_page - 1)
                        }
                        onNext={() =>
                            handlePageChange(reviews.current_page + 1)
                        }
                    />
                )}
            </div>
        </AdminLayout>
    );
}
