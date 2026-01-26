import Icon from '@/Components/Icon';

interface Stats {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
}

interface StatItemConfig {
    key: keyof Stats;
    icon: string;
    label: string;
    bgColor: string;
    textColor: string;
}

interface OrderStatsProps {
    stats: Stats;
}

const statConfig: StatItemConfig[] = [
    {
        key: 'total',
        icon: 'receipt_long',
        label: 'Total Order',
        bgColor: 'bg-primary/10',
        textColor: 'text-primary',
    },
    {
        key: 'pending',
        icon: 'pending',
        label: 'Pending',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-600',
    },
    {
        key: 'approved',
        icon: 'check_circle',
        label: 'Approved',
        bgColor: 'bg-green-50',
        textColor: 'text-green-600',
    },
    {
        key: 'rejected',
        icon: 'cancel',
        label: 'Rejected',
        bgColor: 'bg-red-50',
        textColor: 'text-red-600',
    },
];

export default function OrderStats({ stats }: OrderStatsProps) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {statConfig.map((item) => (
                <div
                    key={item.key}
                    className="border-border-light shadow-card flex items-center gap-4 rounded-xl border bg-white p-4"
                >
                    <div
                        className={`flex h-12 w-12 items-center justify-center rounded-md ${item.bgColor} ${item.textColor}`}
                    >
                        <Icon name={item.icon} size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-900">
                            {stats[item.key]}
                        </p>
                        <p className="text-sm text-slate-500">{item.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
