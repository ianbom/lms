import React from 'react';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    error?: string;
}

export default function FloatingInput({
    label,
    id,
    error,
    className = '',
    ...props
}: FloatingInputProps) {
    return (
        <div className="group relative z-0">
            <input
                id={id}
                className={`peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 ${className}`}
                placeholder=" "
                {...props}
            />
            <label
                htmlFor={id}
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary"
            >
                {label}
            </label>
            {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </div>
    );
}
