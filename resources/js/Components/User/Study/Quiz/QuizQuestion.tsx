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
        <div className="shadow-card rounded-2xl border border-slate-100 bg-white p-8">
            {/* Question Header */}
            <QuestionHeader
                questionIndex={questionIndex}
                totalQuestions={totalQuestions}
                points={question.points}
            />

            {/* Question Text */}
            <h2 className="mb-8 text-xl font-semibold text-slate-900">
                {question.question}
            </h2>

            {/* Options */}
            <div className="mb-8 space-y-3">
                {question.options.map((option, index) => (
                    <OptionButton
                        key={option.id}
                        option={option}
                        index={index}
                        isSelected={selectedOptionId === option.id}
                        optionState={getOptionState(option.id)}
                        isReviewing={isReviewing}
                        onSelect={() => onSelectOption(option.id)}
                    />
                ))}
            </div>

            {/* Navigation */}
            <QuestionNavigation
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

// Sub-components
function QuestionHeader({
    questionIndex,
    totalQuestions,
    points,
}: {
    questionIndex: number;
    totalQuestions: number;
    points: number;
}) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Pertanyaan {questionIndex + 1} dari {totalQuestions}
            </span>
            <span className="flex items-center gap-1 text-sm text-slate-500">
                <Icon name="star" size={16} className="text-amber-400" />
                {points} poin
            </span>
        </div>
    );
}

function OptionButton({
    option,
    index,
    isSelected,
    optionState,
    isReviewing,
    onSelect,
}: {
    option: QuizOption;
    index: number;
    isSelected: boolean;
    optionState: 'correct' | 'incorrect' | null;
    isReviewing: boolean;
    onSelect: () => void;
}) {
    const optionLetter = String.fromCharCode(65 + index);

    const getOptionClasses = () => {
        const baseClass =
            'flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-all';

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
        return `${baseClass} border-slate-200 hover:border-primary/50 hover:bg-slate-50`;
    };

    const getLetterClasses = () => {
        const baseClass =
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold';

        if (isReviewing && optionState === 'correct') {
            return `${baseClass} bg-green-500 text-white`;
        }
        if (isReviewing && optionState === 'incorrect') {
            return `${baseClass} bg-red-500 text-white`;
        }
        if (isSelected) {
            return `${baseClass} bg-primary text-white`;
        }
        return `${baseClass} bg-slate-100 text-slate-600`;
    };

    const getTextClasses = () => {
        const baseClass = 'flex-1 text-left';

        if (isReviewing && optionState === 'correct') {
            return `${baseClass} font-medium text-green-700`;
        }
        if (isReviewing && optionState === 'incorrect') {
            return `${baseClass} font-medium text-red-700`;
        }
        if (isSelected) {
            return `${baseClass} font-medium text-slate-900`;
        }
        return `${baseClass} text-slate-700`;
    };

    return (
        <button
            onClick={onSelect}
            disabled={isReviewing}
            className={getOptionClasses()}
        >
            <div className={getLetterClasses()}>{optionLetter}</div>
            <span className={getTextClasses()}>{option.label}</span>
            {isReviewing && optionState === 'correct' && (
                <Icon name="check_circle" size={24} className="text-green-500" />
            )}
            {isReviewing && optionState === 'incorrect' && (
                <Icon name="cancel" size={24} className="text-red-500" />
            )}
        </button>
    );
}

function QuestionNavigation({
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
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
            <button
                onClick={onPrev}
                disabled={isFirstQuestion}
                className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors ${
                    isFirstQuestion
                        ? 'cursor-not-allowed text-slate-300'
                        : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
                <Icon name="arrow_back" size={20} />
                Sebelumnya
            </button>

            {isLastQuestion && !isReviewing ? (
                <button
                    onClick={onSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <>
                            <Icon name="refresh" size={20} className="animate-spin" />
                            Mengirim...
                        </>
                    ) : (
                        <>
                            Kumpulkan
                            <Icon name="send" size={20} />
                        </>
                    )}
                </button>
            ) : (
                <button
                    onClick={onNext}
                    disabled={isLastQuestion}
                    className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors ${
                        isLastQuestion
                            ? 'cursor-not-allowed text-slate-300'
                            : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                >
                    Selanjutnya
                    <Icon name="arrow_forward" size={20} />
                </button>
            )}
        </div>
    );
}
