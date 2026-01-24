import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface CurrentLearning {
    id: number;
    title: string;
    slug: string;
    thumbnail_url: string | null;
    progress: number;
    currentModule: number;
    currentVideo: number;
    currentVideoId: number | null;
    mentors: Array<{
        id: number;
        name: string;
        avatar_url: string | null;
    }>;
}

interface HeroCardProps {
    currentLearning: CurrentLearning | null;
}

export default function HeroCard({ currentLearning }: HeroCardProps) {
    if (!currentLearning) {
        return (
            <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border-light bg-white p-8 shadow-card">
                <Icon name="school" size={48} className="mb-4 text-gray-300" />
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                    Belum Ada Kelas
                </h3>
                <p className="mb-4 text-center text-sm text-slate-500">
                    Anda belum memiliki kelas yang sedang dipelajari. Mulai belajar sekarang!
                </p>
                <Link
                    href={route('user.classes')}
                    className="flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                    <span>Jelajahi Kelas</span>
                    <Icon name="arrow_forward" size={18} />
                </Link>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-card md:flex-row">
            {/* Thumbnail */}
            <div className="relative aspect-video w-full bg-gray-100 md:aspect-auto md:w-2/5">
                <img
                    alt={currentLearning.title}
                    className="h-full w-full object-cover"
                    src={currentLearning.thumbnail_url || 'https://via.placeholder.com/400x300?text=No+Image'}
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    Video Tutorial
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-4">
                    <span className="mb-2 inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        Sedang Dipelajari
                    </span>
                    <h3 className="mb-1 text-2xl font-bold text-slate-900">
                        {currentLearning.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Icon name="play_circle" className="text-base" />
                        <span>Modul {currentLearning.currentModule} • Video {currentLearning.currentVideo}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6 w-full">
                    <div className="mb-2 flex justify-between text-sm font-medium">
                        <span className="text-slate-900">Progress</span>
                        <span className="text-primary">{currentLearning.progress}%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-100">
                        <div
                            className="h-2.5 rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${currentLearning.progress}%` }}
                        ></div>
                    </div>
                </div>

                <Link
                    href={currentLearning.currentVideoId
                        ? route('user.study.watch', { classId: currentLearning.id, videoId: currentLearning.currentVideoId })
                        : route('user.classes.show', { classId: currentLearning.id })
                    }
                    className="flex w-fit items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                    <span>Lanjutkan Belajar</span>
                    <Icon name="arrow_forward" size={18} />
                </Link>
            </div>
        </div>
    );
}
