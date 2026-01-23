interface FormInputProps {
    label: string;
    required?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: 'text' | 'number';
    prefix?: string;
    suffix?: string;
    className?: string;
    error?: string;
}

export default function FormInput({
    label,
    required = false,
    placeholder,
    value,
    onChange,
    type = 'text',
    prefix,
    suffix,
    className = '',
    error,
}: FormInputProps) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label className="text-sm font-medium text-[#101814]">
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>
            <div className="relative">
                {prefix && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#5e6a62]">
                        {prefix}
                    </span>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className={`h-12 w-full rounded-md border border-[#dae7e0] bg-white text-sm text-[#101814] placeholder-[#a0b3a9] transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        prefix ? 'pl-8' : 'px-4'
                    } ${suffix ? 'pr-8' : 'pr-4'}`}
                />
                {suffix && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#5e6a62]">
                        {suffix}
                    </span>
                )}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
