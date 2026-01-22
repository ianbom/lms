import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface CTASectionProps {
    title?: React.ReactNode;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function CTASection({
    title,
    description = 'Join 500,000+ learners leveling up their careers. Learn smarter, move faster, achieve more.',
    buttonText = 'Get Started',
    buttonHref = '#',
}: CTASectionProps) {
    return (
        <section className="px-4 py-20">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary p-10 shadow-2xl shadow-primary/30 lg:p-16">
                {/* Decorative Blobs */}
                <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-3xl"></div>

                <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
                            {title || (
                                <>
                                    Ready to Grow <br /> with LMS Platform?
                                </>
                            )}
                        </h2>
                        <p className="max-w-md text-lg text-white/80">
                            {description}
                        </p>
                        <Link
                            href={buttonHref}
                            className="inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-colors hover:bg-gray-100"
                        >
                            {buttonText}
                        </Link>
                    </div>

                    {/* Right - Dashboard Preview */}
                    <div className="relative">
                        <div className="transform rounded-xl bg-white p-4 shadow-2xl transition-transform duration-500 hover:rotate-0 lg:translate-x-10 lg:rotate-2">
                            {/* Window Controls */}
                            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                                <div className="flex gap-2">
                                    <div className="size-3 rounded-full bg-red-400"></div>
                                    <div className="size-3 rounded-full bg-yellow-400"></div>
                                    <div className="size-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-xs text-gray-400">
                                    Dashboard
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="space-y-4">
                                {/* Stats Row */}
                                <div className="flex gap-4">
                                    <div className="w-1/3 rounded-md bg-blue-50 p-4">
                                        <div className="text-2xl font-bold text-blue-600">
                                            3
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Courses
                                        </div>
                                    </div>
                                    <div className="w-1/3 rounded-md bg-green-50 p-4">
                                        <div className="text-2xl font-bold text-green-600">
                                            12h
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Learned
                                        </div>
                                    </div>
                                    <div className="w-1/3 rounded-md bg-purple-50 p-4">
                                        <div className="text-2xl font-bold text-purple-600">
                                            85%
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Avg Score
                                        </div>
                                    </div>
                                </div>

                                {/* Chart Placeholder */}
                                <div className="flex h-32 items-center justify-center rounded-md bg-gray-50 text-gray-300">
                                    <Icon name="analytics" size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
