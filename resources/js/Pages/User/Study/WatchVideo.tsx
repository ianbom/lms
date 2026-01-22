import Icon from '@/Components/Icon';
import CurriculumSidebar from '@/Components/User/Study/CurriculumSidebar';
import LessonInfo from '@/Components/User/Study/LessonInfo';
import VideoPlayer from '@/Components/User/Study/VideoPlayer';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { WatchVideoProps } from '@/types/study';
import { Head, Link, router } from '@inertiajs/react';
import axios from 'axios';
import { useCallback, useState } from 'react';

export default function WatchVideo({
    classData,
    currentVideo,
    progressStats,
    navigation,
}: WatchVideoProps) {
    const [notes, setNotes] = useState(currentVideo.notes);
    const [lastSavedTime, setLastSavedTime] = useState(0);

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
                    `/user/study/video/${currentVideo.video.id}/progress`,
                    {
                        last_time_sec: Math.floor(currentTime),
                    },
                );
                setLastSavedTime(currentTime);
            } catch (error) {
                console.error('Failed to save progress:', error);
            }
        },
        [currentVideo.video.id, lastSavedTime],
    );

    // Mark video as completed
    const handleVideoEnd = async () => {
        try {
            await axios.post(
                `/user/study/video/${currentVideo.video.id}/complete`,
            );
            // Optionally refresh the page to update progress
            router.reload({ only: ['progressStats', 'currentVideo'] });
        } catch (error) {
            console.error('Failed to mark video as completed:', error);
        }
    };

    // Add a new note
    const handleAddNote = async (content: string) => {
        try {
            const response = await axios.post(
                `/user/study/video/${currentVideo.video.id}/notes`,
                { content },
            );
            setNotes([response.data.note, ...notes]);
        } catch (error) {
            console.error('Failed to add note:', error);
        }
    };

    // Update a note
    const handleUpdateNote = async (noteId: number, content: string) => {
        try {
            const response = await axios.put(`/user/study/notes/${noteId}`, {
                content,
            });
            setNotes(
                notes.map((note) =>
                    note.id === noteId ? response.data.note : note,
                ),
            );
        } catch (error) {
            console.error('Failed to update note:', error);
        }
    };

    // Delete a note
    const handleDeleteNote = async (noteId: number) => {
        try {
            await axios.delete(`/user/study/notes/${noteId}`);
            setNotes(notes.filter((note) => note.id !== noteId));
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };

    // Navigate to another video
    const navigateToVideo = (videoId: number) => {
        router.visit(`/user/study/${classData.id}/video/${videoId}`);
    };

    return (
        <UserDashboardLayout
            rightSidebar={
                <CurriculumSidebar
                    classData={classData}
                    currentVideoId={currentVideo.video.id}
                    progressStats={progressStats}
                    onVideoSelect={navigateToVideo}
                />
            }
        >
            <Head title={`${currentVideo.video.title} - ${classData.title}`} />

            {/* Breadcrumbs */}
            <nav className="mt-2 flex items-center gap-2 text-sm text-slate-500">
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
            </nav>

            {/* Page Title */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                    {classData.title}
                </h1>
                <p className="text-lg font-normal text-slate-500">
                    {currentVideo.video.title}
                </p>
            </div>

            {/* Video Player */}
            <VideoPlayer
                videoId={videoId}
                initialTime={currentVideo.progress?.last_time_sec || 0}
                onProgress={handleProgress}
                onEnd={handleVideoEnd}
            />

            {/* Lesson Info */}
            <LessonInfo
                video={currentVideo.video}
                resources={currentVideo.resources}
                notes={notes}
                mentors={classData.mentors}
                navigation={navigation}
                onAddNote={handleAddNote}
                onUpdateNote={handleUpdateNote}
                onDeleteNote={handleDeleteNote}
                onNavigate={navigateToVideo}
            />
        </UserDashboardLayout>
    );
}
