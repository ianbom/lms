import { PropsWithChildren, ReactNode } from 'react';

interface ProfileSectionProps extends PropsWithChildren {
    title: string;
    description?: string;
    icon?: ReactNode;
    className?: string;
}

export default function ProfileSection({
    title,
    description,
    icon,
    children,
    className = '',
}: ProfileSectionProps) {
    return (
        <section
            className={`shadow-soft overflow-hidden rounded-xl border border-gray-100 ${className}`}
        >
            <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-5">
                {icon && (
                    <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
                        {icon}
                    </div>
                )}
                <div>
                    <h2 className="text-xl font-bold text-[#111814]">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-sm text-gray-600">{description}</p>
                    )}
                </div>
            </div>
            <div className="p-6 md:p-8">{children}</div>
        </section>
    );
}
