import Icon from '@/Components/Icon';

interface Instructor {
    name: string;
    image: string;
}

interface CourseCardProps {
    image: string;
    category: string;
    title: string;
    rating: number;
    reviews: string;
    instructor: Instructor;
    onEnroll?: () => void;
}

export default function CourseCard({
    image,
    category,
    title,
    rating,
    reviews,
    instructor,
    onEnroll,
}: CourseCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={image}
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-800 backdrop-blur">
                    {category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                    <Icon name="star" size={14} className="text-yellow-400" />
                    <span className="text-sm font-bold text-gray-900">
                        {rating}
                    </span>
                    <span className="text-xs text-gray-500">({reviews})</span>
                </div>

                {/* Title */}
                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
                    {title}
                </h3>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                    {/* Instructor */}
                    <div className="flex items-center gap-2">
                        <img
                            alt={instructor.name}
                            className="size-8 rounded-full"
                            src={instructor.image}
                        />
                        <div>
                            <p className="text-xs font-bold text-gray-900">
                                {instructor.name}
                            </p>
                            <p className="text-[10px] text-gray-500">
                                Instructor
                            </p>
                        </div>
                    </div>

                    {/* Enroll Button */}
                    <button
                        onClick={onEnroll}
                        className="rounded-lg border border-primary px-4 py-1.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
}
