interface ToggleButtonGroupProps {
    label?: string;
    options: { value: string; label: string }[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export default function ToggleButtonGroup({
    label,
    options,
    value,
    onChange,
    className = '',
}: ToggleButtonGroupProps) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-[#101814]">
                    {label}
                </label>
            )}
            <div className="flex gap-2">
                {options.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange?.(option.value)}
                        className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                            value === option.value
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-[#dae7e0] bg-white text-[#5e6a62] hover:border-[#c0d4c8] hover:bg-[#f9fafb]'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
