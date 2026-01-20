import Icon from '@/Components/Icon';

interface FormSelectProps {
    label: string;
    required?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    options: { value: string; label: string }[];
    className?: string;
}

export default function FormSelect({
    label,
    required = false,
    placeholder = 'Select an option',
    value,
    onChange,
    options,
    className = '',
}: FormSelectProps) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label className="text-sm font-medium text-[#101814]">
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="h-12 w-full appearance-none rounded-lg border border-[#dae7e0] bg-white px-4 pr-10 text-sm text-[#101814] transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <Icon
                    name="expand_more"
                    size={20}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5e6a62]"
                />
            </div>
        </div>
    );
}
