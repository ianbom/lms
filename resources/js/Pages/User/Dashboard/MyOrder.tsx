import Icon from '@/Components/Icon';
import DataTable from '@/Components/User/Dashboard/DataTable';
import OrderStats from '@/Components/User/Dashboard/OrderStats';
import Pagination from '@/Components/User/Dashboard/Pagination';
import StatusBadge from '@/Components/User/Dashboard/StatusBadge';
import TableToolbar from '@/Components/User/Dashboard/TableToolbar';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Head } from '@inertiajs/react';
import { useMemo } from 'react';

// Types
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

// Constants
const FILTER_OPTIONS = [
    { value: null, label: 'Semua' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
];

// Utility functions
const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);

const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

export default function MyOrder({ orders, stats, filters }: Props) {
    // Table columns configuration
    const columns = useMemo(
        () => [
            {
                key: 'id',
                header: 'Order ID',
                render: (order: Order) => (
                    <span className="text-sm font-medium text-slate-900">
                        #ORD-{order.id}
                    </span>
                ),
            },
            {
                key: 'class',
                header: 'Kelas',
                render: (order: Order) => (
                    <div className="flex items-center gap-3">
                        <div
                            className="h-10 w-14 rounded-lg bg-slate-200 bg-cover bg-center"
                            style={
                                order.class.thumbnail_url
                                    ? {
                                          backgroundImage: `url('${order.class.thumbnail_url}')`,
                                      }
                                    : {}
                            }
                        />
                        <span className="max-w-[200px] truncate text-sm font-semibold text-slate-900">
                            {order.class.title}
                        </span>
                    </div>
                ),
            },
            {
                key: 'amount',
                header: 'Total',
                headerClassName: 'text-right',
                className: 'text-right',
                render: (order: Order) => (
                    <span className="text-sm font-bold text-slate-900">
                        {formatCurrency(order.amount)}
                    </span>
                ),
            },
            {
                key: 'status',
                header: 'Status',
                render: (order: Order) => <StatusBadge status={order.status} />,
            },
            {
                key: 'transfer_date',
                header: 'Tanggal Transfer',
                render: (order: Order) => (
                    <span className="text-sm text-slate-600">
                        {formatDate(order.transfer_date)}
                    </span>
                ),
            },
            {
                key: 'proof',
                header: 'Bukti',
                headerClassName: 'text-center',
                className: 'text-center',
                render: (order: Order) =>
                    order.proof_url ? (
                        <a
                            href={order.proof_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                        >
                            <Icon name="visibility" size={18} />
                            Lihat
                        </a>
                    ) : (
                        <span className="text-sm text-slate-400">-</span>
                    ),
            },
        ],
        []
    );

    // Empty state configuration
    const emptyState = useMemo(
        () => ({
            icon: 'receipt_long',
            title: 'Tidak ada pesanan',
            description:
                filters.search || filters.status
                    ? 'Coba ubah filter atau kata kunci pencarian.'
                    : 'Kamu belum memiliki pesanan. Mulai beli kelas sekarang!',
            action:
                !filters.search && !filters.status
                    ? {
                          label: 'Jelajahi Kelas',
                          href: route('user.classes'),
                          icon: 'explore',
                      }
                    : undefined,
        }),
        [filters.search, filters.status]
    );

    return (
        <UserDashboardLayout>
            <Head title="Riwayat Pesanan" />

            {/* Header */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Riwayat Pesanan
                </h2>
                <p className="text-slate-500">
                    Lihat dan pantau status pembelian kelas kamu.
                </p>
            </div>

            {/* Stats */}
            <OrderStats stats={stats} />

            {/* Table Section */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <TableToolbar
                    filters={filters as Record<string, string | undefined>}
                    routeName="user.my-order"
                    searchPlaceholder="Cari order ID atau nama kelas..."
                    filterOptions={FILTER_OPTIONS}
                />

                <DataTable
                    columns={columns}
                    data={orders.data}
                    keyExtractor={(order) => order.id}
                    emptyState={emptyState}
                />

                {orders.data.length > 0 && (
                    <Pagination
                        from={orders.from}
                        to={orders.to}
                        total={orders.total}
                        links={orders.links}
                    />
                )}
            </div>
        </UserDashboardLayout>
    );
}
