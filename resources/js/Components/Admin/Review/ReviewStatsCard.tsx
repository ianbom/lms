import Icon from '@/Components/Icon';

interface ReviewStatsCardProps {
    label: string;
    value: string | number;
    icon: string;
    iconColor?: string;
    trend?: string;
    trendType?: 'positive' | 'warning' | 'neutral';
}

export default function ReviewStatsCard({
    label,
    value,
    icon,
    iconColor = 'text-primary',
    trend,
    trendType = 'positive',
}: ReviewStatsCardProps) {
    const trendColorMap = {
        positive: 'text-primary',
        warning: 'text-orange-500',
        neutral: 'text-gray-500', // Changed from slate-500 to match text-gray
    };

    return (
        <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                    {label}
                </span>
                <Icon name={icon} size={24} className={iconColor} />
            </div>
            <div>
                <span className="text-2xl font-bold text-gray-900">
                    {value}
                </span>
                {trend && (
                    <span
                        className={`ml-2 text-xs font-medium ${trendColorMap[trendType]}`}
                    >
                        {trend}
                    </span>
                )}
            </div>
        </div>
    );
}
