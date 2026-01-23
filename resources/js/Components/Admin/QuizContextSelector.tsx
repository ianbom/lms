import Icon from '@/Components/Icon';

export type QuizContextType = 'post-test' | 'pretest';

interface QuizContextOption {
    value: QuizContextType;
    label: string;
    icon: string;
}

const options: QuizContextOption[] = [
    { value: 'post-test', label: 'Post-test', icon: 'fact_check' },
    { value: 'pretest', label: 'Pre-test', icon: 'timer' },
];

interface QuizContextSelectorProps {
    value: QuizContextType;
    onChange: (value: QuizContextType) => void;
    className?: string;
}

export default function QuizContextSelector({
    value,
    onChange,
    className = '',
}: QuizContextSelectorProps) {
    return (
        <div className={className}>
            <label className="mb-2 block text-sm font-semibold text-[#101814]">
                Quiz Context
            </label>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-slate-100 p-1">
                {options.map((option) => (
                    <label key={option.value} className="cursor-pointer">
                        <input
                            type="radio"
                            name="quiz_context"
                            value={option.value}
                            checked={value === option.value}
                            onChange={() => onChange(option.value)}
                            className="peer sr-only"
                        />
                        <div
                            className={`flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 transition-all ${
                                value === option.value
                                    ? 'border-black/5 bg-white text-primary shadow-sm'
                                    : 'border-transparent text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            <Icon name={option.icon} size={20} />
                            <span className="text-sm font-bold">
                                {option.label}
                            </span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}
