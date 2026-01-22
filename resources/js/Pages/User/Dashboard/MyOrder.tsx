import Icon from '@/Components/Icon';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Head, Link, router } from '@inertiajs/react';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

interface ClassItem {
    id: number;
    title: string;
    thumbnail_url: string | null;
}

interface Order {
    id: number;
    class_id: number;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    transfer_date: string;
    proof_url: string;
    class: ClassItem;
    created_at: string;
}

interface Stats {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
}

interface Filters {
    search?: string;
    status?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedOrders {
    data: Order[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
    from: number;
    to: number;
}

interface Props {
    orders: PaginatedOrders;
    stats: Stats;
    filters: Filters;
}

function OrderStats({ stats }: { stats: Stats }) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center gap-4 rounded-xl border border-border-light bg-white p-4 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name="receipt_long" size={24} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">
                        {stats.total}
                    </p>
                    <p className="text-sm text-slate-500">Total Order</p>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border-light bg-white p-4 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon name="pending" size={24} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">
                        {stats.pending}
                    </p>
                    <p className="text-sm text-slate-500">Pending</p>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border-light bg-white p-4 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <Icon name="check_circle" size={24} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">
                        {stats.approved}
                    </p>
                    <p className="text-sm text-slate-500">Approved</p>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border-light bg-white p-4 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <Icon name="cancel" size={24} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">
                        {stats.rejected}
                    </p>
                    <p className="text-sm text-slate-500">Rejected</p>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: Order['status'] }) {
    const statusConfig = {
        pending: {
            bg: 'bg-orange-50',
            text: 'text-orange-700',
            ring: 'ring-orange-600/20',
            label: 'Pending',
        },
        approved: {
            bg: 'bg-green-50',
            text: 'text-green-700',
            ring: 'ring-green-600/20',
            label: 'Approved',
        },
        rejected: {
            bg: 'bg-red-50',
            text: 'text-red-700',
            ring: 'ring-red-600/20',
            label: 'Rejected',
        },
    };

    const config = statusConfig[status];

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${config.bg} ${config.text} ${config.ring}`}
        >
            {config.label}
        </span>
    );
}

export default function MyOrder({
    orders,
    stats,
    filters,
}: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handlePageChange = (url: string | null) => {
        if (!url) return;
        router.get(url, {}, { preserveState: true, replace: true });
    };

    const handleSearch = useCallback(
        debounce((query: string) => {
            router.get(
                route('my-order'),
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
        router.get(route('my-order'), newFilters as unknown as Record<string, string>, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = () => {
        const newDirection = filters.direction === 'asc' ? 'desc' : 'asc';
        router.get(
            route('my-order'),
            { ...filters, sort: 'created_at', direction: newDirection },
            { preserveState: true, replace: true }
        );
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <UserDashboardLayout>
            <Head title="Riwayat Pesanan" />

            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Riwayat Pesanan
                </h2>
                <p className="text-slate-500">
                    Lihat dan pantau status pembelian kelas kamu.
                </p>
            </div>

            {/* Stats Summary */}
            <OrderStats stats={stats} />

            {/* Table Section */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {/* Toolbar */}
                <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Filters */}
                    <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                        <button
                            onClick={() => handleFilterStatus(null)}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                !filters.status
                                    ? 'bg-primary text-white ring-2 ring-primary ring-offset-1'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            Semua
                        </button>
                        <button
                            onClick={() => handleFilterStatus('pending')}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                filters.status === 'pending'
                                    ? 'bg-primary text-white ring-2 ring-primary ring-offset-1'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => handleFilterStatus('approved')}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                filters.status === 'approved'
                                    ? 'bg-primary text-white ring-2 ring-primary ring-offset-1'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            Approved
                        </button>
                        <button
                            onClick={() => handleFilterStatus('rejected')}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                filters.status === 'rejected'
                                    ? 'bg-primary text-white ring-2 ring-primary ring-offset-1'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            Rejected
                        </button>
                    </div>

                    {/* Search & Sort */}
                    <div className="flex flex-1 items-center gap-3 lg:justify-end">
                        <div className="relative w-full max-w-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <Icon name="search" size={20} />
                            </div>
                            <input
                                className="block w-full rounded-lg border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:ring-primary"
                                placeholder="Cari order ID atau nama kelas..."
                                type="text"
                                value={search}
                                onChange={onSearchChange}
                            />
                        </div>
                        <div className="relative">
                            <button
                                onClick={handleSort}
                                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                                    filters.direction
                                        ? 'border-primary bg-primary/5 text-primary'
                                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                                }`}
                            >
                                <Icon name="sort" size={20} />
                                <span className="hidden sm:inline">
                                    {filters.direction === 'asc'
                                        ? 'Terlama'
                                        : 'Terbaru'}
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
                                <th className="px-6 py-4 font-semibold">
                                    Kelas
                                </th>
                                <th className="px-6 py-4 text-right font-semibold">
                                    Total
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Status
                                </th>
                                <th className="px-6 py-4 font-semibold">
                                    Tanggal Transfer
                                </th>
                                <th className="px-6 py-4 text-center font-semibold">
                                    Bukti
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {orders.data.length > 0 ? (
                                orders.data.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="group transition-colors hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                            #ORD-{order.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="h-10 w-14 rounded-lg bg-slate-200 bg-cover bg-center"
                                                    style={
                                                        order.class
                                                            .thumbnail_url
                                                            ? {
                                                                  backgroundImage: `url('${order.class.thumbnail_url}')`,
                                                              }
                                                            : {}
                                                    }
                                                />
                                                <div className="flex flex-col">
                                                    <span className="max-w-[200px] truncate text-sm font-semibold text-slate-900">
                                                        {order.class.title}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
                                            {formatCurrency(order.amount)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <StatusBadge status={order.status} />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {formatDate(order.transfer_date)}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {order.proof_url ? (
                                                <a
                                                    href={order.proof_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                                                >
                                                    <Icon
                                                        name="visibility"
                                                        size={18}
                                                    />
                                                    Lihat
                                                </a>
                                            ) : (
                                                <span className="text-sm text-slate-400">
                                                    -
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-6 py-12 text-center"
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                                <Icon
                                                    name="receipt_long"
                                                    size={32}
                                                />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-slate-900">
                                                Tidak ada pesanan
                                            </h3>
                                            <p className="mb-6 text-sm text-slate-500">
                                                {filters.search ||
                                                filters.status
                                                    ? 'Coba ubah filter atau kata kunci pencarian.'
                                                    : 'Kamu belum memiliki pesanan. Mulai beli kelas sekarang!'}
                                            </p>
                                            {!filters.search &&
                                                !filters.status && (
                                                    <Link
                                                        href={route(
                                                            'user.classes'
                                                        )}
                                                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                                                    >
                                                        <Icon
                                                            name="explore"
                                                            size={18}
                                                        />
                                                        Jelajahi Kelas
                                                    </Link>
                                                )}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {orders.data.length > 0 && (
                    <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-4">
                        <p className="text-sm text-slate-500">
                            Menampilkan{' '}
                            <span className="font-medium">
                                {orders.from || 0}
                            </span>{' '}
                            sampai{' '}
                            <span className="font-medium">
                                {orders.to || 0}
                            </span>{' '}
                            dari{' '}
                            <span className="font-medium">{orders.total}</span>{' '}
                            hasil
                        </p>
                        <div className="flex items-center gap-1">
                            {orders.links.map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(link.url)}
                                    disabled={!link.url || link.active}
                                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                        link.active
                                            ? 'bg-primary text-white'
                                            : link.url
                                              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                              : 'cursor-not-allowed bg-slate-50 text-slate-400'
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
        </UserDashboardLayout>
    );
}
