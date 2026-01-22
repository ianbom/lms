import Icon from '@/Components/Icon';
import {
    formatTime,
    ProgressStats,
    StudyClassData,
    VideoWithProgress,
} from '@/types/study';
import { router } from '@inertiajs/react';

interface CurriculumSidebarProps {
    classData: StudyClassData;
    currentVideoId: number;
    progressStats: ProgressStats;
    onVideoSelect: (videoId: number) => void;
}

export default function CurriculumSidebar({
    classData,
    currentVideoId,
    progressStats,
    onVideoSelect,
}: CurriculumSidebarProps) {
    // Find next video for preview section
    const findNextVideo = (): {
        video: VideoWithProgress;
        moduleTitle: string;
    } | null => {
        let foundCurrent = false;
        for (const module of classData.modules) {
            for (const video of module.videos) {
                if (foundCurrent) {
                    return { video, moduleTitle: module.title };
                }
                if (video.id === currentVideoId) {
                    foundCurrent = true;
                }
            }
        }
        return null;
    };

    const nextVideo = findNextVideo();

    // Check if video is completed
    const isVideoCompleted = (video: VideoWithProgress): boolean => {
        return video.progress?.[0]?.is_completed ?? false;
    };

    // Check if video is current
    const isCurrentVideo = (videoId: number): boolean => {
        return videoId === currentVideoId;
    };

    // Navigate to quiz page
    const navigateToQuiz = (quizId: number) => {
        router.visit(`/user/study/${classData.id}/quiz/${quizId}`);
    };

    return (
        <aside className="z-20 flex h-full w-full shrink-0 flex-col border-l border-slate-200 bg-white lg:mt-6 lg:w-[340px]">
            {/* Progress Header */}
            <div className="border-b border-slate-100 bg-white p-4 pt-14 sm:p-6 lg:pt-6">
                <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Kurikulum Kelas
                </h3>
                <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-500">
                        {progressStats.progress_percent}% Selesai
                    </span>
                    <span className="font-bold text-primary">
                        {progressStats.completed_videos}/{progressStats.total_videos}
                    </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100">
                    <div
                        className="h-2.5 rounded-full bg-primary transition-all duration-300"
                        style={{ width: `${progressStats.progress_percent}%` }}
                    ></div>
                </div>
            </div>

            {/* Scrollable Lesson List */}
            <div className="custom-scrollbar flex-1 space-y-6 overflow-y-auto p-4">
                {classData.modules.map((module, moduleIndex) => (
                    <div key={module.id}>
                        <h4 className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            Modul {moduleIndex + 1}: {module.title}
                        </h4>
                        <div className="flex flex-col gap-2">
                            {module.videos.map((video) => {
                                const completed = isVideoCompleted(video);
                                const current = isCurrentVideo(video.id);

                                if (current) {
                                    // Active/Current Lesson
                                    return (
                                        <button
                                            key={video.id}
                                            className="flex w-full scale-[1.02] transform items-start gap-3 rounded-xl bg-primary p-4 text-left text-white shadow-lg shadow-primary/30 transition-transform"
                                        >
                                            <div className="mt-0.5 flex h-6 w-6 shrink-0 animate-pulse items-center justify-center rounded-full bg-white/20 text-white">
                                                <Icon
                                                    name="play_arrow"
                                                    size={16}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="text-sm font-bold leading-snug">
                                                    {video.title}
                                                </h5>
                                                <div className="mt-2 flex items-center gap-2 text-white/80">
                                                    <Icon
                                                        name="schedule"
                                                        size={14}
                                                    />
                                                    <span className="text-xs font-medium">
                                                        {formatTime(
                                                            video.duration_sec,
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                }

                                if (completed) {
                                    // Completed Lesson
                                    return (
                                        <button
                                            key={video.id}
                                            onClick={() =>
                                                onVideoSelect(video.id)
                                            }
                                            className="group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-slate-50"
                                        >
                                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                                <Icon
                                                    name="check"
                                                    size={14}
                                                    className="font-bold"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="text-sm font-medium text-slate-500 line-through decoration-slate-400">
                                                    {video.title}
                                                </h5>
                                                <span className="mt-1 block text-xs text-slate-400">
                                                    {formatTime(
                                                        video.duration_sec,
                                                    )}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                }

                                // Pending Lesson (not completed, not current)
                                return (
                                    <button
                                        key={video.id}
                                        onClick={() => onVideoSelect(video.id)}
                                        className="group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-slate-50"
                                    >
                                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300">
                                            <Icon
                                                name="play_arrow"
                                                size={10}
                                                className="font-bold"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-sm font-medium text-slate-600 transition-colors group-hover:text-primary">
                                                {video.title}
                                            </h5>
                                            <span className="mt-1 block text-xs text-slate-400">
                                                {formatTime(video.duration_sec)}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}

                            {/* Show quizzes in module if any */}
                            {module.quizzes?.map((quiz) => (
                                <button
                                    key={`quiz-${quiz.id}`}
                                    onClick={() => navigateToQuiz(quiz.id)}
                                    className="group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-amber-50"
                                >
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 text-amber-400">
                                        <Icon
                                            name="quiz"
                                            size={10}
                                            className="font-bold"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-sm font-medium text-slate-600 transition-colors group-hover:text-amber-600">
                                            {quiz.title}
                                        </h5>
                                        <span className="mt-1 block text-xs text-slate-400">
                                            {quiz.questions_count || 0} Pertanyaan
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Next Lesson Preview (Sticky Bottom) */}
            {nextVideo && (
                <div className="border-t border-slate-100 bg-slate-50 p-4">
                    <span className="mb-1 block text-xs font-bold uppercase text-slate-400">
                        Selanjutnya
                    </span>
                    <button
                        onClick={() => onVideoSelect(nextVideo.video.id)}
                        className="flex w-full items-center gap-3 text-left transition-colors hover:opacity-80"
                    >
                        <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-slate-200">
                            <Icon
                                name="play_circle"
                                size={24}
                                className="text-slate-400"
                            />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="truncate text-sm font-bold text-slate-800">
                                {nextVideo.video.title}
                            </span>
                            <span className="text-xs text-slate-500">
                                {nextVideo.moduleTitle}
                            </span>
                        </div>
                    </button>
                </div>
            )}
        </aside>
    );
}
