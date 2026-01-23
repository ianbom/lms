import FeatureCard from './FeatureCard';

interface Feature {
    icon: string;
    iconColor: 'orange' | 'purple' | 'blue' | 'teal';
    title: string;
    description: string;
}

interface FeaturesSectionProps {
    title?: string;
    description?: string;
    features?: Feature[];
}

const defaultFeatures: Feature[] = [
    {
        icon: 'psychology',
        iconColor: 'orange',
        title: 'Learn Smarter',
        description:
            'AI-assisted learning paths adapt to your pace and goals automatically.',
    },
    {
        icon: 'schedule',
        iconColor: 'purple',
        title: 'Flexible Schedule',
        description:
            'Learn anytime, anywhere. Pick up exactly where you left off, even offline.',
    },
    {
        icon: 'verified',
        iconColor: 'blue',
        title: 'Learn from Best',
        description:
            'Courses led by top professionals and practitioners who know what works.',
    },
    {
        icon: 'groups',
        iconColor: 'teal',
        title: 'Community',
        description:
            'Join peer groups, ask questions, and build your portfolio with others.',
    },
];

export default function FeaturesSection({
    title = 'Smart Learning, Real Results',
    description = 'We make learning effective, enjoyable, and personalized—so you stay motivated and actually finish what you start.',
    features = defaultFeatures,
}: FeaturesSectionProps) {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <p className="text-gray-600">{description}</p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            iconColor={feature.iconColor}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
