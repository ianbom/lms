import Avatar from '@/Components/Admin/Avatar';
import Badge from '@/Components/Admin/Badge';
import DataTable from '@/Components/Admin/DataTable';
import PopularClassItem from '@/Components/Admin/PopularClassItem';
import StatCard from '@/Components/Admin/StatCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { BadgeVariant, Order, PopularClass, StatCardData } from '@/types/admin';
import { Head, Link } from '@inertiajs/react';

// Sample data - in production, this would come from props
const statsData: StatCardData[] = [
    {
        icon: 'library_books',
        label: 'Total Classes',
        value: '124',
        trend: 'up',
        trendValue: '+8%',
    },
    {
        icon: 'group',
        label: 'Total Users',
        value: '3,420',
        trend: 'up',
        trendValue: '+12%',
    },
    {
        icon: 'shopping_bag',
        label: 'Pending Orders',
        value: '12',
        trend: 'down',
        trendValue: '-5%',
    },
    {
        icon: 'payments',
        label: 'Total Revenue',
        value: '$42,500',
        trend: 'up',
        trendValue: '+20%',
    },
];

const ordersData: Order[] = [
    {
        id: '#ORD-7352',
        user: {
            name: 'John Doe',
            initials: 'JD',
            color: 'bg-blue-100 text-blue-700',
        },
        date: 'Oct 24, 2023',
        amount: '$120.00',
        status: 'paid',
    },
    {
        id: '#ORD-7351',
        user: {
            name: 'Jane Smith',
            initials: 'JS',
            color: 'bg-purple-100 text-purple-700',
        },
        date: 'Oct 24, 2023',
        amount: '$85.00',
        status: 'pending',
    },
    {
        id: '#ORD-7350',
        user: {
            name: 'Mike Ross',
            initials: 'MR',
            color: 'bg-green-100 text-green-700',
        },
        date: 'Oct 23, 2023',
        amount: '$200.00',
        status: 'paid',
    },
    {
        id: '#ORD-7349',
        user: {
            name: 'Rachel Green',
            initials: 'RG',
            color: 'bg-pink-100 text-pink-700',
        },
        date: 'Oct 22, 2023',
        amount: '$120.00',
        status: 'failed',
    },
    {
        id: '#ORD-7348',
        user: {
            name: 'Monica Geller',
            initials: 'MG',
            color: 'bg-orange-100 text-orange-700',
        },
        date: 'Oct 21, 2023',
        amount: '$45.00',
        status: 'paid',
    },
];

