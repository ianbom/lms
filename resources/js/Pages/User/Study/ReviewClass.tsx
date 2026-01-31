import Icon from '@/Components/Icon';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

interface Review {
    id: number;
    user_id: number;
    class_id: number;
    rating: number;
    comment: string | null;
    created_at: string;
    updated_at: string;
    user: {
        id: number;
        name: string;
        avatar_url?: string;
    };
}

interface ClassData {
    id: number;
    title: string;
    thumbnail_url?: string;
}

interface ReviewClassProps {
    classData: ClassData;
    userReview: Review | null;
    reviews: Review[];
}

export default function ReviewClass({
    classData,
    userReview,
    reviews,
}: ReviewClassProps) {
    const [isEditing, setIsEditing] = useState(!userReview);
    const [hoveredRating, setHoveredRating] = useState(0);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        rating: userReview?.rating || 0,
        comment: userReview?.comment || '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (userReview) {
            put(`/user/reviews/${userReview.id}`, {
                onSuccess: () => setIsEditing(false),
            });
        } else {
            post(`/user/classes/${classData.id}/reviews`, {
                onSuccess: () => setIsEditing(false),
            });
        }
    };

    const handleDelete = () => {
        if (
            userReview &&
            confirm('Apakah Anda yakin ingin menghapus review ini?')
        ) {
            router.delete(`/user/reviews/${userReview.id}`);
        }
    };

    const renderStars = (rating: number, interactive = false, size = 24) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type={interactive ? 'button' : undefined}
                        disabled={!interactive}
                        onClick={() => interactive && setData('rating', star)}
                        onMouseEnter={() =>
                            interactive && setHoveredRating(star)
                        }
                        onMouseLeave={() => interactive && setHoveredRating(0)}
                        className={`transition-transform ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
                    >
                        <Icon
                            name={
                                star <=
                                (interactive ? hoveredRating || rating : rating)
                                    ? 'star'
                                    : 'star_border'
                            }
                            size={size}
                            className={
                                star <=
                                (interactive ? hoveredRating || rating : rating)
                                    ? 'text-amber-400'
                                    : 'text-slate-300'
                            }
                        />
                    </button>
                ))}
            </div>
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <UserDashboardLayout>
            <Head title={`Review - ${classData.title}`} />

            {/* Header */}
            <div className="mt-6 sm:mt-8 lg:mt-12">
                <button
                    onClick={() => router.visit(`/user/myClass`)}
                    className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary"
                >
                    <Icon name="arrow_back" size={18} />
                    Kembali ke Kelas Saya
                </button>

                <div className="flex items-center gap-4">
                    {classData.thumbnail_url && (
                        <img
                            src={classData.thumbnail_url}
                            alt={classData.title}
                            className="h-16 w-24 rounded-lg object-cover"
                        />
                    )}
                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                            Review Kelas
                        </h1>
                        <p className="text-sm text-slate-500">
                            {classData.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Review Form */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-slate-900">
                    {userReview ? 'Review Anda' : 'Berikan Review'}
                </h2>

                {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Rating */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Rating
                            </label>
                            {renderStars(data.rating, true, 32)}
                            {errors.rating && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.rating}
                                </p>
                            )}
                        </div>

                        {/* Comment */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Komentar (Opsional)
                            </label>
                            <textarea
                                value={data.comment}
                                onChange={(e) =>
                                    setData('comment', e.target.value)
                                }
                                placeholder="Bagikan pengalaman Anda mengikuti kelas ini..."
                                rows={4}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            {errors.comment && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.comment}
                                </p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                disabled={processing || data.rating === 0}
                                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing ? (
                                    <>
                                        <Icon
                                            name="progress_activity"
                                            size={18}
                                            className="animate-spin"
                                        />
                                        Menyimpan...
                                    </>
                                ) : (
                                    <>
                                        <Icon name="send" size={18} />
                                        {userReview
                                            ? 'Update Review'
                                            : 'Kirim Review'}
                                    </>
                                )}
                            </button>
                            {userReview && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditing(false);
                                        reset();
                                        setData({
                                            rating: userReview.rating,
                                            comment: userReview.comment || '',
                                        });
                                    }}
                                    className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                                >
                                    Batal
                                </button>
                            )}
                        </div>
                    </form>
                ) : (
                    userReview && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                {renderStars(userReview.rating)}
                                <span className="text-sm text-slate-400">
                                    {formatDate(userReview.updated_at)}
                                </span>
                            </div>
                            {userReview.comment && (
                                <p className="text-slate-600">
                                    {userReview.comment}
                                </p>
                            )}
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
                                >
                                    <Icon name="edit" size={16} />
                                    Edit Review
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
                                >
                                    <Icon name="delete" size={16} />
                                    Hapus
                                </button>
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* Other Reviews */}
            {reviews.length > 0 && (
                <div className="mt-8">
                    <h2 className="mb-4 text-lg font-bold text-slate-900">
                        Review Lainnya (
                        {reviews.filter((r) => r.id !== userReview?.id).length})
                    </h2>
                    <div className="space-y-4">
                        {reviews
                            .filter((review) => review.id !== userReview?.id)
                            .map((review) => (
                                <div
                                    key={review.id}
                                    className="rounded-xl border border-slate-200 bg-white p-5"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                {review.user.name
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800">
                                                    {review.user.name}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    {renderStars(
                                                        review.rating,
                                                        false,
                                                        14,
                                                    )}
                                                    <span className="text-xs text-slate-400">
                                                        {formatDate(
                                                            review.created_at,
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {review.comment && (
                                        <p className="mt-3 text-sm text-slate-600">
                                            {review.comment}
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </UserDashboardLayout>
    );
}
