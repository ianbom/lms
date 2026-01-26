import Avatar from '@/Components/Admin/Avatar';
import Badge from '@/Components/Admin/Badge';
import StatCard from '@/Components/Admin/StatCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { BadgeVariant, Order, PopularClass, StatCardData } from '@/types/admin';
import { Head } from '@inertiajs/react';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

interface ChartData {
    labels: string[] | number[];
    data: number[];
    type: string;
    year: number;
    month: number | null;
}

interface DashboardProps {
    stats: StatCardData[];
    recentOrders: Order[];
    popularClasses: PopularClass[];
    availableYears: number[];
    initialChartData: ChartData;
}

const statusVariantMap: Record<Order['status'], BadgeVariant> = {
    paid: 'success',
    pending: 'warning',
    failed: 'danger',
};

const statusLabelMap: Record<Order['status'], string> = {
    paid: 'Paid',
    pending: 'Pending',
    failed: 'Failed',
};

const months = [
    { value: '', label: 'Semua Bulan' },
    { value: '1', label: 'Januari' },
    { value: '2', label: 'Februari' },
    { value: '3', label: 'Maret' },
    { value: '4', label: 'April' },
    { value: '5', label: 'Mei' },
    { value: '6', label: 'Juni' },
    { value: '7', label: 'Juli' },
    { value: '8', label: 'Agustus' },
    { value: '9', label: 'September' },
    { value: '10', label: 'Oktober' },
    { value: '11', label: 'November' },
    { value: '12', label: 'Desember' },
];

const dataTypes = [
    {
        value: 'users',
        label: 'Users',
        icon: 'group',
        color: 'rgb(59, 130, 246)',
    },
    {
        value: 'orders',
        label: 'Orders',
        icon: 'shopping_bag',
        color: 'rgb(234, 179, 8)',
    },
    {
        value: 'revenue',
        label: 'Revenue',
        icon: 'payments',
        color: 'rgb(34, 197, 94)',
    },
];

