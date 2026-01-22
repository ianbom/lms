import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface StatItem {
    value: string;
    label: string;
}

interface HeroSectionProps {
    badge?: string;
    title?: React.ReactNode;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    stats?: StatItem[];
    heroImage?: string;
}

const defaultStats: StatItem[] = [
    { value: '2.5k+', label: 'Expert-Led Courses' },
    { value: '500k+', label: 'Active Learners' },
    { value: '4.9/5', label: 'User Rating' },
];

export default function HeroSection({
    badge = 'New Courses Added',
    title,
    description = 'Master in-demand skills from industry experts. Learn at your pace, track your growth with our AI-powered path, and stay ahead of the curve.',
    primaryButtonText = 'Start Learning Free',
    primaryButtonHref = '#',
    secondaryButtonText = 'Browse Courses',
    secondaryButtonHref = '#',
    stats = defaultStats,
    heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBCTbQW0mMujiot2vukTYfJ4HsgXc3seRvsHMFgv_kUFl5KzUNkJSfZ0VQ_asL12VSkA0hSOLyVg14QROZCi57f6cDzqG5MPXJx_Ip63UlhYJ08ETn9HwMEP-guRLoX47g4wQupqeLCwC6z3nYP3nJjKDicYI_R8xYN7JiEP5D_4Wjs7bgZvhNOPHjbgAUi2piva6L1UHVwHS71x-c-SQKdUQd548GIvIWjQc7v2e4nmHsCDLAr4j3xCPjranBvA4TEFAEWnRs3mA',
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden pb-20 pt-12 lg:pb-28 lg:pt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
                    {/* Left Content */}
                    <div className="z-10 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                            <span className="size-2 animate-pulse rounded-full bg-primary"></span>
                            {badge}
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-6xl">
                            {title || (
                                <>
                                    Unlock Skills That <br />
                                    <span className="relative text-primary">
                                        Move You Forward
                                        <svg
                                            className="absolute -bottom-1 left-0 h-3 w-full text-primary opacity-30"
                                            fill="none"
                                            viewBox="0 0 200 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.00025 6.99997C2.00025 6.99997 51.5002 1 100.5 1C149.5 1 198 7 198 7"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="3"
                                            />
                                        </svg>
                                    </span>
                                </>
                            )}
                        </h1>

                        {/* Description */}
                        <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={primaryButtonHref}
                                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-dark"
                            >
                                {primaryButtonText}
                                <Icon name="arrow_forward" size={16} />
                            </Link>
                            <Link
                                href={secondaryButtonHref}
                                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-bold text-gray-700 transition-all hover:border-primary"
                            >
                                {secondaryButtonText}
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-8 pt-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-8"
                                >
                                    <div>
                                        <p className="text-3xl font-bold text-gray-900">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {stat.label}
                                        </p>
                                    </div>
                                    {index < stats.length - 1 && (
                                        <div className="h-10 w-px bg-gray-200"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative flex items-center justify-center lg:h-[600px]">
                        {/* Background Gradient */}
                        <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/10 to-blue-100/50 blur-3xl"></div>

                        <div className="relative mx-auto w-full max-w-md">
                            {/* Main Image */}
                            <img
                                alt="Student learning on tablet"
                                className="relative z-10 h-[500px] w-full rounded-[2rem] object-cover shadow-2xl"
                                src={heroImage}
                            />

                            {/* Floating Card - Certificates */}
                            <div className="floating-card shadow-soft absolute -left-12 top-12 z-20 w-48 rounded-2xl border border-gray-100 bg-white p-4">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-md bg-orange-100 p-2 text-orange-600">
                                        <Icon name="emoji_events" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Certificates Earned
                                        </p>
                                        <p className="text-xl font-bold text-gray-900">
                                            12
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Course Progress */}
                            <div className="floating-card-delayed shadow-soft absolute -right-8 bottom-24 z-20 w-56 rounded-2xl border border-gray-100 bg-white p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <p className="text-sm font-bold text-gray-900">
                                        UX Design Basics
                                    </p>
                                    <span className="text-xs font-semibold text-primary">
                                        85%
                                    </span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                    <div
                                        className="h-2 rounded-full bg-primary"
                                        style={{ width: '85%' }}
                                    ></div>
                                </div>
                                <div className="mt-3 flex items-center">
                                    <img
                                        alt="Instructor"
                                        className="size-6 rounded-full border-2 border-white"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_V0jbAVI4M9LQmqhEYbdXiMPMS8kDvXiSuiONzex98tUJwU8K9VUWJJ0AC6Qd6d514QdCiZKyOed_9we8Xfru8xN1kakjwlDRf6nwGFfLFuUjptWfgqP3nnwv3VLEVEL3Ddf27z5U6qQ91waNIgPAAm-T0_lnvvScLYSg4UUujxNNB-TMMiUDVOpO4PvwJ7o1TR_qaCH5FxS7ND2G00V_-LNscFhPZ0B_7xTcHLshZZY4aXYSBAr82HMizBMtEG7R90g5UCirYy8"
                                    />
                                    <p className="pl-2 text-xs text-gray-500">
                                        Instructor: Sarah J.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
