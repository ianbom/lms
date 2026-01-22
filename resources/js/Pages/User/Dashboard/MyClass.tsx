import Icon from '@/Components/Icon';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Head, Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

interface Mentor {
    id: number;
    name: string;
    profile_picture_url: string | null;
}

interface ClassData {
    id: number;
    title: string;
    slug: string;
    thumbnail_url: string | null;
    mentors: Mentor[];
}

interface Enrollment {
    id: number;
    status: 'pending' | 'active' | 'completed';
    activated_at: string | null;
    completed_at: string | null;
    created_at: string;
    progress: number;
    class: ClassData;
}

interface Props {
    enrollments: Enrollment[];
}

type SortOption = 'newest' | 'oldest' | 'progress-high' | 'progress-low' | 'alphabetical';
type FilterOption = 'all' | 'active' | 'completed';

interface CourseCardProps {
    title: string;
    mentor: string;
    mentorImage: string;
    thumbnail: string;
    progress: number;
    completed?: boolean;
    status: 'Active' | 'Completed';
    statusColor: string;
    href: string;
}

function CourseCard({
    title,
    mentor,
    mentorImage,
    thumbnail,
    progress,
    completed = false,
    status,
    statusColor,
    href,
}: CourseCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-card transition-all hover:shadow-card-hover"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={thumbnail || '/images/placeholder-class.jpg'}
                />
                <div
                    className={`absolute right-3 top-3 rounded-full px-2 py-1 text-xs font-semibold backdrop-blur-sm ${statusColor}`}
                >
                    {status}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h4 className="mb-1 text-base font-bold text-slate-900 line-clamp-2">
                    {title}
                </h4>
                <div className="mb-4 flex items-center gap-2">
                    <div className="h-5 w-5 overflow-hidden rounded-full bg-gray-200">
                        <img
                            alt={mentor}
                            className="h-full w-full object-cover"
                            src={mentorImage || '/images/placeholder-avatar.jpg'}
                        />
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                        {mentor}
                    </span>
                </div>
                <div className="mt-auto">
                    <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                        <span>Progress</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-100">
                        <div
                            className={`h-1.5 rounded-full ${completed ? 'bg-green-600' : 'bg-primary'}`}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function MyClass({ enrollments = [] }: Props) {
    const [sortBy, setSortBy] = useState<SortOption>('newest');
    const [filterBy, setFilterBy] = useState<FilterOption>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const sortOptions: { value: SortOption; label: string }[] = [
        { value: 'newest', label: 'Terbaru' },
        { value: 'oldest', label: 'Terlama' },
        { value: 'progress-high', label: 'Progress Tertinggi' },
        { value: 'progress-low', label: 'Progress Terendah' },
        { value: 'alphabetical', label: 'A-Z' },
    ];

    const filterOptions: { value: FilterOption; label: string }[] = [
        { value: 'all', label: 'Semua Kelas' },
        { value: 'active', label: 'Sedang Berjalan' },
        { value: 'completed', label: 'Selesai' },
    ];

    const filteredAndSortedEnrollments = useMemo(() => {
        let result = [...enrollments];

        // Filter by search query
        if (searchQuery.trim()) {
            result = result.filter((enrollment) =>
                enrollment.class.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            );
        }

        // Filter by status
        if (filterBy !== 'all') {
            result = result.filter(
                (enrollment) => enrollment.status === filterBy
            );
        }

        // Sort
        switch (sortBy) {
            case 'newest':
                result.sort(
                    (a, b) =>
                        new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime()
                );
                break;
            case 'oldest':
                result.sort(
                    (a, b) =>
                        new Date(a.created_at).getTime() -
                        new Date(b.created_at).getTime()
                );
                break;
            case 'progress-high':
                result.sort((a, b) => b.progress - a.progress);
                break;
            case 'progress-low':
                result.sort((a, b) => a.progress - b.progress);
                break;
            case 'alphabetical':
                result.sort((a, b) =>
                    a.class.title.localeCompare(b.class.title)
                );
                break;
        }

        return result;
    }, [enrollments, sortBy, filterBy, searchQuery]);

    const stats = useMemo(() => {
        const total = enrollments.length;
        const active = enrollments.filter((e) => e.status === 'active').length;
        const completed = enrollments.filter(
            (e) => e.status === 'completed'
        ).length;
        return { total, active, completed };
    }, [enrollments]);

    return (
        <UserDashboardLayout>
            <Head title="Kelas Saya" />

            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Kelas Saya
                </h2>
                <p className="text-slate-500">
                    Kelola dan lanjutkan kelas yang telah kamu ikuti.
                </p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-4 rounded-xl border border-border-light bg-white p-4 shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon name="library_books" size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-900">
                            {stats.total}
                        </p>
                        <p className="text-sm text-slate-500">Total Kelas</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border-light bg-white p-4 shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Icon name="play_circle" size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-900">
                            {stats.active}
                        </p>
                        <p className="text-sm text-slate-500">Sedang Berjalan</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border-light bg-white p-4 shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                        <Icon name="check_circle" size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-900">
                            {stats.completed}
                        </p>
                        <p className="text-sm text-slate-500">Selesai</p>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Search */}
                <div className="relative flex-1 sm:max-w-xs">
                    <Icon
                        name="search"
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                        type="text"
                        placeholder="Cari kelas..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                {/* Filter and Sort */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Filter Dropdown */}
                    <div className="relative">
                        <select
                            value={filterBy}
                            onChange={(e) =>
                                setFilterBy(e.target.value as FilterOption)
                            }
                            className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-10 text-sm font-medium text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            {filterOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <Icon
                            name="expand_more"
                            size={20}
                            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value as SortOption)
                            }
                            className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-10 text-sm font-medium text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <Icon
                            name="sort"
                            size={20}
                            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                    </div>
                </div>
            </div>

            {/* Classes Grid */}
            {filteredAndSortedEnrollments.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredAndSortedEnrollments.map((enrollment) => {
                        const isCompleted = enrollment.status === 'completed';
                        const mainMentor = enrollment.class.mentors[0];

                        return (
                            <CourseCard
                                key={enrollment.id}
                                title={enrollment.class.title}
                                mentor={mainMentor?.name || 'Unknown Mentor'}
                                mentorImage={
                                    mainMentor?.profile_picture_url ||
                                    '/images/placeholder-avatar.jpg'
                                }
                                thumbnail={
                                    enrollment.class.thumbnail_url ||
                                    '/images/placeholder-class.jpg'
                                }
                                progress={enrollment.progress}
                                completed={isCompleted}
                                status={isCompleted ? 'Completed' : 'Active'}
                                statusColor={
                                    isCompleted
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-white/90 text-primary'
                                }
                                href={route('user.video.study', {
                                    id: enrollment.class.id,
                                })}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 py-16">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <Icon name="school" size={32} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                        {searchQuery || filterBy !== 'all'
                            ? 'Tidak ada kelas ditemukan'
                            : 'Belum ada kelas'}
                    </h3>
                    <p className="mb-6 text-center text-sm text-slate-500">
                        {searchQuery || filterBy !== 'all'
                            ? 'Coba ubah filter atau kata kunci pencarian.'
                            : 'Kamu belum mengikuti kelas apapun. Mulai belajar sekarang!'}
                    </p>
                    {!searchQuery && filterBy === 'all' && (
                        <Link
                            href={route('user.classes')}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                        >
                            <Icon name="explore" size={18} />
                            Jelajahi Kelas
                        </Link>
                    )}
                </div>
            )}
        </UserDashboardLayout>
    );
}