export default function Dashboard({
    stats,
    recentOrders,
    popularClasses,
    availableYears,
    initialChartData,
}: DashboardProps) {
    const [chartData, setChartData] = useState<ChartData>(initialChartData);
    const [selectedType, setSelectedType] = useState<string>('users');
    const [selectedYear, setSelectedYear] = useState<number>(
        new Date().getFullYear(),
    );
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchChartData = async () => {
        setIsLoading(true);
        try {
            const params = new URLSearchParams({
                type: selectedType,
                year: selectedYear.toString(),
            });
            if (selectedMonth) {
                params.append('month', selectedMonth);
            }

            const response = await fetch(
                `/admin/dashboard/chart-data?${params}`,
            );
            const data = await response.json();
            setChartData(data);
        } catch (error) {
            console.error('Failed to fetch chart data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchChartData();
    }, [selectedType, selectedYear, selectedMonth]);

    const currentTypeConfig =
        dataTypes.find((t) => t.value === selectedType) || dataTypes[0];

    const chartConfig = {
        labels: chartData.labels.map(String),
        datasets: [
            {
                label: currentTypeConfig.label,
                data: chartData.data,
                borderColor: currentTypeConfig.color,
                backgroundColor: currentTypeConfig.color
                    .replace('rgb', 'rgba')
                    .replace(')', ', 0.1)'),
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'white',
                titleColor: '#1f2937',
                bodyColor: '#4b5563',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: function (context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (selectedType === 'revenue') {
                            label +=
                                'Rp ' +
                                new Intl.NumberFormat('id-ID').format(
                                    context.parsed.y,
                                );
                        } else {
                            label += new Intl.NumberFormat('id-ID').format(
                                context.parsed.y,
                            );
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#9ca3af',
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f3f4f6',
                },
                ticks: {
                    color: '#9ca3af',
                    callback: function (value: any) {
                        if (selectedType === 'revenue') {
                            if (value >= 1000000) {
                                return (
                                    'Rp ' + (value / 1000000).toFixed(1) + 'M'
                                );
                            } else if (value >= 1000) {
                                return 'Rp ' + (value / 1000).toFixed(0) + 'K';
                            }
                            return 'Rp ' + value;
                        }
                        return value;
                    },
                },
            },
        },
    };

    const orderColumns = [
        {
            key: 'id',
            header: 'Order ID',
            render: (order: Order) => (
                <span className="text-text-primary font-medium">
                    {order.id}
                </span>
            ),
        },
        {
            key: 'user',
            header: 'User',
            render: (order: Order) => (
                <div className="text-text-secondary flex items-center gap-2">
                    <Avatar
                        initials={order.user.initials}
                        size="sm"
                        color={order.user.color}
                    />
                    {order.user.name}
                </div>
            ),
        },
        {
            key: 'date',
            header: 'Date',
            render: (order: Order) => (
                <span className="text-text-muted">{order.date}</span>
            ),
        },
        {
            key: 'amount',
            header: 'Amount',
            render: (order: Order) => (
                <span className="text-text-primary font-medium">
                    {order.amount}
                </span>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            headerClassName: 'text-right',
            className: 'text-right',
            render: (order: Order) => (
                <Badge variant={statusVariantMap[order.status]}>
                    {statusLabelMap[order.status]}
                </Badge>
            ),
        },
    ];

    return (
        <AdminLayout breadcrumbs={[{ label: 'Dashboard' }]}>
            <Head title="Admin Dashboard" />

            {/* Stats Row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </div>

            {/* Chart Section */}
            <div className="border-border shadow-card rounded-xl border bg-white">
                <div className="border-border flex flex-col gap-4 border-b px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-text-primary text-lg font-bold">
                        Statistik {currentTypeConfig.label}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Data Type Selector */}
                        <div className="flex rounded-lg border border-gray-200 p-1">
                            {dataTypes.map((type) => (
                                <button
                                    key={type.value}
                                    onClick={() => setSelectedType(type.value)}
                                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                        selectedType === type.value
                                            ? 'bg-primary text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <Icon name={type.icon} size={16} />
                                    <span className="hidden sm:inline">
                                        {type.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Year Selector */}
                        <select
                            value={selectedYear}
                            onChange={(e) =>
                                setSelectedYear(Number(e.target.value))
                            }
                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            {availableYears.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        {/* Month Selector */}
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            {months.map((month) => (
                                <option key={month.value} value={month.value}>
                                    {month.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="relative p-6">
                    {isLoading && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
                            <div className="flex items-center gap-2 text-gray-500">
                                <Icon
                                    name="refresh"
                                    size={20}
                                    className="animate-spin"
                                />
                                <span>Loading...</span>
                            </div>
                        </div>
                    )}
                    <div className="h-[300px]">
                        <Line
                            data={chartConfig}
                            options={chartOptions as any}
                        />
                    </div>
                </div>
            </div>

            {/* Main Grid: Recent Orders & Popular Classes */}
            {/* <div className="grid grid-cols-1 gap-6 pb-8 xl:grid-cols-2">

                <div className="border-border shadow-card flex flex-col overflow-hidden rounded-xl border bg-white">
                    <div className="border-border flex items-center justify-between border-b bg-white px-6 py-5">
                        <h2 className="text-text-primary text-lg font-bold">
                            Recent Orders
                        </h2>
                        <Link
                            href={route('admin.orders')}
                            className="text-sm font-medium text-primary hover:text-emerald-600"
                        >
                            View All
                        </Link>
                    </div>
                    <DataTable
                        columns={orderColumns}
                        data={recentOrders}
                        keyExtractor={(order) => order.id}
                    />
                </div>


                <div className="border-border shadow-card flex flex-col rounded-xl border bg-white">
                    <div className="border-border flex items-center justify-between border-b px-6 py-5">
                        <h2 className="text-text-primary text-lg font-bold">
                            Popular Classes
                        </h2>
                        <Link
                            href={route('admin.classes')}
                            className="text-sm font-medium text-primary hover:text-emerald-600"
                        >
                            View All
                        </Link>
                    </div>
                    <div className="flex flex-col p-2">
                        {popularClasses.map((classItem) => (
                            <PopularClassItem
                                key={classItem.id}
                                title={classItem.title}
                                instructor={classItem.instructor}
                                enrolled={classItem.enrolled}
                                progress={classItem.progress}
                                thumbnail={classItem.thumbnail}
                            />
                        ))}
                    </div>
                </div>
            </div> */}
        </AdminLayout>
    );
}
