import Icon from '@/Components/Icon';

interface EmptyStateProps {
    onReset: () => void;
}

export default function EmptyState({ onReset }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-100">
                <Icon name="search_off" size={32} className="text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Tidak ada kelas ditemukan
            </h3>
            <p className="mt-1 text-sm text-slate-500">
                Coba sesuaikan filter pencarian Anda atau gunakan kata kunci
                lain.
            </p>
            <button
                onClick={onReset}
                className="mt-6 font-medium text-primary hover:underline"
            >
                Reset semua filter
            </button>
        </div>
    );
}
