import Icon from '@/Components/Icon';

type ColorTheme = 'orange' | 'purple' | 'blue' | 'teal';

interface FeatureCardProps {
    icon: string;
    iconColor?: ColorTheme;
    title: string;
    description: string;
}

const colorClasses: Record<ColorTheme, { bg: string; text: string }> = {
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600' },
};

export default function FeatureCard({
    icon,
    iconColor = 'orange',
    title,
    description,
}: FeatureCardProps) {
    const colors = colorClasses[iconColor];

    return (
        <div className="rounded-2xl border border-transparent bg-background-light p-8 transition-all hover:border-primary/20 hover:shadow-lg">
            <div
                className={`mb-6 flex size-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
            >
                <Icon name={icon} size={24} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">
                {description}
            </p>
        </div>
    );
}
