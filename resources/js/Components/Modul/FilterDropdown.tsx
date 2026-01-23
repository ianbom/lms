import Icon from '@/Components/Icon';

interface FilterDropdownProps {
    icon: string;
    label: string;
    onClick?: () => void;
}

export default function FilterDropdown({
    icon,
    label,
    onClick,
}: FilterDropdownProps) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 whitespace-nowrap rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-primary focus:ring-2 focus:ring-primary/20"
        >
            <Icon name={icon} size={20} className="text-gray-400" />
            {label}
            <Icon name="expand_more" size={18} className="ml-1 text-gray-400" />
        </button>
    );
}
