export interface ReviewData {
    id: number;
    user: {
        name: string;
        avatarUrl?: string; // Expecting full URL now, but we'll stick to string
    };
    className: string;
    rating: number;
    comment: string;
    createdAt: string;
    isFlagged?: boolean;
}

interface ReviewCardProps {
    review: ReviewData;
    onApprove?: (id: number) => void;
    onReject?: (id: number) => void;
    onDelete?: (id: number) => void;
}

const Icons = {
    star: ({
        className,
        size,
        filled,
    }: {
        className?: string;
        size?: number;
        filled?: boolean;
    }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={filled ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={filled ? 0 : 2}
            className={className}
            style={{ width: size, height: size }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
        </svg>
    ),
    check: ({ className, size }: { className?: string; size?: number }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={className}
            style={{ width: size, height: size }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    ),
    close: ({ className, size }: { className?: string; size?: number }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={className}
            style={{ width: size, height: size }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    ),
    delete: ({ className, size }: { className?: string; size?: number }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={className}
            style={{ width: size, height: size }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
        </svg>
    ),
    flag: ({ className, size }: { className?: string; size?: number }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            style={{ width: size, height: size }}
        >
            <path
                fillRule="evenodd"
                d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.163-.575A.75.75 0 0122 4.5v12a.75.75 0 01-.75.75 9.75 9.75 0 01-6.725-.738l-.108-.054a8.25 8.25 0 00-5.58-.652l-3.163.575a.75.75 0 01-.834-.656l-.372-6.52A.75.75 0 013 9.75V3a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
            />
        </svg>
    ),
    more: ({ className, size }: { className?: string; size?: number }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            style={{ width: size, height: size }}
        >
            <path
                fillRule="evenodd"
                d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
            />
        </svg>
    ),
};

function StarRating({
    rating,
    isFlagged,
}: {
    rating: number;
    isFlagged?: boolean;
}) {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Icons.star
                    key={star}
                    size={18}
                    filled={star <= rating}
                    className={
                        star <= rating
                            ? isFlagged
                                ? 'text-red-500'
                                : 'text-primary'
                            : 'text-gray-300'
                    }
                />
            ))}
        </div>
    );
}

export default function ReviewCard({
    review,
    onApprove,
    onReject,
    onDelete,
}: ReviewCardProps) {
    const getInitials = (name: string) => name.charAt(0).toUpperCase();

    const baseCardClass = review.isFlagged
        ? 'group bg-red-50 hover:bg-red-50/80 border border-red-200 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-red-900/5 flex flex-col h-full relative overflow-hidden shadow-sm'
        : 'group bg-white hover:border-primary/30 border border-gray-200 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full shadow-sm';

    return (
        <div className={baseCardClass}>
            {review.isFlagged && (
                <div className="absolute right-0 top-0 p-2">
                    <Icons.flag size={14} className="text-red-500" />
                </div>
            )}

            {/* Header */}
            <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    {review.user.avatarUrl ? (
                        <div
                            className={`size-10 rounded-full bg-cover bg-center bg-no-repeat ${review.isFlagged ? 'border border-red-200' : 'border border-gray-200'}`}
                            style={{
                                backgroundImage: `url("${review.user.avatarUrl}")`,
                            }}
                        />
                    ) : (
                        <div
                            className={`flex size-10 items-center justify-center rounded-full border font-semibold ${review.isFlagged ? 'border-red-200 bg-red-100 text-red-600' : 'border-gray-200 bg-gray-200 text-gray-500'}`}
                        >
                            {getInitials(review.user.name)}
                        </div>
                    )}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                            {review.user.name}
                        </h4>
                        <p
                            className={`text-xs ${review.isFlagged ? 'text-red-400' : 'text-gray-500'}`}
                        >
                            {review.className}
                        </p>
                    </div>
                </div>
                <span
                    className={`rounded px-2 py-1 text-xs ${
                        review.isFlagged
                            ? 'bg-red-100 font-medium text-red-600'
                            : 'bg-gray-100 text-gray-500'
                    }`}
                >
                    {review.isFlagged ? 'Flagged' : review.createdAt}
                </span>
            </div>

            {/* Rating */}
            <div className="mb-3">
                <StarRating
                    rating={review.rating}
                    isFlagged={review.isFlagged}
                />
            </div>

            {/* Comment */}
            <div className="mb-4 flex-1">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-900/80">
                    {review.comment}
                </p>
                <button
                    className={`mt-2 inline-block text-xs font-semibold hover:underline ${review.isFlagged ? 'text-red-500' : 'text-primary'}`}
                >
                    Read full review
                </button>
            </div>
        </div>
    );
}
