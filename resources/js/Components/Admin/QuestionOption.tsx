import Icon from '@/Components/Icon';

export interface QuestionOptionData {
    id: number;
    text: string;
    isCorrect: boolean;
}

interface QuestionOptionProps {
    option: QuestionOptionData;
    questionId: number;
    onChange: (id: number, text: string) => void;
    onSelect: (id: number) => void;
    onRemove: (id: number) => void;
}

export default function QuestionOption({
    option,
    questionId,
    onChange,
    onSelect,
    onRemove,
}: QuestionOptionProps) {
    return (
        <div
            className={`group flex items-center gap-3 rounded-md border p-2 pr-4 transition-all ${
                option.isCorrect
                    ? 'border-green-200 bg-green-50/50'
                    : 'border-transparent hover:border-slate-200 hover:bg-slate-50'
            }`}
        >
            {/* Radio Button */}
            <label className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center">
                <input
                    type="radio"
                    name={`q${questionId}_answer`}
                    checked={option.isCorrect}
                    onChange={() => onSelect(option.id)}
                    className="peer sr-only"
                />
                <div
                    className={`h-6 w-6 rounded-full border-2 transition-all ${
                        option.isCorrect
                            ? 'border-primary bg-primary'
                            : 'border-slate-300'
                    }`}
                />
                {option.isCorrect && (
                    <Icon
                        name="check"
                        size={16}
                        className="pointer-events-none absolute text-white"
                    />
                )}
            </label>

            {/* Text Input */}
            <div className="flex-1">
                <input
                    type="text"
                    value={option.text}
                    onChange={(e) => onChange(option.id, e.target.value)}
                    className={`w-full border-0 bg-transparent p-0 text-sm focus:ring-0 ${
                        option.isCorrect
                            ? 'font-medium text-slate-800'
                            : 'text-slate-600'
                    }`}
                    placeholder="Enter option text..."
                />
            </div>

            {/* Correct Badge */}
            {option.isCorrect && (
                <span className="rounded bg-white px-2 py-1 text-xs font-bold text-primary shadow-sm">
                    Correct
                </span>
            )}

            {/* Remove Button */}
            <button
                type="button"
                onClick={() => onRemove(option.id)}
                className="text-slate-400 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100"
            >
                <Icon name="close" size={18} />
            </button>
        </div>
    );
}
