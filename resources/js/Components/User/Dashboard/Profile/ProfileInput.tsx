import Icon from '@/Components/Icon';

interface ProfileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: string;
    error?: string;
}

export default function ProfileInput({
    label,
    icon,
    error,
    className = '',
    ...props
}: ProfileInputProps) {
    return (
        <label className={`flex flex-col gap-2 ${className}`}>
            <span className="text-sm font-semibold text-gray-700">{label}</span>
            <div className="group relative">
                <input
                    className={`h-12 w-full rounded-lg border bg-white px-4 text-base text-[#111814] transition-all placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
                        icon ? 'pl-10 pr-4' : 'px-4'
                    } ${
                        error
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:border-primary focus:ring-primary'
                    } `}
                    {...props}
                />
                {icon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-gray-400">
                        <Icon name={icon} size={20} />
                    </span>
                )}
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
        </label>
    );
}
