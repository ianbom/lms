import Icon from '@/Components/Icon';

interface DropdownOption {
    id: number | null;
    name: string;
}

interface FilterDropdownProps {
    label: string;
    options: DropdownOption[];
    selectedValue: number | null;
    onSelect: (value: number | null) => void;
    isOpen: boolean;
    onToggle: () => void;
    allLabel?: string;
}

export default function FilterDropdown({
    label,
    options,
    selectedValue,
    onSelect,
    isOpen,
    onToggle,
    allLabel = 'Semua',
}: FilterDropdownProps) {
    const isActive = selectedValue !== null;
    const displayLabel =
        options.find((opt) => opt.id === selectedValue)?.name || label;

    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className={`flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-primary'
                }`}
            >
                <span>{displayLabel}</span>
                <Icon name="expand_more" size={16} />
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full z-40 mt-1 max-h-60 min-w-[200px] overflow-auto rounded-md border border-slate-200 bg-white py-1 shadow-lg">
                    <button
                        onClick={() => onSelect(null)}
                        className={`w-full px-4 py-2 text-left text-sm ${
                            selectedValue === null
                                ? 'bg-primary/5 font-medium text-primary'
                                : 'text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                        {allLabel}
                    </button>
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => onSelect(option.id)}
                            className={`w-full px-4 py-2 text-left text-sm ${
                                selectedValue === option.id
                                    ? 'bg-primary/5 font-medium text-primary'
                                    : 'text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
