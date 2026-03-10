import Icon from '@/Components/Icon';
import DataTable from '@/Components/User/Dashboard/DataTable';
import Pagination from '@/Components/User/Dashboard/Pagination';
import TableToolbar from '@/Components/User/Dashboard/TableToolbar';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { useMemo } from 'react';

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

interface Props {
    classData: ClassData;
    enrollments: PaginatedEnrollments;
    filters: Filters;
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

export default function ClassUserList({
    classData,
    enrollments,
    filters,
}: Props) {
    const routeName = 'admin.classes.users';
    const routeParams = { classId: classData.id };

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
        ],
        [],
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

                {/* Table */}
                <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <TableToolbar
                        filters={filters as Record<string, string | undefined>}
                        routeName={routeName}
                        routeParams={routeParams}
                        searchPlaceholder="Cari nama atau email..."
                        sortOptions={SORT_OPTIONS}
                        showFilter={false}
                    />

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
        </AdminLayout>
    );
}
