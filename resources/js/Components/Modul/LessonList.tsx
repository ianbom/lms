import Icon from '@/Components/Icon';
import { Lesson } from '@/types/module';

interface LessonListProps {
    lessons: Lesson[];
    totalVideos: number;
    totalDuration: string;
    onLessonClick?: (lesson: Lesson) => void;
}

export default function LessonList({
    lessons,
    totalVideos,
    totalDuration,
    onLessonClick,
}: LessonListProps) {
    const previewLessons = lessons.filter((l) => !l.isLocked);
    const lockedCount = lessons.filter((l) => l.isLocked).length;

    const getIcon = (lesson: Lesson) => {
        if (lesson.isPreview) return 'play_circle';
        if (lesson.isLocked) return 'lock';
        return 'play_circle';
    };

    return (
        <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                    Materi Pembelajaran
                </h2>
                <span className="text-sm text-gray-500">
                    {totalVideos} Video • {totalDuration} Total
                </span>
            </div>

            <div className="space-y-2">
                {lessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        onClick={() =>
                            !lesson.isLocked && onLessonClick?.(lesson)
                        }
                        className={`flex items-center justify-between rounded-xl border p-4 transition-colors ${
                            lesson.isLocked
                                ? 'cursor-not-allowed border-gray-100 bg-gray-50'
                                : 'cursor-pointer border-gray-200 bg-white hover:border-primary/30 hover:bg-primary/5'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`flex size-10 items-center justify-center rounded-full ${
                                    lesson.isPreview
                                        ? 'bg-primary text-white'
                                        : lesson.isLocked
                                          ? 'bg-gray-200 text-gray-400'
                                          : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                                <Icon name={getIcon(lesson)} size={20} />
                            </div>
                            <div>
                                <p
                                    className={`font-medium ${
                                        lesson.isLocked
                                            ? 'text-gray-400'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {lesson.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Video • {lesson.duration}
                                </p>
                            </div>
                        </div>

                        {lesson.isPreview && (
                            <span className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-700">
                                Preview
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {lockedCount > 0 && (
                <p className="mt-4 text-center text-sm text-gray-500">
                    + {lockedCount} video lainnya terkunci
                </p>
            )}
        </section>
    );
}
