import Icon from '@/Components/Icon';
import {
    QuizIntro,
    QuizQuestion,
    QuizResultCard,
    
} from '@/Components/User/Study/Quiz';
import QuizSidebar from '@/Components/User/Study/QuizSidebar';
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
    // Get first video ID from the quiz's module to navigate back
    const quizModule = classData.modules.find((m) => m.id === quiz.module_id);
    const firstVideoId = quizModule?.videos?.[0]?.id;

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
    } = useQuiz({
        quiz,
        attempt,
        classId: classData.id,
        videoId: firstVideoId,
    });

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
                    onSubmit={handleSubmitQuiz}
                    isSubmitting={isSubmitting}
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
                        backToVideoUrl={
                            firstVideoId
                                ? route('user.study.watch', {
                                    classId: classData.id,
                                    videoId: firstVideoId,
                                })
                                : undefined
                        }
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
        <nav className="mt-4 flex flex-wrap items-center gap-1 text-xs text-slate-500 sm:mt-2 sm:gap-2 sm:text-sm lg:mt-2">
            <Link
                href={route('user.dashboard')}
                className="transition-colors hover:text-primary"
            >
                Kelas Saya
            </Link>
            <Icon name="chevron_right" size={16} />
            <Link
                href={route('user.my-class')}
                className="transition-colors hover:text-primary"
            >
                {classTitle}
            </Link>
            <Icon name="chevron_right" size={16} />
            <span className="font-medium text-slate-900">Quiz</span>
        </nav>
    );
}

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {title}
            </h1>
            {subtitle && (
                <p className="text-base font-normal text-slate-500 md:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
