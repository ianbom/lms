import QuizForm, {
    createEmptyQuestion,
    QuizFormData,
    QuizFormErrors,
} from '@/Components/Admin/Quiz/QuizForm';
import Icon from '@/Components/Icon';
import { router } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Module, QuizOption, QuizQuestion } from '../types';

interface EditQuizModalProps {
    isOpen: boolean;
    onClose: () => void;
    quizId: number | null;
    modules: Module[];
}

export default function EditQuizModal({
    isOpen,
    onClose,
    quizId,
    modules,
}: EditQuizModalProps) {
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<QuizFormErrors>({});
    const [formData, setFormData] = useState<QuizFormData>({
        title: '',
        moduleId: '',
        quizContext: 'post-test',
        questions: [createEmptyQuestion(1)],
    });

    // Fetch quiz data when modal opens
    useEffect(() => {
        if (isOpen && quizId) {
            fetchQuizData(quizId);
        }
    }, [isOpen, quizId]);

    const fetchQuizData = async (id: number) => {
        setLoading(true);
        try {
            const response = await axios.get(route('admin.quiz.get', id));
            const quiz = response.data;

            const questions = quiz.questions?.map(
                (q: QuizQuestion, index: number) => ({
                    id: index + 1,
                    text: q.question,
                    type: 'multiple_choice' as const,
                    isExpanded: index === 0,
                    points: q.points || 1,
                    options:
                        q.options?.map((opt: QuizOption, optIndex: number) => ({
                            id: (index + 1) * 100 + optIndex,
                            text: opt.label,
                            isCorrect: opt.is_correct,
                        })) || [],
                })
            ) || [createEmptyQuestion(1)];

            setFormData({
                title: quiz.title,
                moduleId: quiz.module_id?.toString() || '',
                quizContext: quiz.is_pretest ? 'pretest' : 'post-test',
                questions: questions.length > 0 ? questions : [createEmptyQuestion(1)],
            });
            setErrors({});
        } catch (error) {
            console.error('Error fetching quiz:', error);
            handleClose();
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setFormData({
            title: '',
            moduleId: '',
            quizContext: 'post-test',
            questions: [createEmptyQuestion(1)],
        });
        setErrors({});
        onClose();
    };

    const handleSubmit = () => {
        if (!quizId) return;

        setProcessing(true);
        setErrors({});

        const submitData = {
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

        router.put(route('admin.quiz.update', quizId), submitData, {
            preserveScroll: true,
            onSuccess: () => {
                handleClose();
            },
            onError: (errors) => {
                setErrors(errors as QuizFormErrors);
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => !processing && !loading && handleClose()}
            />
            {/* Modal Content */}
            <div className="relative z-10 my-8 w-full max-w-5xl rounded-xl bg-slate-100 p-6 shadow-xl">
                {/* Modal Header */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900">Edit Kuis</h2>
                    <button
                        onClick={handleClose}
                        disabled={processing || loading}
                        className="rounded-md p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 disabled:opacity-50"
                    >
                        <Icon name="close" size={24} />
                    </button>
                </div>

                {/* Modal Body - Quiz Form */}
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto rounded-lg bg-white p-6">
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                                <p className="text-sm text-slate-500">
                                    Memuat data kuis...
                                </p>
                            </div>
                        </div>
                    ) : (
                        <QuizForm
                            data={formData}
                            errors={errors}
                            modules={modules.map((m) => ({
                                id: m.id,
                                title: m.title,
                            }))}
                            onDataChange={setFormData}
                            isCompact
                            showModuleSelector={false}
                        />
                    )}
                </div>

                {/* Modal Footer */}
                <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
                    <button
                        type="button"
                        onClick={handleClose}
                        disabled={processing || loading}
                        className="rounded-md px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={processing || loading}
                        className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                    >
                        <Icon name="save" size={18} />
                        {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                    </button>
                </div>
            </div>
        </div>
    );
}
