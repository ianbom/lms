import Icon from '@/Components/Icon';

interface Testimony {
    id: number;
    content: string;
    rating: number;
    person_name: string;
    person_position: string;
    person_photo_url: string | null;
}

interface TestimonySectionProps {
    testimonies: Testimony[];
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                    key={star}
                    name="star"
                    size={16}
                    className={
                        star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-200'
                    }
                />
            ))}
        </div>
    );
}

export default function TestimonySection({
    testimonies,
}: TestimonySectionProps) {
    if (!testimonies || testimonies.length === 0) return null;

    return (
        <section className="bg-[#f6f8f7] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Apa Kata Mereka
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Tentang Impact Academy
                    </p>
                </div>

                {/* Testimonies Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonies.map((testimony) => (
                        <div
                            key={testimony.id}
                            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
                        >
                            <StarRating rating={testimony.rating} />

                            <div className="mt-4 flex-1">
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {testimony.content}
                                </p>
                            </div>

                            {/* Person Info */}
                            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                                {testimony.person_photo_url ? (
                                    <img
                                        src={testimony.person_photo_url}
                                        alt={testimony.person_name}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <span className="text-sm font-bold">
                                            {testimony.person_name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {testimony.person_name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {testimony.person_position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
