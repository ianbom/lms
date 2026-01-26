import Icon from '@/Components/Icon';
import { Quiz, QuizResult } from '@/types/study';

interface QuizResultCardProps {
    result: QuizResult;
    quiz: Quiz;
    timeSpent: number;
    onReview: () => void;
    onRetry: () => void;
    onBack: () => void;
}

export default function QuizResultCard({
    result,
    quiz,
    timeSpent,
    onReview,
    onRetry,
    onBack,
}: QuizResultCardProps) {
    const incorrectCount = result.totalQuestions - result.correctAnswers;
    const progressPercent =
        (result.correctAnswers / result.totalQuestions) * 100;

    return (
        <div className="shadow-card mx-auto w-full max-w-2xl rounded-2xl border border-slate-100 bg-white p-8">
            {/* Result Header */}
            <ResultHeader isPassed={result.isPassed} />

            {/* Score Circle */}
            <ScoreCircle score={result.score} isPassed={result.isPassed} />

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-3 gap-4">
                <StatItem
                    icon="check_circle"
                    iconColor="text-green-500"
                    value={result.correctAnswers}
                    label="Benar"
                />
                <StatItem
                    icon="cancel"
                    iconColor="text-red-500"
                    value={incorrectCount}
                    label="Salah"
                />
                <StatItem
                    icon="schedule"
                    iconColor="text-blue-500"
                    value={formatTimeDisplay(timeSpent)}
                    label="Waktu"
                />
            </div>

            {/* Progress Bar */}
            <ProgressBar
                correct={result.correctAnswers}
                total={result.totalQuestions}
                percent={progressPercent}
                isPassed={result.isPassed}
            />

            {/* Actions */}
            <ResultActions
                isPassed={result.isPassed}
                onBack={onBack}
                onReview={onReview}
                onRetry={onRetry}
            />
        </div>
    );
}

// Helper function
function formatTimeDisplay(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Sub-components
function ResultHeader({ isPassed }: { isPassed: boolean }) {
    return (
        <>
            {/* Result Icon */}
            <div className="mb-6 flex justify-center">
                <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full ${
                        isPassed ? 'bg-green-100' : 'bg-red-100'
                    }`}
                >
                    <Icon
                        name={
                            isPassed ? 'emoji_events' : 'sentiment_dissatisfied'
                        }
                        size={48}
                        className={isPassed ? 'text-green-600' : 'text-red-500'}
                    />
                </div>
            </div>

            {/* Result Title */}
            <h2
                className={`mb-2 text-center text-2xl font-bold ${
                    isPassed ? 'text-green-600' : 'text-red-500'
                }`}
            >
                {isPassed ? 'Selamat! Anda Lulus!' : 'Belum Berhasil'}
            </h2>
            <p className="mb-8 text-center text-slate-500">
                {isPassed
                    ? 'Anda telah menyelesaikan quiz dengan baik'
                    : 'Jangan menyerah! Coba lagi untuk mendapatkan hasil yang lebih baik'}
            </p>
        </>
    );
}

function ScoreCircle({
    score,
    isPassed,
}: {
    score: number;
    isPassed: boolean;
}) {
    return (
        <div className="mb-8 flex justify-center">
            <div
                className={`relative flex h-40 w-40 items-center justify-center rounded-full border-8 ${
                    isPassed ? 'border-green-500' : 'border-red-400'
                }`}
            >
                <div className="text-center">
                    <div
                        className={`text-4xl font-bold ${
                            isPassed ? 'text-green-600' : 'text-red-500'
                        }`}
                    >
                        {score}%
                    </div>
                    <div className="text-sm text-slate-500">Nilai Anda</div>
                </div>
            </div>
        </div>
    );
}

function StatItem({
    icon,
    iconColor,
    value,
    label,
}: {
    icon: string;
    iconColor: string;
    value: string | number;
    label: string;
}) {
    return (
        <div className="rounded-xl bg-slate-50 p-4 text-center">
            <div className="mb-1 flex items-center justify-center gap-1">
                <Icon name={icon} size={20} className={iconColor} />
                <span className="text-xl font-bold text-slate-900">
                    {value}
                </span>
            </div>
            <div className="text-sm text-slate-500">{label}</div>
        </div>
    );
}

function ProgressBar({
    correct,
    total,
    percent,
    isPassed,
}: {
    correct: number;
    total: number;
    percent: number;
    isPassed: boolean;
}) {
    return (
        <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-500">Progress</span>
                <span className="font-medium text-slate-700">
                    {correct} / {total} pertanyaan benar
                </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${
                        isPassed ? 'bg-green-500' : 'bg-red-400'
                    }`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}

function ResultActions({
    isPassed,
    onBack,
    onReview,
    onRetry,
}: {
    isPassed: boolean;
    onBack: () => void;
    onReview: () => void;
    onRetry: () => void;
}) {
    return (
        <div className="flex gap-4">
            <button
                onClick={onBack}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-600 transition-colors hover:bg-slate-50"
            >
                <Icon name="arrow_back" size={20} />
                Kembali
            </button>
            <button
                onClick={onReview}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
                <Icon name="visibility" size={20} />
                Lihat Jawaban
            </button>
            {!isPassed && (
                <button
                    onClick={onRetry}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                >
                    <Icon name="refresh" size={20} />
                    Coba Lagi
                </button>
            )}
        </div>
    );
}
