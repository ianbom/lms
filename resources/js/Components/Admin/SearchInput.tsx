import Icon from '@/Components/Icon';

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export default function SearchInput({
    placeholder = 'Search...',
    value,
    onChange,
    className = '',
}: SearchInputProps) {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                <Icon name="search" size={20} />
            </span>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full rounded-full border-none bg-background-light py-2 pl-10 pr-4 text-sm text-text-primary placeholder-text-muted ring-1 ring-transparent focus:ring-primary"
            />
        </div>
    );
}
