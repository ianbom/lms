interface ReviewPaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPrevious: () => void;
    onNext: () => void;
}

export default function ReviewPagination({
    currentPage,
    totalItems,
    itemsPerPage,
    onPrevious,
    onNext,
}: ReviewPaginationProps) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    const canGoPrevious = currentPage > 1;
    const canGoNext = endItem < totalItems;

    return (
        <div className="flex items-center justify-between border-t border-gray-200 py-6">
            <p className="text-sm text-gray-500">
                Showing{' '}
                <span className="font-medium text-gray-900">
                    {startItem}-{endItem}
                </span>{' '}
                of{' '}
                <span className="font-medium text-gray-900">
                    {totalItems.toLocaleString()}
                </span>{' '}
                reviews
            </p>
            <div className="flex gap-2">
                <button
                    onClick={onPrevious}
                    disabled={!canGoPrevious}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-900 hover:shadow-sm disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={onNext}
                    disabled={!canGoNext}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-md shadow-primary/20 transition-colors hover:bg-primary/90 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
