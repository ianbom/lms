import Breadcrumb from '@/Components/Breadcrumb';
import Icon from '@/Components/Icon';
import HelpWidget from '@/Components/Modul/HelpWidget';
import OrderSummaryCard from '@/Components/Modul/OrderSummaryCard';
import PaymentInstructionCard from '@/Components/Modul/PaymentInstructionCard';
import UploadProofCard from '@/Components/Modul/UploadProofCard';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function PurchaseModul() {
    const breadcrumbItems = [
        { label: 'Home', href: route('user.modul.index') },
        { label: 'Modules', href: route('user.modul.index') },
        { label: 'Purchase' },
    ];

    return (
        <UserLayout>
            <Head title="Selesaikan Pembayaran - LMS Growth" />

            {/* Breadcrumbs */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Page Heading */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    Selesaikan Pembayaran
                </h1>
                <p className="mt-2 text-gray-600">
                    Lengkapi langkah di bawah ini untuk memulai akses belajar
                    Anda.
                </p>
            </div>

            <div className="grid grid-cols-2 items-start gap-8 md:grid-cols-[2fr_1fr] md:gap-10">
                {/* Left Column: Payment & Action */}
                <div className="flex flex-col gap-6">
                    {/* Payment Instructions Card */}
                    <PaymentInstructionCard />

                    {/* Upload Proof Card */}
                    <UploadProofCard />

                    {/* Action Button */}
                    <div className="pt-2">
                        <a href='/video/1/study' className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.99]">
                            <span>Kirim Bukti Pembayaran</span>
                            <Icon name="send" size={20} />
                        </a>
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
                        <OrderSummaryCard />

                        {/* Help Widget */}
                        <HelpWidget />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
