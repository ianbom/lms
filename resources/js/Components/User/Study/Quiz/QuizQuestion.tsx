import Icon from '@/Components/Icon';
import { QuizOption, QuizResult } from '@/types/study';

interface QuizQuestionProps {
    question: {
        id: number;
        question: string;
        points: number;
        options: QuizOption[];
    };
    questionIndex: number;
    totalQuestions: number;
    selectedOptionId: number | null;
    onSelectOption: (optionId: number) => void;
    onNext: () => void;
    onPrev: () => void;
    onSubmit: () => void;
    isLastQuestion: boolean;
    isFirstQuestion: boolean;
    isSubmitting: boolean;
    isReviewing: boolean;
    quizResult: QuizResult | null;
}

export default function QuizQuestion({
    question,
    questionIndex,
    totalQuestions,
    selectedOptionId,
    onSelectOption,
    onNext,
    onPrev,
    onSubmit,
    isLastQuestion,
    isFirstQuestion,
    isSubmitting,
    isReviewing,
    quizResult,
}: QuizQuestionProps) {
    const getOptionState = (optionId: number) => {
        if (!isReviewing || !quizResult) return null;

        const answerResult = quizResult.answers.find(
            (a) => a.questionId === question.id,
        );

        if (!answerResult) return null;

        if (optionId === answerResult.correctOptionId) {
            return 'correct';
        }
        if (optionId === answerResult.selectedOptionId && !answerResult.isCorrect) {
            return 'incorrect';
        }
        return null;
    };

    return (
        <div className="flex min-h-[600px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
            {/* Card Header */}
            <div className="px-6 pb-4 pt-8 bg-pri">
                <div className="mb-4 flex items-start justify-between">
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                        Soal {questionIndex + 1} dari {totalQuestions}
                    </span>
                    <button
                        className="text-slate-400 transition-colors hover:text-yellow-500"
                        title="Laporkan soal"
                    >
                        <Icon name="flag" size={20} />
                    </button>
                </div>
                <h2
                    className="text-xl font-bold leading-tight text-slate-900 md:text-2xl"
                    dangerouslySetInnerHTML={{ __html: formatQuestion(question.question) }}
                />
            </div>

            {/* Card Body: Options */}
            <div className="flex-grow px-6 py-2">
                <div className="flex flex-col gap-4">
                    {question.options.map((option) => (
                        <OptionButton
                            key={option.id}
                            option={option}
                            isSelected={selectedOptionId === option.id}
                            optionState={getOptionState(option.id)}
                            isReviewing={isReviewing}
                            onSelect={() => onSelectOption(option.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Card Footer: Controls */}
            <QuestionFooter
                onPrev={onPrev}
                onNext={onNext}
                onSubmit={onSubmit}
                isFirstQuestion={isFirstQuestion}
                isLastQuestion={isLastQuestion}
                isSubmitting={isSubmitting}
                isReviewing={isReviewing}
            />
        </div>
    );
}

// Helper to format question with code tags
function formatQuestion(text: string): string {
    // Replace backtick code with styled code tags
    return text.replace(
        /`([^`]+)`/g,
        '<code class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-pink-600">$1</code>',
    );
}

// Sub-components
function OptionButton({
    option,
    isSelected,
    optionState,
    isReviewing,
    onSelect,
}: {
    option: QuizOption;
    isSelected: boolean;
    optionState: 'correct' | 'incorrect' | null;
    isReviewing: boolean;
    onSelect: () => void;
}) {
    const getOptionClasses = () => {
        const baseClass =
            'group relative flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-all duration-200';

        if (isReviewing) {
            if (optionState === 'correct') {
                return `${baseClass} border-green-500 bg-green-50`;
            }
            if (optionState === 'incorrect') {
                return `${baseClass} border-red-500 bg-red-50`;
            }
            if (isSelected) {
                return `${baseClass} border-slate-300 bg-slate-50`;
            }
            return `${baseClass} border-slate-200 bg-white`;
        }

        if (isSelected) {
            return `${baseClass} border-primary bg-primary/5`;
        }
        return `${baseClass} border-slate-200 bg-white hover:border-slate-300`;
    };

    const getRadioClasses = () => {
        if (isReviewing && optionState === 'correct') {
            return 'border-green-500 bg-green-500';
        }
        if (isReviewing && optionState === 'incorrect') {
            return 'border-red-500 bg-red-500';
        }
        if (isSelected) {
            return 'border-primary bg-white';
        }
        return 'border-slate-300 bg-transparent';
    };

    const getTextClasses = () => {
        if (isReviewing && optionState === 'correct') {
            return 'font-medium text-green-700';
        }
        if (isReviewing && optionState === 'incorrect') {
            return 'font-medium text-red-700';
        }
        if (isSelected) {
            return 'font-medium text-slate-900';
        }
        return 'text-slate-700';
    };

    return (
        <label className={getOptionClasses()} onClick={!isReviewing ? onSelect : undefined}>
            <div className="relative mt-0.5 flex flex-shrink-0 items-center justify-center">
                <input
                    type="radio"
                    name="answer"
                    checked={isSelected}
                    onChange={() => {}}
                    className="peer sr-only"
                    disabled={isReviewing}
                />
                <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${getRadioClasses()}`}
                >
                    {isSelected && !isReviewing && (
                        <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                    )}
                    {isReviewing && optionState === 'correct' && (
                        <Icon name="check" size={14} className="text-white" />
                    )}
                    {isReviewing && optionState === 'incorrect' && (
                        <Icon name="close" size={14} className="text-white" />
                    )}
                </div>
            </div>
            <div className="flex-grow">
                <span
                    className={`block text-sm md:text-base ${getTextClasses()} transition-colors group-hover:text-primary`}
                >
                    {option.label}
                </span>
            </div>
        </label>
    );
}

function QuestionFooter({
    onPrev,
    onNext,
    onSubmit,
    isFirstQuestion,
    isLastQuestion,
    isSubmitting,
    isReviewing,
}: {
    onPrev: () => void;
    onNext: () => void;
    onSubmit: () => void;
    isFirstQuestion: boolean;
    isLastQuestion: boolean;
    isSubmitting: boolean;
    isReviewing: boolean;
}) {
    return (
        <div className="mt-auto border-t border-slate-100 bg-slate-50/50 px-6 py-6">
            <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">

                {/* Right: Navigation */}
                <div className="flex w-full items-center gap-3 sm:w-auto">
                    <button
                        onClick={onPrev}
                        disabled={isFirstQuestion}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
                    >
                        Sebelumnya
                    </button>

                    {isLastQuestion && !isReviewing ? (
                        <button
                            onClick={onSubmit}
                            disabled={isSubmitting}
                            className="flex flex-1 transform items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg active:scale-95 disabled:opacity-50 sm:flex-none"
                        >
                            {isSubmitting ? (
                                <>
                                    <Icon
                                        name="progress_activity"
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Mengirim...
                                </>
                            ) : (
                                <>
                                    Kumpulkan
                                    <Icon name="send" size={18} />
                                </>
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={onNext}
                            disabled={isLastQuestion && isReviewing}
                            className="flex flex-1 transform items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg active:scale-95 disabled:opacity-50 sm:flex-none"
                        >
                            Selanjutnya
                            <Icon name="arrow_forward" size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
