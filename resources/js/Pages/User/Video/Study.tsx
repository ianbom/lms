import Icon from '@/Components/Icon';
import CurriculumSidebar from '@/Components/User/Study/CurriculumSidebar';
import LessonInfo from '@/Components/User/Study/LessonInfo';
import VideoPlayer from '@/Components/User/Study/VideoPlayer';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Head, Link } from '@inertiajs/react';

export default function Study() {
    return (
        <UserDashboardLayout rightSidebar={<CurriculumSidebar />}>
            <Head title="Mastering Illustration" />

            {/* Breadcrumbs */}
            <nav className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <Link href="#" className="transition-colors hover:text-primary">
                    Home
                </Link>
                <Icon name="chevron_right" size={16} />
                <Link href="#" className="transition-colors hover:text-primary">
                    My Classes
                </Link>
                <Icon name="chevron_right" size={16} />
                <span className="font-semibold text-primary">
                    Mastering Illustration
                </span>
            </nav>

            {/* Page Title */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                    Mastering Illustration
                </h1>
                <p className="text-lg font-normal text-slate-500">
                    From Sketch to Final Art: Understanding Brushes
                </p>
            </div>

            {/* Video Player */}
            <VideoPlayer videoId="wd6YLKV9sPU" />

            {/* Lesson Info */}
            <LessonInfo />
        </UserDashboardLayout>
    );
}
