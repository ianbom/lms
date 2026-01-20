import Icon from '@/Components/Icon';

interface SearchInputWithIconProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export default function SearchInputWithIcon({
    placeholder = 'Search...',
    value,
    onChange,
    className = '',
}: SearchInputWithIconProps) {
    return (
        <div className={`relative ${className}`}>
            <Icon
                name="search"
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5e8d74]"
            />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="h-10 w-full rounded-lg border border-[#dae7e0] bg-white py-2 pl-10 pr-4 text-sm text-[#101814] placeholder-[#5e8d74] transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
        </div>
    );
}
