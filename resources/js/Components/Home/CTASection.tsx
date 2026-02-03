import { Link } from '@inertiajs/react';

interface CTASectionProps {
    title?: React.ReactNode;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function CTASection({
    title,
    description,
    buttonText = 'Get started now',
    buttonHref = '#',
}: CTASectionProps) {
    const gridPatternStyle = {
        backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 2px, transparent 2px)
        `,
        backgroundSize: '50px 50px, 50px 50px',
        backgroundPosition: '-2px -2px',
    };

    return (
        <section className="mb-16 flex items-center justify-center p-4">
            <div className="mx-auto w-full max-w-6xl">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00753D] shadow-2xl md:rounded-[2rem] dark:shadow-green-900/20">
                    {/* Background Grid Pattern */}
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={gridPatternStyle}
                    />

                    {/* Floating Glow Squares */}
                    <div className="absolute left-10 top-10 h-24 w-24 rounded bg-white/5 opacity-20" />
                    <div className="absolute right-20 top-20 h-16 w-16 rounded bg-white/5 opacity-30" />
                    <div className="absolute bottom-12 left-1/4 h-32 w-32 rounded bg-white/5 opacity-10" />
                    <div className="absolute right-1/3 top-1/3 h-20 w-20 rounded bg-white/5 opacity-20" />
                    <div className="absolute bottom-20 right-10 h-24 w-24 rounded bg-white/5 opacity-15" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center md:py-24">
                        {/* Icon Badge */}
                        <div className="mb-8 rounded-2xl bg-white/20 p-0.5 backdrop-blur-sm">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00C853] shadow-inner md:h-16 md:w-16">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        {/* Text Content */}
                        <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm md:text-5xl">
                            {title || (
                                <>
                                    Asah Skill & Tumbuh{' '}
                                    <br className="hidden md:block" />
                                    Bersama dengan Impact Academy
                                </>
                            )}
                        </h2>

                        <p className="mb-10 max-w-2xl text-base font-medium leading-relaxed text-white/80 md:text-lg">
                            {description ||
                                'Daftar dan mulai perjalanan belajarmu bersama mentor praktisi berpengalaman.'}
                        </p>

                        {/* Button */}
                        <Link
                            href={buttonHref}
                            className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-[#00753D] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-4 focus:ring-white/30"
                        >
                            {buttonText}
                            <svg
                                className="-mr-1 ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
