import OrderStats from '@/Components/Admin/Order/OrderStats';
import OrderTable from '@/Components/Admin/Order/OrderTable';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function ListOrder() {
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
                        <p className="text-slate-500">
                            Manage and verify incoming payments for class
                            enrollments.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                            <Icon name="help" size={20} />
                            <span>Help</span>
                        </button>
                        <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            <Icon name="download" size={20} />
                            <span>Ekspor</span>
                        </button>
                    </div>
                </div>

                {/* Stats Overview */}
                <OrderStats />

                {/* Main Table */}
                <OrderTable />
            </div>
        </AdminLayout>
    );
}
