import Breadcrumb from '@/Components/Breadcrumb';
import Icon from '@/Components/Icon';
import HelpWidget from '@/Components/Modul/HelpWidget';
import OrderSummaryCard from '@/Components/Modul/OrderSummaryCard';
import PaymentInstructionCard from '@/Components/Modul/PaymentInstructionCard';
import UploadProofCard from '@/Components/Modul/UploadProofCard';
import UserLayout from '@/Layouts/UserLayout';
import { ClassDetail } from '@/types/class';
import { Head, useForm } from '@inertiajs/react';

interface PurchaseClassProps {
    class: ClassDetail;
}

export default function PurchaseClass({
    class: classData,
}: PurchaseClassProps) {
    const breadcrumbItems = [
        { label: 'Home', href: route('user.classes') },
        { label: 'Classes', href: route('user.classes') },
        { label: 'Purchase' },
    ];

    const { setData, post, processing, errors } = useForm({
        proof_file: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('user.classes.order', classData.id), {
            forceFormData: true,
        });
    };

    const primaryMentor = classData.mentors[0];
    const discountAmount = classData.price - classData.price_final;

    return (
        <UserLayout>
            <Head title={`Selesaikan Pembayaran - ${classData.title}`} />

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

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 items-start gap-8 md:grid-cols-[2fr_1fr] md:gap-10"
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
        </UserLayout>
    );
}
