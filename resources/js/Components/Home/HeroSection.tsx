import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import Icon from '../Icon';

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
    heroImage = '/ImpactCompressed/CSR, ESG and Sustainability Training.jpg',
    users = defaultUsers,
    userCount = '10,000+',
    rating = 4.9,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#022C22] to-[#011E17] text-white">
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
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden group perspective-1000 z-10 pointer-events-auto">
                {/* Fading Blur Overlays for Top and Bottom Boundaries */}
                <div className="absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to bottom, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent)' }} />
                <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to top, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent)' }} />

                <div className="absolute inset-0 flex gap-6 px-8">
                    {/* Column 1 - Sliding Up */}
                    <div className="flex-1 relative">
                        <div className="flex flex-col gap-6 w-full absolute top-0 animate-slide-up pause-animation">
                            {/* Original items + Duplicates for seamless loop */}
                            {[
                                '/ImpactCompressed/fotonew.jpeg',
                                '/ImpactCompressed/DSC00288.jpg',
                                '/ImpactCompressed/DSC03612.jpg',
                                '/ImpactCompressed/DSC00350.jpg',
                                '/ImpactCompressed/fotonew.jpeg',
                                '/ImpactCompressed/DSC00288.jpg',
                                '/ImpactCompressed/DSC03612.jpg',
                                '/ImpactCompressed/DSC00350.jpg',
                            ].map((src, i) => (
                                <div key={`desk-col1-${i}`} className="relative w-full pt-[130%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                                    <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Column 2 - Sliding Down */}
                    <div className="flex-1 relative">
                        <div className="flex flex-col gap-6 w-full absolute top-0 animate-slide-down pause-animation">
                            {/* Original items + Duplicates for seamless loop */}
                            {[
                                '/ImpactCompressed/CSR, ESG and Sustainability Training.jpg',
                                '/ImpactCompressed/DSC01305.jpg',
                                '/ImpactCompressed/DSC08419.JPG',
                                '/ImpactCompressed/presentasi.jpeg',
                                '/ImpactCompressed/CSR, ESG and Sustainability Training.jpg',
                                '/ImpactCompressed/DSC01305.jpg',
                                '/ImpactCompressed/DSC08419.JPG',
                                '/ImpactCompressed/presentasi.jpeg',
                            ].map((src, i) => (
                                <div key={`desk-col2-${i}`} className="relative w-full pt-[130%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                                    <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-40 flex min-h-[600px] items-center pointer-events-none">
                <div className="flex flex-col items-center gap-12 lg:flex-row w-full">
                    {/* Left Content */}
                    <div className="w-full text-center lg:w-[55%] lg:text-left lg:pr-12 pointer-events-auto">
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
                    <div className="relative mt-8 w-full h-[400px] sm:h-[500px] lg:hidden overflow-hidden rounded-3xl group perspective-1000 pointer-events-auto">
                        {/* Fading Blur Overlays for Top and Bottom Boundaries */}
                        <div className="absolute top-0 left-0 right-0 h-24 z-20 pointer-events-none" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to bottom, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent)' }} />
                        <div className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to top, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent)' }} />

                        <div className="absolute inset-0 flex gap-4 sm:gap-6 px-4 sm:px-0">
                            {/* Column 1 - Sliding Up */}
                            <div className="flex-1 relative">
                                <div className="flex flex-col gap-4 sm:gap-6 w-full absolute top-0 animate-slide-up pause-animation">
                                    {/* Original items + Duplicates for seamless loop */}
                                    {[
                                        '/ImpactCompressed/fotonew.jpeg',
                                        '/ImpactCompressed/DSC00288.jpg',
                                        '/ImpactCompressed/DSC03612.jpg',
                                        '/ImpactCompressed/DSC00350.jpg',
                                        '/ImpactCompressed/fotonew.jpeg',
                                        '/ImpactCompressed/DSC00288.jpg',
                                        '/ImpactCompressed/DSC03612.jpg',
                                        '/ImpactCompressed/DSC00350.jpg',
                                    ].map((src, i) => (
                                        <div key={`col1-${i}`} className="relative w-full pt-[120%] sm:pt-[130%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                                            <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Column 2 - Sliding Down */}
                            <div className="flex-1 relative hidden sm:block">
                                <div className="flex flex-col gap-4 sm:gap-6 w-full absolute top-0 animate-slide-down pause-animation">
                                    {/* Original items + Duplicates for seamless loop */}
                                    {[
                                        '/ImpactCompressed/CSR, ESG and Sustainability Training.jpg',
                                        '/ImpactCompressed/DSC01305.jpg',
                                        '/ImpactCompressed/DSC08419.JPG',
                                        '/ImpactCompressed/presentasi.jpeg',
                                        '/ImpactCompressed/CSR, ESG and Sustainability Training.jpg',
                                        '/ImpactCompressed/DSC01305.jpg',
                                        '/ImpactCompressed/DSC08419.JPG',
                                        '/ImpactCompressed/presentasi.jpeg',
                                    ].map((src, i) => (
                                        <div key={`col2-${i}`} className="relative w-full pt-[120%] sm:pt-[130%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                                            <img src={src} className="absolute inset-0 w-full h-full object-cover" alt="" />
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
