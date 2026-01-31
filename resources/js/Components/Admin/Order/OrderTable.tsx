import Icon from '@/Components/Icon';
import DataTable from '@/Components/User/Dashboard/DataTable';
import Pagination from '@/Components/User/Dashboard/Pagination';
import TableToolbar from '@/Components/User/Dashboard/TableToolbar';
import { router } from '@inertiajs/react';
import { useMemo, useState } from 'react';

interface ConfirmModal {
    isOpen: boolean;
    orderId: number | null;
    action: 'approve' | 'reject' | 'pending' | null;
}

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
    per_page?: number;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationData {
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
    pagination: PaginationData;
}

const FILTER_OPTIONS = [
    { value: null, label: 'Semua' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
];

export default function OrderTable({
    orders,
    filters,
    pagination,
}: OrderTableProps) {
    const [processing, setProcessing] = useState(false);
    const [confirmModal, setConfirmModal] = useState<ConfirmModal>({
        isOpen: false,
        orderId: null,
        action: null,
    });

    const openConfirmModal = (
        orderId: number,
        action: 'approve' | 'reject' | 'pending',
    ) => {
        setConfirmModal({ isOpen: true, orderId, action });
    };

    const closeConfirmModal = () => {
        setConfirmModal({ isOpen: false, orderId: null, action: null });
    };

    const handleConfirmAction = () => {
        if (!confirmModal.orderId || !confirmModal.action) return;

        setProcessing(true);
        const routeNames = {
            approve: 'admin.orders.approve',
            reject: 'admin.orders.reject',
            pending: 'admin.orders.pending',
        };

        router.post(
            route(routeNames[confirmModal.action], { orderId: confirmModal.orderId }),
            {},
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

    const getModalConfig = () => {
        switch (confirmModal.action) {
            case 'approve':
                return {
                    icon: 'check_circle',
                    iconBg: 'bg-green-100 text-green-600',
                    title: 'Approve Order',
                    description: 'Apakah Anda yakin ingin menyetujui order ini? Peserta akan didaftarkan ke kelas.',
                    buttonBg: 'bg-green-600 hover:bg-green-700',
                    buttonText: 'Ya, Setujui',
                };
            case 'reject':
                return {
                    icon: 'cancel',
                    iconBg: 'bg-red-100 text-red-600',
                    title: 'Reject Order',
                    description: 'Apakah Anda yakin ingin menolak order ini? Peserta tidak akan didaftarkan ke kelas.',
                    buttonBg: 'bg-red-600 hover:bg-red-700',
                    buttonText: 'Ya, Tolak',
                };
            case 'pending':
                return {
                    icon: 'schedule',
                    iconBg: 'bg-orange-100 text-orange-600',
                    title: 'Set Pending Order',
                    description: 'Apakah Anda yakin ingin mengubah status order ini menjadi pending? Jika sebelumnya approved, peserta akan dihapus dari kelas.',
                    buttonBg: 'bg-orange-600 hover:bg-orange-700',
                    buttonText: 'Ya, Set Pending',
                };
            default:
                return null;
        }
    };

    const columns = useMemo(
        () => [
            {
                key: 'id',
                header: 'Order ID',
                render: (order: Order) => (
                    <span className="whitespace-nowrap text-sm font-medium text-slate-900">
                        #ORD-{order.id}
                    </span>
                ),
            },
            {
                key: 'user',
                header: 'User',
                render: (order: Order) => (
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 bg-cover bg-center`}
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
                            <span className="whitespace-nowrap text-sm font-semibold text-slate-900">
                                {order.user.name}
                            </span>
                            <span className="text-xs text-slate-500">
                                {order.user.email}
                            </span>
                        </div>
                    </div>
                ),
            },
            {
                key: 'class',
                header: 'Class',
                render: (order: Order) => (
                    <span className="text-sm text-slate-600">
                        {order.class.title}
                    </span>
                ),
            },
            {
                key: 'amount',
                header: 'Harga Kelas',
                headerClassName: 'text-right whitespace-nowrap',
                className: 'text-right whitespace-nowrap',
                render: (order: Order) => (
                    <span className="text-sm font-bold text-slate-900">
                        {order.formatted_amount ||
                            `Rp ${order.amount.toLocaleString('id-ID')}`}
                    </span>
                ),
            },
            {
                key: 'status',
                header: 'Status',
                render: (order: Order) => (
                    <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${order.status === 'pending'
                                ? 'bg-orange-50 text-orange-700 ring-orange-600/20'
                                : order.status === 'approved'
                                    ? 'bg-green-50 text-green-700 ring-green-600/20'
                                    : 'bg-red-50 text-red-700 ring-red-600/20'
                            }`}
                    >
                        {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                    </span>
                ),
            },
            {
                key: 'transfer_date',
                header: 'Tanggal Transfer',
                headerClassName: 'whitespace-nowrap',
                render: (order: Order) => (
                    <span className="whitespace-nowrap text-sm text-slate-600">
                        {new Date(order.transfer_date).toLocaleDateString(
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
                key: 'proof',
                header: 'Bukti',
                headerClassName: 'text-center',
                className: 'text-center',
                render: (order: Order) => (
                    <a
                        href={order.proof_url}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex justify-center transition-colors ${!order.proof_url
                                ? 'cursor-not-allowed text-slate-300'
                                : 'text-slate-400 hover:text-primary'
                            }`}
                    >
                        <Icon name="receipt_long" />
                    </a>
                ),
            },
            {
                key: 'actions',
                header: 'Aksi',
                headerClassName: 'text-center',
                className: 'text-center',
                render: (order: Order) => (
                    <div className="flex items-center justify-center gap-1">
                        {/* Approve Button */}
                        <button
                            onClick={() => openConfirmModal(order.id, 'approve')}
                            disabled={processing || order.status === 'approved'}
                            className={`flex size-8 items-center justify-center rounded-md transition-colors ${order.status === 'approved'
                                    ? 'cursor-not-allowed bg-green-100 text-green-600'
                                    : 'border border-slate-200 text-green-500 hover:border-green-200 hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-50'
                                }`}
                            title="Approve"
                        >
                            <Icon name="check" size={18} />
                        </button>
                        {/* Pending Button */}
                        <button
                            onClick={() => openConfirmModal(order.id, 'pending')}
                            disabled={processing || order.status === 'pending'}
                            className={`flex size-8 items-center justify-center rounded-md transition-colors ${order.status === 'pending'
                                    ? 'cursor-not-allowed bg-orange-100 text-orange-600'
                                    : 'border border-slate-200 text-orange-500 hover:border-orange-200 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-50'
                                }`}
                            title="Pending"
                        >
                            <Icon name="schedule" size={18} />
                        </button>
                        {/* Reject Button */}
                        <button
                            onClick={() => openConfirmModal(order.id, 'reject')}
                            disabled={processing || order.status === 'rejected'}
                            className={`flex size-8 items-center justify-center rounded-md transition-colors ${order.status === 'rejected'
                                    ? 'cursor-not-allowed bg-red-100 text-red-600'
                                    : 'border border-slate-200 text-red-500 hover:border-red-200 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50'
                                }`}
                            title="Reject"
                        >
                            <Icon name="close" size={18} />
                        </button>
                    </div>
                ),
            },
        ],
        [processing],
    );

    const emptyState = useMemo(
        () => ({
            icon: 'shopping_cart',
            title: 'Tidak ada order',
            description:
                filters.search || filters.status
                    ? 'Tidak ada order yang cocok dengan filter pencarian.'
                    : 'Belum ada order yang masuk.',
        }),
        [filters.search, filters.status],
    );

    const modalConfig = getModalConfig();

    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <TableToolbar
                filters={filters as Record<string, string | undefined>}
                routeName="admin.orders"
                searchPlaceholder="Search by Order ID, User..."
                filterOptions={FILTER_OPTIONS}
            />

            {/* Per Page Selector */}
            <div className="flex items-center justify-end px-5 py-2">
                <label className="mr-2 text-sm text-slate-600">
                    Tampilkan:
                </label>
                <select
                    value={filters.per_page || 10}
                    onChange={(e) => {
                        const newPerPage = parseInt(e.target.value);
                        router.get(
                            route('admin.orders'),
                            { ...filters, per_page: newPerPage },
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
                data={orders}
                keyExtractor={(order) => order.id}
                emptyState={emptyState}
            />

            <Pagination
                from={pagination.from}
                to={pagination.to}
                total={pagination.total}
                links={pagination.links}
            />

            {/* Confirmation Modal */}
            {confirmModal.isOpen && modalConfig && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 transition-opacity"
                        onClick={closeConfirmModal}
                    />
                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                        <div className="flex flex-col items-center gap-4 text-center">
                            {/* Icon */}
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full ${modalConfig.iconBg}`}
                            >
                                <Icon name={modalConfig.icon} size={32} />
                            </div>
                            {/* Title & Description */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {modalConfig.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    {modalConfig.description}
                                </p>
                            </div>
                            {/* Actions */}
                            <div className="mt-2 flex w-full gap-3">
                                <button
                                    onClick={closeConfirmModal}
                                    disabled={processing}
                                    className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleConfirmAction}
                                    disabled={processing}
                                    className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors disabled:opacity-50 ${modalConfig.buttonBg}`}
                                >
                                    {processing ? 'Memproses...' : modalConfig.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
