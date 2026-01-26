import HeroCard from '@/Components/User/Dashboard/HeroCard';
import MyClasses from '@/Components/User/Dashboard/MyClasses';
import StatsGrid from '@/Components/User/Dashboard/StatsGrid';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Head } from '@inertiajs/react';

interface CurrentLearning {
    id: number;
    title: string;
    slug: string;
    thumbnail_url: string | null;
    progress: number;
    currentModule: number;
    currentVideo: number;
    currentVideoId: number | null;
    mentors: Array<{
        id: number;
        name: string;
        avatar_url: string | null;
    }>;
}

interface MyClass {
    id: number;
    classId: number;
    title: string;
    slug: string;
    thumbnail_url: string | null;
    progress: number;
    status: 'active' | 'completed';
    firstVideoId: number | null;
    mentor: {
        name: string;
        avatar_url: string | null;
    } | null;
}

interface Stats {
    activeClasses: number;
    completedClasses: number;
    pendingOrders: number;
    pendingQuizzes: number;
}

interface DashboardProps {
    user: {
        name: string;
    };
    stats: Stats;
    currentLearning: CurrentLearning | null;
    myClasses: MyClass[];
}

export default function Dashboard({
    user,
    stats,
    currentLearning,
    myClasses,
}: DashboardProps) {
    return (
        <UserDashboardLayout>
            <Head title="Dashboard" />

            {/* Header Section */}
            <div className="mt-12 flex flex-col gap-1 lg:mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Selamat datang, {user.name}!
                </h2>
                <p className="text-sm text-slate-500 sm:text-base">
                    Lanjutkan progres belajarmu hari ini.
                </p>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-12 gap-4 pb-20 sm:gap-6">
                {/* Section 1: Hero Card (Span 8) */}
                <div className="col-span-12 lg:col-span-8">
                    <HeroCard currentLearning={currentLearning} />
                </div>

                {/* Section 2: Stats Grid (Span 4) */}
                <div className="col-span-12 lg:col-span-4">
                    <StatsGrid stats={stats} />
                </div>

                {/* Section 3: Order & Pembayaran (Span 8) */}
                {/* <div className="col-span-12 lg:col-span-8">
                    <OrderHistory />
                </div> */}

                {/* Section 4: Next Actions (Span 4) */}
                {/* <div className="col-span-12 lg:col-span-4">
                    <NextActions />
                </div> */}

                {/* Section 5: Kelas Saya (Full Width / Span 12) */}
                <MyClasses myClasses={myClasses} />

                {/* Section 6: Bottom Grid - Certificates (Span 8) */}
                {/* <div className="col-span-12 lg:col-span-8">
                    <Certificates />
                </div> */}

                {/* Section 6: Bottom Grid - Recommendations (Span 4) */}
                {/* <div className="col-span-12 lg:col-span-4">
                    <Recommendations />
                </div> */}
            </div>
        </UserDashboardLayout>
    );
}
