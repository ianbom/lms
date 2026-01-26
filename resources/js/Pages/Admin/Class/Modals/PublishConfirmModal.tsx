import Icon from '@/Components/Icon';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface PublishConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    classId: number;
    classTitle: string;
}

export default function PublishConfirmModal({
    isOpen,
    onClose,
    classId,
    classTitle,
}: PublishConfirmModalProps) {
    const [processing, setProcessing] = useState(false);

    const handlePublish = () => {
        setProcessing(true);
        router.post(
            route('admin.classes.publish', classId),
            {},
            {
                preserveScroll: true,
                onSuccess: () => {
                    onClose();
                },
                onFinish: () => {
                    setProcessing(false);
                },
            },
        );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => !processing && onClose()}
            />
            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Icon name="save" size={32} className="text-green-600" />
                </div>

                {/* Title */}
                <h2 className="mb-2 text-center text-xl font-bold text-slate-900">
                    Publish Kelas?
                </h2>

                {/* Description */}
                <p className="mb-6 text-center text-sm text-slate-600">
                    Apakah Anda yakin ingin mempublikasikan kelas{' '}
                    <strong>"{classTitle}"</strong>? Setelah dipublikasikan,
                    kelas akan dapat dilihat oleh semua pengguna.
                </p>

                {/* Actions */}
                <div className="flex items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={processing}
                        className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={handlePublish}
                        disabled={processing}
                        className="flex items-center gap-2 rounded-md bg-[#059669] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-[#059669]/20 transition-all hover:bg-[#047857] disabled:opacity-50"
                    >
                        <Icon name="save" size={18} />
                        {processing ? 'Memproses...' : 'Ya, Publish'}
                    </button>
                </div>
            </div>
        </div>
    );
}
