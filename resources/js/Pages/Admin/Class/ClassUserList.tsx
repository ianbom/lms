import Icon from '@/Components/Icon';
import Modal from '@/Components/Modal';
import DataTable from '@/Components/User/Dashboard/DataTable';
import Pagination from '@/Components/User/Dashboard/Pagination';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    position: string | null;
}

interface Enrollment {
    id: number;
    user_id: number;
    class_id: number;
    status: string;
    activated_at: string | null;
    created_at: string;
    video_progress?: {
        completed: number;
        total: number;
        percent: number;
    };
    has_reviewed?: boolean;
    certificate_eligible?: boolean;
    certificate_issued?: boolean;
    user: User;
}

interface Filters {
    search?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
    joined_from?: string;
    joined_to?: string;
    review_status?: string;
    certificate_status?: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedEnrollments {
    data: Enrollment[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
    from: number;
    to: number;
}

interface ClassData {
    id: number;
    title: string;
}

interface MentorShare {
    id: number;
    name: string;
    share: number;
}

interface RevenueSplit {
    total_revenue: number;
    app_share: number;
    mentor_total: number;
    per_mentor_share: number;
    mentor_count: number;
    mentors: MentorShare[];
}

interface Props {
    classData: ClassData;
    enrollments: PaginatedEnrollments;
    filters: Filters;
    revenueSplit: RevenueSplit;
}

interface QuizScore {
    no: number;
    module_title: string;
    quiz_title: string;
    score: number | null;
    is_passed: boolean | null;
    attempted: boolean;
}

const REVIEW_FILTER_OPTIONS = [
    { value: '', label: 'Semua Review' },
    { value: 'reviewed', label: 'Sudah Review' },
    { value: 'not_reviewed', label: 'Belum Review' },
];

const CERTIFICATE_FILTER_OPTIONS = [
    { value: '', label: 'Semua Sertifikat' },
    { value: 'issued', label: 'Sudah Diambil' },
    { value: 'not_issued', label: 'Belum Diambil' },
];

function formatRupiah(amount: number): string {
    return 'Rp ' + amount.toLocaleString('id-ID');
}

export default function ClassUserList({
    classData,
    enrollments,
    filters,
    revenueSplit,
}: Props) {
    const routeName = 'admin.classes.users';
    const routeParams = { classId: classData.id };
    const [search, setSearch] = useState(filters.search || '');
    const [joinedFrom, setJoinedFrom] = useState(filters.joined_from || '');
    const [joinedTo, setJoinedTo] = useState(filters.joined_to || '');

    const [selectedUserForQuiz, setSelectedUserForQuiz] = useState<User | null>(
        null,
    );
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    const [quizScores, setQuizScores] = useState<QuizScore[]>([]);
    const [isLoadingScores, setIsLoadingScores] = useState(false);

    useEffect(() => {
        setSearch(filters.search || '');
        setJoinedFrom(filters.joined_from || '');
        setJoinedTo(filters.joined_to || '');
    }, [filters.joined_from, filters.joined_to, filters.search]);

    const handleSearch = useMemo(
        () =>
            debounce((query: string) => {
                router.get(
                    route(routeName, routeParams),
                    {
                        ...filters,
                        search: query || undefined,
                    },
                    { preserveState: true, replace: true },
                );
            }, 300),
        [filters, routeName, routeParams],
    );

    useEffect(() => {
        return () => handleSearch.cancel();
    }, [handleSearch]);

    const handleSearchChange = useCallback(
        (value: string) => {
            setSearch(value);
            handleSearch(value);
        },
        [handleSearch],
    );

    const handleViewQuizScores = useCallback(
        async (user: User) => {
            setSelectedUserForQuiz(user);
            setIsQuizModalOpen(true);
            setIsLoadingScores(true);
            try {
                const response = await axios.get(
                    route('admin.classes.users.quizzes', {
                        classId: classData.id,
                        userId: user.id,
                    }),
                );
                if (response.data.status === 'success') {
                    setQuizScores(response.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch quiz scores:', error);
            } finally {
                setIsLoadingScores(false);
            }
        },
        [classData.id],
    );

    const handleColumnSort = useCallback(
        (sort: 'activated_at' | 'video_progress') => {
            const isCurrentSort = filters.sort === sort;
            const nextDirection =
                isCurrentSort && filters.direction === 'desc' ? 'asc' : 'desc';

            router.get(
                route(routeName, routeParams),
                {
                    ...filters,
                    sort,
                    direction: nextDirection,
                },
                { preserveState: true, replace: true },
            );
        },
        [filters, routeName, routeParams],
    );

    const renderSortableHeader = useCallback(
        (label: string, sort: 'activated_at' | 'video_progress') => {
            const isActive = filters.sort === sort;
            const isAscending = isActive && filters.direction === 'asc';
            const isDescending = isActive && filters.direction === 'desc';

            return (
                <button
                    type="button"
                    onClick={() => handleColumnSort(sort)}
                    className={`group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-left normal-case tracking-normal transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        isActive ? 'text-primary' : 'text-slate-600'
                    }`}
                >
                    <span>{label}</span>
                    <span className="flex flex-col leading-none">
                        <Icon
                            name="keyboard_arrow_up"
                            size={14}
                            className={
                                isAscending
                                    ? 'text-primary'
                                    : 'text-slate-300 group-hover:text-slate-400'
                            }
                        />
                        <Icon
                            name="keyboard_arrow_down"
                            size={14}
                            className={`-mt-1 ${
                                isDescending
                                    ? 'text-primary'
                                    : 'text-slate-300 group-hover:text-slate-400'
                            }`}
                        />
                    </span>
                </button>
            );
        },
        [filters.direction, filters.sort, handleColumnSort],
    );

    const columns = useMemo(
        () => [
            {
                key: 'user',
                header: 'User',
                className: 'min-w-[260px]',
                render: (enrollment: Enrollment) => (
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary ring-1 ring-inset ring-primary/10">
                            {enrollment.user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex min-w-0 flex-col">
                            <span className="truncate text-sm font-semibold text-slate-900">
                                {enrollment.user.name}
                            </span>
                            <span className="truncate text-xs text-slate-500">
                                {enrollment.user.email}
                            </span>
                        </div>
                    </div>
                ),
            },
            {
                key: 'phone',
                header: 'Telepon',
                className: 'min-w-[130px]',
                render: (enrollment: Enrollment) => (
                    <span className="text-sm text-slate-600">
                        {enrollment.user.phone || '-'}
                    </span>
                ),
            },
            {
                key: 'company',
                header: 'Perusahaan',
                className: 'min-w-[180px]',
                render: (enrollment: Enrollment) => (
                    <div className="flex max-w-[220px] flex-col">
                        <span className="truncate text-sm font-medium text-slate-700">
                            {enrollment.user.company || '-'}
                        </span>
                        {enrollment.user.position && (
                            <span className="truncate text-xs text-slate-400">
                                {enrollment.user.position}
                            </span>
                        )}
                    </div>
                ),
            },
            {
                key: 'status',
                header: 'Status',
                className: 'min-w-[110px]',
                render: () => (
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                    </span>
                ),
            },
            {
                key: 'activated_at',
                header: renderSortableHeader(
                    'Tanggal Gabung Kelas',
                    'activated_at',
                ),
                className: 'min-w-[170px]',
                headerClassName: 'whitespace-nowrap',
                render: (enrollment: Enrollment) => (
                    <span className="whitespace-nowrap text-sm text-slate-600">
                        {enrollment.activated_at
                            ? new Date(
                                  enrollment.activated_at,
                              ).toLocaleDateString('id-ID', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                              })
                            : '-'}
                    </span>
                ),
            },
            {
                key: 'video_progress',
                header: renderSortableHeader('Progress Video', 'video_progress'),
                className: 'min-w-[190px]',
                headerClassName: 'whitespace-nowrap',
                render: (enrollment: Enrollment) => {
                    const progress = enrollment.video_progress;

                    if (!progress) {
                        return (
                            <span className="text-sm text-slate-400">-</span>
                        );
                    }

                    return (
                        <div className="flex min-w-[140px] flex-col gap-1">
                            <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                                <span>
                                    {progress.completed}/{progress.total} video
                                </span>
                                <span className="font-semibold text-slate-700">
                                    {progress.percent}%
                                </span>
                            </div>
                            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 ring-1 ring-inset ring-slate-200/70">
                                <div
                                    className="h-full rounded-full bg-primary transition-all"
                                    style={{ width: `${progress.percent}%` }}
                                />
                            </div>
                        </div>
                    );
                },
            },
            {
                key: 'review_status',
                header: 'Review',
                className: 'min-w-[110px]',
                render: (enrollment: Enrollment) => (
                    <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                            enrollment.has_reviewed
                                ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                                : 'bg-amber-50 text-amber-700 ring-amber-600/20'
                        }`}
                    >
                        {enrollment.has_reviewed
                            ? 'Sudah'
                            : 'Belum'}
                    </span>
                ),
            },
            {
                key: 'certificate_status',
                header: 'Sertifikat',
                className: 'min-w-[130px]',
                render: (enrollment: Enrollment) => {
                    if (enrollment.certificate_issued) {
                        return (
                            <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-inset ring-sky-600/20">
                                Terbit
                            </span>
                        );
                    }

                    return (
                        <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                                enrollment.certificate_eligible
                                    ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
                                    : 'bg-slate-100 text-slate-600 ring-slate-400/20'
                            }`}
                        >
                            {enrollment.certificate_eligible
                                ? 'Bisa Klaim'
                                : 'Belum'}
                        </span>
                    );
                },
            },
            {
                key: 'action',
                header: 'Aksi',
                className: 'min-w-[100px]',
                render: (enrollment: Enrollment) => (
                    <button
                        onClick={() => handleViewQuizScores(enrollment.user)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-500/10 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <Icon name="visibility" size={14} />
                        Lihat
                    </button>
                ),
            },
        ],
        [handleViewQuizScores, renderSortableHeader],
    );

    const emptyState = useMemo(
        () => ({
            icon: 'group',
            title: 'Tidak ada peserta',
            description: filters.search
                ? 'Tidak ada peserta yang cocok dengan pencarian.'
                : 'Belum ada peserta yang terdaftar di kelas ini.',
        }),
        [filters.search],
    );

    const applyDateFilters = useCallback(() => {
        router.get(
            route(routeName, routeParams),
            {
                ...filters,
                joined_from: joinedFrom || undefined,
                joined_to: joinedTo || undefined,
            },
            { preserveState: true, replace: true },
        );
    }, [filters, joinedFrom, joinedTo, routeName, routeParams]);

    const resetDateFilters = useCallback(() => {
        setJoinedFrom('');
        setJoinedTo('');

        router.get(
            route(routeName, routeParams),
            {
                ...filters,
                joined_from: undefined,
                joined_to: undefined,
            },
            { preserveState: true, replace: true },
        );
    }, [filters, routeName, routeParams]);

    const handleStatusFilterChange = useCallback(
        (key: 'review_status' | 'certificate_status', value: string) => {
            router.get(
                route(routeName, routeParams),
                {
                    ...filters,
                    [key]: value || undefined,
                },
                { preserveState: true, replace: true },
            );
        },
        [filters, routeName, routeParams],
    );

    const handlePerPageChange = useCallback(
        (value: string) => {
            router.get(
                route(routeName, routeParams),
                {
                    ...filters,
                    per_page: parseInt(value),
                },
                { preserveState: true, replace: true },
            );
        },
        [filters, routeName, routeParams],
    );

    const handleExport = useCallback(() => {
        const exportUrl = route('admin.classes.users.export', {
            classId: classData.id,
            ...filters,
            joined_from: joinedFrom || undefined,
            joined_to: joinedTo || undefined,
        });

        window.location.href = exportUrl;
    }, [classData.id, filters, joinedFrom, joinedTo]);

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Kelas', href: route('admin.classes') },
                {
                    label: classData.title,
                    href: route('admin.classes.show', classData.id),
                },
                { label: 'Peserta' },
            ]}
        >
            <Head title={`Peserta - ${classData.title}`} />

