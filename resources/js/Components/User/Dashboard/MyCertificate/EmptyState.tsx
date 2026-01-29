import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface EmptyStateProps {
    hasFilters: boolean;
}

export default function EmptyState({ hasFilters }: EmptyStateProps) {
    if (hasFilters) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Icon
                        name="search_off"
                        size={32}
                        className="text-slate-400"
                    />
                </div>
                <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Tidak ditemukan
                </h3>
                <p className="max-w-xs text-sm text-slate-500">
                    Tidak ada sertifikat yang cocok dengan pencarian Anda.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
                <Icon
                    name="workspace_premium"
                    size={40}
                    className="text-amber-500"
                />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
                Belum Ada Sertifikat
            </h3>
            <p className="mb-6 max-w-sm text-sm text-slate-500">
                Selesaikan kelas dan quiz dengan nilai yang memuaskan untuk
                mendapatkan sertifikat kompetensi Anda.
            </p>
            <Link
                href={route('user.my-class')}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
            >
                <Icon name="play_circle" size={20} />
                Lanjutkan Belajar
            </Link>
        </div>
    );
}
