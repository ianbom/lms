import AddQuestionButton from '@/Components/Admin/AddQuestionButton';
import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import FormSelect from '@/Components/Admin/FormSelect';
import QuestionCard, { QuestionData } from '@/Components/Admin/QuestionCard';
import QuizContextSelector, {
    QuizContextType,
} from '@/Components/Admin/QuizContextSelector';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

// Sample initial questions
const initialQuestions: QuestionData[] = [
    {
        id: 1,
        text: 'Which HTML tag is used to define an internal style sheet?',
        type: 'multiple_choice',
        isExpanded: true,
        options: [
            { id: 1, text: '<style>', isCorrect: true },
            { id: 2, text: '<script>', isCorrect: false },
            { id: 3, text: '<css>', isCorrect: false },
        ],
    },
    {
        id: 2,
        text: 'What is the correct CSS syntax for making all the <p> elements bold?',
        type: 'multiple_choice',
        isExpanded: false,
        options: [
            { id: 1, text: 'p { font-weight: bold; }', isCorrect: true },
            { id: 2, text: 'p { text-style: bold; }', isCorrect: false },
        ],
    },
    {
        id: 3,
        text: 'Which property is used to change the background color?',
        type: 'multiple_choice',
        isExpanded: false,
        options: [
            { id: 1, text: 'color', isCorrect: false },
            { id: 2, text: 'background-color', isCorrect: true },
            { id: 3, text: 'bgcolor', isCorrect: false },
            { id: 4, text: 'bg-color', isCorrect: false },
        ],
    },
];

