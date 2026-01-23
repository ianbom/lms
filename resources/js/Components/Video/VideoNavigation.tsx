import Icon from '@/Components/Icon';

interface VideoNavigationProps {
    onPrevious?: () => void;
    onNext?: () => void;
    hasPrevious?: boolean;
    hasNext?: boolean;
}

export default function VideoNavigation({
    onPrevious,
    onNext,
    hasPrevious = true,
    hasNext = true,
}: VideoNavigationProps) {
    return (
        <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:flex-row sm:gap-4 sm:p-4">
            {/* Previous Button */}
            <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
                <Icon
                    name="arrow_back"
                    size={18}
                    className="transition-transform group-hover:-translate-x-1"
                />
                <span>Video Sebelumnya</span>
            </button>

            {/* Progress Indicator */}
            <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                <div className="flex items-center gap-1">
                    <span className="font-bold text-primary">2</span>
                    <span>/</span>
                    <span>5 video</span>
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={onNext}
                disabled={!hasNext}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative">Video Selanjutnya</span>
                <Icon
                    name="arrow_forward"
                    size={18}
                    className="relative transition-transform group-hover:translate-x-1"
                />
            </button>
        </div>
    );
}
