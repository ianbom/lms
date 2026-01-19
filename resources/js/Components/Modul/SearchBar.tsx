import Icon from '@/Components/Icon';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function SearchBar({
    value,
    onChange,
    placeholder = 'Cari topik, keahlian, atau instruktur...',
}: SearchBarProps) {
    return (
        <div className="group relative max-w-lg">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Icon
                    name="search"
                    size={20}
                    className="text-gray-400 transition-colors group-focus-within:text-primary"
                />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-base text-gray-900 placeholder-gray-400 shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                placeholder={placeholder}
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
                <span className="rounded-lg bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    CMD+K
                </span>
            </div>
        </div>
    );
}
