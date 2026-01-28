import Icon from '@/Components/Icon';
import React from 'react';

interface PrivacyAccordionProps {
    title: string;
    children: React.ReactNode;
    id?: string;
}

export default function PrivacyAccordion({
    title,
    children,
    id,
}: PrivacyAccordionProps) {
    return (
        <details
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 open:shadow-md open:ring-1 open:ring-primary/20"
            id={id}
        >
            <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-bold text-gray-800 transition-colors hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">{title}</span>
                <Icon
                    name="expand_more"
                    className="text-slate-400 transition-transform group-open:rotate-180 group-open:text-primary"
                />
            </summary>
            <div className="animate-fadeIn border-t border-transparent px-5 pb-5 pt-0 text-sm text-slate-600 group-open:border-slate-100">
                <div className="mt-4">{children}</div>
            </div>
        </details>
    );
}
