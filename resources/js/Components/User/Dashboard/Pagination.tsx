import { router } from '@inertiajs/react';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationProps {
    from: number;
    to: number;
    total: number;
    links: PaginationLink[];
    className?: string;
}

export default function Pagination({
    from,
    to,
    total,
    links,
    className = '',
}: PaginationProps) {
    const handlePageChange = (url: string | null) => {
        if (!url) return;
        router.get(url, {}, { preserveState: true, replace: true });
    };

    if (total === 0) return null;

    return (
        <div
            className={`flex items-center justify-between border-t border-slate-200 bg-white px-6 py-4 ${className}`}
        >
            <p className="text-sm text-slate-500">
                Menampilkan <span className="font-medium">{from || 0}</span>{' '}
                sampai <span className="font-medium">{to || 0}</span> dari{' '}
                <span className="font-medium">{total}</span> hasil
            </p>
            <div className="flex items-center gap-1">
                {links.map((link, index) => {
                    let label = link.label;
                    if (label.includes('pagination.previous')) {
                        label = 'Previous';
                    } else if (label.includes('pagination.next')) {
                        label = 'Next';
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handlePageChange(link.url)}
                            disabled={!link.url || link.active}
                            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${link.active
                                    ? 'bg-primary text-white'
                                    : link.url
                                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        : 'cursor-not-allowed bg-slate-50 text-slate-400'
                                }`}
                            dangerouslySetInnerHTML={{ __html: label }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
