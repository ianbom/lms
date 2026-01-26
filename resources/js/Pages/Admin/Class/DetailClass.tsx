import {
    Category,
    Mentor as MentorOption,
} from '@/Components/Admin/Class/ClassForm';
import CourseStats from '@/Components/Admin/Course/CourseStats';
import ModuleCard, { ModuleData } from '@/Components/Admin/Course/ModuleCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import ClassDetailSidebar from './ClassDetailSidebar';
import {
    EditClassModal,
    EditModuleModal,
    EditQuizModal,
    PublishConfirmModal,
} from './Modals';
import { ClassData, ClassStats, formatDuration } from './types';

interface DetailClassProps {
    classData: ClassData;
    stats: ClassStats;
    categories: Category[];
    mentors: MentorOption[];
}

export default function DetailClass({
    classData,
    stats,
    categories,
    mentors,
}: DetailClassProps) {
    // Modal states
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
    const [isEditModuleModalOpen, setIsEditModuleModalOpen] = useState(false);
    const [isEditQuizModalOpen, setIsEditQuizModalOpen] = useState(false);
    const [selectedModuleId, setSelectedModuleId] = useState<number | null>(
        null,
    );
    const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null);

    // Modal handlers
    const openEditModuleModal = (moduleId: number) => {
        setSelectedModuleId(moduleId);
        setIsEditModuleModalOpen(true);
    };

    const openEditQuizModal = (quizId: number) => {
        setSelectedQuizId(quizId);
        setIsEditQuizModalOpen(true);
    };

    // Transform backend modules to ModuleData format
    const modules: ModuleData[] = classData.modules.map((m) => {
        const videoDuration = m.videos.reduce(
            (acc, v) => acc + (v.duration_sec || 0),
            0,
        );

        return {
            id: m.id,
            title: m.title,
            status: 'published',
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
                    resourcesCount: v.resources?.length || 0,
                })),
                ...m.quizzes.map((q) => ({
                    id: q.id,
                    title: q.title,
                    type: 'quiz' as const,
                    durationOrQuestions: `${q.questions_count || 0} Soal`,
                })),
            ],
            quizIds: m.quizzes.map((q) => q.id),
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
                <PageHeader
                    classData={classData}
                    onEdit={() => setIsEditModalOpen(true)}
                    onPublish={() => setIsPublishModalOpen(true)}
                />

                {/* Statistics Cards */}
                <CourseStats
                    totalModules={stats.total_modules}
                    totalLessons={stats.total_videos + stats.total_quizzes}
                    totalDuration={formatDuration(stats.total_duration_seconds)}
                />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Curriculum Structure */}
                    <div className="space-y-8 lg:col-span-2">
                        <CurriculumSection
                            modules={modules}
                            classId={classData.id}
                            onEditModule={openEditModuleModal}
                            onEditQuiz={openEditQuizModal}
                        />
                    </div>

                    {/* Sidebar Info */}
                    <ClassDetailSidebar classData={classData} />
                </div>
            </div>

            {/* Modals */}
            <EditClassModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                classData={classData}
                categories={categories}
                mentors={mentors}
            />

            <PublishConfirmModal
                isOpen={isPublishModalOpen}
                onClose={() => setIsPublishModalOpen(false)}
                classId={classData.id}
                classTitle={classData.title}
            />

            <EditModuleModal
                isOpen={isEditModuleModalOpen}
                onClose={() => {
                    setIsEditModuleModalOpen(false);
                    setSelectedModuleId(null);
                }}
                moduleId={selectedModuleId}
                modules={classData.modules}
            />

            <EditQuizModal
                isOpen={isEditQuizModalOpen}
                onClose={() => {
                    setIsEditQuizModalOpen(false);
                    setSelectedQuizId(null);
                }}
                quizId={selectedQuizId}
                modules={classData.modules}
            />
        </AdminLayout>
    );
}

// Sub-components
interface PageHeaderProps {
    classData: ClassData;
    onEdit: () => void;
    onPublish: () => void;
}

function PageHeader({ classData, onEdit, onPublish }: PageHeaderProps) {
    return (
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
                        {classData.status === 'published' ? 'Publish' : 'Draf'}
                    </span>
                    <span className="text-sm text-slate-500">
                        {classData.category?.name}
                    </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-[#1e293b]">
                    {classData.title}
                </h1>
                <p className="mt-2 text-base text-[#64748b]">
                    Atur kurikulum Anda menjadi modul dan pelajaran. Seret dan
                    lepas untuk mengatur ulang konten.
                </p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b]"
                    onClick={onEdit}
                >
                    <Icon name="edit" size={20} />
                    Edit
                </button>
                {classData.status === 'draft' ? (
                    <button
                        onClick={onPublish}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-[#059669] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#059669]/20 transition-all hover:bg-[#047857]"
                    >
                        <Icon name="save" size={20} />
                        Publish Kelas
                    </button>
                ) : (
                    <span className="inline-flex items-center justify-center gap-2 rounded-md bg-green-100 px-4 py-2.5 text-sm font-bold text-green-800">
                        <Icon name="check" size={20} />
                        Sudah Dipublish
                    </span>
                )}
            </div>
        </div>
    );
}

interface CurriculumSectionProps {
    modules: ModuleData[];
    classId: number;
    onEditModule: (moduleId: number) => void;
    onEditQuiz: (quizId: number) => void;
}

function CurriculumSection({
    modules,
    classId,
    onEditModule,
    onEditQuiz,
}: CurriculumSectionProps) {
    return (
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
                            onEdit={onEditModule}
                            onEditQuiz={onEditQuiz}
                        />
                    ))
                ) : (
                    <div className="py-10 text-center text-slate-500">
                        Tidak ada modul ditemukan. Tambahkan modul untuk
                        memulai.
                    </div>
                )}
            </div>

            {/* Add New Module Button */}
            <div className="rounded-xl border-2 border-dashed border-[#e2e8f0] bg-[#f8fafc]/50 p-8 text-center transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc]">
                <button
                    onClick={() =>
                        (window.location.href = route(
                            'admin.module.create',
                            classId,
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
    );
}
