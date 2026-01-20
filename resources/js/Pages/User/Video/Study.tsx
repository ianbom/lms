import Icon from '@/Components/Icon';
import VideoInfo from '@/Components/Video/VideoInfo';
import VideoNavigation from '@/Components/Video/VideoNavigation';
import VideoPlayer from '@/Components/Video/VideoPlayer';
import VideoSidebar from '@/Components/Video/VideoSidebar';
import UserLayout from '@/Layouts/UserLayout';
import { ModuleProgress, VideoData } from '@/types/video';
import { Head, Link } from '@inertiajs/react';

// Sample data
const sampleVideo: VideoData = {
    id: 1,
    title: '1.2 Memahami Dasar UX Design',
    description:
        'Dalam video ini, kita akan membahas pilar utama user experience. Memahami pengguna adalah kunci dari desain yang sukses. Kita akan membedah perbedaan antara UI dan UX, serta mengapa empati memainkan peran krusial dalam membangun produk digital yang tidak hanya fungsional, tetapi juga menyenangkan untuk digunakan.',
    videoId: 'jQ1sfKIl50E', // YouTube video ID
    updatedAt: '2 hari yang lalu',
    views: 1234,
    learningPoints: [
        'Definisi User Experience (UX)',
        'Perbedaan UX dan User Interface (UI)',
        'Pentingnya User-Centered Design',
        'Studi kasus aplikasi populer',
    ],
    resources: [
        { id: 1, title: 'Slide Presentasi.pdf', type: 'pdf', url: '#' },
        { id: 2, title: 'Referensi Artikel NNGroup', type: 'link', url: '#' },
    ],
};

const sampleModule: ModuleProgress = {
    moduleTitle: 'Progress Modul 1',
    progressPercent: 30,
    lessons: [
        {
            id: 1,
            title: '1.1 Pengenalan UX Design',
            duration: '05:20',
            status: 'completed',
        },
        {
            id: 2,
            title: '1.2 Memahami Dasar UX Design',
            duration: '12:45',
            status: 'playing',
        },
        {
            id: 3,
            title: '1.3 Studi Kasus: Aplikasi Mobile',
            duration: '18:30',
            status: 'pending',
        },
        {
            id: 4,
            title: '1.4 Riset Pengguna: Wawancara',
            duration: '22:15',
            status: 'pending',
        },
        {
            id: 5,
            title: '1.5 Membuat User Persona',
            duration: '15:00',
            status: 'locked',
        },
    ],
};

export default function Study() {
    const handlePlay = () => {
        console.log('Play video');
    };

    const handlePrevious = () => {
        console.log('Previous video');
    };

    const handleNext = () => {
        console.log('Next video');
    };

    const handleLessonClick = (lessonId: number) => {
        console.log('Navigate to lesson:', lessonId);
    };

    const handleBookmark = () => {
        console.log('Bookmark video');
    };

    const handleReportIssue = () => {
        console.log('Report issue');
    };

    return (
        <UserLayout>
            <Head title={`${sampleVideo.title} - LMS Learn`} />

            {/* Breadcrumb Navigation */}
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-r from-white via-white to-primary-light/20 p-4 shadow-sm">
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 size-24 rounded-full bg-primary/5 blur-2xl" />

                <div className="relative flex flex-wrap items-center justify-between gap-4">
                    <Link
                        href={route('user.modul.index')}
                        className="group inline-flex items-center gap-3 text-gray-500 transition-colors hover:text-primary"
                    >
                        <div className="flex size-10 items-center justify-center rounded-xl bg-gray-100 shadow-sm transition-all group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/20">
                            <Icon
                                name="chevron_left"
                                size={20}
                                className="text-gray-500 transition-colors group-hover:text-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">
                                Kembali ke
                            </span>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-primary">
                                Daftar Modul
                            </span>
                        </div>
                    </Link>

                    {/* Module info badge */}
                    <div className="flex items-center gap-2 rounded-full bg-primary-light/50 px-4 py-2">
                        <Icon
                            name="school"
                            size={18}
                            className="text-primary"
                        />
                        <span className="text-sm font-semibold text-primary">
                            Modul 1: UX Design
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content - Two Column Layout */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                {/* Left Column: Video Player & Info - Takes 2/3 width on desktop */}
                <div className="flex w-full flex-col gap-6 md:w-2/3">
                    {/* Video Player */}
                    <VideoPlayer
                        videoId={sampleVideo.videoId}
                        onPlay={handlePlay}
                        onPause={() => console.log('Video paused')}
                        onEnd={() => console.log('Video ended')}
                        onProgress={(progress) =>
                            console.log('Progress:', progress)
                        }
                    />

                    {/* Navigation Buttons */}
                    <VideoNavigation
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        hasPrevious={true}
                        hasNext={true}
                    />

                    {/* Video Info */}
                    <VideoInfo
                        title={sampleVideo.title}
                        updatedAt={sampleVideo.updatedAt}
                        views={sampleVideo.views}
                        description={sampleVideo.description}
                        learningPoints={sampleVideo.learningPoints}
                        resources={sampleVideo.resources}
                        onBookmark={handleBookmark}
                    />
                </div>

                {/* Right Column: Sidebar - Takes 1/3 width on desktop */}
                <div className="w-full md:sticky md:top-24 md:h-fit md:w-1/3">
                    <VideoSidebar
                        module={sampleModule}
                        onLessonClick={handleLessonClick}
                        onReportIssue={handleReportIssue}
                    />
                </div>
            </div>
        </UserLayout>
    );
}
