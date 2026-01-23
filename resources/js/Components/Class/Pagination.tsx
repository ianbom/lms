import Icon from '@/Components/Icon';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const handlePageChange = (page: number) => {
        onPageChange(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++)
                    pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++)
                    pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="mt-8 flex justify-center gap-2">
            <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white hover:border-primary hover:text-primary disabled:opacity-50"
            >
                <Icon name="chevron_left" size={20} />
            </button>

            {getPageNumbers().map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-3 text-sm font-medium ${
                            currentPage === page
                                ? 'bg-primary text-white shadow-sm'
                                : 'border border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary'
                        }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span
                        key={index}
                        className="flex h-9 items-center px-2 text-slate-400"
                    >
                        {page}
                    </span>
                ),
            )}

            <button
                onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white hover:border-primary hover:text-primary disabled:opacity-50"
            >
                <Icon name="chevron_right" size={20} />
            </button>
        </div>
    );
}
