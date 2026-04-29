import Icon from '@/Components/Icon';
import Modal from '@/Components/Modal';
import DataTable from '@/Components/User/Dashboard/DataTable';
import Pagination from '@/Components/User/Dashboard/Pagination';
import TableToolbar from '@/Components/User/Dashboard/TableToolbar';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
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
    user: User;
}

interface Filters {
    search?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
    joined_from?: string;
    joined_to?: string;
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

const SORT_OPTIONS = [
    { value: 'created_at', direction: 'desc' as const, label: 'Terbaru' },
    { value: 'created_at', direction: 'asc' as const, label: 'Terlama' },
    {
        value: 'activated_at',
        direction: 'desc' as const,
        label: 'Bergabung Terbaru',
    },
    {
        value: 'activated_at',
        direction: 'asc' as const,
        label: 'Bergabung Terlama',
    },
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
    const [joinedFrom, setJoinedFrom] = useState(filters.joined_from || '');
    const [joinedTo, setJoinedTo] = useState(filters.joined_to || '');

    const [selectedUserForQuiz, setSelectedUserForQuiz] = useState<User | null>(
        null,
    );
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    const [quizScores, setQuizScores] = useState<QuizScore[]>([]);
    const [isLoadingScores, setIsLoadingScores] = useState(false);

    useEffect(() => {
        setJoinedFrom(filters.joined_from || '');
        setJoinedTo(filters.joined_to || '');
    }, [filters.joined_from, filters.joined_to]);

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

    const columns = useMemo(
        () => [
            {
                key: 'user',
                header: 'User',
                render: (enrollment: Enrollment) => (
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600">
                            {enrollment.user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col">
                            <span className="whitespace-nowrap text-sm font-semibold text-slate-900">
                                {enrollment.user.name}
                            </span>
                            <span className="text-xs text-slate-500">
                                {enrollment.user.email}
                            </span>
                        </div>
                    </div>
                ),
            },
            {
                key: 'phone',
                header: 'Telepon',
                render: (enrollment: Enrollment) => (
                    <span className="text-sm text-slate-600">
                        {enrollment.user.phone || '-'}
                    </span>
                ),
            },
            {
                key: 'company',
                header: 'Perusahaan',
                render: (enrollment: Enrollment) => (
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-700">
                            {enrollment.user.company || '-'}
                        </span>
                        {enrollment.user.position && (
                            <span className="text-xs text-slate-400">
                                {enrollment.user.position}
                            </span>
                        )}
                    </div>
                ),
            },
            {
                key: 'status',
                header: 'Status',
                render: () => (
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                    </span>
                ),
            },
            {
                key: 'activated_at',
                header: 'Tanggal Gabung Kelas',
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
                key: 'created_at',
                header: 'Tanggal Daftar',
                headerClassName: 'whitespace-nowrap',
                render: (enrollment: Enrollment) => (
                    <span className="whitespace-nowrap text-sm text-slate-600">
                        {new Date(enrollment.created_at).toLocaleDateString(
                            'id-ID',
                            {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            },
                        )}
                    </span>
                ),
            },
            {
                key: 'action',
                header: 'Aksi',
                render: (enrollment: Enrollment) => (
                    <button
                        onClick={() => handleViewQuizScores(enrollment.user)}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                        <Icon name="visibility" size={14} />
                        Lihat Skor Quiz
                    </button>
                ),
            },
        ],
        [handleViewQuizScores],
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
                <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <TableToolbar
                        filters={filters as Record<string, string | undefined>}
                        routeName={routeName}
                        routeParams={routeParams}
                        searchPlaceholder="Cari nama atau email..."
                        sortOptions={SORT_OPTIONS}
                        showFilter={false}
                    >
                        <div className="flex flex-wrap items-center gap-2">
                            <input
                                type="date"
                                value={joinedFrom}
                                onChange={(e) => setJoinedFrom(e.target.value)}
                                className="rounded-md border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-primary focus:bg-white focus:ring-primary"
                                aria-label="Tanggal gabung dari"
                            />
                            <input
                                type="date"
                                value={joinedTo}
                                onChange={(e) => setJoinedTo(e.target.value)}
                                className="rounded-md border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-primary focus:bg-white focus:ring-primary"
                                aria-label="Tanggal gabung sampai"
                            />
                            <button
                                onClick={applyDateFilters}
                                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                            >
                                <Icon name="filter_alt" size={18} />
                                Terapkan
                            </button>
                            <button
                                onClick={resetDateFilters}
                                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                <Icon name="restart_alt" size={18} />
                                Reset
                            </button>
                            <button
                                onClick={handleExport}
                                className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                            >
                                <Icon name="download" size={18} />
                                Export CSV Excel
                            </button>
                        </div>
                    </TableToolbar>

                    {/* Per Page Selector */}
                    <div className="flex items-center justify-end px-5 py-2">
                        <label className="mr-2 text-sm text-slate-600">
                            Tampilkan:
                        </label>
                        <select
                            value={filters.per_page || 10}
                            onChange={(e) => {
                                router.get(
                                    route(routeName, routeParams),
                                    {
                                        ...filters,
                                        per_page: parseInt(e.target.value),
                                    },
                                    { preserveState: true, replace: true },
                                );
                            }}
                            className="rounded-md border-slate-200 bg-slate-50 py-1 pl-2 pr-8 text-sm focus:border-primary focus:ring-primary"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
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
