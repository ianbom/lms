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
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'data', label: 'Data Science' },
];

const defaultCourses: Course[] = [
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACWVui-Brh-ivR68csTQg9xkj3lDhvT3fikQ-ctYLLbFn8Qgr8C6Pn9BrKSq5eAyVz2BWU-kUhUpL7TQzvD1OrDxEZzsvXKGyhP5NxIZixXB9hr1Wup1G6VtQ_WnqUzLmlBXqIMfwF2b9HmJdZeeOjERV97r1ldWeR_qhguIp1yYYLhjOnaEEVhHNlkpn66ojmMHfALeRhg65avmrHFOWK-oCb82EzXM0GYY_Nd6lCrY-XjeJ_Han0U6PE7yPRYQMW75cQTEl9gYU',
        title: 'Full-Stack Web Developer Bootcamp',
        description:
            'Pelajari HTML, CSS, JavaScript, React, dan Node.js dari nol sampai mahir.',
        duration: '12 Minggu',
        videoCount: 45,
        price: 999000,
        originalPrice: 2500000,
        isPopular: true,
        category: 'web',
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQWN5yZWceGZYC48E8Q_4gyAT9gwArHauJ3o6HiWXwVN90WHQPxsxXdn_TmzYvz6MTp0Tctz5mlpH0bcfcu0A_cEphrLFC3qYKjk-WfNb5w8Wtjp6iHBOS0yA950OrRENASkzHspL3vApUwJkRD9PYKgYjjoiENhFQspoMz3FggdboGBF2g3UQBkkMu4xJxB1pOdE8eHxsGQ-p7TI8GH7H_UO8kUG40u3xeU2r9o-b_ddTyVW86qAfhdOF4jV6UbzUhTxo5hTh2EA',
        title: 'Mastering UI/UX Design',
        description:
            'Desain antarmuka aplikasi mobile dan website yang user-friendly menggunakan Figma.',
        duration: '8 Minggu',
        videoCount: 32,
        price: 750000,
        category: 'design',
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFxUJRNZnWRQVROI-RNKRJxyeSbnQ6oZ8dWtQ-2vNkIaAWyBB04ZV5iPfdlwtJRImMv0JjzLb7Qn0wbQVEEbByJauH6r761Wy0ijky79IfD5J9cNBXiK7_7IgEOvZWhCWRKt4amovJPa1MxP0bCA61HfilGasIm6jmP_z9mD_3u7ceRNqndqqfwWqJk5JZ5u_5mWDbVHHZkQVQSl3RDwYyH5ebQI87RZnpomedEUEvn_fMjI9obkc406Dm-kwondcDPNRuVpwsU0M',
        title: 'Data Science for Beginners',
        description:
            'Analisis data menggunakan Python, Pandas, dan Visualisasi Data.',
        duration: '16 Minggu',
        videoCount: 50,
        price: 1200000,
        category: 'data',
    },
];

export default function CoursesSection({
    title = 'Kelas Populer',
    description,
    courses = defaultCourses,
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
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
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
                                            ? 'bg-slate-900 text-white'
                                            : 'border border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary'
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
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/classes"
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
