import Icon from '@/Components/Icon';

interface LearningPointsProps {
    title: string;
    description: string;
    points: string[];
}

export default function LearningPoints({
    title,
    description,
    points,
}: LearningPointsProps) {
    return (
        <section className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">{title}</h2>
            <p className="mb-4 leading-relaxed text-gray-600">{description}</p>
            <ul className="space-y-3">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Icon
                            name="check_circle"
                            size={20}
                            className="mt-0.5 flex-shrink-0 text-primary"
                        />
                        <span className="text-gray-700">{point}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
