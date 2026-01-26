import Icon from '@/Components/Icon';
import UserLayout from '@/Layouts/UserLayout';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface ClassData {
    title: string;
}

interface OrderData {
    id: number;
    amount: number;
    created_at: string;
    class: ClassData;
}

interface SuccessProps extends PageProps {
    order: OrderData;
}

export default function Success({ order }: SuccessProps) {
    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short',
        });
    };

    return (
        <UserLayout>
            <Head title="Order Success Confirmation" />

            <div className="flex w-full flex-col items-center justify-start">
                <div className="group/card relative flex w-full max-w-[720px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    {/* Top Decoration Line */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-emerald-400 to-primary"></div>

                    {/* Success Header Section */}
                    <div className="flex flex-col items-center px-4 pb-6 pt-10 text-center sm:px-8 sm:pb-8 sm:pt-12">
                        <div className="relative mb-6">
                            <div className="relative z-10 flex size-20 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50">
                                <Icon
                                    name="check_circle"
                                    className="font-bold text-primary"
                                    size={40}
                                />
                            </div>
                            <div className="absolute inset-0 scale-125 animate-pulse rounded-full border border-primary/20"></div>
                        </div>
                        <h1 className="mb-3 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-[32px] md:leading-tight">
                            Pembayaran Berhasil Dikirim
                        </h1>
                        <p className="max-w-[500px] text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
                            Kami sudah menerima bukti pembayaran Anda. Admin
                            kami akan memverifikasi transaksi ini dalam waktu
                            maksimal 1x24 jam.
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="w-full px-4 pb-8 sm:px-6 sm:pb-10 md:px-10">
                        {/* Order Summary Grid */}
                        <div className="mb-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50">
                            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-3">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                    Ringkasan Order
                                </h3>
                                <div className="flex items-center gap-1 text-xs font-medium text-primary">
                                    <Icon name="verified_user" size={14} />
                                    SECURE
                                </div>
                            </div>
                            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">
                                {/* Left Column */}
                                <div className="space-y-6 p-6">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-slate-500">
                                            Order ID
                                        </p>
                                        <div className="group flex cursor-pointer items-center gap-2">
                                            <p className="font-mono text-sm font-semibold tracking-wide text-slate-900">
                                                #ORD-{order.id}
                                            </p>
                                            <Icon
                                                name="content_copy"
                                                size={14}
                                                className="text-slate-400 opacity-0 transition-opacity group-hover:opacity-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-slate-500">
                                            Course Name
                                        </p>
                                        <p className="text-base font-bold leading-snug text-slate-900">
                                            {order.class.title}
                                        </p>
                                    </div>
                                    {/* <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-slate-500">
                                            Payment Method
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-4 w-6 items-center justify-center rounded-md bg-slate-200">
                                                <Icon
                                                    name="account_balance"
                                                    size={12}
                                                    className="text-slate-500"
                                                />
                                            </div>
                                            <p className="text-sm font-medium text-slate-900">
                                                Bank Transfer (Manual)
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                                {/* Right Column */}
                                <div className="space-y-6 p-6">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-slate-500">
                                            Transaction Date
                                        </p>
                                        <p className="text-sm font-medium text-slate-900">
                                            {formatDate(order.created_at)}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-slate-500">
                                            Total Payment
                                        </p>
                                        <p className="text-lg font-bold text-primary">
                                            {formatCurrency(order.amount)}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="mb-1 text-xs font-medium text-slate-500">
                                            Current Status
                                        </p>
                                        <div className="flex">
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 shadow-sm">
                                                <Icon
                                                    name="schedule"
                                                    size={16}
                                                    className="animate-pulse"
                                                />
                                                Menunggu Verifikasi
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col gap-4 md:flex-row">
                            <Link
                                href={route('user.my-order')}
                                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg active:translate-y-0"
                            >
                                <span>Lihat Order Saya</span>
                                <Icon name="arrow_forward" size={18} />
                            </Link>
                            <Link
                                href={route('user.classes')}
                                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                            >
                                <Icon name="search" size={18} />
                                Eksplorasi Kelas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
