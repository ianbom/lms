import Icon from '@/Components/Icon';
import { router } from '@inertiajs/react'; // Import Inertia router
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface ClassItem {
    id: number;
    title: string;
    thumbnail: string;
}

export interface Order {
    id: number;
    user_id: number;
    class_id: number;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    transfer_date: string;
    proof_url: string;
    user: User;
    class: ClassItem;
    created_at: string;
    formatted_amount: string;
}

interface Filters {
    search?: string;
    status?: string;
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

interface OrderTableProps {
    orders: Order[];
    filters: Filters;
    pagination: Pagination;
}

export default function OrderTable({ orders, filters, pagination }: OrderTableProps) {
    const [search, setSearch] = useState(filters.search || '');

    const handlePageChange = (url: string | null) => {
        if (!url) return;
        router.get(url, {}, { preserveState: true, replace: true });
    };

    const handleSearch = useCallback(
        debounce((query: string) => {
            router.get(
                route('admin.orders'),
                { ...filters, search: query },
                { preserveState: true, replace: true }
            );
        }, 300),
        [filters]
    );

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    const handleFilterStatus = (status: string | null) => {
        const newFilters = { ...filters, status: status || undefined };
        router.get(route('admin.orders'), newFilters as unknown as any, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = () => {
        const newDirection = filters.direction === 'asc' ? 'desc' : 'asc';
        router.get(
            route('admin.orders'),
            { ...filters, sort: 'created_at', direction: newDirection },
            { preserveState: true, replace: true }
        );
    };
    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
                {/* Filters */}
                <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                    <button
                        onClick={() => handleFilterStatus(null)}
                        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${!filters.status ? 'bg-primary text-white ring-2 ring-primary ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                        Semua
                    </button>
                    <button
                        onClick={() => handleFilterStatus('pending')}
                        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filters.status === 'pending' ? 'bg-primary text-white ring-2 ring-primary ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                        Pending
                    </button>
                    <button
                        onClick={() => handleFilterStatus('approved')}
                        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filters.status === 'approved' ? 'bg-primary text-white ring-2 ring-primary ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                        Approved
                    </button>
                    <button
                        onClick={() => handleFilterStatus('rejected')}
                        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filters.status === 'rejected' ? 'bg-primary text-white ring-2 ring-primary ring-offset-1' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                        Rejected
                    </button>
                </div>
                {/* Search & Actions */}
                <div className="flex flex-1 items-center gap-3 lg:justify-end">
                    <div className="relative w-full max-w-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <Icon name="search" size={20} />
                        </div>
                        <input
                            className="block w-full rounded-lg border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:ring-primary"
                            placeholder="Search by Order ID, User..."
                            type="text"
                            value={search}
                            onChange={onSearchChange}
                        />
                    </div>
                    <div className="relative">
                        <button
                            onClick={handleSort}
                            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${filters.direction ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                        >
                            <Icon name="sort" size={20} />
                            <span className="hidden sm:inline">
                                Sort {filters.direction === 'asc' ? 'Asc' : 'Desc'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Data Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/50 text-xs uppercase tracking-wider text-slate-500">
                            <th className="px-6 py-4 font-semibold">
                                Order ID
                            </th>
                            <th className="px-6 py-4 font-semibold">User</th>
                            <th className="px-6 py-4 font-semibold">Class</th>
                            <th className="px-6 py-4 text-right font-semibold">
                                Harga Kelas
                            </th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">
                                Tanggal Transfer
                            </th>
                            <th className="px-6 py-4 text-center font-semibold">
                                Bukti
                            </th>
                            <th className="px-6 py-4 text-right font-semibold">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="group transition-colors hover:bg-slate-50"
                                >
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`flex h-9 w-9 items-center justify-center rounded-full bg-cover bg-center bg-slate-200`}
                                                style={
                                                    order.user.avatar
                                                        ? {
                                                            backgroundImage: `url('${order.user.avatar}')`,
                                                        }
                                                        : {}
                                                }
                                            >
                                                {!order.user.avatar && order.user.name.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-slate-900">
                                                    {order.user.name}
                                                </span>
                                                <span className="text-xs text-slate-500">
                                                    {order.user.email}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {order.class.title}
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
                                        {order.formatted_amount || `Rp ${order.amount.toLocaleString('id-ID')}`}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${order.status === 'pending'
                                                ? 'bg-orange-50 text-orange-700 ring-orange-600/20'
                                                : order.status === 'approved'
                                                    ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                    : 'bg-red-50 text-red-700 ring-red-600/20'
                                                }`}
                                        >
                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {new Date(order.transfer_date).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a
                                            href={order.proof_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`transition-colors ${!order.proof_url ? 'cursor-not-allowed text-slate-300' : 'text-slate-400 hover:text-primary'}`}
                                        >
                                            <Icon name="receipt_long" />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {order.status === 'pending' ? (
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    className="flex size-8 items-center justify-center rounded-lg border border-slate-200 text-red-500 transition-colors hover:border-red-200 hover:bg-red-50"
                                                    title="Reject"
                                                >
                                                    <Icon name="close" size={18} />
                                                </button>
                                                <button
                                                    className="flex size-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition-colors hover:bg-primary-dark"
                                                    title="Approve"
                                                >
                                                    <Icon name="check" size={18} />
                                                </button>
                                            </div>
                                        ) : order.status === 'rejected' ? (
                                            <span className="text-xs font-medium text-red-400">
                                                Rejected
                                            </span>
                                        ) : (
                                            <span className="text-xs font-medium text-green-500">
                                                Approved
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="px-6 py-12 text-center text-slate-500">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-4">
                <p className="text-sm text-slate-500">
                    Showing{' '}
                    <span className="font-medium">{pagination.from || 0}</span> to{' '}
                    <span className="font-medium">{pagination.to || 0}</span> of{' '}
                    <span className="font-medium">{pagination.total}</span> results
                </p>
                <div className="flex items-center gap-1">
                    {pagination.links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(link.url)}
                            disabled={!link.url || link.active}
                            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${link.active
                                    ? 'bg-primary text-white'
                                    : link.url
                                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        : 'bg-slate-50 text-slate-400 cursor-not-allowed'
                                }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
