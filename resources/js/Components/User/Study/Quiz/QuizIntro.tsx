import Icon from '@/Components/Icon';
import { Quiz, QuizAttempt } from '@/types/study';

interface QuizIntroProps {
    quiz: Quiz;
    previousAttempts: QuizAttempt[];
    onStart: () => void;
    onBack: () => void;
}

export default function QuizIntro({
    quiz,
    previousAttempts,
    onStart,
    onBack,
}: QuizIntroProps) {
    const bestScore =
        previousAttempts.length > 0
            ? Math.max(...previousAttempts.map((a) => a.score))
            : null;

    const totalPoints =
        quiz.total_points || quiz.questions.reduce((sum, q) => sum + q.points, 0);

    return (
        <div className="shadow-card mx-auto w-full max-w-2xl rounded-2xl border border-slate-100 bg-white p-8">
            {/* Quiz Icon */}
            <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon name="quiz" size={40} className="text-primary" />
                </div>
            </div>

            {/* Title */}
            <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">
                {quiz.title}
            </h2>
            <p className="mb-8 text-center text-slate-500">
                {quiz.is_pretest ? 'Pre-Test' : 'Quiz'} • {quiz.module?.title}
            </p>

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-3 gap-4">
                <StatCard
                    value={quiz.questions.length}
                    label="Pertanyaan"
                />
                <StatCard value={totalPoints} label="Total Poin" />
                <StatCard value="70%" label="Nilai Lulus" />
            </div>

            {/* Previous Attempts */}
            {previousAttempts.length > 0 && (
                <PreviousAttemptsCard
                    attempts={previousAttempts}
                    bestScore={bestScore}
                />
            )}

            {/* Instructions */}
            <InstructionsCard />

            {/* Actions */}
            <div className="flex gap-4">
                <button
                    onClick={onBack}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                >
                    <Icon name="arrow_back" size={20} />
                    Kembali
                </button>
                <button
                    onClick={onStart}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                >
                    Mulai Quiz
                    <Icon name="play_arrow" size={20} />
                </button>
            </div>
        </div>
    );
}

// Sub-components
function StatCard({ value, label }: { value: string | number; label: string }) {
    return (
        <div className="rounded-xl bg-slate-50 p-4 text-center">
            <div className="mb-1 text-2xl font-bold text-slate-900">{value}</div>
            <div className="text-sm text-slate-500">{label}</div>
        </div>
    );
}

function PreviousAttemptsCard({
    attempts,
    bestScore,
}: {
    attempts: QuizAttempt[];
    bestScore: number | null;
}) {
    return (
        <div className="mb-8 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="mb-3 text-sm font-semibold text-slate-700">
                Riwayat Pengerjaan
            </h3>
            <div className="space-y-2">
                {attempts.slice(0, 3).map((attempt, index) => (
                    <div
                        key={attempt.id}
                        className="flex items-center justify-between text-sm"
                    >
                        <span className="text-slate-500">
                            Percobaan {attempts.length - index}
                        </span>
                        <span
                            className={`font-semibold ${
                                attempt.is_passed
                                    ? 'text-green-600'
                                    : 'text-red-500'
                            }`}
                        >
                            {attempt.score}%{' '}
                            {attempt.is_passed ? '(Lulus)' : '(Tidak Lulus)'}
                        </span>
                    </div>
                ))}
            </div>
            {bestScore !== null && (
                <div className="mt-3 border-t border-slate-200 pt-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700">
                            Nilai Terbaik
                        </span>
                        <span className="font-bold text-primary">{bestScore}%</span>
                    </div>
                </div>
            )}
        </div>
    );
}

function InstructionsCard() {
    return (
        <div className="mb-8 rounded-xl bg-amber-50 p-4">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-800">
                <Icon name="info" size={18} />
                Petunjuk Pengerjaan
            </h3>
            <ul className="space-y-1 text-sm text-amber-700">
                <li>• Jawab semua pertanyaan dengan memilih satu opsi</li>
                <li>• Anda dapat berpindah antar pertanyaan dengan bebas</li>
                <li>• Pastikan semua pertanyaan terjawab sebelum mengumpulkan</li>
                <li>• Nilai minimal untuk lulus adalah 70%</li>
            </ul>
        </div>
    );
}
