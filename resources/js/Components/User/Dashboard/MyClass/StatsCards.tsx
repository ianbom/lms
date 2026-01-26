import Icon from '@/Components/Icon';
import { EnrollmentStats } from '@/types/enrollment';

interface StatsCardsProps {
    stats: EnrollmentStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
    const items = [
        {
            icon: 'library_books',
            iconBg: 'bg-primary/10',
            iconColor: 'text-primary',
            value: stats.total,
            label: 'Total Kelas',
        },
        {
            icon: 'play_circle',
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            value: stats.active,
            label: 'Sedang Berjalan',
        },
        {
            icon: 'check_circle',
            iconBg: 'bg-green-50',
            iconColor: 'text-green-600',
            value: stats.completed,
            label: 'Selesai',
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map((item) => (
                <StatCard key={item.label} {...item} />
            ))}
        </div>
    );
}

interface StatCardProps {
    icon: string;
    iconBg: string;
    iconColor: string;
    value: number;
    label: string;
}

function StatCard({ icon, iconBg, iconColor, value, label }: StatCardProps) {
    return (
        <div className="border-border-light shadow-card flex items-center gap-4 rounded-xl border bg-white p-4">
            <div
                className={`flex h-12 w-12 items-center justify-center rounded-md ${iconBg} ${iconColor}`}
            >
                <Icon name={icon} size={24} />
            </div>
            <div>
                <p className="text-2xl font-bold text-slate-900">{value}</p>
                <p className="text-sm text-slate-500">{label}</p>
            </div>
        </div>
    );
}
