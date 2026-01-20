interface ToggleSwitchProps {
    label: string;
    description?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

export default function ToggleSwitch({
    label,
    description,
    checked = false,
    onChange,
    className = '',
}: ToggleSwitchProps) {
    return (
        <div
            className={`flex items-center justify-between ${className}`}
            onClick={() => onChange?.(!checked)}
        >
            <div className="flex flex-col">
                <span className="text-sm font-medium text-[#101814]">
                    {label}
                </span>
                {description && (
                    <span className="text-xs text-[#a0b3a9]">
                        {description}
                    </span>
                )}
            </div>
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                    checked ? 'bg-primary' : 'bg-[#dae7e0]'
                }`}
            >
                <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        checked ? 'left-[22px]' : 'left-0.5'
                    }`}
                />
            </button>
        </div>
    );
}