            <div className="flex flex-col gap-8">
                {/* Page Header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                            Peserta Kelas
                        </h1>
                        <p className="text-slate-500">{classData.title}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-md bg-white px-4 py-2 shadow-sm">
                        <Icon name="group" size={20} className="text-primary" />
                        <span className="text-sm text-slate-500">
                            Total Peserta:
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                            {enrollments.total}
                        </span>
                    </div>
                </div>

                {/* Revenue Split Section */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-2">
                        <Icon
                            name="payments"
                            size={22}
                            className="text-primary"
                        />
                        <h2 className="text-lg font-bold text-slate-900">
                            Pembagian Hasil Penjualan
                        </h2>
                    </div>

                    {/* Summary Cards */}
                    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {/* Total Revenue */}
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                                Total Pendapatan
                            </p>
                            <p className="text-xl font-extrabold text-slate-900">
                                {formatRupiah(revenueSplit.total_revenue)}
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                                Dari {enrollments.total} peserta aktif
                            </p>
                        </div>

                        {/* App Share */}
                        <div className="rounded-lg border border-indigo-100 bg-indigo-50 p-4">
                            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-indigo-500">
                                Bagian Aplikasi (40%)
                            </p>
                            <p className="text-xl font-extrabold text-indigo-700">
                                {formatRupiah(revenueSplit.app_share)}
                            </p>
                            <p className="mt-1 text-xs text-indigo-400">
                                Dari total pendapatan
                            </p>
                        </div>

                        {/* Mentor Total */}
                        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-emerald-600">
                                Bagian Mentor (60%)
                            </p>
                            <p className="text-xl font-extrabold text-emerald-700">
                                {formatRupiah(revenueSplit.mentor_total)}
                            </p>
                            <p className="mt-1 text-xs text-emerald-500">
                                Dibagi ke {revenueSplit.mentor_count} mentor
                            </p>
                        </div>
                    </div>

                    {/* Per-Mentor breakdown */}
                    {revenueSplit.mentors.length > 0 ? (
                        <div>
                            <p className="mb-3 text-sm font-semibold text-slate-700">
                                Rincian per Mentor
                            </p>
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-50">
                                            <th className="px-4 py-2.5 text-left font-semibold text-slate-600">
                                                Mentor
                                            </th>
                                            <th className="px-4 py-2.5 text-right font-semibold text-slate-600">
                                                Bagian (
                                                {revenueSplit.mentor_count > 0
                                                    ? Math.round(
                                                          60 /
                                                              revenueSplit.mentor_count,
                                                      )
                                                    : 0}
                                                %)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {revenueSplit.mentors.map((mentor) => (
                                            <tr
                                                key={mentor.id}
                                                className="hover:bg-slate-50"
                                            >
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                                                            {mentor.name
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </div>
                                                        <span className="font-medium text-slate-800">
                                                            {mentor.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                                                    {formatRupiah(mentor.share)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <p className="text-sm text-slate-400">
                            Belum ada mentor yang terdaftar di kelas ini.
                        </p>
                    )}
                </div>

                {/* Table */}
                <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <div className="border-b border-slate-200 bg-white px-5 py-5">
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-base font-bold text-slate-900">
                                    Daftar peserta
                                </h2>
                                <p className="text-sm text-slate-500">
                                    Kelola peserta, progres belajar, review, dan sertifikat.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                                <span className="text-sm text-slate-500">
                                    Tampilkan
                                </span>
                                <select
                                    value={filters.per_page || 10}
                                    onChange={(e) =>
                                        handlePerPageChange(e.target.value)
                                    }
                                    className="rounded-md border-slate-200 bg-slate-50 py-1 pl-2 pr-8 text-sm font-semibold text-slate-700 focus:border-primary focus:ring-primary"
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                <span className="text-sm text-slate-500">
                                    baris
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
                            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Cari peserta
                                    <div className="relative">
                                        <Icon
                                            name="search"
                                            size={18}
                                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                        />
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) =>
                                                handleSearchChange(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Nama atau email"
                                            className="w-full rounded-lg border-slate-200 bg-white py-2 pl-10 pr-3 text-sm font-medium normal-case tracking-normal text-slate-700 placeholder:text-slate-400 focus:border-primary focus:ring-primary"
                                        />
                                    </div>
                                </label>
                                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Review
                                    <select
                                        value={filters.review_status || ''}
                                        onChange={(e) =>
                                            handleStatusFilterChange(
                                                'review_status',
                                                e.target.value,
                                            )
                                        }
                                        className="rounded-lg border-slate-200 bg-white py-2 pl-3 pr-8 text-sm font-medium normal-case tracking-normal text-slate-700 focus:border-primary focus:ring-primary"
                                        aria-label="Filter review"
                                    >
                                        {REVIEW_FILTER_OPTIONS.map((option) => (
                                            <option
                                                key={option.value || 'all'}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                                <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Sertifikat
                                    <select
                                        value={filters.certificate_status || ''}
                                        onChange={(e) =>
                                            handleStatusFilterChange(
                                                'certificate_status',
                                                e.target.value,
                                            )
                                        }
                                        className="rounded-lg border-slate-200 bg-white py-2 pl-3 pr-8 text-sm font-medium normal-case tracking-normal text-slate-700 focus:border-primary focus:ring-primary"
                                        aria-label="Filter sertifikat"
                                    >
                                        {CERTIFICATE_FILTER_OPTIONS.map(
                                            (option) => (
                                                <option
                                                    key={option.value || 'all'}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ),
                                        )}
                                    </select>
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Dari
                                        <input
                                            type="date"
                                            value={joinedFrom}
                                            onChange={(e) =>
                                                setJoinedFrom(e.target.value)
                                            }
                                            className="rounded-lg border-slate-200 bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 focus:border-primary focus:ring-primary"
                                            aria-label="Tanggal gabung dari"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Sampai
                                        <input
                                            type="date"
                                            value={joinedTo}
                                            onChange={(e) =>
                                                setJoinedTo(e.target.value)
                                            }
                                            className="rounded-lg border-slate-200 bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-slate-700 focus:border-primary focus:ring-primary"
                                            aria-label="Tanggal gabung sampai"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 xl:justify-end">
                                <button
                                    onClick={applyDateFilters}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    <Icon name="filter_alt" size={18} />
                                    Terapkan
                                </button>
                                <button
                                    onClick={resetDateFilters}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    <Icon name="restart_alt" size={18} />
                                    Reset
                                </button>
                                <button
                                    onClick={handleExport}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                >
                                    <Icon name="download" size={18} />
                                    Export
                                </button>
                            </div>
                        </div>
                    </div>

                    <DataTable
                        columns={columns}
                        data={enrollments.data}
                        keyExtractor={(enrollment) => enrollment.id}
                        emptyState={emptyState}
                    />

                    <Pagination
                        from={enrollments.from}
                        to={enrollments.to}
                        total={enrollments.total}
                        links={enrollments.links}
                    />
                </div>
            </div>

            {/* Quiz Modal */}
            <Modal
                show={isQuizModalOpen}
                onClose={() => setIsQuizModalOpen(false)}
                maxWidth="2xl"
            >
                <div className="p-6">
                    <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
                        <h2 className="text-lg font-bold text-slate-900">
                            Skor Quiz - {selectedUserForQuiz?.name}
                        </h2>
                        <button
                            onClick={() => setIsQuizModalOpen(false)}
                            className="rounded-full p-1 transition-colors hover:bg-slate-100"
                        >
                            <Icon
                                name="close"
                                size={20}
                                className="text-slate-500"
                            />
                        </button>
                    </div>

                    {isLoadingScores ? (
                        <div className="flex justify-center py-8">
                            <span className="text-sm text-slate-500">
                                Memuat skor...
                            </span>
                        </div>
                    ) : (
                        <div className="overflow-x-auto rounded-lg border border-slate-200">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 bg-slate-50">
                                        <th className="px-4 py-3 font-semibold text-slate-700">
                                            No
                                        </th>
                                        <th className="px-4 py-3 font-semibold text-slate-700">
                                            Modul
                                        </th>
                                        <th className="px-4 py-3 font-semibold text-slate-700">
                                            Quiz
                                        </th>
                                        <th className="px-4 py-3 font-semibold text-slate-700">
                                            Skor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {quizScores.length > 0 ? (
                                        quizScores.map((score) => (
                                            <tr
                                                key={`${score.no}`}
                                                className="hover:bg-slate-50"
                                            >
                                                <td className="px-4 py-3 text-slate-600">
                                                    {score.no}
                                                </td>
                                                <td className="px-4 py-3 text-slate-600">
                                                    {score.module_title}
                                                </td>
                                                <td className="px-4 py-3 font-medium text-slate-900">
                                                    {score.quiz_title}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {!score.attempted ? (
                                                        <span className="text-slate-400">
                                                            Belum dikerjakan
                                                        </span>
                                                    ) : (
                                                        <span
                                                            className={
                                                                score.is_passed
                                                                    ? 'font-bold text-green-600'
                                                                    : 'font-bold text-red-600'
                                                            }
                                                        >
                                                            {score.score}
                                                            {score.is_passed !==
                                                                null && (
                                                                <span className="ml-2 rounded-full border border-current px-1.5 py-0.5 text-[10px] uppercase">
                                                                    {score.is_passed
                                                                        ? 'Lulus'
                                                                        : 'Gagal'}
                                                                </span>
                                                            )}
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="px-4 py-8 text-center text-slate-500"
                                            >
                                                Tidak ada quiz di kelas ini.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </Modal>
        </AdminLayout>
    );
}
