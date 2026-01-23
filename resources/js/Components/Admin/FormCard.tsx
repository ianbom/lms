import Icon from '@/Components/Icon';

interface FormCardProps {
    icon?: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function FormCard({
    icon,
    title,
    children,
    className = '',
}: FormCardProps) {
    return (
        <div
            className={`rounded-xl border border-[#e5e7eb] bg-white p-6 ${className}`}
        >
            <div className="mb-5 flex items-center gap-2">
                {icon && (
                    <Icon name={icon} size={20} className="text-primary" />
                )}
                <h3 className="text-base font-semibold text-[#101814]">
                    {title}
                </h3>
            </div>
            {children}
        </div>
    );
}
