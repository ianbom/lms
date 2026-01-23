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
            className={`border-border shadow-card group flex flex-col gap-4 rounded-xl border bg-white p-5 transition-all hover:border-primary/30 ${className}`}
        >
            <div className="flex items-start justify-between">
                <div className="rounded-md bg-background-light p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
                <p className="text-text-muted text-sm font-medium">{label}</p>
                <h3 className="text-text-primary mt-1 text-2xl font-bold">
                    {value}
                </h3>
            </div>
        </div>
    );
}
