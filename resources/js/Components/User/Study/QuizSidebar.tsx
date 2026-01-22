import Icon from '@/Components/Icon';
import { ProgressStats, Quiz, UserAnswer } from '@/types/study';

type QuizState = 'intro' | 'in-progress' | 'submitted' | 'reviewing';

interface QuizSidebarProps {
    quiz: Quiz;
    currentQuestionIndex: number;
    userAnswers: UserAnswer[];
    quizState: QuizState;
    timeSpent: number;
    onQuestionSelect: (index: number) => void;
    onSubmit?: () => void;
    isSubmitting?: boolean;
    progressStats: ProgressStats;
}

export default function QuizSidebar({
    quiz,
    currentQuestionIndex,
    userAnswers,
    quizState,
    timeSpent,
    onQuestionSelect,
    onSubmit,
    isSubmitting,
    progressStats,
}: QuizSidebarProps) {
    const answeredCount = userAnswers.filter((a) => a.optionId !== null).length;
    const totalQuestions = quiz.questions.length;
    const remainingCount = totalQuestions - answeredCount;

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Get question status
    const getQuestionStatus = (
        index: number,
    ): 'current' | 'answered' | 'unanswered' => {
        if (index === currentQuestionIndex) return 'current';
        return userAnswers[index]?.optionId !== null ? 'answered' : 'unanswered';
    };

    return (
        <aside className="z-20 flex h-full w-full shrink-0 flex-col gap-4 overflow-y-auto bg-slate-50/50 p-4 pt-14 sm:gap-6 lg:w-[340px] lg:pt-4">
            {/* Card 1: Timer & Stats - Only show when in progress */}
            {(quizState === 'in-progress' || quizState === 'reviewing') && (
                <TimerCard
                    timeSpent={timeSpent}
                    formatTime={formatTime}
                    totalQuestions={totalQuestions}
                    answeredCount={answeredCount}
                    remainingCount={remainingCount}
                />
            )}

            {/* Card 2: Question Navigation - Only show when not intro */}
            {quizState !== 'intro' && (
                <QuestionNavigationCard
                    quiz={quiz}
                    currentQuestionIndex={currentQuestionIndex}
                    getQuestionStatus={getQuestionStatus}
                    onQuestionSelect={onQuestionSelect}
                />
            )}

            {/* Card 3: Submit Button - Only show when in progress */}
            {quizState === 'in-progress' && onSubmit && (
                <SubmitCard
                    onSubmit={onSubmit}
                    isSubmitting={isSubmitting}
                    answeredCount={answeredCount}
                    totalQuestions={totalQuestions}
                />
            )}

            {/* Quiz Stats - Show on intro */}
            {quizState === 'intro' && (
                <QuizInfoCard quiz={quiz} totalQuestions={totalQuestions} />
            )}

            {/* Course Progress Footer */}
            <CourseProgressCard progressStats={progressStats} />
        </aside>
    );
}

// Sub-components

function TimerCard({
    timeSpent,
    formatTime,
    totalQuestions,
    answeredCount,
    remainingCount,
}: {
    timeSpent: number;
    formatTime: (seconds: number) => string;
    totalQuestions: number;
    answeredCount: number;
    remainingCount: number;
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Waktu
                </h3>
                <Icon name="timer" size={20} className="text-slate-400" />
            </div>

            {/* Timer Display */}
            <div className="mb-6 rounded-lg border border-slate-100 bg-slate-50 py-3 text-center font-mono text-4xl font-bold tracking-tight text-slate-900">
                {formatTime(timeSpent)}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center text-xs">
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-slate-400">Total</span>
                    <span className="text-base font-bold text-slate-700">
                        {totalQuestions}
                    </span>
                </div>
                <div className="flex flex-col gap-1 border-x border-slate-100">
                    <span className="font-medium text-green-600">Terjawab</span>
                    <span className="text-base font-bold text-green-700">
                        {answeredCount}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-slate-400">Sisa</span>
                    <span className="text-base font-bold text-slate-700">
                        {remainingCount}
                    </span>
                </div>
            </div>
        </div>
    );
}

