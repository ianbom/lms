import Icon from '@/Components/Icon';
import { CertificateStats } from '@/types/certificate';

interface StatsCardsProps {
    stats: CertificateStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
    const items = [
        {
            icon: 'workspace_premium',
            iconBg: 'bg-amber-50',
            iconColor: 'text-amber-600',
            value: stats.total,
            label: 'Total Sertifikat',
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
