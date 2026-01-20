import Icon from '@/Components/Icon';

interface ProTipCardProps {
    title?: string;
    message: string;
    className?: string;
}

export default function ProTipCard({
    title = 'Pro Tip',
    message,
    className = '',
}: ProTipCardProps) {
    return (
        <div
            className={`rounded-xl border border-blue-100 bg-blue-50 p-5 ${className}`}
        >
            <div className="flex items-start gap-3">
                <Icon
                    name="lightbulb"
                    size={20}
                    className="mt-0.5 text-blue-600"
                />
                <div>
                    <h4 className="text-sm font-bold text-blue-900">{title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-blue-700">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}
