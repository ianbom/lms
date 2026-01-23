import Certificates from '@/Components/User/Dashboard/Certificates';
import HeroCard from '@/Components/User/Dashboard/HeroCard';
import MyClasses from '@/Components/User/Dashboard/MyClasses';
import NextActions from '@/Components/User/Dashboard/NextActions';
import OrderHistory from '@/Components/User/Dashboard/OrderHistory';
import Recommendations from '@/Components/User/Dashboard/Recommendations';
import StatsGrid from '@/Components/User/Dashboard/StatsGrid';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <UserDashboardLayout>
            <Head title="Dashboard" />

            {/* Header Section */}
            <div className="mt-12 flex flex-col gap-1 lg:mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Selamat datang, IanBom!
                </h2>
                <p className="text-sm text-slate-500 sm:text-base">
                    Lanjutkan progres belajarmu hari ini.
                </p>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-12 gap-4 pb-20 sm:gap-6">
                {/* Section 1: Hero Card (Span 8) */}
                <div className="col-span-12 lg:col-span-8">
                    <HeroCard />
                </div>

                {/* Section 2: Stats Grid (Span 4) */}
                <div className="col-span-12 lg:col-span-4">
                    <StatsGrid />
                </div>

                {/* Section 3: Order & Pembayaran (Span 8) */}
                <div className="col-span-12 lg:col-span-8">
                    <OrderHistory />
                </div>

                {/* Section 4: Next Actions (Span 4) */}
                <div className="col-span-12 lg:col-span-4">
                    <NextActions />
                </div>

                {/* Section 5: Kelas Saya (Full Width / Span 12) */}
                <MyClasses />

                {/* Section 6: Bottom Grid - Certificates (Span 8) */}
                <div className="col-span-12 lg:col-span-8">
                    <Certificates />
                </div>

                {/* Section 6: Bottom Grid - Recommendations (Span 4) */}
                <div className="col-span-12 lg:col-span-4">
                    <Recommendations />
                </div>
            </div>
        </UserDashboardLayout>
    );
}
