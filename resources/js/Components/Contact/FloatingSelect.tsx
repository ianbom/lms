import Icon from '@/Components/Icon'; // Assuming Icon component exists based on UserLayout
import React from 'react';

interface Option {
    label: string;
    value: string;
}

interface FloatingSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    id: string;
    options: Option[];
    error?: string;
}

export default function FloatingSelect({
    label,
    id,
    options,
    error,
    className = '',
    ...props
}: FloatingSelectProps) {
    return (
        <div className="group relative z-0">
            <select
                id={id}
                className={`peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 text-opacity-0 focus:border-primary focus:text-opacity-100 focus:outline-none focus:ring-0 ${
                    props.value ? 'text-opacity-100' : ''
                } ${className}`}
                {...props}
            >
                <option value="" disabled className="text-gray-500">
                    Select {label}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label
                htmlFor={id}
                className={`absolute left-0 -z-10 origin-[0] transform text-sm duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary ${
                    props.value
                        ? 'top-3 -translate-y-6 scale-75 font-medium text-primary'
                        : 'top-3 translate-y-0 scale-100 text-gray-500 peer-focus:font-medium'
                }`}
            >
                {label}
            </label>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-400">
                <Icon name="expand_more" size={20} />
            </div>
            {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </div>
    );
}

// Rewriting for better precision with the HTML provided in prompt
// The HTML used:
// select.floating-input { background-image: none; }
// className="floating-input ... text-opacity-0 focus:text-opacity-100"
// label ... peer-focus:... peer-placeholder-shown:...
//
// In React, 'value=""' for select works as 'placeholder-shown' if the option is valid? No, usually valid value.
// We'll stick to a simpler implementation that mimics the behavior: "Label floats if focused or has value".
