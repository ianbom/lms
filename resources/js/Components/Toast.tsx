import Icon from '@/Components/Icon';
import { useEffect, useState } from 'react';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
    duration?: number;
}

export default function Toast({
    message,
    type,
    onClose,
    duration = 3000,
}: ToastProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger enter animation
        requestAnimationFrame(() => setIsVisible(true));

        // Auto close timer
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Allow exit animation to finish before calling onClose
            setTimeout(onClose, 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div
            className={`fixed bottom-5 right-5 z-50 flex transform items-center gap-3 rounded-lg px-4 py-3 shadow-lg transition-all duration-300 ease-in-out ${
                isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
            } ${
                type === 'success'
                    ? 'border-l-4 border-[#10b981] bg-[#ecfdf5] text-[#064e3b]'
                    : 'border-l-4 border-[#ef4444] bg-[#fef2f2] text-[#7f1d1d]'
            }`}
        >
            <div
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                    type === 'success'
                        ? 'bg-[#d1fae5] text-[#10b981]'
                        : 'bg-[#fee2e2] text-[#ef4444]'
                }`}
            >
                <Icon name={type === 'success' ? 'check' : 'error'} size={16} />
            </div>

            <p className="mr-4 text-sm font-medium">{message}</p>

            <button
                onClick={handleClose}
                className={`rounded-full p-1 transition-colors ${
                    type === 'success'
                        ? 'hover:bg-[#d1fae5]'
                        : 'hover:bg-[#fee2e2]'
                }`}
            >
                <Icon name="close" size={16} />
            </button>
        </div>
    );
}