function QuestionNavigationCard({
    quiz,
    currentQuestionIndex,
    getQuestionStatus,
    onQuestionSelect,
}: {
    quiz: Quiz;
    currentQuestionIndex: number;
    getQuestionStatus: (index: number) => 'current' | 'answered' | 'unanswered';
    onQuestionSelect: (index: number) => void;
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Navigasi Soal
                </h3>
            </div>

            {/* Question Grid */}
            <div className="grid grid-cols-5 gap-3">
                {quiz.questions.map((_, index) => {
                    const status = getQuestionStatus(index);

                    let buttonClass =
                        'aspect-square flex items-center justify-center rounded-lg font-bold text-sm transition-colors';

                    if (status === 'current') {
                        buttonClass +=
                            ' bg-white text-primary border-2 border-primary shadow-sm';
                    } else if (status === 'answered') {
                        buttonClass +=
                            ' bg-green-100 text-green-700 border border-transparent hover:border-green-300';
                    } else {
                        buttonClass +=
                            ' bg-slate-50 text-slate-500 font-medium border border-slate-200 hover:bg-slate-100';
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onQuestionSelect(index)}
                            className={buttonClass}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full border border-green-200 bg-green-100"></span>
                    <span>Terjawab</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full border-2 border-primary bg-white"></span>
                    <span>Saat ini</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full border border-slate-200 bg-slate-50"></span>
                    <span>Belum</span>
                </div>
            </div>
        </div>
    );
}

function SubmitCard({
    onSubmit,
    isSubmitting,
    answeredCount,
    totalQuestions,
}: {
    onSubmit: () => void;
    isSubmitting?: boolean;
    answeredCount: number;
    totalQuestions: number;
}) {
    const allAnswered = answeredCount === totalQuestions;

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            <p className="mb-3 text-center text-xs text-slate-400">
                {allAnswered
                    ? 'Semua jawaban sudah terisi.'
                    : `${answeredCount}/${totalQuestions} soal terjawab. Pastikan semua terisi.`}
            </p>
            <button
                onClick={onSubmit}
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg disabled:opacity-50"
            >
                {isSubmitting ? (
                    <>
                        <Icon
                            name="progress_activity"
                            size={20}
                            className="animate-spin"
                        />
                        Mengirim...
                    </>
                ) : (
                    <>
                        <Icon name="check_circle" size={20} />
                        Submit Quiz
                    </>
                )}
            </button>

        </div>
    );
}

function QuizInfoCard({
    quiz,
    totalQuestions,
}: {
    quiz: Quiz;
    totalQuestions: number;
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Informasi Quiz
            </h4>

            <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                        <Icon name="help" size={20} className="text-blue-600" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-slate-900">
                            {totalQuestions}
                        </div>
                        <div className="text-sm text-slate-500">Pertanyaan</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                        <Icon name="star" size={20} className="text-amber-600" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-slate-900">
                            {quiz.total_points ||
                                quiz.questions.reduce((sum, q) => sum + q.points, 0)}
                        </div>
                        <div className="text-sm text-slate-500">Total Poin</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                        <Icon name="verified" size={20} className="text-green-600" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-slate-900">70%</div>
                        <div className="text-sm text-slate-500">Nilai Minimum Lulus</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                        <Icon name="refresh" size={20} className="text-purple-600" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-slate-900">Unlimited</div>
                        <div className="text-sm text-slate-500">Percobaan</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CourseProgressCard({ progressStats }: { progressStats: ProgressStats }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
            <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-500">Progress Kelas</span>
                <span className="font-bold text-primary">
                    {progressStats.progress_percent}%
                </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200">
                <div
                    className="h-2 rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${progressStats.progress_percent}%` }}
                ></div>
            </div>
            <div className="mt-2 text-xs text-slate-500">
                {progressStats.completed_videos} / {progressStats.total_videos} video
                selesai
            </div>
        </div>
    );
}
