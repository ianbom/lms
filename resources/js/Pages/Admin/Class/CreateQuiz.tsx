import QuizForm, {
    createEmptyQuestion,
    QuizFormData,
    QuizFormErrors,
} from '@/Components/Admin/Quiz/QuizForm';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

interface Module {
    id: number;
    title: string;
}

interface ClassData {
    id: number;
    title: string;
}

interface Props {
    class: ClassData;
    modules: Module[];
}

export default function CreateQuiz({ class: classData, modules }: Props) {
    // Form data state
    const [formData, setFormData] = useState<QuizFormData>({
        title: '',
        moduleId: '',
        quizContext: 'post-test',
        questions: [createEmptyQuestion(1)],
    });

    // Form state
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<QuizFormErrors>({});

    // Handle form submission
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        // Transform data to match backend API
        const submitData = {
            module_id: parseInt(formData.moduleId),
            title: formData.title,
            is_pretest: formData.quizContext === 'pretest',
            questions: formData.questions.map((q, qIndex) => ({
                question: q.text,
                points: q.points || 1,
                sort_order: qIndex + 1,
                options: q.options.map((opt, optIndex) => ({
                    label: opt.text,
                    is_correct: opt.isCorrect,
                    sort_order: optIndex + 1,
                })),
            })),
        };

        router.post(route('admin.quiz.store'), submitData, {
            onError: (errors) => {
                setErrors(errors as QuizFormErrors);
                setProcessing(false);
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Kelas', href: route('admin.classes') },
                { label: classData.title },
                { label: 'Buat Kuis' },
            ]}
        >
            <Head title="Buat Kuis" />

            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold tracking-tight text-[#101814] sm:text-3xl">
                                Buat Kuis
                            </h1>
                            <p className="text-sm text-[#5e6a62] sm:text-base">
                                Konfigurasi pengaturan kuis dan kelola
                                pertanyaan di bawah.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href={route('admin.classes')}
                                className="inline-flex items-center justify-center rounded-md border border-[#dae7e0] bg-white px-4 py-2.5 text-sm font-semibold text-[#5e6a62] transition-colors hover:bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                            >
                                <Icon name="save" size={20} />
                                {processing ? 'Menyimpan...' : 'Simpan Kuis'}
                            </button>
                        </div>
                    </div>

                    {/* Error Display */}
                    {Object.keys(errors).length > 0 && (
                        <div className="rounded-md border border-red-200 bg-red-50 p-4">
                            <p className="text-sm font-medium text-red-800">
                                Terjadi kesalahan:
                            </p>
                            <ul className="mt-2 list-inside list-disc text-sm text-red-700">
                                {Object.values(errors).map((error, idx) => (
                                    <li key={idx}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Quiz Form Component */}
                    <QuizForm
                        data={formData}
                        errors={errors}
                        modules={modules}
                        onDataChange={setFormData}
                    />
                </div>
            </form>
        </AdminLayout>
    );
}
