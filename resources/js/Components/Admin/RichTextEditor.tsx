import Icon from '@/Components/Icon';

interface RichTextEditorProps {
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    className?: string;
    error?: string;
}

export default function RichTextEditor({
    label,
    value = '',
    onChange,
    placeholder = 'Start typing...',
    maxLength = 2000,
    className = '',
    error,
}: RichTextEditorProps) {
    const toolbarButtons = [
        { icon: 'format_bold', action: 'bold' },
        { icon: 'format_italic', action: 'italic' },
        { icon: 'format_underlined', action: 'underline' },
        { icon: 'format_list_bulleted', action: 'list' },
        { icon: 'format_list_numbered', action: 'numbered' },
        { icon: 'link', action: 'link' },
    ];

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-[#101814]">
                    {label}
                </label>
            )}
            <div
                className={`overflow-hidden rounded-lg border bg-white transition-all focus-within:ring-2 ${
                    error
                        ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-200'
                        : 'border-[#dae7e0] focus-within:border-primary focus-within:ring-primary/20'
                }`}
            >
                {/* Toolbar */}
                <div className="flex items-center gap-1 border-b border-[#f0f5f2] px-3 py-2">
                    {toolbarButtons.map((btn, index) => (
                        <span key={btn.action}>
                            <button
                                type="button"
                                className="rounded p-1.5 text-[#5e6a62] transition-colors hover:bg-[#f0f5f2] hover:text-primary"
                                title={btn.action}
                            >
                                <Icon name={btn.icon} size={18} />
                            </button>
                            {index === 2 && (
                                <span className="mx-1 inline-block h-5 w-px bg-[#e5e7eb]" />
                            )}
                            {index === 4 && (
                                <span className="mx-1 inline-block h-5 w-px bg-[#e5e7eb]" />
                            )}
                        </span>
                    ))}
                </div>

                {/* Text Area */}
                <textarea
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                    className="min-h-[180px] w-full resize-none border-none px-4 py-3 text-sm text-[#101814] placeholder-[#a0b3a9] focus:outline-none"
                    maxLength={maxLength}
                />

                {/* Character Count */}
                <div className="border-t border-[#f0f5f2] px-4 py-2 text-right">
                    <span className="text-xs text-[#a0b3a9]">
                        {value.length} / {maxLength} characters
                    </span>
                </div>
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
}
