import { ClassStatus, StatusVariant } from '@/types/admin';

interface StatusBadgeProps {
    status: ClassStatus;
    className?: string;
}

const statusConfig: Record<
    ClassStatus,
    { label: string; variant: StatusVariant; dotColor: string }
> = {
    published: {
        label: 'Published',
        variant: 'success',
        dotColor: 'bg-green-500',
    },
    draft: {
        label: 'Draft',
        variant: 'default',
        dotColor: 'bg-gray-400',
    },
    reviewing: {
        label: 'Reviewing',
        variant: 'warning',
        dotColor: 'bg-yellow-500',
    },
};

const variantStyles: Record<StatusVariant, string> = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    default: 'bg-gray-100 text-gray-700 border-gray-200',
};

export default function StatusBadge({
    status,
    className = '',
}: StatusBadgeProps) {
    const config = statusConfig[status];

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${variantStyles[config.variant]} ${className}`}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${config.dotColor}`} />
            {config.label}
        </span>
    );
}
