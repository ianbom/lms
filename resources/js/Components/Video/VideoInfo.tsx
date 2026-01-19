import Icon from '@/Components/Icon';
import ResourceLink from '@/Components/Video/ResourceLink';
import { VideoResource } from '@/types/video';

interface VideoInfoProps {
    title: string;
    updatedAt: string;
    views: number;
    description: string;
    learningPoints: string[];
    resources: VideoResource[];
    onBookmark?: () => void;
}

export default function VideoInfo({
    title,
    updatedAt,
    views,
    description,
    learningPoints,
    resources,
    onBookmark,
}: VideoInfoProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-100/50">
            {/* Decorative gradient background */}
            <div className="absolute -right-20 -top-20 size-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
            <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-gradient-to-tr from-emerald-100/50 to-transparent blur-2xl" />

            <div className="relative p-6 lg:p-8">
                <div className="flex flex-col gap-5">
                    {/* Title & Bookmark */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-2xl font-bold leading-tight tracking-tight text-transparent lg:text-3xl">
                                {title}
                            </h1>
                        </div>
                        <button
                            onClick={onBookmark}
                            className="group flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-400 shadow-sm transition-all hover:border-amber-200 hover:bg-amber-50 hover:text-amber-500 hover:shadow-md"
                            title="Bookmark"
                        >
                            <Icon name="bookmark_border" size={22} className="transition-transform group-hover:scale-110" />
                        </button>
                    </div>

                    {/* Meta Info with badges */}
                    <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 pb-5">
                        <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-600">
                            <Icon name="schedule" size={16} className="text-gray-400" />
                            <span>Diperbarui {updatedAt}</span>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1.5 text-sm font-medium text-primary">
                            <Icon name="visibility" size={16} />
                            <span>{views.toLocaleString('id-ID')} tayangan</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-base leading-relaxed text-gray-600">
                            {description}
                        </p>

                        {learningPoints.length > 0 && (
                            <div className="mt-6 rounded-xl border border-primary/10 bg-gradient-to-br from-primary-light/50 to-white p-5">
                                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900">
                                    <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
                                        <Icon name="lightbulb" size={16} className="text-primary" />
                                    </div>
                                    Poin Pembelajaran
                                </h3>
                                <ul className="space-y-2.5">
                                    {learningPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                                {index + 1}
                                            </span>
                                            <span className="text-sm leading-relaxed text-gray-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Resources Section */}
                    {resources.length > 0 && (
                        <div className="mt-2 border-t border-gray-100 pt-6">
                            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                                <Icon name="folder_open" size={18} className="text-primary" />
                                Resource Materi
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {resources.map((resource) => (
                                    <ResourceLink
                                        key={resource.id}
                                        resource={resource}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
