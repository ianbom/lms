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
    category?: string;
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
    category,
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
        <Link
            href={href}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl"
        >
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
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                    {title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
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
                    <div className="rounded-full bg-slate-100 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon name="arrow_outward" size={20} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
