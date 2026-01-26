import OrderStats from '@/Components/Admin/Order/OrderStats';
import OrderTable, { Order } from '@/Components/Admin/Order/OrderTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

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

interface ListOrderProps {
    orders: PaginatedOrders;
    stats: Stats;
    filters: Filters;
}

export default function ListOrder({ orders, stats, filters }: ListOrderProps) {
    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Orders', href: '#' },
                { label: 'List', href: '#' },
            ]}
        >
            <Head title="Liste Order" />

            <div className="flex flex-col gap-8">
                {/* Page Header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                            Daftar Order Kelas
                        </h1>
                        <p className="text-slate-500">Manajemen Order Kelas</p>
                    </div>
                </div>

                {/* Stats Overview */}
                <OrderStats stats={stats} />

                {/* Main Table */}
                <OrderTable
                    orders={orders.data}
                    filters={filters}
                    pagination={{
                        currentPage: orders.current_page,
                        lastPage: orders.last_page,
                        perPage: orders.per_page,
                        total: orders.total,
                        from: orders.from,
                        to: orders.to,
                        links: orders.links,
                    }}
                />
            </div>
        </AdminLayout>
    );
}
