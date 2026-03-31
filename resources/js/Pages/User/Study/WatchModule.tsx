import Icon from '@/Components/Icon';
import RichContent from '@/Components/User/RichContent';
import CurriculumSidebar from '@/Components/User/Study/CurriculumSidebar';
import MentorSection from '@/Components/User/Study/MentorSection';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { WatchModuleProps } from '@/types/study';
import { Head, router } from '@inertiajs/react';

export default function WatchModule({
    classData,
    currentModule,
    progressStats,
    certificateStatus,
}: WatchModuleProps) {
    // Navigate to another video
    const navigateToVideo = (videoId: number) => {
        router.visit(`/user/study/${classData.id}/video/${videoId}`);
    };

    return (
        <UserDashboardLayout
            rightSidebar={
                <CurriculumSidebar
                    classData={classData}
                    currentVideoId={0}
                    currentModuleId={currentModule.id}
                    progressStats={progressStats}
                    onVideoSelect={navigateToVideo}
                    certificateStatus={certificateStatus}
                />
            }
        >
            <Head title={`${currentModule.title} - ${classData.title}`} />

            {/* Page Title */}
            <div className="mt-6 flex flex-col gap-4 sm:mt-8 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                        {classData.title}
                    </h1>
                    <p className="text-sm font-normal text-slate-500 sm:text-base lg:text-lg">
                        {currentModule.title}
                    </p>
                </div>
            </div>

            {/* Module Content */}
            <div className="mt-6 rounded-2xl sm:mt-8 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Icon
                            name="menu_book"
                            size={22}
                            className="text-primary"
                        />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900">
                        {currentModule.title}
                    </h2>
                </div>

                {currentModule.description && (
                    <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600 sm:text-base">
                        <p className="whitespace-pre-wrap">
                            <RichContent
                                html={currentModule.description || ''}
                            />
                        </p>
                    </div>
                )}

                {currentModule.url_link && (
                    <div className="mt-6">
                        <a
                            href={currentModule.url_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                        >
                            <Icon name="link" size={18} />
                            <span className="break-all">
                                {currentModule.url_link}
                            </span>
                        </a>
                    </div>
                )}

                {!currentModule.description && !currentModule.url_link && (
                    <p className="text-sm text-slate-400">
                        Belum ada konten untuk modul ini.
                    </p>
                )}
            </div>

            {/* Mentor Section */}
            <MentorSection mentors={classData.mentors} />
        </UserDashboardLayout>
    );
}
