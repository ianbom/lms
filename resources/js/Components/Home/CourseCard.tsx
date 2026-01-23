import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface CourseCardProps {
    image: string;
    title: string;
    description: string;
    duration: string;
    videoCount: number;
    price: number;
    originalPrice?: number;
    isPopular?: boolean;
    href?: string;
}

export default function CourseCard({
    image,
    title,
    description,
    duration,
    videoCount,
    price,
    originalPrice,
    isPopular = false,
    href = '#',
}: CourseCardProps) {
    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-xl">
            {isPopular && (
                <div className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900 shadow-sm">
                    Terpopuler
                </div>
            )}
            <div className="relative h-48 overflow-hidden">
                <img
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                />
            </div>
            <div className="flex flex-grow flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                        <Icon name="schedule" size={14} />
                        {duration}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{videoCount} Video</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-primary">
                    {title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-slate-500">
                    {description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                        {originalPrice && (
                            <span className="text-xs text-slate-400 line-through">
                                {formatPrice(originalPrice)}
                            </span>
                        )}
                        <p className="text-lg font-bold text-primary">
                            {formatPrice(price)}
                        </p>
                    </div>
                    <Link
                        href={href}
                        className="rounded-full bg-slate-100 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                        <Icon name="arrow_outward" size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
