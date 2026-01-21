import Icon from '@/Components/Icon';
import { useState } from 'react';

interface FilterDropdownProps {
    icon: string;
    label: string;
    options?: { value: string; label: string }[];
    value?: string;
    onChange?: (value: string) => void;
    onClick?: () => void;
    className?: string;
}

export default function FilterDropdown({
    icon,
    label,
    options = [],
    value,
    onChange,
    onClick,
    className = '',
}: FilterDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (selectedValue: string) => {
        onChange?.(selectedValue);
        setIsOpen(false);
    };

    if (options.length === 0) {
        return (
            <button
                onClick={onClick}
                className={`flex h-10 items-center gap-2 rounded-lg border border-[#dae7e0] bg-white px-4 text-sm font-medium text-[#101814] transition-colors hover:bg-[#f9fafb] ${className}`}
            >
                <Icon name={icon} size={18} className="text-[#5e8d74]" />
                {label}
                <Icon name="expand_more" size={18} className="text-[#5e6a62]" />
            </button>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className={`flex h-10 items-center gap-2 rounded-lg border border-[#dae7e0] bg-white px-4 text-sm font-medium text-[#101814] transition-colors hover:bg-[#f9fafb] ${className}`}
            >
                <Icon name={icon} size={18} className="text-[#5e8d74]" />
                {label}
                <Icon
                    name={isOpen ? 'expand_less' : 'expand_more'}
                    size={18}
                    className="text-[#5e6a62]"
                />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full z-20 mt-1 min-w-full rounded-lg border border-[#e5e7eb] bg-white py-1 shadow-lg">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-[#f9fafb] ${value === option.value
                                    ? 'bg-primary/5 font-medium text-primary'
                                    : 'text-[#5e6a62]'
                                }`}
                        >
                            {value === option.value && (
                                <Icon name="check" size={16} />
                            )}
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
