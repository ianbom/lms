import Icon from '@/Components/Icon';
import { ClassData, formatPrice } from '@/types/class';
import { Link } from '@inertiajs/react';

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
            className={`group relative flex aspect-[3/4] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,117,61,0.35)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#00753D]/50 focus:ring-offset-2 ${className}`}
        >
            {/* Thumbnail Area - 55% height */}
            <div className="relative h-[55%] shrink-0 overflow-hidden bg-slate-100">
                <img
                    src={item.thumbnail_url || '/images/placeholder.jpg'}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay for badge visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

                {/* Category Badge - Top Left */}
                <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm">
                        {item.category?.name || 'Umum'}
                    </span>
                </div>

                {/* Discount Badge - Top Right */}
                {hasDiscount && (
                    <div className="absolute right-3 top-3">
                        <span className="inline-flex items-center rounded-md bg-[#00753D] px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                            -{item.discount}%
                        </span>
                    </div>
                )}

                {/* Free Badge - Top Right (if free and no discount) */}
                {isFree && !hasDiscount && (
                    <div className="absolute right-3 top-3">
                        <span className="inline-flex items-center rounded-md bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                            GRATIS
                        </span>
                    </div>
                )}
            </div>

            {/* Content Area - 45% height */}
            <div className="flex h-[45%] flex-col p-4">
                {/* Title */}
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 group-hover:text-[#00753D]">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                    {item.description ||
                        'Pelajari materi ini bersama mentor berpengalaman.'}
                </p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Meta Row */}
                <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                    {/* Mentor */}
                    <div className="flex min-w-0 flex-1 items-center gap-1.5">
                        <div className="h-5 w-5 shrink-0 overflow-hidden rounded-full bg-slate-200">
                            <img
                                src={
                                    item.mentors[0]?.photo_url ||
                                    `https://ui-avatars.com/api/?name=${item.mentors[0]?.name || 'M'}&background=00753D&color=fff&size=40`
                                }
                                alt={item.mentors[0]?.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="truncate text-xs text-slate-600">
                            {item.mentors[0]?.name || 'Mentor'}
                        </span>
                    </div>

                    {/* Video Count */}
                    <div className="flex shrink-0 items-center gap-1 text-slate-500">
                        <Icon name="play_circle" size={14} />
                        <span className="text-xs">{item.modules_count}</span>
                    </div>
                </div>

                {/* Footer - Price & CTA */}
                <div className="mt-3 flex items-center justify-between">
                    {/* Price */}
                    <div className="flex flex-col">
                        {hasDiscount && (
                            <span className="text-[10px] text-slate-400 line-through">
                                {formatPrice(item.price)}
                            </span>
                        )}
                        <span className="text-sm font-bold text-[#00753D]">
                            {formatPrice(item.price_final)}
                        </span>
                    </div>

                    {/* CTA Button */}
                    <span className="rounded-lg border border-[#00753D] px-3 py-1.5 text-xs font-semibold text-[#00753D] transition-colors group-hover:bg-[#00753D] group-hover:text-white">
                        {isFree ? 'Mulai' : 'Detail'}
                    </span>
                </div>
            </div>
        </Link>
    );
}