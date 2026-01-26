import { Link } from '@inertiajs/react';

interface CourseCardProps {
    title: string;
    mentor: string;
    mentorImage: string;
    thumbnail: string;
    progress: number;
    completed?: boolean;
    status: 'Active' | 'Completed';
    statusColor: string;
    href: string;
}

export default function CourseCard({
    title,
    mentor,
    mentorImage,
    thumbnail,
    progress,
    completed = false,
    status,
    statusColor,
    href,
}: CourseCardProps) {
    return (
        <Link
            href={href}
            className="border-border-light shadow-card hover:shadow-card-hover group flex flex-col overflow-hidden rounded-xl border bg-white transition-all"
        >
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={thumbnail || '/images/placeholder-class.jpg'}
                />
                <StatusBadge status={status} colorClass={statusColor} />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <h4 className="mb-1 line-clamp-2 text-base font-bold text-slate-900">
                    {title}
                </h4>

                <MentorInfo name={mentor} image={mentorImage} />

                <ProgressBar progress={progress} completed={completed} />
            </div>
        </Link>
    );
}

// Sub-components
function StatusBadge({
    status,
    colorClass,
}: {
    status: string;
    colorClass: string;
}) {
    return (
        <div
            className={`absolute right-3 top-3 rounded-full px-2 py-1 text-xs font-semibold backdrop-blur-sm ${colorClass}`}
        >
            {status}
        </div>
    );
}

function MentorInfo({ name, image }: { name: string; image: string }) {
    return (
        <div className="mb-4 flex items-center gap-2">
            <div className="h-5 w-5 overflow-hidden rounded-full bg-gray-200">
                <img
                    alt={name}
                    className="h-full w-full object-cover"
                    src={image || '/images/placeholder-avatar.jpg'}
                />
            </div>
            <span className="text-xs font-medium text-slate-500">{name}</span>
        </div>
    );
}

function ProgressBar({
    progress,
    completed,
}: {
    progress: number;
    completed: boolean;
}) {
    return (
        <div className="mt-auto">
            <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                <span>Progress</span>
                <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100">
                <div
                    className={`h-1.5 rounded-full ${completed ? 'bg-green-600' : 'bg-primary'}`}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
