import AddQuestionButton from '@/Components/Admin/AddQuestionButton';
import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import FormSelect from '@/Components/Admin/FormSelect';
import QuestionCard, { QuestionData } from '@/Components/Admin/QuestionCard';
import QuizContextSelector, {
    QuizContextType,
} from '@/Components/Admin/QuizContextSelector';
import Icon from '@/Components/Icon';

export interface QuizFormData {
    title: string;
    moduleId: string;
    quizContext: QuizContextType;
    questions: QuestionData[];
}

export interface QuizFormErrors {
    title?: string;
    module_id?: string;
    questions?: string;
    [key: string]: string | undefined;
}

export interface ModuleOption {
    id: number;
    title: string;
}

// Empty initial question
export const createEmptyQuestion = (id: number): QuestionData => ({
    id,
    text: '',
    type: 'multiple_choice',
    isExpanded: true,
    points: 1,
    options: [
        { id: id * 100 + 1, text: '', isCorrect: true },
        { id: id * 100 + 2, text: '', isCorrect: false },
    ],
});

interface QuizFormProps {
    data: QuizFormData;
    errors: QuizFormErrors;
    modules: ModuleOption[];
    onDataChange: (data: QuizFormData) => void;
    isCompact?: boolean; // For modal mode - hides module selector
    showModuleSelector?: boolean; // Whether to show module selector
}

