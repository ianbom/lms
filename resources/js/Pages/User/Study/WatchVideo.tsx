import Icon from '@/Components/Icon';
import CurriculumSidebar from '@/Components/User/Study/CurriculumSidebar';
import LessonInfo from '@/Components/User/Study/LessonInfo';
import MentorSection from '@/Components/User/Study/MentorSection';
import VideoNotesInput from '@/Components/User/Study/VideoNotesInput';
import VideoPlayer from '@/Components/User/Study/VideoPlayer';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { VideoNote, WatchVideoProps } from '@/types/study';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
import { useCallback, useState } from 'react';

export default function WatchVideo({
    classData,
    currentVideo,
    progressStats,
    navigation,
    certificateStatus,
}: WatchVideoProps) {
    // Get the first note (1 video = 1 note)
    const [currentNote, setCurrentNote] = useState<VideoNote | null>(
        currentVideo.notes[0] || null,
    );
    const [lastSavedTime, setLastSavedTime] = useState(0);
    const [isCompletingClass, setIsCompletingClass] = useState(false);

    // Extract YouTube video ID from URL
    const getYoutubeId = (url: string): string => {
        const pattern =
            /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url?.match(pattern);
        return match ? match[1] : '';
    };

    const videoId = getYoutubeId(currentVideo.video.youtube_url || '');

    // Save progress to backend (throttled - every 10 seconds)
    const handleProgress = useCallback(
        async (progressPercent: number, currentTime: number) => {
            // Only save every 10 seconds to avoid too many requests
            if (Math.abs(currentTime - lastSavedTime) < 10) return;

            try {
                await axios.post(
                    `/user/study/${classData.id}/video/${currentVideo.video.id}/progress`,
                    {
                        last_time_sec: Math.floor(currentTime),
                    },
                );
                setLastSavedTime(currentTime);
            } catch (error) {
                console.error('Failed to save progress:', error);
            }
        },
        [classData.id, currentVideo.video.id, lastSavedTime],
    );

    // Mark video as completed
    const handleVideoEnd = async () => {
        try {
            await axios.post(
                `/user/study/${classData.id}/video/${currentVideo.video.id}/complete`,
            );
            // Optionally refresh the page to update progress
            router.reload({
                only: ['progressStats', 'currentVideo', 'certificateStatus'],
            });
        } catch (error) {
            console.error('Failed to mark video as completed:', error);
        }
    };

    // Add a new note
    const handleAddNote = async (content: string) => {
        try {
            const response = await axios.post(
                `/user/study/${classData.id}/video/${currentVideo.video.id}/notes`,
                { content },
            );
            setCurrentNote(response.data.note);
        } catch (error) {
            console.error('Failed to add note:', error);
            throw error;
        }
    };

    // Update a note
    const handleUpdateNote = async (noteId: number, content: string) => {
        try {
            const response = await axios.put(`/user/study/notes/${noteId}`, {
                content,
            });
            setCurrentNote(response.data.note);
        } catch (error) {
            console.error('Failed to update note:', error);
            throw error;
        }
    };

    // Delete a note
    const handleDeleteNote = async (noteId: number) => {
        try {
            await axios.delete(`/user/study/notes/${noteId}`);
            setCurrentNote(null);
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };

    // Navigate to another video
    const navigateToVideo = (videoId: number) => {
        router.visit(`/user/study/${classData.id}/video/${videoId}`);
    };

    // Mark current video as completed
    const handleCompleteVideo = async () => {
        if (isCompletingClass) return;
        if (currentVideo.progress?.is_completed) return;

        setIsCompletingClass(true);
        try {
            await axios.post(
                `/user/study/${classData.id}/video/${currentVideo.video.id}/complete`,
            );
            router.reload({
                only: ['progressStats', 'currentVideo', 'certificateStatus'],
            });
        } catch (error) {
            console.error('Failed to complete video:', error);
        } finally {
            setIsCompletingClass(false);
        }
    };

    return (
        <UserDashboardLayout
            rightSidebar={
                <CurriculumSidebar
                    classData={classData}
                    currentVideoId={currentVideo.video.id}
                    progressStats={progressStats}
                    onVideoSelect={navigateToVideo}
                    certificateStatus={certificateStatus}
                />
            }
        >
            <Head title={`${currentVideo.video.title} - ${classData.title}`} />

            {/* Breadcrumbs */}
            {/* <nav className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <Link
                    href={route('user.dashboard')}
                    className="transition-colors hover:text-primary"
                >
                    Home
                </Link>
                <Icon name="chevron_right" size={16} />
                <Link
                    href={route('user.my-class')}
                    className="transition-colors hover:text-primary"
                >
                    My Classes
                </Link>
                <Icon name="chevron_right" size={16} />
                <span className="font-semibold text-primary">
                    {classData.title}
                </span>
            </nav> */}

            {/* Page Title */}
            <div className="mt-6 flex flex-col gap-4 sm:mt-8 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                        {classData.title}
                    </h1>
                    <p className="text-sm font-normal text-slate-500 sm:text-base lg:text-lg">
                        {currentVideo.video.title}
                    </p>
                </div>
                <button
                    onClick={handleCompleteVideo}
                    disabled={
                        isCompletingClass || currentVideo.progress?.is_completed
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-green-600 hover:to-emerald-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-5"
                >
                    {isCompletingClass ? (
                        <>
                            <Icon
                                name="progress_activity"
                                size={18}
                                className="animate-spin"
                            />
                            Memproses...
                        </>
                    ) : currentVideo.progress?.is_completed ? (
                        <>
                            <Icon name="check_circle" size={18} />
                            Video Selesai
                        </>
                    ) : (
                        <>
                            <Icon name="task_alt" size={18} />
                            Selesaikan Video
                        </>
                    )}
                </button>
            </div>

            {/* Video Player */}
            <VideoPlayer
                videoId={videoId}
                initialTime={currentVideo.progress?.last_time_sec || 0}
                onProgress={handleProgress}
                onEnd={handleVideoEnd}
            />

            {/* Video Notes Input */}
            <VideoNotesInput
                note={currentNote}
                onSave={handleAddNote}
                onUpdate={handleUpdateNote}
            />

            {/* Lesson Info */}
            <LessonInfo
                video={currentVideo.video}
                resources={currentVideo.resources}
                navigation={navigation}
                onNavigate={navigateToVideo}
            />

            {/* Mentor Section */}
            <MentorSection mentors={classData.mentors} />
        </UserDashboardLayout>
    );
}
