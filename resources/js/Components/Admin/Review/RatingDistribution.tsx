interface RatingBarProps {
    label: string;
    percentage: number;
    color?: string;
}

function RatingBar({
    label,
    percentage,
    color = 'bg-primary',
}: RatingBarProps) {
    return (
        <div className="flex items-center gap-3 text-xs">
            <span className="w-8 font-medium text-gray-500">{label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <span className="w-8 text-right font-medium text-gray-900">
                {percentage}%
            </span>
        </div>
    );
}

interface RatingDistributionData {
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    lowRating: number;
}

interface RatingDistributionProps {
    data: RatingDistributionData;
    period?: string;
}

export default function RatingDistribution({ data }: RatingDistributionProps) {
    return (
        <div className="flex flex-col justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">
                    Rating Distribution
                </h3>
            </div>
            <div className="space-y-2">
                <RatingBar
                    label="5"
                    percentage={data.fiveStar}
                    color="bg-primary"
                />
                <RatingBar
                    label="4"
                    percentage={data.fourStar}
                    color="bg-primary/70"
                />
                <RatingBar
                    label="3"
                    percentage={data.threeStar}
                    color="bg-primary/40"
                />
                <RatingBar
                    label="1-2"
                    percentage={data.lowRating}
                    color="bg-red-400"
                />
            </div>
        </div>
    );
}
