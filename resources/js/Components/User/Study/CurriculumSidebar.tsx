import Icon from '@/Components/Icon';
import {
    CertificateStatus,
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
    certificateStatus?: CertificateStatus;
}

export default function CurriculumSidebar({
    classData,
    currentVideoId,
    progressStats,
    onVideoSelect,
    certificateStatus,
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

    // Navigate to claim certificate page
    const handleClaimCertificate = () => {
        router.visit(`/user/certificate/claim/${classData.id}`);
    };

    // Check if quiz is passed (score >= 80)
    const isQuizPassed = (quiz: any): boolean => {
        const attempt = quiz.attempts?.[0];
        return attempt && attempt.score >= 80;
    };

    return (
        <aside className="z-20 flex h-full w-full shrink-0 flex-col border-l border-slate-200 bg-white lg:w-[340px]">
            {/* Progress Header */}
            <div className="border-b border-slate-100 bg-white p-4 pt-6 sm:p-6">
                <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Kurikulum Kelas
                </h3>
                <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-500">
                        {progressStats.progress_percent}% Selesai
                    </span>
                    <span className="font-bold text-primary">
                        {progressStats.completed_videos}/
                        {progressStats.total_videos}
                    </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100 ">
                    <div
                        className="h-2.5 rounded-full bg-primary transition-all duration-300"
                        style={{ width: `${progressStats.progress_percent}%` }}
                    ></div>
                </div>
            </div>

            {/* Scrollable Lesson List */}
            <div className="custom-scrollbar flex-1 space-y-6 overflow-y-auto p-4 ">
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
                            {module.quizzes?.map((quiz) => {
                                const passed = isQuizPassed(quiz);
                                const attempted =
                                    quiz.attempts && quiz.attempts.length > 0;
                                const score = quiz.attempts?.[0]?.score;

                                return (
                                    <button
                                        key={`quiz-${quiz.id}`}
                                        onClick={() => navigateToQuiz(quiz.id)}
                                        className={`group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors ${
                                            passed
                                                ? 'hover:bg-green-50'
                                                : attempted
                                                  ? 'hover:bg-red-50'
                                                  : 'hover:bg-amber-50'
                                        }`}
                                    >
                                        <div
                                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                                passed
                                                    ? 'bg-green-500 text-white'
                                                    : attempted
                                                      ? 'border-2 border-red-400 bg-red-100 text-red-400'
                                                      : 'border-2 border-amber-400 text-amber-400'
                                            }`}
                                        >
                                            <Icon
                                                name={passed ? 'check' : 'quiz'}
                                                size={passed ? 14 : 10}
                                                className="font-bold"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h5
                                                className={`text-sm font-medium transition-colors ${
                                                    passed
                                                        ? 'text-green-600'
                                                        : attempted
                                                          ? 'text-red-600 group-hover:text-red-700'
                                                          : 'text-slate-600 group-hover:text-amber-600'
                                                }`}
                                            >
                                                {quiz.title}
                                            </h5>
                                            <div className="mt-1 flex items-center gap-2">
                                                <span className="text-xs text-slate-400">
                                                    {quiz.questions_count || 0}{' '}
                                                    Pertanyaan
                                                </span>
                                                {attempted && (
                                                    <span
                                                        className={`text-xs font-medium ${
                                                            passed
                                                                ? 'text-green-500'
                                                                : 'text-red-500'
                                                        }`}
                                                    >
                                                        • Nilai: {score}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Certificate Claim Button */}
            {certificateStatus?.is_eligible && (
                <div className="border-t border-slate-100 bg-gradient-to-r from-amber-50 to-yellow-50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                            <Icon
                                name="emoji_events"
                                size={18}
                                className="text-amber-600"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">
                                Selamat! 🎉
                            </p>
                            <p className="text-xs text-slate-500">
                                Anda telah menyelesaikan kelas ini
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleClaimCertificate}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-3 font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-600 hover:to-yellow-600 hover:shadow-amber-500/40"
                    >
                        <Icon name="workspace_premium" size={20} />
                        Klaim Sertifikat
                    </button>
                </div>
            )}

            {/* Progress Status (if not eligible) */}
            {certificateStatus && !certificateStatus.is_eligible && (
                <div className="border-t border-slate-100 bg-slate-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase text-slate-400">
                        Syarat Sertifikat
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                            <Icon
                                name={
                                    certificateStatus.all_videos_completed
                                        ? 'check_circle'
                                        : 'radio_button_unchecked'
                                }
                                size={16}
                                className={
                                    certificateStatus.all_videos_completed
                                        ? 'text-green-500'
                                        : 'text-slate-300'
                                }
                            />
                            <span
                                className={
                                    certificateStatus.all_videos_completed
                                        ? 'text-green-600'
                                        : 'text-slate-500'
                                }
                            >
                                Video: {certificateStatus.completed_videos}/
                                {certificateStatus.total_videos}
                            </span>
                        </div>
                        {certificateStatus.total_quizzes > 0 && (
                            <div className="flex items-center gap-2 text-sm">
                                <Icon
                                    name={
                                        certificateStatus.all_quizzes_passed
                                            ? 'check_circle'
                                            : 'radio_button_unchecked'
                                    }
                                    size={16}
                                    className={
                                        certificateStatus.all_quizzes_passed
                                            ? 'text-green-500'
                                            : 'text-slate-300'
                                    }
                                />
                                <span
                                    className={
                                        certificateStatus.all_quizzes_passed
                                            ? 'text-green-600'
                                            : 'text-slate-500'
                                    }
                                >
                                    Quiz lulus (min{' '}
                                    {certificateStatus.min_quiz_score}):{' '}
                                    {certificateStatus.passed_quizzes}/
                                    {certificateStatus.total_quizzes}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Next Lesson Preview (Sticky Bottom) */}
            {/* {nextVideo && (
                <div className="border-t border-slate-100 bg-slate-50 p-4">
                    <span className="mb-1 block text-xs font-bold uppercase text-slate-400">
                        Selanjutnya
                    </span>
                    <button
                        onClick={() => onVideoSelect(nextVideo.video.id)}
                        className="flex w-full items-center gap-3 text-left transition-colors hover:opacity-80"
                    >
                        <div className="flex h-10 w-16 items-center justify-center rounded-md bg-slate-200">
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
            )} */}
        </aside>
    );
}
