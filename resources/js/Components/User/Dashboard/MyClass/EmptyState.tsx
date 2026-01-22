import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface EmptyStateProps {
    hasFilters: boolean;
}

export default function EmptyState({ hasFilters }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 py-16">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Icon name="school" size={32} />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {hasFilters ? 'Tidak ada kelas ditemukan' : 'Belum ada kelas'}
            </h3>

            <p className="mb-6 text-center text-sm text-slate-500">
                {hasFilters
                    ? 'Coba ubah filter atau kata kunci pencarian.'
                    : 'Kamu belum mengikuti kelas apapun. Mulai belajar sekarang!'}
            </p>

            {!hasFilters && (
                <Link
                    href={route('user.classes')}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                    <Icon name="explore" size={18} />
                    Jelajahi Kelas
                </Link>
            )}
        </div>
    );
}
