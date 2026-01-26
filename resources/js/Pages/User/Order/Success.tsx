import Icon from '@/Components/Icon';
import UserLayout from '@/Layouts/UserLayout';
import { Head, Link } from '@inertiajs/react';

interface SuccessProps {
    orderNumber?: string;
}

export default function Success({
    orderNumber = 'ORD-2023-889',
}: SuccessProps) {
    return (
        <UserLayout>
            <Head title="Order Success Confirmation" />

            <div className="flex w-full flex-col items-center justify-start">
                {/* Confirmation Card */}
                <div className="group/card relative flex w-full max-w-[720px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    {/* Top Decoration Line */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-emerald-400 to-primary"></div>

                    {/* Success Header Section */}
                    <div className="flex flex-col items-center px-4 pb-6 pt-10 text-center sm:px-8 sm:pb-8 sm:pt-12">
                        {/* Animated-feel Icon Wrapper */}
                        <div className="relative mb-6">
                            <div className="relative z-10 flex size-20 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50">
                                <Icon
                                    name="check_circle"
                                    className="font-bold text-primary"
                                    size={40}
                                />
                            </div>
                            {/* Decorative ring */}
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
                            {/* Grid Header */}
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
                                                #{orderNumber}
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
                                            UX Design Mastery: From Zero to Hero
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
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
                                    </div>
                                </div>
                                {/* Right Column */}
                                <div className="space-y-6 p-6">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-slate-500">
                                            Transaction Date
                                        </p>
                                        <p className="text-sm font-medium text-slate-900">
                                            24 Oct 2023, 10:45 WIB
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-slate-500">
                                            Total Payment
                                        </p>
                                        <p className="text-lg font-bold text-primary">
                                            Rp 2.500.000
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

                        {/* Payment Details Section */}
                        <div className="relative mb-10">
                            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                                Detail Transfer
                            </h4>
                            <div className="flex flex-col gap-6 rounded-md border border-dashed border-slate-300 bg-white p-5 md:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                                        Bank Tujuan
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                                            B
                                        </div>
                                        <span className="text-sm font-semibold text-slate-900">
                                            BCA - PT Edukasi Digital
                                        </span>
                                    </div>
                                    <span className="ml-8 font-mono text-xs text-slate-500">
                                        8839-201-92
                                    </span>
                                </div>
                                <div className="hidden h-10 w-px bg-slate-200 md:block"></div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                                        Pengirim
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            name="person"
                                            className="text-slate-400"
                                            size={20}
                                        />
                                        <span className="text-sm font-semibold text-slate-900">
                                            John Doe
                                        </span>
                                    </div>
                                    <span className="ml-7 text-xs text-slate-500">
                                        Via Mandiri Mobile
                                    </span>
                                </div>
                                <div className="pl-2 md:ml-auto">
                                    <button className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-emerald-50 hover:text-green-700">
                                        <Icon name="receipt_long" size={18} />
                                        Lihat Bukti
                                        <Icon
                                            name="arrow_outward"
                                            size={14}
                                            className="transition-transform group-hover:translate-x-0.5"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col gap-4 md:flex-row">
                            <Link
                                href={route('user.classes')}
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

                        {/* Support Link */}
                        <div className="mt-8 border-t border-slate-200 pt-6 text-center">
                            <a
                                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary"
                                href="#"
                            >
                                <Icon
                                    name="support_agent"
                                    className="text-slate-400"
                                    size={16}
                                />
                                Butuh bantuan? Hubungi Admin
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer info (from HTML) */}
                <p className="mt-8 text-center text-xs text-slate-400">
                    © 2023 CoursePlatform. All rights reserved.{' '}
                    <br className="md:hidden" />
                    Secure Payment Processing.
                </p>
            </div>
        </UserLayout>
    );
}
