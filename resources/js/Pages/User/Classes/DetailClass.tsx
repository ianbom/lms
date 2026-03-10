import Breadcrumb from '@/Components/Breadcrumb';
import LessonList from '@/Components/Modul/LessonList';
import PricingSidebar from '@/Components/Modul/PricingSidebar';
import TagList from '@/Components/Modul/TagList';
import RichContent from '@/Components/User/RichContent';
import VideoPlayer from '@/Components/User/Study/VideoPlayer';
import UserLayout from '@/Layouts/UserLayout';
import {
    calculateTotalDuration,
    calculateTotalQuizzes,
    calculateTotalVideos,
    ClassDetail,
    formatDuration,
    formatVideoDuration,
    Video,
} from '@/types/class';
import { Lesson } from '@/types/module';
import { Head, router } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';

interface DetailClassProps {
    class: ClassDetail;
    previewVideos?: ClassDetail;
    isEnrolled?: boolean;
    firstVideoId?: number | null;
}

export default function DetailClass({
    class: classData,
    previewVideos,
    isEnrolled = false,
    firstVideoId = null,
}: DetailClassProps) {
    // Helper function to extract YouTube video ID from URL
    const extractYouTubeId = (url: string | undefined): string | null => {
        if (!url) return null;
        const match = url.match(/(?:v=|\/)([\w-]{11})(?:\?|&|$)/);
        return match ? match[1] : null;
    };

    // Breadcrumb items
    const breadcrumbItems = [
        { label: 'Beranda', href: '/' },
        { label: 'Semua Kelas', href: route('user.classes') },
        { label: classData.title },
    ];

    // Get all preview videos from the previewVideos prop
    const allPreviewVideos = useMemo(() => {
        if (!previewVideos?.modules) return [];
        return previewVideos.modules.flatMap((module) => module.videos);
    }, [previewVideos]);

    // State for the currently selected video to play
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(
        allPreviewVideos.length > 0 ? allPreviewVideos[0] : null,
    );

    // Update selected video if previewVideos changes
    useEffect(() => {
        if (allPreviewVideos.length > 0 && !selectedVideo) {
            setSelectedVideo(allPreviewVideos[0]);
        }
    }, [allPreviewVideos]);

    // Transform modules and their videos/quizzes into lessons format
    const lessons: Lesson[] = useMemo(() => {
        const allLessons: Lesson[] = [];

        classData.modules.forEach((module) => {
            // Add videos
            module.videos.forEach((video) => {
                allLessons.push({
                    id: video.id,
                    title: video.title,
                    duration: formatVideoDuration(video.duration_sec),
                    type: 'video',
                    isPreview: video.is_preview,
                    isLocked: !video.is_preview,
                });
            });

            // Add quizzes
            module.quizzes.forEach((quiz) => {
                allLessons.push({
                    id: quiz.id,
                    title: quiz.title,
                    duration: quiz.questions_count
                        ? `${quiz.questions_count} soal`
                        : '-',
                    type: 'quiz',
                    isPreview: false,
                    isLocked: true,
                });
            });
        });

        return allLessons;
    }, [classData.modules]);

    // Calculate totals
    const totalDurationSeconds = calculateTotalDuration(classData.modules);
    const totalVideos = calculateTotalVideos(classData.modules);
    const totalQuizzes = calculateTotalQuizzes(classData.modules);
    const formattedDuration = formatDuration(totalDurationSeconds);

    // Generate tags from category
    const tags = useMemo(() => {
        const tagList: string[] = [];
        if (classData.category?.name) {
            tagList.push(classData.category.name.toUpperCase());
        }
        if (classData.discount > 0) {
            tagList.push(`DISKON ${classData.discount}% `);
        }
        if (classData.price === 0 || classData.price_final === 0) {
            tagList.push('GRATIS');
        }
        return tagList;
    }, [classData]);

    // Get first mentor for the mentor card
    // const primaryMentor = classData.mentors[0];

    const handlePlayPreview = () => {
        console.log('Playing preview video');
    };

    const handlePreviewSelect = (video: Video) => {
        setSelectedVideo(video);
        // Scroll to video player
        const playerElement = document.getElementById('video-player-container');
        if (playerElement) {
            playerElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    const handleBuy = () => {
        if (classData.type === 'learning-package' && classData.url_link) {
            window.open(classData.url_link, '_blank', 'noopener,noreferrer');
            return;
        }
        if (isEnrolled && firstVideoId) {
            router.visit(
                route('user.study.watch', {
                    classId: classData.id,
                    videoId: firstVideoId,
                }),
            );
        } else {
            router.visit(
                route('user.classes.purchase', { classId: classData.id }),
            );
        }
    };

    const handleAddWishlist = () => {
        console.log('Add to wishlist:', classData.id);
    };

    const handleLessonClick = (lesson: Lesson) => {
        console.log('Lesson clicked:', lesson.id);
    };

    return (
        <UserLayout>
            <Head title={`${classData.title} - ImpactAcademy`} />

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Main Content - Two Column Layout */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
                {/* Left Column - Main Content */}
                <div className="min-w-0">
                    {/* Video Preview / Thumbnail */}
                    <div id="video-player-container" className="scroll-mt-24">
                        {selectedVideo?.youtube_url ? (
                            <VideoPlayer
                                videoId={
                                    extractYouTubeId(
                                        selectedVideo.youtube_url,
                                    ) || ''
                                }
                                onPlay={handlePlayPreview}
                            />
                        ) : (
                            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-gray-900">
                                <img
                                    src={
                                        classData.thumbnail_url ||
                                        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop'
                                    }
                                    alt={classData.title}
                                    className="h-full w-full object-cover"
                                />
                                {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <span className="text-white/80">
                                        Pilih video preview untuk diputar
                                    </span>
                                </div> */}
                            </div>
                        )}
                    </div>

                    {/* Preview List */}
                    {allPreviewVideos.length > 0 && (
                        <div className="mt-4">
                            <h3 className="mb-2 text-sm font-semibold text-gray-900">
                                Video Preview ({allPreviewVideos.length})
                            </h3>
                            <div className="flex gap-3 overflow-x-auto pb-4">
                                {allPreviewVideos.map((video) => (
                                    <button
                                        key={video.id}
                                        onClick={() =>
                                            handlePreviewSelect(video)
                                        }
                                        className={`min - w - [200px] - - 0 cursor - pointer overflow - - md - all group relative flex hidden shrink rounded border transition ${
                                            selectedVideo?.id === video.id
                                                ? 'border-primary ring-2 ring-primary ring-opacity-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        } `}
                                    >
                                        <div className="relative aspect-video w-full bg-gray-100">
                                            {video.youtube_url ? (
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.youtube_url.split('v=')[1]?.split('&')[0]}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center bg-gray-200">
                                                    <span className="text-gray-400">
                                                        No Thumb
                                                    </span>
                                                </div>
                                            )}

                                            {selectedVideo?.id === video.id && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                                    <div className="rounded-full bg-primary p-1.5 text-white">
                                                        <svg
                                                            className="h-4 w-4"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-2 text-left">
                                            <p
                                                className={`line-clamp-2 text-sm font-medium ${
                                                    selectedVideo?.id ===
                                                    video.id
                                                        ? 'text-primary'
                                                        : 'text-gray-900 group-hover:text-primary'
                                                }`}
                                            >
                                                {video.title}
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">
                                                {formatVideoDuration(
                                                    video.duration_sec,
                                                )}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    <div className="mt-6">
                        <TagList tags={tags} />
                    </div>

                    {/* Title & Description */}
                    <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                        {classData.title}
                    </h1>
                    <div className="mb-8">
                        <RichContent html={classData.description || ''} />
                    </div>

                    {/* Modules and Lessons */}
                    {classData.modules.length > 0 ? (
                        <div className="mt-8">
                            <h2 className="mb-4 text-xl font-bold text-gray-900">
                                Daftar Modul
                            </h2>
                            {classData.modules.map((module) => (
                                <div
                                    key={module.id}
                                    className="mb-6 overflow-hidden rounded-md border border-gray-200 bg-white"
                                >
                                    <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
                                        <h3 className="font-semibold text-gray-900">
                                            {module.title}
                                        </h3>
                                        {module.description && (
                                            <p className="mt-1 text-sm text-gray-500">
                                                <RichContent
                                                    html={
                                                        module.description || ''
                                                    }
                                                />
                                            </p>
                                        )}
                                        <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                                            {module.videos.length ? (
                                                <span>
                                                    {module.videos.length} video
                                                </span>
                                            ) : (
                                                <></>
                                            )}

                                            {module.quizzes.length ? (
                                                <span>
                                                    {module.quizzes.length} kuis
                                                </span>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                    <ul className="divide-y divide-gray-100">
                                        {module.videos.map((video) => (
                                            <li
                                                key={`video-${video.id}`}
                                                className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                                            video.is_preview
                                                                ? 'bg-green-100 text-green-600'
                                                                : 'bg-gray-100 text-gray-400'
                                                        }`}
                                                    >
                                                        {video.is_preview ? (
                                                            <svg
                                                                className="h-4 w-4"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                className="h-4 w-4"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <span className="font-medium text-gray-900">
                                                            {video.title}
                                                        </span>
                                                        {video.is_preview && (
                                                            <span className="ml-2 rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                                                                Preview
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    {formatVideoDuration(
                                                        video.duration_sec,
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                        {module.quizzes.map((quiz) => (
                                            <li
                                                key={`quiz-${quiz.id}`}
                                                className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                                        <svg
                                                            className="h-4 w-4"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="font-medium text-gray-900">
                                                        {quiz.title}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    {quiz.questions_count
                                                        ? `${quiz.questions_count} soal`
                                                        : '-'}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <LessonList
                            lessons={lessons}
                            totalVideos={totalVideos}
                            totalDuration={formattedDuration}
                            onLessonClick={handleLessonClick}
                        />
                    )}
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:sticky lg:top-24 lg:h-fit">
                    <PricingSidebar
                        price={classData.price_final}
                        originalPrice={
                            classData.discount > 0 ? classData.price : undefined
                        }
                        discount={
                            classData.discount > 0
                                ? classData.discount
                                : undefined
                        }
                        videoCount={totalVideos}
                        duration={formattedDuration}
                        moduleCount={classData.modules.length}
                        quizCount={totalQuizzes}
                        onBuy={handleBuy}
                        onAddWishlist={handleAddWishlist}
                        isEnrolled={isEnrolled}
                        type={classData.type}
                        location={classData.location}
                        implementationDate={classData.implementation_date}
                    />

                    {/* Mentors */}
                    <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
                        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                            Trainer KELAS
                        </p>
                        <div className="flex flex-col gap-4">
                            {classData.mentors.map((mentor) => (
                                <div
                                    key={mentor.id}
                                    className="flex items-center gap-3"
                                >
                                    <div
                                        className="size-12 flex-shrink-0 rounded-full bg-gray-200 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url('${
                                                mentor.avatar_url ||
                                                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                                            }')`,
                                        }}
                                    />
                                    <div>
                                        <p className="font-bold text-gray-900">
                                            {mentor.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {mentor.headline}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
