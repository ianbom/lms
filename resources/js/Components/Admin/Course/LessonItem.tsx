import Icon from '@/Components/Icon';

export type LessonType = 'video' | 'quiz';

export interface LessonData {
    id: number;
    title: string;
    type: LessonType;
    durationOrQuestions: string; // "10m 15s" or "10 Questions"
    status?: 'published' | 'draft';
    is_preview?: boolean;
    resourcesCount?: number; // Number of attached resources/files
}

interface LessonItemProps {
    lesson: LessonData;
}

export default function LessonItem({ lesson }: LessonItemProps) {
    const isVideo = lesson.type === 'video';

    return (
        <div className="group flex items-center justify-between border-b border-[#f1f5f9] bg-white px-6 py-4 last:border-0 hover:bg-[#f9fafb]">
            <div className="flex items-center gap-4">
                <div className="cursor-move text-[#94a3b8] opacity-0 transition-opacity group-hover:opacity-100">
                    <Icon name="drag_indicator" size={20} />
                </div>

                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-md ${isVideo ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}
                >
                    <Icon name={isVideo ? 'play_circle' : 'quiz'} size={24} />
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-[#1e293b]">
                            {lesson.title}
                        </span>
                        {lesson.is_preview && (
                            <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                                Preview
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#64748b]">
                        <span>{isVideo ? 'Video' : 'Quiz'}</span>
                        <span className="h-1 w-1 rounded-full bg-[#cbd5e1]"></span>
                        <span>{lesson.durationOrQuestions}</span>
                        {isVideo &&
                            lesson.resourcesCount !== undefined &&
                            lesson.resourcesCount > 0 && (
                                <>
                                    <span className="h-1 w-1 rounded-full bg-[#cbd5e1]"></span>
                                    <span className="flex items-center gap-1">
                                        <Icon name="attach_file" size={12} />
                                        {lesson.resourcesCount} File
                                    </span>
                                </>
                            )}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d1fae5] text-[#10b981]">
                    <Icon name="check" size={16} />
                </div>
            </div>
        </div>
    );
}
