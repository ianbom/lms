import Icon from '@/Components/Icon';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export default function SearchInput({
    value,
    onChange,
    placeholder = 'Cari topik, kelas, atau mentor...',
    className = '',
}: SearchInputProps) {
    return (
        <div className={`relative w-full lg:max-w-md ${className}`}>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon name="search" size={20} className="text-slate-400" />
            </div>
            <input
                type="text"
                className="block w-full rounded-lg border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
