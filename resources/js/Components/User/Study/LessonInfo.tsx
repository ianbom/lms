import Icon from '@/Components/Icon';
import {
    getResourceColor,
    getResourceIcon,
    VideoNavigation,
    VideoResource,
    VideoWithProgress,
} from '@/types/study';

interface LessonInfoProps {
    video: VideoWithProgress & { module: { id: number; title: string } };
    resources: VideoResource[];
    navigation: VideoNavigation;
    onNavigate: (videoId: number) => void;
}

export default function LessonInfo({
    video,
    resources,
    navigation,
    onNavigate,
}: LessonInfoProps) {
    return (
        <div className="flex flex-col gap-6">
            {/* About & Resources */}
            <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex flex-col gap-4 lg:col-span-2">
                    <h3 className="text-xl font-bold text-slate-900">
                        Tentang Video Ini
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                        {video.description ||
                            'Tidak ada deskripsi untuk video ini.'}
                    </p>
                </div>

                {/* Resources */}
                <LessonResources resources={resources} />
            </div>
        </div>
    );
}

interface LessonResourcesProps {
    resources: VideoResource[];
}

function LessonResources({ resources }: LessonResourcesProps) {
    if (resources.length === 0) {
        return (
            <div className="shadow-card h-fit rounded-2xl border border-slate-100 bg-white p-5">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="text-primary">
                        <Icon name="folder_open" size={24} />
                    </span>
                    Resource Video
                </h4>
                <p className="text-sm text-slate-500">
                    Tidak ada resource untuk video ini.
                </p>
            </div>
        );
    }

    return (
        <div className="shadow-card h-fit rounded-2xl border border-slate-100 bg-white p-5">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="text-primary">
                    <Icon name="folder_open" size={24} />
                </span>
                Resource Video
            </h4>
            <div className="flex flex-col gap-3">
                {resources.map((resource) => {
                    const colors = getResourceColor(resource.file_type);
                    const icon = getResourceIcon(resource.file_type);

                    return (
                        <a
                            key={resource.id}
                            className="group flex items-center justify-between rounded-xl bg-slate-50 p-3 transition-colors hover:bg-primary-light"
                            href={resource.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded ${colors.bg} ${colors.text}`}
                                >
                                    <Icon name={icon} size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary">
                                        {resource.title}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                        {resource.formatted_size ||
                                            formatFileSize(resource.file_size)}
                                    </span>
                                </div>
                            </div>
                            <span className="text-slate-400 group-hover:text-primary">
                                <Icon name="download" size={20} />
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

// Helper function to format file size
function formatFileSize(bytes: number): string {
    if (!bytes) return '0 KB';
    const units = ['B', 'KB', 'MB', 'GB'];
    let unitIndex = 0;
    let size = bytes;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(1)} ${units[unitIndex]}`;
}
