import UserStats from '@/Components/Admin/User/UserStats';
import UserTable, { User } from '@/Components/Admin/User/UserTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

interface Stats {
    total: number;
    admins: number;
    users: number;
    verified: number;
    unverified: number;
    new_this_month: number;
}

interface Filters {
    search?: string;
    role?: string;
    verified?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedUsers {
    data: User[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
    from: number;
    to: number;
}

interface ListUserProps {
    users: PaginatedUsers;
    stats: Stats;
    filters: Filters;
}

export default function ListUser({ users, stats, filters }: ListUserProps) {
    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Users', href: '#' },
                { label: 'List', href: '#' },
            ]}
        >
            <Head title="Daftar User" />

            <div className="flex flex-col gap-8">
                {/* Page Header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                            Daftar User
                        </h1>
                        <p className="text-slate-500">
                            Manajemen pengguna platform LMS
                        </p>
                    </div>
                </div>

                {/* Stats Overview */}
                <UserStats stats={stats} />

                {/* Main Table */}
                <UserTable
                    users={users.data}
                    filters={filters}
                    pagination={{
                        currentPage: users.current_page,
                        lastPage: users.last_page,
                        perPage: users.per_page,
                        total: users.total,
                        from: users.from,
                        to: users.to,
                        links: users.links,
                    }}
                />
            </div>
        </AdminLayout>
    );
}
