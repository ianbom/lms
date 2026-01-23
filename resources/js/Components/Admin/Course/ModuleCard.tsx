import Icon from '@/Components/Icon';
import { useState } from 'react';
import LessonItem, { LessonData } from './LessonItem';

export interface ModuleData {
    id: number;
    title: string;
    status: 'published' | 'draft';
    stats: {
        videos: number;
        quizzes: number;
        duration: string;
    };
    lessons: LessonData[];
}

interface ModuleCardProps {
    module: ModuleData;
    isExpanded?: boolean;
}

export default function ModuleCard({
    module,
    isExpanded = false,
}: ModuleCardProps) {
    const [expanded, setExpanded] = useState(isExpanded);

    return (
        <div className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm transition-all hover:shadow-md">
            {/* Header */}
            <div
                className={`flex cursor-pointer items-center justify-between border-b px-6 py-4 transition-colors ${expanded ? 'border-[#e2e8f0] bg-[#f8fafc]' : 'border-transparent bg-white hover:bg-[#f8fafc]'}`}
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex items-center gap-4">
                    <div className="cursor-move text-[#94a3b8]">
                        <Icon name="drag_indicator" size={20} />
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <h3 className="text-base font-bold text-[#1e293b]">
                                {module.title}
                            </h3>
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-xs font-medium text-[#64748b]">
                            <div className="flex items-center gap-1">
                                <Icon name="videocam" size={14} />
                                <span>{module.stats.videos} Videos</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Icon name="quiz" size={14} />
                                <span>{module.stats.quizzes} Quiz</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Icon name="schedule" size={14} />
                                <span>{module.stats.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div
                        className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                    >
                        <button className="rounded-full bg-[#f1f5f9] p-1 text-[#64748b]">
                            <Icon name="expand_more" size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            {expanded && (
                <div className="bg-[#f8fafc]">
                    <div className="border-t border-[#f1f5f9]">
                        {module.lessons.map((lesson) => (
                            <LessonItem key={lesson.id} lesson={lesson} />
                        ))}
                    </div>

                    {/* Add Content Button */}
                    {/* Edit Buttons */}
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <button className="flex items-center justify-center gap-2 rounded-md border border-[#e2e8f0] bg-white py-3 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b]">
                            <Icon name="edit" size={18} />
                            Edit Module
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-md border border-[#e2e8f0] bg-white py-3 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b]">
                            <Icon name="quiz" size={18} />
                            Edit Quiz
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
