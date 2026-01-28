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
    heroImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&fit=crop',
    users = defaultUsers,
    userCount = '10,000+',
    rating = 4.9,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#022C22] to-[#011E17] pb-12 pt-24 text-white">
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

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    {/* Left Content */}
                    <div className="w-full text-center lg:w-1/2 lg:text-left">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                            {badge}
                        </div>

                        {/* Title */}
                        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mb-8 max-w-lg leading-relaxed text-slate-300 lg:mx-0 lg:text-lg">
                            {description}
                        </p>

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

                        {/* Stats */}
                        <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
                            {/* Users */}
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-3">
                                    {users.map((userImage, index) => (
                                        <img
                                            key={index}
                                            alt={`User ${index + 1}`}
                                            className="h-10 w-10 rounded-full border-2 border-teal-900 object-cover"
                                            src={userImage}
                                        />
                                    ))}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-white">
                                        {userCount}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Telah bergabung
                                    </p>
                                </div>
                            </div>

                            <div className="h-10 w-px bg-white/10" />

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="text-left">
                                    <p className="font-bold text-white">
                                        {rating}/5
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Rating rata-rata
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative mt-8 w-full lg:mt-0 lg:w-1/2">
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-teal-900/80 to-transparent" />
                            <img
                                alt="Modern Workspace"
                                className="h-auto w-full transform object-cover transition-transform duration-700 hover:scale-105"
                                src={heroImage}
                            />
                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                                    <Icon name="check_circle" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-300">
                                        Status Belajar
                                    </p>
                                    <p className="font-bold text-white">
                                        Target Tercapai 85%
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
