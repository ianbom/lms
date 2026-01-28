import Icon from '@/Components/Icon';
import React from 'react';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen?: boolean;
}

export default function FAQItem({
    question,
    answer,
    isOpen = false,
}: FAQItemProps) {
    return (
        <details className="group border-b border-gray-200" open={isOpen}>
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-medium text-gray-900">
                    {question}
                </span>
                <Icon
                    name="expand_more"
                    className="text-slate-500 transition-transform duration-200 ease-in-out group-open:rotate-180"
                />
            </summary>
            <div className="animate-fadeIn pb-6 pr-8">
                <div className="mb-4 leading-relaxed text-slate-500">
                    {answer}
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                        Was this helpful?
                    </span>
                    <button className="flex items-center gap-1 transition-colors hover:text-primary">
                        <Icon name="thumb_up" size={18} />
                        Yes
                    </button>
                    <button className="flex items-center gap-1 transition-colors hover:text-red-500">
                        <Icon name="thumb_down" size={18} />
                        No
                    </button>
                </div>
            </div>
        </details>
    );
}
