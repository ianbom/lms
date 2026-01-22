import Icon from '@/Components/Icon';
import QuizSidebar from '@/Components/User/Study/QuizSidebar';
import {
    QuizIntro,
    QuizQuestion,
    QuizResultCard,
} from '@/Components/User/Study/Quiz';
import { useQuiz } from '@/hooks/useQuiz';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { TakeQuizProps } from '@/types/study';
import { Head, Link } from '@inertiajs/react';

export default function TakeQuiz({
    classData,
    quiz,
    attempt,
    previousAttempts,
    progressStats,
}: TakeQuizProps) {
    const {
        // State
        quizState,
        currentQuestionIndex,
        userAnswers,
        timeSpent,
        isSubmitting,
        quizResult,

        // Computed
        currentQuestion,
        totalQuestions,
        isLastQuestion,
        isFirstQuestion,

        // Actions
        handleStartQuiz,
        handleSelectAnswer,
        handleSubmitQuiz,
        handleReviewAnswers,
        handleRetryQuiz,
        handleBackToClass,
        goToQuestion,
        goToNextQuestion,
        goToPrevQuestion,
        getCurrentAnswer,
    } = useQuiz({ quiz, attempt, classId: classData.id });

    return (
        <UserDashboardLayout
            rightSidebar={
                <QuizSidebar
                    quiz={quiz}
                    currentQuestionIndex={currentQuestionIndex}
                    userAnswers={userAnswers}
                    quizState={quizState}
                    timeSpent={timeSpent}
                    onQuestionSelect={goToQuestion}
                    progressStats={progressStats}
                />
            }
        >
            <Head title={`${quiz.title} - ${classData.title}`} />

            {/* Breadcrumbs */}
            <Breadcrumbs classTitle={classData.title} />

            {/* Page Title */}
            <PageHeader title={quiz.title} subtitle={quiz.module?.title} />

            {/* Main Content */}
            <div className="flex flex-col gap-6">
                {quizState === 'intro' && (
                    <QuizIntro
                        quiz={quiz}
                        previousAttempts={previousAttempts}
                        onStart={handleStartQuiz}
                        onBack={handleBackToClass}
                    />
                )}

                {(quizState === 'in-progress' || quizState === 'reviewing') && (
                    <QuizQuestion
                        question={currentQuestion}
                        questionIndex={currentQuestionIndex}
                        totalQuestions={totalQuestions}
                        selectedOptionId={getCurrentAnswer(currentQuestion.id)}
                        onSelectOption={(optionId) =>
                            handleSelectAnswer(currentQuestion.id, optionId)
                        }
                        onNext={goToNextQuestion}
                        onPrev={goToPrevQuestion}
                        onSubmit={handleSubmitQuiz}
                        isLastQuestion={isLastQuestion}
                        isFirstQuestion={isFirstQuestion}
                        isSubmitting={isSubmitting}
                        isReviewing={quizState === 'reviewing'}
                        quizResult={quizResult}
                    />
                )}

                {quizState === 'submitted' && quizResult && (
                    <QuizResultCard
                        result={quizResult}
                        quiz={quiz}
                        timeSpent={timeSpent}
                        onReview={handleReviewAnswers}
                        onRetry={handleRetryQuiz}
                        onBack={handleBackToClass}
                    />
                )}
            </div>
        </UserDashboardLayout>
    );
}

// Sub-components for cleaner main component
function Breadcrumbs({ classTitle }: { classTitle: string }) {
    return (
        <nav className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <Link
                href={route('user.dashboard')}
                className="transition-colors hover:text-primary"
            >
                Home
            </Link>
            <Icon name="chevron_right" size={16} />
            <Link
                href={route('user.my-class')}
                className="transition-colors hover:text-primary"
            >
                My Classes
            </Link>
            <Icon name="chevron_right" size={16} />
            <span className="font-semibold text-primary">{classTitle}</span>
        </nav>
    );
}

function PageHeader({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                {title}
            </h1>
            <p className="text-lg font-normal text-slate-500">
                {subtitle || 'Quiz'}
            </p>
        </div>
    );
}
