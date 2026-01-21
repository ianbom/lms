import Icon from '@/Components/Icon';

interface PageHeaderProps {
    title: string;
    description?: string;
    actionLabel?: string;
    actionIcon?: string;
    onAction?: () => void;
}

export default function PageHeader({
    title,
    description,
    actionLabel,
    actionIcon = 'add',
    onAction,
}: PageHeaderProps) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-extrabold tracking-tight text-[#101815] md:text-4xl">
                    {title}
                </h1>
                {description && (
                    <p className="text-base font-normal text-[#64748b]">
                        {description}
                    </p>
                )}
            </div>
            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#005a2f] active:scale-95"
                >
                    <Icon name={actionIcon} size={20} />
                    <span>{actionLabel}</span>
                </button>
            )}
        </div>
    );
}
