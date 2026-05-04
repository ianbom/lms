import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import Icon from '../Icon';

const heroImages = [
    '/HeroImg/1.png',
    '/HeroImg/3.png',
    '/HeroImg/4.png',
    '/HeroImg/5.png',
    '/HeroImg/6.png',
];

const desktopColumnOneImages = [
    heroImages[0],
    heroImages[1],
    heroImages[2],
    heroImages[3],
    heroImages[0],
    heroImages[1],
    heroImages[2],
    heroImages[3],
];

const desktopColumnTwoImages = [
    heroImages[4],
    heroImages[2],
    heroImages[1],
    heroImages[3],
    heroImages[4],
    heroImages[2],
    heroImages[1],
    heroImages[3],
];

interface HeroButton {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
}

interface HeroSectionProps {
    badge?: string;
    title?: ReactNode;
    description?: string;
    buttons?: HeroButton[];
    heroImage?: string;
    users?: string[];
    userCount?: string;
    rating?: number;
}

const defaultUsers = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop',
];

const defaultButtons: HeroButton[] = [
    { text: 'Mulai Belajar', href: '#', variant: 'primary' },
    { text: 'Lihat Kelas', href: '#', variant: 'secondary' },
];

export default function HeroSection({
    badge = '🚀 Platform Edukasi No.1 di Indonesia',
    title = (
        <>
            Tingkatkan Skill Anda
            <br />
            <span className="text-primary">Bersama Mentor Terbaik</span>
        </>
    ),
    description = 'Platform pembelajaran online dengan kurikulum terstruktur, mentor berpengalaman, dan sertifikasi yang diakui industri.',
    buttons = defaultButtons,
    heroImage = '/HeroImg/1.png',
    users = defaultUsers,
    userCount = '10,000+',
    rating = 4.9,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#1c4b42] text-white">
            <style>{`
                @keyframes slide-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes slide-down {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 25s linear infinite;
                }
                .animate-slide-down {
                    animation: slide-down 25s linear infinite;
                }
                .pause-animation:hover {
                    animation-play-state: paused;
                }
            `}</style>
            {/* Grid Pattern Overlay */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundSize: '40px 40px',
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                }}
            />

            {/* Blur Effects */}
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

            {/* Right Content - Animated Grid (Desktop) */}
            <div className="perspective-1000 group pointer-events-auto absolute bottom-0 right-0 top-0 z-10 hidden w-[45%] overflow-hidden lg:block">
                {/* Fading Blur Overlays for Top and Bottom Boundaries */}
                <div
                    className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-32"
                    style={{
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        maskImage:
                            'linear-gradient(to bottom, black 10%, transparent)',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, black 10%, transparent)',
                    }}
                />
                <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-32"
                    style={{
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        maskImage:
                            'linear-gradient(to top, black 10%, transparent)',
                        WebkitMaskImage:
                            'linear-gradient(to top, black 10%, transparent)',
                    }}
                />

                <div className="absolute inset-0 flex gap-6 px-8">
                    {/* Column 1 - Sliding Up */}
                    <div className="relative flex-1">
                        <div className="animate-slide-up pause-animation absolute top-0 flex w-full flex-col gap-6">
                            {/* Original items + Duplicates for seamless loop */}
                            {desktopColumnOneImages.map((src, i) => (
                                <div
                                    key={`desk-col1-${i}`}
                                    className="relative w-full overflow-hidden rounded-2xl border border-white/10 pt-[130%] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02]"
                                >
                                    <img
                                        src={src}
                                        className="absolute inset-0 h-full w-full object-cover"
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Sliding Down */}
                    <div className="relative flex-1">
                        <div className="animate-slide-down pause-animation absolute top-0 flex w-full flex-col gap-6">
                            {/* Original items + Duplicates for seamless loop */}
                            {desktopColumnTwoImages.map((src, i) => (
                                <div
                                    key={`desk-col2-${i}`}
                                    className="relative w-full overflow-hidden rounded-2xl border border-white/10 pt-[130%] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02]"
                                >
                                    <img
                                        src={src}
                                        className="absolute inset-0 h-full w-full object-cover"
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none relative z-20 mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-40">
                <div className="flex w-full flex-col items-center gap-12 lg:flex-row">
                    {/* Left Content */}
                    <div className="pointer-events-auto w-full text-center lg:w-[55%] lg:pr-12 lg:text-left">
                        {/* Badge */}
                        {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                            {badge}
                        </div> */}

                        {/* Title */}
                        <h1 className="mb-6 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            {title}
                        </h1>

                        {/* CTA Buttons */}
                        <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            {buttons.map((button, index) => (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className={`flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold transition-all ${
                                        button.variant === 'primary'
                                            ? 'bg-primary text-white shadow-xl shadow-primary/25 hover:bg-primary-dark'
                                            : 'border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10'
                                    }`}
                                >
                                    {button.text}
                                    {button.variant === 'primary' && (
                                        <Icon name="arrow_forward" size={18} />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Animated Grid (Mobile Only) */}
                    <div className="perspective-1000 group pointer-events-auto relative mt-8 h-[400px] w-full overflow-hidden rounded-3xl sm:h-[500px] lg:hidden">
                        {/* Fading Blur Overlays for Top and Bottom Boundaries */}
                        <div
                            className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-24"
                            style={{
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                maskImage:
                                    'linear-gradient(to bottom, black 10%, transparent)',
                                WebkitMaskImage:
                                    'linear-gradient(to bottom, black 10%, transparent)',
                            }}
                        />
                        <div
                            className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24"
                            style={{
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                maskImage:
                                    'linear-gradient(to top, black 10%, transparent)',
                                WebkitMaskImage:
                                    'linear-gradient(to top, black 10%, transparent)',
                            }}
                        />

                        <div className="absolute inset-0 flex gap-4 px-4 sm:gap-6 sm:px-0">
                            {/* Column 1 - Sliding Up */}
                            <div className="relative flex-1">
                                <div className="animate-slide-up pause-animation absolute top-0 flex w-full flex-col gap-4 sm:gap-6">
                                    {/* Original items + Duplicates for seamless loop */}
                                    {desktopColumnOneImages.map((src, i) => (
                                        <div
                                            key={`col1-${i}`}
                                            className="relative w-full overflow-hidden rounded-2xl border border-white/10 pt-[120%] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02] sm:pt-[130%]"
                                        >
                                            <img
                                                src={src}
                                                className="absolute inset-0 h-full w-full object-cover"
                                                alt=""
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2 - Sliding Down */}
                            <div className="relative hidden flex-1 sm:block">
                                <div className="animate-slide-down pause-animation absolute top-0 flex w-full flex-col gap-4 sm:gap-6">
                                    {/* Original items + Duplicates for seamless loop */}
                                    {desktopColumnTwoImages.map((src, i) => (
                                        <div
                                            key={`col2-${i}`}
                                            className="relative w-full overflow-hidden rounded-2xl border border-white/10 pt-[120%] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02] sm:pt-[130%]"
                                        >
                                            <img
                                                src={src}
                                                className="absolute inset-0 h-full w-full object-cover"
                                                alt=""
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
