interface ProgressBarProps {
    value: number;
    className?: string;
}

export default function ProgressBar({
    value,
    className = '',
}: ProgressBarProps) {
    return (
        <div
            className={`h-1.5 w-full overflow-hidden rounded-full bg-border ${className}`}
        >
            <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
            />
        </div>
    );
}
