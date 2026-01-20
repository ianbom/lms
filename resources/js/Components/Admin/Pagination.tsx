interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange?: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 3) {
                pages.push('...');
            }
            for (
                let i = Math.max(2, currentPage - 1);
                i <= Math.min(totalPages - 1, currentPage + 1);
                i++
            ) {
                if (!pages.includes(i)) {
                    pages.push(i);
                }
            }
            if (currentPage < totalPages - 2) {
                pages.push('...');
            }
            if (!pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e5e7eb] px-6 py-4 sm:flex-row">
            <p className="text-sm text-[#5e6a62]">
                Showing{' '}
                <span className="font-bold text-[#101814]">{startItem}</span> to{' '}
                <span className="font-bold text-[#101814]">{endItem}</span> of{' '}
                <span className="font-bold text-[#101814]">{totalItems}</span>{' '}
                results
            </p>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange?.(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="rounded-lg border border-[#dae7e0] px-4 py-2 text-sm font-medium text-[#5e6a62] transition-colors hover:bg-[#f0f5f2] hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Previous
                </button>
                <div className="hidden items-center gap-1 sm:flex">
                    {getPageNumbers().map((page, index) =>
                        typeof page === 'number' ? (
                            <button
                                key={index}
                                onClick={() => onPageChange?.(page)}
                                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                                    page === currentPage
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-[#5e6a62] hover:bg-[#f0f5f2]'
                                }`}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={index} className="text-[#5e6a62]">
                                {page}
                            </span>
                        ),
                    )}
                </div>
                <button
                    onClick={() => onPageChange?.(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded-lg border border-[#dae7e0] px-4 py-2 text-sm font-medium text-[#5e6a62] transition-colors hover:bg-[#f0f5f2] hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
