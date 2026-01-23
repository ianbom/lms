import Icon from '@/Components/Icon';
import { VideoLesson } from '@/types/video';

interface VideoListItemProps {
    lesson: VideoLesson;
    index?: number;
    onClick?: () => void;
}

export default function VideoListItem({
    lesson,
    index,
    onClick,
}: VideoListItemProps) {
    const getStatusStyles = () => {
        switch (lesson.status) {
            case 'completed':
                return {
                    container:
                        'hover:bg-emerald-50/50 cursor-pointer border border-transparent hover:border-emerald-100',
                    icon: 'check_circle',
                    iconClass: 'text-emerald-500',
                    titleClass: 'text-gray-500 group-hover:text-emerald-700',
                    durationClass: 'text-gray-400',
                    indexBg: 'bg-emerald-100 text-emerald-600',
                };
            case 'playing':
                return {
                    container:
                        'bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-md shadow-primary/5',
                    icon: 'play_circle',
                    iconClass: 'text-primary animate-pulse',
                    titleClass: 'font-bold text-primary',
                    durationClass: 'text-primary/70 font-medium',
                    showIndicator: true,
                    indexBg: 'bg-primary text-white',
                };
            case 'pending':
                return {
                    container:
                        'hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-100',
                    icon: 'radio_button_unchecked',
                    iconClass: 'text-gray-300 group-hover:text-primary',
                    titleClass: 'text-gray-700 group-hover:text-primary',
                    durationClass: 'text-gray-500',
                    indexBg:
                        'bg-gray-100 text-gray-500 group-hover:bg-primary-light group-hover:text-primary',
                };
            case 'locked':
                return {
                    container:
                        'opacity-50 cursor-not-allowed bg-gray-50/80 border border-gray-100',
                    icon: 'lock',
                    iconClass: 'text-gray-400',
                    titleClass: 'text-gray-500',
                    durationClass: 'text-gray-400',
                    indexBg: 'bg-gray-100 text-gray-400',
                };
        }
    };

    const styles = getStatusStyles();

    return (
        <button
            onClick={lesson.status !== 'locked' ? onClick : undefined}
            className={`group relative flex w-full items-start gap-3 rounded-xl p-3 text-left transition-all duration-200 ${styles.container}`}
        >
            {/* Playing indicator bar */}
            {styles.showIndicator && (
                <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-xl bg-gradient-to-b from-primary via-primary to-emerald-500" />
            )}

            {/* Index number */}
            {index && (
                <div
                    className={`flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold transition-colors ${styles.indexBg}`}
                >
                    {index}
                </div>
            )}

            {/* Status Icon */}
            <div className="z-10 mt-0.5 min-w-[20px]">
                <Icon
                    name={styles.icon}
                    size={20}
                    className={`transition-all ${styles.iconClass}`}
                />
            </div>

            {/* Content */}
            <div className="z-10 min-w-0 flex-1">
                <p
                    className={`truncate text-sm font-medium transition-colors ${styles.titleClass}`}
                >
                    {lesson.title}
                </p>
                <div className="mt-1 flex items-center gap-2">
                    <Icon
                        name="schedule"
                        size={12}
                        className={styles.durationClass}
                    />
                    <span className={`text-xs ${styles.durationClass}`}>
                        {lesson.status === 'playing'
                            ? `${lesson.duration} • Sedang diputar`
                            : lesson.status === 'locked'
                              ? 'Terkunci'
                              : lesson.duration}
                    </span>
                </div>
            </div>

            {/* Chevron for navigation */}
            {lesson.status !== 'locked' && lesson.status !== 'playing' && (
                <Icon
                    name="chevron_right"
                    size={18}
                    className="shrink-0 text-gray-300 opacity-0 transition-all group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100"
                />
            )}
        </button>
    );
}
