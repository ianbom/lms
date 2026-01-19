import Icon from '@/Components/Icon';
import { Module } from '@/types/module';

interface ModuleCardProps {
    module: Module;
    onDetailClick?: (module: Module) => void;
}

export default function ModuleCard({ module, onDetailClick }: ModuleCardProps) {
    const formatPrice = (price: number | null): string => {
        if (price === null) return 'GRATIS';
        return `Rp ${price.toLocaleString('id-ID')}`;
    };

    const isFree = module.price === null;

    return (
        <article className="group flex h-full transform flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                {/* Category Badge */}
                <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-md border border-gray-100 bg-white/90 px-2.5 py-1 text-xs font-bold text-gray-800 shadow-sm backdrop-blur">
                    <Icon
                        name={module.categoryIcon}
                        size={14}
                        className={module.categoryColor}
                    />
                    {module.category}
                </div>

                {/* Image */}
                <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${module.imageUrl}')` }}
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="scale-90 transform rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-100">
                        <Icon
                            name="play_arrow"
                            size={28}
                            className="text-primary"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center justify-between">
                    {/* Price Badge */}
                    <span
                        className={`rounded px-2 py-1 text-xs font-semibold ${
                            isFree
                                ? 'bg-primary/10 text-primary'
                                : 'bg-gray-100 font-bold text-gray-900'
                        }`}
                    >
                        {formatPrice(module.price)}
                    </span>

                    {/* Duration/Video Count */}
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Icon
                            name={module.videoCount ? 'videocam' : 'schedule'}
                            size={14}
                        />
                        {module.videoCount
                            ? `${module.videoCount} Video`
                            : module.duration}
                    </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-primary">
                    {module.title}
                </h3>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                    {module.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                    {/* Instructor */}
                    <div className="flex items-center gap-2">
                        <div
                            className="size-6 rounded-full bg-gray-200 bg-cover"
                            style={{
                                backgroundImage: `url('${module.instructor.avatarUrl}')`,
                            }}
                        />
                        <span className="text-xs font-medium text-gray-700">
                            {module.instructor.name}
                        </span>
                    </div>

                    {/* Detail Button */}
                    <button
                        onClick={() => onDetailClick?.(module)}
                        className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                        Detail
                        <Icon name="arrow_forward" size={16} />
                    </button>
                </div>
            </div>
        </article>
    );
}
