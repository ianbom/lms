import Breadcrumb from '@/Components/Breadcrumb';
import LearningPoints from '@/Components/Modul/LearningPoints';
import LessonList from '@/Components/Modul/LessonList';
import MentorCard from '@/Components/Modul/MentorCard';
import PricingSidebar from '@/Components/Modul/PricingSidebar';
import TagList from '@/Components/Modul/TagList';
import VideoPreview from '@/Components/Modul/VideoPreview';
import UserLayout from '@/Layouts/UserLayout';
import { Lesson, ModuleDetail } from '@/types/module';
import { Head } from '@inertiajs/react';

// Sample data - replace with actual data from props
const sampleModule: ModuleDetail = {
    id: 1,
    title: 'Mastering UI Design with Figma',
    description:
        'Belajar desain interface modern dari dasar hingga mahir menggunakan Figma. Cocok untuk pemula yang ingin memulai karir sebagai UI Designer.',
    longDescription:
        'Modul ini dirancang secara khusus untuk membantu Anda memahami prinsip dasar desain antarmuka (User Interface) dan implementasinya menggunakan tools industri standar, Figma. Anda akan belajar mulai dari setup project, wireframing, hingga membuat high-fidelity prototype yang siap diuji.',
    imageUrl:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    category: 'Desain',
    categoryIcon: 'palette',
    categoryColor: 'text-orange-500',
    price: 99000,
    originalPrice: 199000,
    discount: 50,
    duration: '2j 15m',
    videoCount: 12,
    level: 'beginner',
    accessType: 'lifetime',
    tags: ['UI DESIGN', 'FIGMA', 'BEGINNER'],
    learningPoints: [
        'Memahami prinsip dasar tipografi, warna, dan layout.',
        'Menguasai fitur-fitur esensial Figma (Auto Layout, Components).',
        'Membuat Design System sederhana yang scalable.',
    ],
    lessons: [
        {
            id: 1,
            title: 'Pengenalan UI Design & Figma',
            duration: '05:30',
            type: 'video',
            isPreview: true,
            isLocked: false,
        },
        {
            id: 2,
            title: 'Instalasi & Setup Environment',
            duration: '12:45',
            type: 'video',
            isPreview: false,
            isLocked: true,
        },
        {
            id: 3,
            title: 'Dasar Tipografi dalam Interface',
            duration: '18:20',
            type: 'video',
            isPreview: false,
            isLocked: true,
        },
        {
            id: 4,
            title: 'Color Theory untuk UI',
            duration: '15:10',
            type: 'video',
            isPreview: false,
            isLocked: true,
        },
        {
            id: 5,
            title: 'Layout & Grid System',
            duration: '20:00',
            type: 'video',
            isPreview: false,
            isLocked: true,
        },
    ],
    instructor: {
        name: 'Budi Santoso',
        avatarUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        title: 'Senior Product Designer',
        company: 'GoTo',
    },
};

interface DetailModulProps {
    module?: ModuleDetail;
}

export default function DetailModul({
    module = sampleModule,
}: DetailModulProps) {
    const breadcrumbItems = [
        { label: 'Beranda', href: '/' },
        { label: 'Semua Modul', href: route('user.modul.index') },
        { label: module.title },
    ];

    const handlePlayPreview = () => {
        console.log('Playing preview video');
    };

    const handleBuy = () => {
        console.log('Buy module:', module.id);
    };

    const handleAddWishlist = () => {
        console.log('Add to wishlist:', module.id);
    };

    const handleLessonClick = (lesson: Lesson) => {
        console.log('Lesson clicked:', lesson.id);
    };

    return (
        <UserLayout>
            <Head title={`${module.title} - LMS Platform`} />

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Main Content - Two Column Layout */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-[1fr_360px]">
                {/* Left Column - Main Content */}
                <div className="min-w-0">
                    {/* Video Preview */}
                    <VideoPreview
                        thumbnailUrl={module.imageUrl}
                        onPlay={handlePlayPreview}
                    />

                    {/* Tags */}
                    <div className="mt-6">
                        <TagList tags={module.tags} />
                    </div>

                    {/* Title & Description */}
                    <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                        {module.title}
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-600">
                        {module.description}
                    </p>

                    {/* Learning Points */}
                    <LearningPoints
                        title="Tentang Modul Ini"
                        description={module.longDescription}
                        points={module.learningPoints}
                    />

                    {/* Lesson List */}
                    <LessonList
                        lessons={module.lessons}
                        totalVideos={module.videoCount || 0}
                        totalDuration={module.duration}
                        onLessonClick={handleLessonClick}
                    />
                </div>

                {/* Right Column - Sidebar */}
                <div className="md:sticky md:top-24 md:h-fit">
                    <PricingSidebar
                        price={module.price}
                        originalPrice={module.originalPrice}
                        discount={module.discount}
                        videoCount={module.videoCount || 0}
                        duration={module.duration}
                        level={module.level}
                        accessType={module.accessType}
                        onBuy={handleBuy}
                        onAddWishlist={handleAddWishlist}
                    />

                    {/* Mentor Card */}
                    <MentorCard mentor={module.instructor} />
                </div>
            </div>
        </UserLayout>
    );
}