export default function QuizForm({
    data,
    errors,
    modules,
    onDataChange,
    isCompact = false,
    showModuleSelector = true,
}: QuizFormProps) {
    const { title, moduleId, quizContext, questions } = data;

    // Toggle question expanded/collapsed
    const handleToggleQuestion = (id: number) => {
        onDataChange({
            ...data,
            questions: questions.map((q) =>
                q.id === id ? { ...q, isExpanded: !q.isExpanded } : q,
            ),
        });
    };

    // Delete question
    const handleDeleteQuestion = (id: number) => {
        if (questions.length > 1) {
            onDataChange({
                ...data,
                questions: questions.filter((q) => q.id !== id),
            });
        }
    };

    // Duplicate question
    const handleDuplicateQuestion = (id: number) => {
        const questionToDuplicate = questions.find((q) => q.id === id);
        if (questionToDuplicate) {
            const newId = Math.max(...questions.map((q) => q.id)) + 1;
            const duplicated: QuestionData = {
                ...questionToDuplicate,
                id: newId,
                text: `${questionToDuplicate.text} (Copy)`,
                options: questionToDuplicate.options.map((opt, idx) => ({
                    ...opt,
                    id: newId * 100 + idx,
                })),
            };
            const index = questions.findIndex((q) => q.id === id);
            const newQuestions = [...questions];
            newQuestions.splice(index + 1, 0, duplicated);
            onDataChange({
                ...data,
                questions: newQuestions,
            });
        }
    };

    // Update question text
    const handleQuestionTextChange = (id: number, text: string) => {
        onDataChange({
            ...data,
            questions: questions.map((q) => (q.id === id ? { ...q, text } : q)),
        });
    };

    // Update option text
    const handleOptionChange = (
        questionId: number,
        optionId: number,
        text: string,
    ) => {
        onDataChange({
            ...data,
            questions: questions.map((q) =>
                q.id === questionId
                    ? {
                          ...q,
                          options: q.options.map((opt) =>
                              opt.id === optionId ? { ...opt, text } : opt,
                          ),
                      }
                    : q,
            ),
        });
    };

    // Select correct option
    const handleOptionSelect = (questionId: number, optionId: number) => {
        onDataChange({
            ...data,
            questions: questions.map((q) =>
                q.id === questionId
                    ? {
                          ...q,
                          options: q.options.map((opt) => ({
                              ...opt,
                              isCorrect: opt.id === optionId,
                          })),
                      }
                    : q,
            ),
        });
    };

    // Remove option
    const handleOptionRemove = (questionId: number, optionId: number) => {
        onDataChange({
            ...data,
            questions: questions.map((q) =>
                q.id === questionId
                    ? {
                          ...q,
                          options: q.options.filter(
                              (opt) => opt.id !== optionId,
                          ),
                      }
                    : q,
            ),
        });
    };

    // Add option to question
    const handleAddOption = (questionId: number) => {
        onDataChange({
            ...data,
            questions: questions.map((q) =>
                q.id === questionId
                    ? {
                          ...q,
                          options: [
                              ...q.options,
                              {
                                  id: Date.now(),
                                  text: '',
                                  isCorrect: false,
                              },
                          ],
                      }
                    : q,
            ),
        });
    };

    // Add new question
    const handleAddQuestion = () => {
        const newId = Math.max(...questions.map((q) => q.id), 0) + 1;
        const newQuestion = createEmptyQuestion(newId);
        // Collapse all other questions
        onDataChange({
            ...data,
            questions: [
                ...questions.map((q) => ({ ...q, isExpanded: false })),
                newQuestion,
            ],
        });
    };

    // Calculate statistics
    const totalQuestions = questions.length;
    const totalPoints = questions.reduce((acc, q) => acc + (q.points || 1), 0);

    // Map modules to select options
    const moduleOptions = modules.map((m) => ({
        value: m.id.toString(),
        label: m.title,
    }));

    return (
        <div
            className={`grid grid-cols-1 gap-6 ${isCompact ? '' : 'lg:grid-cols-12 lg:gap-8'}`}
        >
            {/* Left Column - Main Content */}
            <div
                className={`flex flex-col gap-6 ${isCompact ? '' : 'lg:col-span-8'}`}
            >
                {/* Quiz Configuration Section */}
                <FormCard icon="tune" title="Konfigurasi Kuis">
                    <div className="space-y-6">
                        {showModuleSelector && (
                            <FormSelect
                                label="Pilih Modul"
                                placeholder="Pilih modul..."
                                value={moduleId}
                                onChange={(val) =>
                                    onDataChange({ ...data, moduleId: val })
                                }
                                options={moduleOptions}
                                required
                                error={errors.module_id}
                            />
                        )}
                        <FormInput
                            label="Judul Kuis"
                            placeholder="contoh: Kuis Akhir Modul 3"
                            value={title}
                            onChange={(val) =>
                                onDataChange({ ...data, title: val })
                            }
                            required
                            error={errors.title}
                        />

                        <div className="grid grid-cols-1 gap-6">
                            <QuizContextSelector
                                value={quizContext}
                                onChange={(val) =>
                                    onDataChange({ ...data, quizContext: val })
                                }
                            />
                        </div>
                    </div>
                </FormCard>

                {/* Questions Section Header */}
                <div className="flex items-center justify-between rounded-md bg-[#f9fafb] px-4 py-3">
                    <h2 className="text-base font-bold text-[#101814] sm:text-lg">
                        Pertanyaan
                    </h2>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {totalQuestions}{' '}
                        {totalQuestions === 1 ? 'Pertanyaan' : 'Pertanyaan'}
                    </span>
                </div>

                {/* Validation error for questions */}
                {errors.questions && (
                    <div className="text-sm text-red-500">
                        {errors.questions}
                    </div>
                )}

                {/* Questions List */}
                <div className="space-y-4">
                    {questions.map((question, index) => (
                        <QuestionCard
                            key={question.id}
                            question={question}
                            index={index}
                            onToggle={handleToggleQuestion}
                            onDelete={handleDeleteQuestion}
                            onDuplicate={handleDuplicateQuestion}
                            onQuestionTextChange={handleQuestionTextChange}
                            onOptionChange={handleOptionChange}
                            onOptionSelect={handleOptionSelect}
                            onOptionRemove={handleOptionRemove}
                            onAddOption={handleAddOption}
                        />
                    ))}

                    {/* Add Question Button */}
                    <AddQuestionButton onClick={handleAddQuestion} />
                </div>
            </div>

            {/* Right Column - Quiz Summary (only show if not compact) */}
            {!isCompact && (
                <div className="lg:col-span-4">
                    <div className="sticky top-6 space-y-6">
                        {/* Quiz Summary Card */}
                        <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
                            <div className="border-b border-[#e5e7eb] bg-gradient-to-r from-primary/5 to-primary/10 px-5 py-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-[#101814]">
                                    Ringkasan Kuis
                                </h3>
                            </div>
                            <div className="space-y-4 p-5">
                                {/* Quiz Stats */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between rounded-md bg-[#f9fafb] p-3">
                                        <span className="text-sm text-[#5e6a62]">
                                            Judul Kuis
                                        </span>
                                        <span className="max-w-[140px] truncate text-sm font-semibold text-[#101814]">
                                            {title || 'Belum ada judul'}
                                        </span>
                                    </div>
                                    {showModuleSelector && (
                                        <div className="flex items-center justify-between rounded-md bg-[#f9fafb] p-3">
                                            <span className="text-sm text-[#5e6a62]">
                                                Modul
                                            </span>
                                            <span className="max-w-[140px] truncate text-sm font-semibold text-[#101814]">
                                                {modules.find(
                                                    (m) =>
                                                        m.id.toString() ===
                                                        moduleId,
                                                )?.title || 'Belum dipilih'}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between rounded-md bg-[#f9fafb] p-3">
                                        <span className="text-sm text-[#5e6a62]">
                                            Tipe
                                        </span>
                                        <span className="text-sm font-semibold capitalize text-[#101814]">
                                            {quizContext === 'pretest'
                                                ? 'Pretest'
                                                : 'Kuis Wajib'}
                                        </span>
                                    </div>
                                </div>

                                {/* Question Statistics */}
                                <div className="mt-5 space-y-3 border-t border-[#e5e7eb] pt-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                                        Statistik Pertanyaan
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between rounded-md bg-primary/10 p-3">
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    name="quiz"
                                                    size={16}
                                                    className="text-primary"
                                                />
                                                <span className="text-sm font-semibold text-[#5e6a62]">
                                                    Total Pertanyaan
                                                </span>
                                            </div>
                                            <span className="text-sm font-bold text-primary">
                                                {totalQuestions}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between rounded-md bg-[#f9fafb] p-3">
                                            <div className="flex items-center gap-2">
                                                <Icon
                                                    name="star"
                                                    size={16}
                                                    className="text-amber-500"
                                                />
                                                <span className="text-sm font-semibold text-[#5e6a62]">
                                                    Total Poin
                                                </span>
                                            </div>
                                            <span className="text-sm font-bold text-[#101814]">
                                                {totalPoints}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="mt-5 space-y-2 border-t border-[#e5e7eb] pt-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                                        Aksi Cepat
                                    </p>
                                    <button
                                        type="button"
                                        onClick={handleAddQuestion}
                                        className="flex w-full items-center justify-center gap-2 rounded-md bg-primary/5 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                                    >
                                        <Icon name="add_circle" size={18} />
                                        Tambah Pertanyaan
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                            <div className="flex gap-3">
                                <Icon
                                    name="info"
                                    size={20}
                                    className="shrink-0 text-blue-600"
                                />
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-blue-900">
                                        Tips Kuis
                                    </p>
                                    <p className="text-xs leading-relaxed text-blue-700">
                                        Pastikan setiap pertanyaan memiliki
                                        minimal 2 opsi jawaban dan satu jawaban
                                        yang benar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
