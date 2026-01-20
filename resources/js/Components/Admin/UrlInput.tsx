interface UrlInputProps {
    label: string;
    prefix?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onCheck?: () => void;
    helpText?: string;
    className?: string;
}

export default function UrlInput({
    label,
    prefix = 'https://',
    placeholder,
    value,
    onChange,
    onCheck,
    helpText,
    className = '',
}: UrlInputProps) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            <label className="text-sm font-medium text-[#101814]">
                {label}
            </label>
            <div className="relative flex rounded-lg shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-sm text-[#5e6a62]">{prefix}</span>
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                    className="block h-12 w-full rounded-lg border border-[#dae7e0] bg-white py-2.5 pl-16 pr-20 text-sm text-[#101814] placeholder-[#a0b3a9] transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {onCheck && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <button
                            type="button"
                            onClick={onCheck}
                            className="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                        >
                            Check
                        </button>
                    </div>
                )}
            </div>
            {helpText && <p className="text-xs text-[#a0b3a9]">{helpText}</p>}
        </div>
    );
}
