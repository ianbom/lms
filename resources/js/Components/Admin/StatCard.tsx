import Icon from '@/Components/Icon';
import { StatCardData } from '@/types/admin';

interface StatCardProps extends StatCardData {
    className?: string;
}

export default function StatCard({
    icon,
    label,
    value,
    trend,
    trendValue,
    className = '',
}: StatCardProps) {
    const isUp = trend === 'up';

    return (
        <div
            className={`group flex flex-col gap-4 rounded-xl border border-border bg-white p-5 shadow-card transition-all hover:border-primary/30 ${className}`}
        >
            <div className="flex items-start justify-between">
                <div className="rounded-lg bg-background-light p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon name={icon} size={24} />
                </div>
                <span
                    className={`flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        isUp
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-rose-50 text-rose-600'
                    }`}
                >
                    <Icon
                        name={isUp ? 'trending_up' : 'trending_down'}
                        size={14}
                        className="mr-1"
                    />
                    {trendValue}
                </span>
            </div>
            <div>
                <p className="text-sm font-medium text-text-muted">{label}</p>
                <h3 className="mt-1 text-2xl font-bold text-text-primary">
                    {value}
                </h3>
            </div>
        </div>
    );
}
