import Icon from '@/Components/Icon';

interface ReadonlyInputProps {
    label: string;
    value: string;
    icon?: string;
    className?: string;
}

export default function ReadonlyInput({
    label,
    value,
    icon,
    className = '',
}: ReadonlyInputProps) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            <label className="text-sm font-medium text-[#101814]">
                {label}
            </label>
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    readOnly
                    className="h-12 w-full cursor-not-allowed rounded-md border border-[#e5e7eb] bg-[#f9fafb] py-2.5 pl-4 pr-10 text-sm text-[#5e6a62] shadow-sm"
                />
                {icon && (
                    <Icon
                        name={icon}
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0b3a9]"
                    />
                )}
            </div>
        </div>
    );
}
