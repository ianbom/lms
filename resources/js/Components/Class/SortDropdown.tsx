import Icon from '@/Components/Icon';
import { SORT_LABELS, SortOption } from '@/types/class';

interface SortDropdownProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
    isOpen: boolean;
    onToggle: () => void;
}

const SORT_OPTIONS: SortOption[] = [
    'newest',
    'oldest',
    'title_asc',
    'title_desc',
    'price_asc',
    'price_desc',
];

export default function SortDropdown({
    value,
    onChange,
    isOpen,
    onToggle,
}: SortDropdownProps) {
    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary"
            >
                <Icon name="sort" size={18} />
                <span>Urutkan: {SORT_LABELS[value]}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full z-40 mt-1 min-w-[180px] rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                    {SORT_OPTIONS.map((option) => (
                        <button
                            key={option}
                            onClick={() => onChange(option)}
                            className={`w-full px-4 py-2 text-left text-sm ${
                                value === option
                                    ? 'bg-primary/5 font-medium text-primary'
                                    : 'text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            {SORT_LABELS[option]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
