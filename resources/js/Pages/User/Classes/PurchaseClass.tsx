import Breadcrumb from '@/Components/Breadcrumb';
import Icon from '@/Components/Icon';
import HelpWidget from '@/Components/Modul/HelpWidget';
import OrderSummaryCard from '@/Components/Modul/OrderSummaryCard';
import PaymentInstructionCard from '@/Components/Modul/PaymentInstructionCard';
import UploadProofCard from '@/Components/Modul/UploadProofCard';
import UserLayout from '@/Layouts/UserLayout';
import { ClassDetail } from '@/types/class';
import { Head, router, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface PurchaseClassProps {
    class: ClassDetail;
    hasPendingOrder: boolean;
    hasOwnedClass: boolean;
}

export default function PurchaseClass({
    class: classData,
    hasPendingOrder,
    hasOwnedClass,
}: PurchaseClassProps) {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState({
        title: '',
        message: '',
        type: '',
    });

    const breadcrumbItems = [
        { label: 'Home', href: route('user.classes') },
        { label: 'Classes', href: route('user.classes') },
        { label: 'Purchase' },
    ];

    const { setData, post, processing, errors } = useForm({
        proof_file: null as File | null,
    });

    // Show modal on page load if user has pending order or already owns class
    useEffect(() => {
        if (hasOwnedClass) {
            setModalMessage({
                title: 'Kelas Sudah Dimiliki',
                message:
                    'Anda sudah memiliki kelas ini. Silakan akses kelas melalui halaman Dashboard.',
                type: 'owned',
            });
            setShowModal(true);
        } else if (hasPendingOrder) {
            setModalMessage({
                title: 'Pesanan Sedang Diproses',
                message:
                    'Anda sudah memiliki pesanan tertunda untuk kelas ini. Silakan tunggu proses verifikasi dari admin.',
                type: 'pending',
            });
            setShowModal(true);
        }
    }, [hasPendingOrder, hasOwnedClass]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Double check before submit
        if (hasOwnedClass) {
            setModalMessage({
                title: 'Kelas Sudah Dimiliki',
                message:
                    'Anda sudah memiliki kelas ini. Tidak dapat melakukan pembelian ulang.',
                type: 'owned',
            });
            setShowModal(true);
            return;
        }

        if (hasPendingOrder) {
            setModalMessage({
                title: 'Pesanan Sedang Diproses',
                message:
                    'Anda sudah memiliki pesanan tertunda untuk kelas ini. Silakan tunggu proses verifikasi.',
                type: 'pending',
            });
            setShowModal(true);
            return;
        }

        post(route('user.classes.order', classData.id), {
            forceFormData: true,
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (hasOwnedClass) {
            router.visit(route('user.dashboard'));
        } else if (hasPendingOrder) {
            router.visit(route('user.my-order'));
        }
    };

    const primaryMentor = classData.mentors[0];
    const discountAmount = classData.price - classData.price_final;

    return (
        <UserLayout>
            <Head title={`Selesaikan Pembayaran - ${classData.title}`} />

            {/* Breadcrumbs */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Heading */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                    Selesaikan Pembayaran
                </h1>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    Lengkapi langkah di bawah ini untuk memulai akses belajar
                    Anda.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10"
            >
                {/* Left Column: Payment & Action */}
                <div className="flex flex-col gap-6">
                    {/* Payment Instructions Card */}
                    <PaymentInstructionCard />

                    {/* Upload Proof Card */}
                    <UploadProofCard
                        onFileSelect={(file) => setData('proof_file', file)}
                        error={errors.proof_file}
                    />

                    {/* Action Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className={`flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.99] ${
                                processing
                                    ? 'cursor-not-allowed opacity-75'
                                    : ''
                            }`}
                        >
                            <span>
                                {processing
                                    ? 'Mengirim...'
                                    : 'Kirim Bukti Pembayaran'}
                            </span>
                            {!processing && <Icon name="send" size={20} />}
                        </button>
                        <p className="mt-4 flex items-center justify-center gap-1 text-center text-xs text-gray-400">
                            <Icon name="lock" size={14} />
                            Data Anda dienkripsi dan diproses dengan aman.
                        </p>
                    </div>
                </div>

                {/* Right Column: Order Summary (Sticky) */}
                <div className="relative">
                    <div className="space-y-6 md:sticky md:top-24">
                        {/* Summary Card */}
                        <OrderSummaryCard
                            moduleTitle={classData.title}
                            instructorName={primaryMentor?.name || 'Mentor'}
                            thumbnailUrl={classData.thumbnail_url || undefined}
                            price={classData.price}
                            discount={discountAmount}
                        />

                        {/* Help Widget */}
                        <HelpWidget />
                    </div>
                </div>
            </form>

            {/* Alert Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                        <div className="mb-4 flex items-center justify-center">
                            <div
                                className={`flex h-16 w-16 items-center justify-center rounded-full ${
                                    modalMessage.type === 'owned'
                                        ? 'bg-green-100'
                                        : 'bg-yellow-100'
                                }`}
                            >
                                <Icon
                                    name={
                                        modalMessage.type === 'owned'
                                            ? 'check_circle'
                                            : 'schedule'
                                    }
                                    size={32}
                                    className={
                                        modalMessage.type === 'owned'
                                            ? 'text-green-600'
                                            : 'text-yellow-600'
                                    }
                                />
                            </div>
                        </div>
                        <h3 className="mb-2 text-center text-xl font-bold text-gray-900">
                            {modalMessage.title}
                        </h3>
                        <p className="mb-6 text-center text-gray-600">
                            {modalMessage.message}
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() =>
                                    router.visit(route('user.classes'))
                                }
                                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Lihat Kelas Lain
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="flex-1 rounded-lg bg-primary px-4 py-2.5 font-medium text-white transition-colors hover:bg-primary-dark"
                            >
                                {modalMessage.type === 'owned'
                                    ? 'Ke Dashboard'
                                    : 'Lihat Pesanan'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </UserLayout>
    );
}
