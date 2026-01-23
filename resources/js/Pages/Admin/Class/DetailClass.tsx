import ClassForm, {
    Category,
    ClassFormData,
    ClassFormErrors,
    Mentor as MentorOption,
} from '@/Components/Admin/Class/ClassForm';
import CourseStats from '@/Components/Admin/Course/CourseStats';
import ModuleCard, { ModuleData } from '@/Components/Admin/Course/ModuleCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface Video {
    id: number;
    title: string;
    duration_sec: number;
    is_preview: boolean;
}

interface Quiz {
    id: number;
    title: string;
    questions_count: number;
}

interface Module {
    id: number;
    title: string;
    videos: Video[];
    quizzes: Quiz[];
}

interface Mentor {
    id: number;
    name: string;
    avatar_url: string;
}

interface ClassData {
    id: number;
    title: string;
    description: string;
    price: number;
    discount: number;
    price_final: number;
    thumbnail_url: string;
    status: 'draft' | 'published';
    published_at: string | null;
    category: Category;
    mentors: Mentor[];
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
    categories: Category[];
    mentors: MentorOption[];
}

export default function DetailClass({ classData, stats, categories, mentors }: DetailClassProps) {
    // Modal state
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [processing, setProcessing] = useState(false);

    // Form state
    const [formData, setFormData] = useState<ClassFormData>({
        title: classData.title || '',
        description: classData.description || '',
        category_id: classData.category?.id?.toString() || '',
        price: classData.price?.toString() || '0',
        discount: classData.discount?.toString() || '0',
        status: classData.status || 'draft',
    });
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | undefined>(
        classData.thumbnail_url || undefined
    );
    const [selectedMentors, setSelectedMentors] = useState<MentorOption[]>(
        classData.mentors?.map((m) => ({
            id: m.id,
            name: m.name,
            avatar: m.avatar_url,
        })) || []
    );
    const [errors, setErrors] = useState<ClassFormErrors>({});

    const handleRemoveMentor = (id: number) => {
        setSelectedMentors(selectedMentors.filter((m) => m.id !== id));
    };

    const handleAddMentor = (mentor: MentorOption) => {
        if (!selectedMentors.find((m) => m.id === mentor.id)) {
            setSelectedMentors([...selectedMentors, mentor]);
        }
    };

    const handleThumbnailChange = (file: File | null) => {
        if (file) {
            const url = URL.createObjectURL(file);
            setThumbnailPreview(url);
            setThumbnailFile(file);
        } else {
            setThumbnailPreview(classData.thumbnail_url || undefined);
            setThumbnailFile(null);
        }
    };

    const openEditModal = () => {
        // Reset form to current class data
        setFormData({
            title: classData.title || '',
            description: classData.description || '',
            category_id: classData.category?.id?.toString() || '',
            price: classData.price?.toString() || '0',
            discount: classData.discount?.toString() || '0',
            status: classData.status || 'draft',
        });
        setThumbnailPreview(classData.thumbnail_url || undefined);
        setThumbnailFile(null);
        setSelectedMentors(
            classData.mentors?.map((m) => ({
                id: m.id,
                name: m.name,
                avatar: m.avatar_url,
            })) || []
        );
        setErrors({});
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleSubmit = () => {
        setProcessing(true);
        setErrors({});

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('category_id', formData.category_id);
        data.append('price', formData.price);
        data.append('discount', formData.discount);
        data.append('status', formData.status);
        selectedMentors.forEach((mentor) => {
            data.append('mentors[]', mentor.id.toString());
        });
        if (thumbnailFile) {
            data.append('thumbnail', thumbnailFile);
        }
        data.append('_method', 'PUT');

        router.post(route('admin.classes.update', classData.id), data, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                closeEditModal();
            },
            onError: (errors) => {
                setErrors(errors as ClassFormErrors);
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };

    // Cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (thumbnailPreview && thumbnailPreview.startsWith('blob:')) {
                URL.revokeObjectURL(thumbnailPreview);
            }
        };
    }, [thumbnailPreview]);
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
        const videoDuration = m.videos.reduce(
            (acc, v) => acc + (v.duration_sec || 0),
            0,
        );

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
                    is_preview: v.is_preview,
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
                        <div className="mb-2 flex items-center gap-2">
                            <span
                                className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                                    classData.status === 'published'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}
                            >
                                {classData.status === 'published'
                                    ? 'Publish'
                                    : 'Draf'}
                            </span>
                            <span className="text-sm text-slate-500">
                                {classData.category?.name}
                            </span>
                        </div>
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
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b]"
                            onClick={openEditModal}
                        >
                            <Icon name="edit" size={20} />
                            Edit
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#059669] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#059669]/20 transition-all hover:bg-[#047857]">
                            <Icon name="save" size={20} />
                            Publish Kelas
                        </button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <CourseStats
                    totalModules={stats.total_modules}
                    totalLessons={stats.total_videos + stats.total_quizzes}
                    totalDuration={formatDuration(stats.total_duration_seconds)}
                />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="space-y-8 lg:col-span-2">
                        {/* Curriculum Structure */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                                    Struktur Kurikulum
                                </h2>
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
                                    <div className="py-10 text-center text-slate-500">
                                        Tidak ada modul ditemukan. Tambahkan
                                        modul untuk memulai.
                                    </div>
                                )}
                            </div>

                            {/* Add New Module Button */}
                            <div className="rounded-xl border-2 border-dashed border-[#e2e8f0] bg-[#f8fafc]/50 p-8 text-center transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc]">
                                <button
                                    onClick={() =>
                                        (window.location.href = route(
                                            'admin.module.create',
                                            classData.id,
                                        ))
                                    }
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

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold text-slate-800">
                                Detail Kelas
                            </h3>
                            <div className="space-y-4">
                                {classData.thumbnail_url && (
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                                            Thumbnail
                                        </label>
                                        <img
                                            src={classData.thumbnail_url}
                                            alt={classData.title}
                                            className="h-48 w-full rounded-md object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-500">
                                        Status
                                    </label>
                                    <div className="mt-1">
                                        <span
                                            className={`rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${
                                                classData.status === 'published'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}
                                        >
                                            {classData.status === 'published'
                                                ? 'Published'
                                                : 'Draft'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-500">
                                        Tanggal Publikasi
                                    </label>
                                    <div className="mt-1 text-sm font-medium text-slate-700">
                                        {classData.published_at
                                            ? new Date(
                                                  classData.published_at,
                                              ).toLocaleDateString('id-ID', {
                                                  day: 'numeric',
                                                  month: 'long',
                                                  year: 'numeric',
                                              })
                                            : 'Belum Dipublis'}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-500">
                                        Harga
                                    </label>
                                    <div className="mt-1 flex items-baseline gap-2">
                                        <span className="text-xl font-bold text-primary">
                                            Rp{' '}
                                            {classData.price_final?.toLocaleString(
                                                'id-ID',
                                            ) || 0}
                                        </span>
                                        {classData.discount > 0 && (
                                            <span className="text-sm text-slate-400 line-through">
                                                Rp{' '}
                                                {classData.price?.toLocaleString(
                                                    'id-ID',
                                                ) || 0}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase text-slate-500">
                                        Deskripsi
                                    </label>
                                    <div
                                        className="prose prose-sm mt-1 max-h-40 overflow-y-auto text-slate-600"
                                        dangerouslySetInnerHTML={{
                                            __html: classData.description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold text-slate-800">
                                Mentor
                            </h3>
                            <div className="space-y-3">
                                {classData.mentors &&
                                classData.mentors.length > 0 ? (
                                    classData.mentors.map((mentor) => (
                                        <div
                                            key={mentor.id}
                                            className="flex items-center gap-3"
                                        >
                                            <img
                                                src={
                                                    mentor.avatar_url ||
                                                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                        mentor.name,
                                                    )}&background=random`
                                                }
                                                alt={mentor.name}
                                                className="h-10 w-10 rounded-full object-cover"
                                            />
                                            <span className="font-medium text-slate-700">
                                                {mentor.name}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-sm text-slate-500">
                                        Belum ada mentor
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Class Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 transition-opacity"
                        onClick={closeEditModal}
                    />
                    {/* Modal Content */}
                    <div className="relative z-10 my-8 w-full max-w-5xl rounded-xl bg-slate-100 p-6 shadow-xl">
                        {/* Modal Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">
                                Edit Kelas
                            </h2>
                            <button
                                onClick={closeEditModal}
                                className="rounded-md p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
                            >
                                <Icon name="close" size={24} />
                            </button>
                        </div>

                        {/* Modal Body - Class Form */}
                        <ClassForm
                            formData={formData}
                            onFormDataChange={setFormData}
                            categories={categories}
                            mentors={mentors}
                            selectedMentors={selectedMentors}
                            onAddMentor={handleAddMentor}
                            onRemoveMentor={handleRemoveMentor}
                            thumbnailPreview={thumbnailPreview}
                            onThumbnailChange={handleThumbnailChange}
                            errors={errors}
                        />

                        {/* Modal Footer */}
                        <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
                            <button
                                type="button"
                                onClick={closeEditModal}
                                disabled={processing}
                                className="rounded-md px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50"
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={processing}
                                className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                            >
                                <Icon name="save" size={18} />
                                {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
