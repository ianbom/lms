import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface BenefitItem {
    text: string;
}

interface MotivationSectionProps {
    title?: string;
    description?: string;
    benefits?: BenefitItem[];
    buttonText?: string;
    buttonHref?: string;
    image?: string;
}

const defaultBenefits: BenefitItem[] = [
    { text: 'Smart Learning Streaks to build habits' },
    { text: 'Gamified progress bars and achievements' },
    { text: 'Peer groups for discussion and feedback' },
    { text: 'Mobile-friendly for on-the-go learning' },
];

export default function MotivationSection({
    title = 'Built to Keep You Going',
    description = 'Stay consistent with gamified streaks, progress tracking, peer groups, and certifications that matter.',
    benefits = defaultBenefits,
    buttonText = 'Start Learning Free',
    buttonHref = '#',
    image = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA18_XiMUKK1LEm_7EKNu6ohs8xZTfLmjENAwuc8r1M7XI5V67c8ZqVqqjXMcanwFl2IIR80qbC1qYCdcdTMSu4FcjFPu_CB0u-dAyVC1Sb8wmep9JV53lk23hBqooYlODxsWm127E9-t9Ze_YVi-eMW7brlabfqcXV4mfSbqbDefU3odiRc8nKys9MsJySBQhhkaGv6fdp7ei_WPaC0gZior0Ju7bzvSucwlGaoLPOq3olFLAnggJ9PowO1xSJtJBa--aDz4s-RVY',
}: MotivationSectionProps) {
    return (
        <section className="overflow-hidden py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-16 lg:flex-row">
                    {/* Left - Image */}
                    <div className="relative w-full lg:w-1/2">
                        {/* Decorative Blobs */}
                        <div className="animate-blob absolute -left-10 -top-10 size-40 rounded-full bg-yellow-300 opacity-30 mix-blend-multiply blur-3xl filter"></div>
                        <div className="animate-blob animation-delay-2000 absolute -bottom-10 -right-10 size-40 rounded-full bg-primary opacity-30 mix-blend-multiply blur-3xl filter"></div>

                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                alt="Woman smiling holding tablet"
                                className="h-auto w-full object-cover"
                                src={image}
                            />

                            {/* Learning Momentum Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur">
                                <div className="flex h-16 items-end justify-between gap-2">
                                    <div className="h-[40%] w-full rounded-t-md bg-gray-100"></div>
                                    <div className="h-[60%] w-full rounded-t-md bg-primary/40"></div>
                                    <div className="h-[80%] w-full rounded-t-md bg-primary/60"></div>
                                    <div className="h-[100%] w-full rounded-t-md bg-primary"></div>
                                    <div className="h-[70%] w-full rounded-t-md bg-primary/80"></div>
                                </div>
                                <p className="mt-2 text-center text-xs font-medium text-gray-500">
                                    Your learning momentum is up by 40%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                            {title}
                        </h2>
                        <p className="mb-8 text-lg text-gray-600">{description}</p>

                        {/* Benefits List */}
                        <ul className="mb-8 space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Icon name="check" size={14} />
                                    </span>
                                    <span className="text-gray-700">{benefit.text}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={buttonHref}
                            className="inline-block rounded-xl bg-primary px-8 py-3 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
