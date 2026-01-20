import ProgressBar from './ProgressBar';

interface PopularClassItemProps {
    title: string;
    instructor: string;
    enrolled: number;
    progress: number;
    thumbnail: string;
    onClick?: () => void;
}

export default function PopularClassItem({
    title,
    instructor,
    enrolled,
    progress,
    thumbnail,
    onClick,
}: PopularClassItemProps) {
    return (
        <div
            onClick={onClick}
            className="group flex cursor-pointer items-center gap-4 rounded-lg p-4 transition-colors hover:bg-background-light"
        >
            <div
                className="h-12 w-20 shrink-0 rounded-lg bg-cover bg-center bg-no-repeat shadow-sm"
                style={{ backgroundImage: `url("${thumbnail}")` }}
            />
            <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-text-primary transition-colors group-hover:text-primary">
                    {title}
                </h3>
                <p className="truncate text-xs text-text-muted">
                    {instructor} • {enrolled} Enrolled
                </p>
            </div>
            <div className="hidden w-24 shrink-0 flex-col items-end gap-1 sm:flex">
                <ProgressBar value={progress} />
                <span className="text-xs font-bold text-text-primary">
                    {progress}%
                </span>
            </div>
        </div>
    );
}
