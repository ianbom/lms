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
    progressStats: ProgressStats;
}

export default function QuizSidebar({
    quiz,
    currentQuestionIndex,
    userAnswers,
    quizState,
    timeSpent,
    onQuestionSelect,
    progressStats,
}: QuizSidebarProps) {
    const answeredCount = userAnswers.filter((a) => a.optionId !== null).length;
    const totalQuestions = quiz.questions.length;
    const progressPercent = (answeredCount / totalQuestions) * 100;

    // Format time
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Get question status
    const getQuestionStatus = (index: number): 'current' | 'answered' | 'unanswered' => {
        if (index === currentQuestionIndex) return 'current';
        return userAnswers[index]?.optionId !== null ? 'answered' : 'unanswered';
    };

    return (
        <aside className="z-20 flex h-full w-[340px] shrink-0 flex-col border-l border-slate-200 bg-white">
            {/* Quiz Info Header */}
            <div className="border-b border-slate-100 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Icon name="quiz" size={24} className="text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">{quiz.title}</h3>
                        <p className="text-sm text-slate-500">
                            {quiz.is_pretest ? 'Pre-Test' : 'Quiz'}
                        </p>
                    </div>
                </div>

                {/* Timer - Only show when in progress */}
                {quizState === 'in-progress' && (
                    <div className="mb-4 flex items-center justify-center gap-2 rounded-xl bg-slate-50 p-3">
                        <Icon name="timer" size={20} className="text-primary" />
                        <span className="font-mono text-xl font-bold text-slate-900">
                            {formatTime(timeSpent)}
                        </span>
                    </div>
                )}

                {/* Progress */}
                {quizState !== 'intro' && (
                    <>
                        <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="font-medium text-slate-500">
                                Progress Pengerjaan
                            </span>
                            <span className="font-bold text-primary">
                                {answeredCount}/{totalQuestions}
                            </span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-slate-100">
                            <div
                                className="h-2.5 rounded-full bg-primary transition-all duration-300"
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>
                    </>
                )}
            </div>

            {/* Question Navigator - Only show when not intro */}
            {quizState !== 'intro' && (
                <div className="custom-scrollbar flex-1 overflow-y-auto p-4">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Daftar Pertanyaan
                    </h4>
                    <div className="grid grid-cols-5 gap-2">
                        {quiz.questions.map((_, index) => {
                            const status = getQuestionStatus(index);

                            let buttonClass =
                                'flex h-10 w-10 items-center justify-center rounded-lg font-semibold transition-all';

                            if (status === 'current') {
                                buttonClass +=
                                    ' bg-primary text-white shadow-lg shadow-primary/30 scale-110';
                            } else if (status === 'answered') {
                                buttonClass += ' bg-green-100 text-green-700 hover:bg-green-200';
                            } else {
                                buttonClass +=
                                    ' bg-slate-100 text-slate-600 hover:bg-slate-200';
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
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="h-4 w-4 rounded bg-primary"></div>
                            <span>Sedang dikerjakan</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="h-4 w-4 rounded bg-green-100"></div>
                            <span>Sudah dijawab</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="h-4 w-4 rounded bg-slate-100"></div>
                            <span>Belum dijawab</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Quiz Stats - Show on intro */}
            {quizState === 'intro' && (
                <div className="custom-scrollbar flex-1 overflow-y-auto p-4">
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
                                <div className="text-lg font-bold text-slate-900">
                                    Unlimited
                                </div>
                                <div className="text-sm text-slate-500">Percobaan</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Course Progress Footer */}
            <div className="border-t border-slate-100 bg-slate-50 p-4">
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
                    {progressStats.completed_videos} / {progressStats.total_videos} video selesai
                </div>
            </div>
        </aside>
    );
}
