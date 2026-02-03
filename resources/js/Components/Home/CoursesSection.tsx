import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import CourseCard from './CourseCard';

interface Course {
    image: string;
    title: string;
    description: string;
    duration: string;
    videoCount: number;
    price: number;
    originalPrice?: number;
    isPopular?: boolean;
    category: string;
    href?: string;
}

interface Category {
    id: string;
    label: string;
}

interface CoursesSectionProps {
    title?: string;
    description?: string;
    courses?: Course[];
    categories?: Category[];
}

const defaultCategories: Category[] = [
    { id: 'all', label: 'Semua' },
    { id: 'sertifikasi-bnsp', label: 'Sertifikasi BNSP' },
    { id: 'impact-measurement', label: 'Impact Measurement' },
    { id: 'iso-26000', label: 'ISO 26000' },
];

export default function CoursesSection({
    title = 'Kelas Populer',
    description,
    courses = [], // Empty default to avoid using stale data if not provided
    categories = defaultCategories,
}: CoursesSectionProps) {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredCourses =
        activeCategory === 'all'
            ? courses
            : courses.filter((course) => course.category === activeCategory);

    return (
        <section className="bg-background-light py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 flex flex-col items-end justify-between gap-4 md:flex-row">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            Explore Courses
                        </span>
                        <h2 className="mt-2 text-3xl font-bold text-gray-900">
                            {title}
                        </h2>
                        {description && (
                            <p className="mt-2 text-gray-600">{description}</p>
                        )}
                    </div>
                    {/* Category Filter */}
                    <div className="no-scrollbar w-full overflow-x-auto pb-2 md:w-auto">
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        setActiveCategory(category.id)
                                    }
                                    className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                                        activeCategory === category.id
                                            ? 'bg-gray-900 text-white'
                                            : 'border border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary'
                                    }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCourses.map((course, index) => (
                        <CourseCard
                            key={index}
                            image={course.image}
                            title={course.title}
                            description={course.description}
                            duration={course.duration}
                            videoCount={course.videoCount}
                            price={course.price}
                            originalPrice={course.originalPrice}
                            isPopular={course.isPopular}
                            href={course.href}
                            category={
                                categories.find((c) => c.id === course.category)
                                    ?.label || 'General'
                            }
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Link
                        href={route('user.classes')}
                        className="mx-auto flex items-center justify-center gap-2 font-semibold text-primary hover:text-primary-dark"
                    >
                        Lihat Semua Kelas{' '}
                        <Icon name="arrow_forward" size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
