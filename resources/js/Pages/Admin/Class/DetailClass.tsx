import CourseStats from '@/Components/Admin/Course/CourseStats';
import ModuleCard, { ModuleData } from '@/Components/Admin/Course/ModuleCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

interface Video {
    id: number;
    title: string;
    duration_sec: number;
}

interface Quiz {
    id: number;
    title: string;
    questions_count: number; // Assuming this property exists or logic needs adjustment if distinct from videos
}

interface Module {
    id: number;
    title: string;
    videos: Video[];
    quizzes: Quiz[];
}

interface ClassData {
    id: number;
    title: string;
    modules: Module[];
}

interface ClassStats {
    total_modules: number;
    total_videos: number;
    total_quizzes: number;
    total_duration_seconds: number;
}

interface DetailClassProps {
    classData: ClassData;
    stats: ClassStats;
}

export default function DetailClass({ classData, stats }: DetailClassProps) {
    // Helper to format seconds into "Xj Ym" or "Ym Zd"
    const formatDuration = (seconds: number) => {
        if (!seconds) return '0m';
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        if (h > 0) return `${h}j ${m}m`;
        return `${m}m ${s}d`;
    };

    // Transform backend modules to ModuleData format expected by ModuleCard
    const modules: ModuleData[] = classData.modules.map((m) => {
        const videoDuration = m.videos.reduce((acc, v) => acc + (v.duration_sec || 0), 0);

        return {
            id: m.id,
            title: m.title,
            status: 'published', // Defaulting as status is not on module yet
            stats: {
                videos: m.videos.length,
                quizzes: m.quizzes.length,
                duration: formatDuration(videoDuration),
            },
            lessons: [
                ...m.videos.map((v) => ({
                    id: v.id,
                    title: v.title,
                    type: 'video' as const,
                    durationOrQuestions: formatDuration(v.duration_sec),
                })),
                ...m.quizzes.map((q) => ({
                    id: q.id,
                    title: q.title,
                    type: 'quiz' as const,
                    durationOrQuestions: `${q.questions_count || 0} Soal`,
                })),
            ],
        };
    });

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Kelas', href: route('admin.classes') },
                { label: classData.title },
                { label: 'Kurikulum' },
            ]}
        >
            <Head title={`Konten - ${classData.title}`} />

            <div className="space-y-8 px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-[#1e293b]">
                            {classData.title}
                        </h1>
                        <p className="mt-2 text-base text-[#64748b]">
                            Atur kurikulum Anda menjadi modul dan pelajaran.
                            Seret dan lepas untuk mengatur ulang konten.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b]"
                            onClick={() => window.open(route('classes.show', classData.id), '_blank')}
                        >
                            <Icon name="visibility" size={20} />
                            Pratinjau
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#059669] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#059669]/20 transition-all hover:bg-[#047857]">
                            <Icon name="save" size={20} />
                            Simpan Perubahan
                        </button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <CourseStats
                    totalModules={stats.total_modules}
                    totalLessons={stats.total_videos + stats.total_quizzes}
                    totalDuration={formatDuration(stats.total_duration_seconds)}
                />

                {/* Curriculum Structure */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                            Struktur Kurikulum
                        </h2>
                        <button className="text-sm font-bold text-[#059669] hover:underline">
                            Buka Semua
                        </button>
                    </div>

                    <div className="space-y-4">
                        {modules.length > 0 ? (
                            modules.map((module, index) => (
                                <ModuleCard
                                    key={module.id}
                                    module={module}
                                    isExpanded={index === 0}
                                />
                            ))
                        ) : (
                            <div className="text-center py-10 text-slate-500">
                                Tidak ada modul ditemukan. Tambahkan modul untuk memulai.
                            </div>
                        )}
                    </div>

                    {/* Add New Module Button */}
                    <div className="rounded-xl border-2 border-dashed border-[#e2e8f0] bg-[#f8fafc]/50 p-8 text-center transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc]">
                        <button
                            onClick={() => window.location.href = route('admin.module.create', classData.id)}
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f5f9] text-[#64748b] transition-transform hover:scale-110 hover:bg-[#e2e8f0] hover:text-[#1e293b]"
                        >
                            <Icon name="add" size={24} />
                        </button>
                        <p className="mt-3 text-sm font-bold text-[#64748b]">
                            Tambah Modul Baru
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
