import CourseStats from '@/Components/Admin/Course/CourseStats';
import ModuleCard, { ModuleData } from '@/Components/Admin/Course/ModuleCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

interface DetailClassProps {
    classId: string;
}

// Sample Data
const moduleData: ModuleData[] = [
    {
        id: 1,
        title: 'Module 1: Introduction to React',
        status: 'published',
        stats: { videos: 4, quizzes: 1, duration: '45m 20s' },
        lessons: [
            {
                id: 101,
                title: 'What is React?',
                type: 'video',
                durationOrQuestions: '10m 15s',
            },
            {
                id: 102,
                title: 'Setting up the Environment',
                type: 'video',
                durationOrQuestions: '15m 30s',
            },
            {
                id: 103,
                title: 'React Basics Quiz',
                type: 'quiz',
                durationOrQuestions: '10 Questions',
            },
        ],
    },
    {
        id: 2,
        title: 'Module 2: Components & Props',
        status: 'draft',
        stats: { videos: 6, quizzes: 2, duration: '1h 15m' },
        lessons: [],
    },
    {
        id: 3,
        title: 'Module 3: State Management',
        status: 'draft',
        stats: { videos: 3, quizzes: 0, duration: '35m' },
        lessons: [],
    },
];

export default function DetailClass({ classId }: DetailClassProps) {
    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Classes', href: route('admin.classes') },
                { label: 'Web Development 101' },
                { label: 'Curriculum' },
            ]}
        >
            <Head title="Course Content" />

            <div className="space-y-8 px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-[#1e293b]">
                            Course Content
                        </h1>
                        <p className="mt-2 text-base text-[#64748b]">
                            Organize your curriculum into modules and lessons.
                            Drag and drop to reorder content.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b]">
                            <Icon name="visibility" size={20} />
                            Preview
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#059669] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#059669]/20 transition-all hover:bg-[#047857]">
                            <Icon name="save" size={20} />
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <CourseStats
                    totalModules={8}
                    totalLessons={42}
                    totalDuration="5h 20m"
                />

                {/* Curriculum Structure */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                            Curriculum Structure
                        </h2>
                        <button className="text-sm font-bold text-[#059669] hover:underline">
                            Expand All
                        </button>
                    </div>

                    <div className="space-y-4">
                        {moduleData.map((module, index) => (
                            <ModuleCard
                                key={module.id}
                                module={module}
                                isExpanded={index === 0}
                            />
                        ))}
                    </div>

                    {/* Add New Module Button */}
                    <div className="rounded-xl border-2 border-dashed border-[#e2e8f0] bg-[#f8fafc]/50 p-8 text-center transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc]">
                        <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f5f9] text-[#64748b] transition-transform hover:scale-110 hover:bg-[#e2e8f0] hover:text-[#1e293b]">
                            <Icon name="add" size={24} />
                        </button>
                        <p className="mt-3 text-sm font-bold text-[#64748b]">
                            Add New Module
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
