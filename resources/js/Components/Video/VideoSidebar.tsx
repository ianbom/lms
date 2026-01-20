import Icon from '@/Components/Icon';
import VideoListItem from '@/Components/Video/VideoListItem';
import { ModuleProgress } from '@/types/video';

interface VideoSidebarProps {
    module: ModuleProgress;
    onLessonClick?: (lessonId: number) => void;
    onReportIssue?: () => void;
}

export default function VideoSidebar({
    module,
    onLessonClick,
    onReportIssue,
}: VideoSidebarProps) {
    return (
        <div className="flex max-h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
            {/* Sidebar Header with gradient */}
            <div className="relative z-10 border-b border-gray-100 bg-gradient-to-br from-white via-white to-primary-light/30 p-5">
                {/* Decorative elements */}
                <div className="absolute right-0 top-0 size-20 rounded-full bg-primary/5 blur-2xl" />

                <div className="relative">
                    <div className="mb-1 flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                            <Icon
                                name="video_library"
                                size={18}
                                className="text-primary"
                            />
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">
                            Daftar Video
                        </h2>
                    </div>

                    <div className="mb-3 flex justify-between text-xs font-medium text-gray-500">
                        <span>{module.moduleTitle}</span>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-bold text-primary">
                            {module.progressPercent}% Selesai
                        </span>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100" />
                        <div
                            className="relative h-full rounded-full bg-gradient-to-r from-primary via-primary to-emerald-500 transition-all duration-700 ease-out"
                            style={{ width: `${module.progressPercent}%` }}
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable List */}
            <div className="custom-scrollbar flex-1 space-y-1.5 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white p-3">
                {module.lessons.map((lesson, index) => (
                    <VideoListItem
                        key={lesson.id}
                        lesson={lesson}
                        index={index + 1}
                        onClick={() => onLessonClick?.(lesson.id)}
                    />
                ))}
                {/* Spacer */}
                <div className="h-4" />
            </div>

            {/* Sidebar Footer with gradient */}
            <div className="border-t border-gray-100 bg-gradient-to-br from-gray-50 to-white p-4">
                <button
                    onClick={onReportIssue}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-600 shadow-sm transition-all hover:border-primary/20 hover:bg-primary-light hover:text-primary hover:shadow-md"
                >
                    <Icon name="flag" size={16} />
                    Laporkan Masalah Video
                </button>
            </div>
        </div>
    );
}
