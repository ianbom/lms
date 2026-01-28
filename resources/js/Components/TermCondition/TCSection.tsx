import Icon from '@/Components/Icon';
import React from 'react';

interface TCSectionProps {
    id: string;
    title: string;
    icon: string;
    children: React.ReactNode;
}

export default function TCSection({
    id,
    title,
    icon,
    children,
}: TCSectionProps) {
    return (
        <section className="mb-12 scroll-mt-28" id={id}>
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <Icon name={icon} className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="prose prose-lg prose-gray max-w-none text-gray-600">
                {children}
            </div>
            <div className="mt-8 h-px w-full bg-gray-100"></div>
        </section>
    );
}
