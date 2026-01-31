import Icon from '@/Components/Icon';
import { router } from '@inertiajs/react';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

interface ConfirmModal {
    isOpen: boolean;
    userId: number | null;
    userName: string | null;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    email_verified_at: string | null;
    created_at: string;
    formatted_created_at: string;
}

interface Filters {
    search?: string;
    role?: string;
    verified?: string;
    sort?: string;
    direction?: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Pagination {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
    from: number;
    to: number;
    links: PaginationLink[];
}

interface UserTableProps {
    users: User[];
    filters: Filters;
    pagination: Pagination;
}

export default function UserTable({
    users,
    filters,
    pagination,
}: UserTableProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [processing, setProcessing] = useState(false);
    const [confirmModal, setConfirmModal] = useState<ConfirmModal>({
        isOpen: false,
        userId: null,
        userName: null,
    });

    const handlePageChange = (url: string | null) => {
        if (!url) return;
        router.get(url, {}, { preserveState: true, replace: true });
    };

    const handleSearch = useCallback(
        debounce((query: string) => {
            router.get(
                route('admin.users'),
                { ...filters, search: query },
                { preserveState: true, replace: true },
            );
        }, 300),
        [filters],
    );

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    const handleFilterRole = (role: string | null) => {
        const newFilters = { ...filters, role: role || undefined };
        router.get(
            route('admin.users'),
            newFilters as unknown as Record<string, string>,
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    const handleFilterVerified = (verified: string | null) => {
        const newFilters = { ...filters, verified: verified || undefined };
        router.get(
            route('admin.users'),
            newFilters as unknown as Record<string, string>,
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    const handleSort = (field: string) => {
        const newDirection =
            filters.sort === field && filters.direction === 'asc'
                ? 'desc'
                : 'asc';
        router.get(
            route('admin.users'),
            { ...filters, sort: field, direction: newDirection },
            { preserveState: true, replace: true },
        );
    };

    const openConfirmModal = (userId: number, userName: string) => {
        setConfirmModal({ isOpen: true, userId, userName });
    };

    const closeConfirmModal = () => {
        setConfirmModal({ isOpen: false, userId: null, userName: null });
    };

    const handleDeleteUser = () => {
        if (!confirmModal.userId) return;

        setProcessing(true);
        router.delete(
            route('admin.users.delete', { userId: confirmModal.userId }),
            {
                preserveScroll: true,
                onSuccess: () => {
                    closeConfirmModal();
                },
                onFinish: () => {
                    setProcessing(false);
                },
            },
        );
    };

    const getSortIcon = (field: string) => {
        if (filters.sort !== field) return 'unfold_more';
        return filters.direction === 'asc' ? 'expand_less' : 'expand_more';
    };

    return (
        <>
            <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {/* Toolbar */}
                <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Role Filters */}
                    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                        <button
                            onClick={() => handleFilterRole(null)}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${!filters.role ? 'bg-primary text-white ring-2 ring-primary ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            Semua
                        </button>
                        <button
                            onClick={() => handleFilterRole('admin')}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filters.role === 'admin' ? 'bg-primary text-white ring-2 ring-primary ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            Admin
                        </button>
                        <button
                            onClick={() => handleFilterRole('user')}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filters.role === 'user' ? 'bg-primary text-white ring-2 ring-primary ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            User
                        </button>
                        <div className="mx-2 h-8 w-px bg-slate-200" />
                        <button
                            onClick={() => handleFilterVerified(null)}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${!filters.verified ? 'bg-emerald-500 text-white ring-2 ring-emerald-500 ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            Semua Status
                        </button>
                        <button
                            onClick={() => handleFilterVerified('verified')}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filters.verified === 'verified' ? 'bg-emerald-500 text-white ring-2 ring-emerald-500 ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            Verified
                        </button>
                        <button
                            onClick={() => handleFilterVerified('unverified')}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filters.verified === 'unverified' ? 'bg-emerald-500 text-white ring-2 ring-emerald-500 ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            Unverified
                        </button>
                    </div>
                    {/* Search */}
                    <div className="flex flex-1 items-center gap-3 lg:justify-end">
                        <div className="relative w-full max-w-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <Icon name="search" size={20} />
                            </div>
                            <input
                                className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:ring-primary"
                                placeholder="Cari nama atau email..."
                                type="text"
                                value={search}
                                onChange={onSearchChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50/50 text-xs uppercase tracking-wider text-slate-500">
                                <th className="px-6 py-4 font-semibold">ID</th>
                                <th className="px-6 py-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('name')}
                                        className="flex items-center gap-1 hover:text-slate-700"
                                    >
                                        User
                                        <Icon
                                            name={getSortIcon('name')}
                                            size={16}
                                        />
                                    </button>
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('email')}
                                        className="flex items-center gap-1 hover:text-slate-700"
                                    >
                                        Email
                                        <Icon
                                            name={getSortIcon('email')}
                                            size={16}
                                        />
                                    </button>
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('role')}
                                        className="flex items-center gap-1 hover:text-slate-700"
                                    >
                                        Role
                                        <Icon
                                            name={getSortIcon('role')}
                                            size={16}
                                        />
                                    </button>
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Status
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    <button
                                        onClick={() => handleSort('created_at')}
                                        className="flex items-center gap-1 hover:text-slate-700"
                                    >
                                        Bergabung
                                        <Icon
                                            name={getSortIcon('created_at')}
                                            size={16}
                                        />
                                    </button>
                                </th>
                                <th className="px-6 py-4 text-right font-semibold">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="group transition-colors hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                            #{user.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-400 text-sm font-bold text-white">
                                                    {user.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-900">
                                                        {user.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                    user.role === 'admin'
                                                        ? 'bg-purple-100 text-purple-800'
                                                        : 'bg-blue-100 text-blue-800'
                                                }`}
                                            >
                                                {user.role === 'admin'
                                                    ? 'Admin'
                                                    : 'User'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.email_verified_at ? (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                                    <Icon
                                                        name="verified"
                                                        size={14}
                                                    />
                                                    Verified
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                                    <Icon
                                                        name="warning"
                                                        size={14}
                                                    />
                                                    Unverified
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {user.formatted_created_at}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() =>
                                                        openConfirmModal(
                                                            user.id,
                                                            user.name,
                                                        )
                                                    }
                                                    className="rounded-md p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
                                                    title="Hapus User"
                                                >
                                                    <Icon
                                                        name="delete"
                                                        size={18}
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="px-6 py-12 text-center"
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <Icon
                                                name="people"
                                                size={48}
                                                className="text-slate-300"
                                            />
                                            <p className="text-sm text-slate-500">
                                                Tidak ada user ditemukan
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {pagination.lastPage > 1 && (
                    <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 px-6 py-4 sm:flex-row">
                        <p className="text-sm text-slate-500">
                            Menampilkan {pagination.from} - {pagination.to} dari{' '}
                            {pagination.total} user
                        </p>
                        <div className="flex items-center gap-1">
                            {pagination.links.map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(link.url)}
                                    disabled={!link.url}
                                    className={`min-w-[36px] rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                        link.active
                                            ? 'bg-primary text-white'
                                            : link.url
                                              ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                              : 'cursor-not-allowed bg-slate-50 text-slate-300'
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {confirmModal.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 transition-opacity"
                        onClick={() => !processing && closeConfirmModal()}
                    />
                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                        {/* Icon */}
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                            <Icon
                                name="delete"
                                size={32}
                                className="text-red-600"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="mb-2 text-center text-xl font-bold text-slate-900">
                            Hapus User?
                        </h2>

                        {/* Description */}
                        <p className="mb-6 text-center text-sm text-slate-600">
                            Apakah Anda yakin ingin menghapus user{' '}
                            <strong>"{confirmModal.userName}"</strong>? Tindakan
                            ini tidak dapat dibatalkan.
                        </p>

                        {/* Actions */}
                        <div className="flex items-center justify-center gap-3">
                            <button
                                type="button"
                                onClick={closeConfirmModal}
                                disabled={processing}
                                className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50"
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                onClick={handleDeleteUser}
                                disabled={processing}
                                className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 disabled:opacity-50"
                            >
                                <Icon name="delete" size={18} />
                                {processing ? 'Menghapus...' : 'Ya, Hapus'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