const popularClassesData: PopularClass[] = [
    {
        id: 1,
        title: 'UX Design Fundamentals',
        instructor: 'Sarah Lee',
        enrolled: 450,
        progress: 85,
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBAy-ocZv-wHZ6Bq9DUPkDleObiJmVeK_suVjAlZ1x67e99WNYE_Vafk2uo-yb-4pk-HhvwIVfAj0E8qPBJ0ZnME3G7wLDUJWomcDYqpgl8EAO2Ep2jDmyOEF3m4hLuE33bl3kfQmsZk0OvpDGtZi544krJqu7IhvBjv8KJhVtKt7DZs_c2e-7lGl8qF-Zwc5TIM1qbl4k_Kyg7H5AOEw1UEVOZNUaqUeJd9oUwcePCKpCfZzebkdkzXlyfQJtUP_XggJ2TFQtFg1ac',
    },
    {
        id: 2,
        title: 'Advanced Python Mastery',
        instructor: 'David Chen',
        enrolled: 320,
        progress: 72,
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAZgaiPy8O_yfb-Epbd9gz2J0sXneWp2cyxfv7ICazZH0_ANmoSpuRvYm9aCq6zwLdR6KnZvNztaMAy1FpXU2g9y-6SETuu4Z7qv281T2u8rALtF3zNMN8cL6RnGwHhEhU-MRnWc7hv0BfLBUo4A-vFqCufvgyO_HPDA9EnBOQx-idTb8ALXd_NSfbzKRkZQw04483tD2jbXDAqLnGlV1K0sNZ7QwVTHq5Gdi8zo0iWoBBnmPADwg1SI_C_w2mPJcGTkSODrTBLU_41',
    },
    {
        id: 3,
        title: 'Digital Marketing 101',
        instructor: 'Emma Watson',
        enrolled: 280,
        progress: 64,
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCc0lS0GovuuySOvKuQgPzLciMONvAJaR9Xp884dSc1I7rdcVeW-ISvi0Yq23evyz4_UKEfBKAvRHcQjd-uZCljrj2PQTeq0Dtke_ByM8q7k9p4LvuquZ86NPh329tzo61lde492_ukN4-ooYFgdFXbWLLG5hiMERe0pFYStttFNn4tM34GZTZ73abvwo3Yd7cV8NTtScucJVJirtpxOk05YSWyrm9vbgtyY2ir_7pqc5wyh3v5IYE_bpseKABJK0MBOGAOxLT1PkIK',
    },
    {
        id: 4,
        title: 'Photography for Beginners',
        instructor: 'James Wilson',
        enrolled: 195,
        progress: 45,
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBMxmgJnrBHjWazRnMVAgPFleQ3sIupomxlLniL_zfoweTdUO3qOtZfkVlcyBVT3rShpODMDb-fCkdWnxBb4sGXZwYbyCv1NSGEc1frT-uvyqABRN1XJdxcpJjvRNrJXzgpwWqLzSubFZsMQiRs2RIdEUu23rjrRZ0lvtiZsKFlO_ITWNLiqvOAtG8RiGuqyWDxYvPA4gT-8qEvi3OfX7cFdoXSdxbhCvZ6QlaaMFO87MgueQhl0UZV61ZNiNCYSs6YP5O_nmxgz1V7',
    },
    {
        id: 5,
        title: 'Graphic Design Basics',
        instructor: 'Alice Johnson',
        enrolled: 150,
        progress: 38,
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuA4N6Ng_vwhOEBaj0fmkNwutTOtR3VvMdkUQfR3MeL7xojZWy8hdOrvL0EiSmSb9JOgyViRhdGzNZrfuW4OdSinpr_rL4q4rak5mHh1UP4FQ3Cd3EONP3q3VwsSg0N6fYCkpj2eF8UzHrXfZKIdY_nhrgHvXSwIA72kZ2iVvPCvVmyJHQg6dINIpx7Ply4HFjeUat-QgbFJz2p2QEFlQ8Cb5SpB95TA0Mnz6DtfRmnhJfqo2M4hgC6bLrJMmR2s52gc3d9B3pQ9Xt1n',
    },
];

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

export default function Dashboard() {
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
                {statsData.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </div>

            {/* Main Grid: Recent Orders & Popular Classes */}
            <div className="grid grid-cols-1 gap-6 pb-8 xl:grid-cols-2">
                {/* Recent Orders Table */}
                <div className="border-border shadow-card flex flex-col overflow-hidden rounded-xl border bg-white">
                    <div className="border-border flex items-center justify-between border-b bg-white px-6 py-5">
                        <h2 className="text-text-primary text-lg font-bold">
                            Recent Orders
                        </h2>
                        <Link
                            href="#"
                            className="text-sm font-medium text-primary hover:text-emerald-600"
                        >
                            View All
                        </Link>
                    </div>
                    <DataTable
                        columns={orderColumns}
                        data={ordersData}
                        keyExtractor={(order) => order.id}
                    />
                </div>

                {/* Popular Classes List */}
                <div className="border-border shadow-card flex flex-col rounded-xl border bg-white">
                    <div className="border-border flex items-center justify-between border-b px-6 py-5">
                        <h2 className="text-text-primary text-lg font-bold">
                            Popular Classes
                        </h2>
                        <button className="text-text-muted rounded-md p-1 transition-colors hover:bg-background-light">
                            <Icon name="more_horiz" size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col p-2">
                        {popularClassesData.map((classItem) => (
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
            </div>
        </AdminLayout>
    );
}