export default function CreateQuiz() {
    // Quiz configuration state
    const [quizTitle, setQuizTitle] = useState(
        'Web Development Basics - Final Quiz',
    );
    const [selectedModule, setSelectedModule] = useState('');
    const [quizContext, setQuizContext] = useState<QuizContextType>('required');

    const modules = [
        { value: '1', label: 'Module 1: HTML Basics' },
        { value: '2', label: 'Module 2: CSS Fundamentals' },
        { value: '3', label: 'Module 3: JavaScript Essentials' },
        { value: '4', label: 'Module 4: Advanced React' },
    ];

    // Questions state
    const [questions, setQuestions] =
        useState<QuestionData[]>(initialQuestions);

    // Toggle question expanded/collapsed
    const handleToggleQuestion = (id: number) => {
        setQuestions(
            questions.map((q) =>
                q.id === id ? { ...q, isExpanded: !q.isExpanded } : q,
            ),
        );
    };

    // Delete question
    const handleDeleteQuestion = (id: number) => {
        setQuestions(questions.filter((q) => q.id !== id));
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
            setQuestions(newQuestions);
        }
    };

    // Update question text
    const handleQuestionTextChange = (id: number, text: string) => {
        setQuestions(questions.map((q) => (q.id === id ? { ...q, text } : q)));
    };

    // Update option text
    const handleOptionChange = (
        questionId: number,
        optionId: number,
        text: string,
    ) => {
        setQuestions(
            questions.map((q) =>
                q.id === questionId
                    ? {
                          ...q,
                          options: q.options.map((opt) =>
                              opt.id === optionId ? { ...opt, text } : opt,
                          ),
                      }
                    : q,
            ),
        );
    };

    // Select correct option
    const handleOptionSelect = (questionId: number, optionId: number) => {
        setQuestions(
            questions.map((q) =>
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
        );
    };

    // Remove option
    const handleOptionRemove = (questionId: number, optionId: number) => {
        setQuestions(
            questions.map((q) =>
                q.id === questionId
                    ? {
                          ...q,
                          options: q.options.filter(
                              (opt) => opt.id !== optionId,
                          ),
                      }
                    : q,
            ),
        );
    };

    // Add option to question
    const handleAddOption = (questionId: number) => {
        setQuestions(
            questions.map((q) =>
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
        );
    };

    // Add new question
    const handleAddQuestion = () => {
        const newId = Math.max(...questions.map((q) => q.id), 0) + 1;
        const newQuestion: QuestionData = {
            id: newId,
            text: '',
            type: 'multiple_choice',
            isExpanded: true,
            options: [
                { id: newId * 100 + 1, text: '', isCorrect: true },
                { id: newId * 100 + 2, text: '', isCorrect: false },
                { id: newId * 100 + 3, text: '', isCorrect: false },
                { id: newId * 100 + 4, text: '', isCorrect: false },
            ],
        };
        // Collapse all other questions
        setQuestions([
            ...questions.map((q) => ({ ...q, isExpanded: false })),
            newQuestion,
        ]);
    };

    // Calculate statistics
    // Calculate statistics
    const totalQuestions = questions.length;

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Classes', href: route('admin.classes') },
                { label: 'Web Development 101' },
                { label: 'Quiz Builder' },
            ]}
        >
            <Head title="Create Quiz" />

            <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
                {/* Page Header - Improved */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight text-[#101814] sm:text-3xl">
                            Create Assessment
                        </h1>
                        <p className="text-sm text-[#5e6a62] sm:text-base">
                            Configure your quiz settings and manage questions
                            below.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={route('admin.classes')}
                            className="inline-flex items-center justify-center rounded-lg border border-[#dae7e0] bg-white px-4 py-2.5 text-sm font-semibold text-[#5e6a62] transition-colors hover:bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Cancel
                        </Link>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <Icon name="save" size={20} />
                            Save & Publish
                        </button>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column - Main Content */}
                    <div className="flex flex-col gap-6 lg:col-span-8">
                        {/* Quiz Configuration Section */}
                        <FormCard icon="tune" title="Quiz Configuration">
                            <div className="space-y-6">
                                <FormSelect
                                    label="Select Module"
                                    placeholder="Choose a module..."
                                    value={selectedModule}
                                    onChange={setSelectedModule}
                                    options={modules}
                                />
                                <FormInput
                                    label="Quiz Title"
                                    placeholder="e.g. Module 3 Final Assessment"
                                    value={quizTitle}
                                    onChange={setQuizTitle}
                                />

                                <div className="grid grid-cols-1 gap-6">
                                    <QuizContextSelector
                                        value={quizContext}
                                        onChange={setQuizContext}
                                    />
                                </div>
                            </div>
                        </FormCard>

                        {/* Questions Section Header */}
                        <div className="flex items-center justify-between rounded-lg bg-[#f9fafb] px-4 py-3">
                            <h2 className="text-base font-bold text-[#101814] sm:text-lg">
                                Questions
                            </h2>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                {totalQuestions}{' '}
                                {totalQuestions === 1
                                    ? 'Question'
                                    : 'Questions'}
                            </span>
                        </div>

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
                                    onQuestionTextChange={
                                        handleQuestionTextChange
                                    }
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

                    {/* Right Column - Quiz Summary */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-6 space-y-6">
                            {/* Quiz Summary Card */}
                            <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
                                <div className="border-b border-[#e5e7eb] bg-gradient-to-r from-primary/5 to-primary/10 px-5 py-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#101814]">
                                        Quiz Summary
                                    </h3>
                                </div>
                                <div className="space-y-4 p-5">
                                    {/* Quiz Stats */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between rounded-lg bg-[#f9fafb] p-3">
                                            <span className="text-sm text-[#5e6a62]">
                                                Quiz Title
                                            </span>
                                            <span className="max-w-[140px] truncate text-sm font-semibold text-[#101814]">
                                                {quizTitle || 'Untitled'}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between rounded-lg bg-[#f9fafb] p-3">
                                            <span className="text-sm text-[#5e6a62]">
                                                Context
                                            </span>
                                            <span className="text-sm font-semibold capitalize text-[#101814]">
                                                {quizContext}
                                            </span>
                                        </div>
                                        {/* <div className="flex items-center justify-between rounded-lg bg-[#f9fafb] p-3">
                                            <span className="text-sm text-[#5e6a62]">
                                                Passing Score
                                            </span>
                                            <span className="text-sm font-semibold text-[#101814]">
                                                {passingScore}%
                                            </span>
                                        </div> */}
                                    </div>

                                    {/* Question Statistics */}
                                    {/* Question Statistics */}
                                    <div className="mt-5 space-y-3 border-t border-[#e5e7eb] pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                                            Question Breakdown
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between rounded-lg bg-primary/10 p-3">
                                                <div className="flex items-center gap-2">
                                                    <Icon
                                                        name="quiz"
                                                        size={16}
                                                        className="text-primary"
                                                    />
                                                    <span className="text-sm font-semibold text-[#5e6a62]">
                                                        Total Questions
                                                    </span>
                                                </div>
                                                <span className="text-sm font-bold text-primary">
                                                    {totalQuestions}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="mt-5 space-y-2 border-t border-[#e5e7eb] pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                                            Quick Actions
                                        </p>
                                        <button
                                            type="button"
                                            onClick={handleAddQuestion}
                                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary/5 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                                        >
                                            <Icon name="add_circle" size={18} />
                                            Add Question
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
                                            Quiz Tips
                                        </p>
                                        <p className="text-xs leading-relaxed text-blue-700">
                                            Set a passing score that challenges
                                            students while remaining achievable.
                                            We recommend 70-80% for most
                                            assessments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
