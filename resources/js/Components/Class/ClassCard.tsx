import Icon from '@/Components/Icon';
import { ClassData, formatPrice } from '@/types/class';
import { Link } from '@inertiajs/react';
import RichContent from '../User/RichContent';

interface ClassCardProps {
    item: ClassData;
    className?: string;
}

export default function ClassCard({ item, className = '' }: ClassCardProps) {
    const hasDiscount = item.discount > 0;
    const isFree = item.price_final === 0;

    return (
        <Link
            href={`/user/classes/${item.id}`}
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl ${className}`}
        >
            {/* Discount Badge - Top Left */}
            {hasDiscount && (
                <div className="absolute left-4 top-4 z-10 rounded-full bg-[#00753D] px-3 py-1 text-xs font-bold text-white shadow-sm">
                    -{item.discount}%
                </div>
            )}

            {/* Free Badge - Top Left (if free and no discount) */}
            {isFree && !hasDiscount && (
                <div className="absolute left-4 top-4 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    GRATIS
                </div>
            )}

            {/* Thumbnail Area */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={item.thumbnail_url || '/images/placeholder.jpg'}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content Area */}
            <div className="flex flex-grow flex-col p-6">
                {/* Category Badge */}
                <div className="mb-3">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {item.category?.name || 'Umum'}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                    <RichContent html={item.description || ''} />
                </p>

                {/* Spacer - pushes next section to bottom */}
                <div className="flex-1" />

                {/* Meta Info - Enrollment Stats */}
                {item.students_count !== undefined &&
                item.students_count > 0 ? (
                    <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                        <Icon name="group" size={16} />
                        <span className="text-xs font-medium">
                            {item.students_count} Siswa
                        </span>
                    </div>
                ) : (
                    <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                        <Icon name="group" size={16} />
                        <span className="text-xs font-medium">Coming Soon</span>
                    </div>
                )}

                {/* Footer - Price & CTA */}
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    {/* Price */}
                    <div>
                        {isFree ? (
                            <p className="text-lg font-bold text-emerald-500">
                                Gratis
                            </p>
                        ) : (
                            <>
                                {hasDiscount && (
                                    <span className="text-xs text-slate-400 line-through">
                                        {formatPrice(item.price)}
                                    </span>
                                )}
                                <p className="text-lg font-bold text-primary">
                                    {formatPrice(item.price_final)}
                                </p>
                            </>
                        )}
                    </div>

                    {/* Arrow Icon CTA */}
                    <div className="rounded-full bg-slate-100 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon name="arrow_outward" size={20} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
