type BadgeStatus = 'pending' | 'approved' | 'rejected' | 'active' | 'completed';

interface StatusBadgeProps {
    status: BadgeStatus;
    size?: 'sm' | 'md';
}

const statusConfig: Record<
    BadgeStatus,
    { bg: string; text: string; ring: string; label: string }
> = {
    pending: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        ring: 'ring-orange-600/20',
        label: 'Pending',
    },
    approved: {
        bg: 'bg-green-50',
        text: 'text-green-700',
        ring: 'ring-green-600/20',
        label: 'Approved',
    },
    rejected: {
        bg: 'bg-red-50',
        text: 'text-red-700',
        ring: 'ring-red-600/20',
        label: 'Rejected',
    },
    active: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        ring: 'ring-blue-600/20',
        label: 'Active',
    },
    completed: {
        bg: 'bg-green-50',
        text: 'text-green-700',
        ring: 'ring-green-600/20',
        label: 'Completed',
    },
};

export default function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
    const config = statusConfig[status];
    const sizeClasses =
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';

    return (
        <span
            className={`inline-flex items-center rounded-full font-semibold ring-1 ring-inset ${config.bg} ${config.text} ${config.ring} ${sizeClasses}`}
        >
            {config.label}
        </span>
    );
}
