import Icon from '@/Components/Icon';

interface FilterDropdownProps {
    icon: string;
    label: string;
    onClick?: () => void;
    className?: string;
}

export default function FilterDropdown({
    icon,
    label,
    onClick,
    className = '',
}: FilterDropdownProps) {
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
