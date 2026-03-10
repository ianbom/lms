import Icon from '@/Components/Icon';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

interface RichTextEditorProps {
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    className?: string;
    error?: string;
}

interface ToolbarButtonProps {
    icon: string;
    title: string;
    isActive?: boolean;
    onClick: () => void;
}

function ToolbarButton({ icon, title, isActive, onClick }: ToolbarButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            title={title}
            className={`rounded p-1.5 transition-colors ${
                isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-[#5e6a62] hover:bg-[#f0f5f2] hover:text-primary'
            }`}
        >
            <Icon name={icon} size={18} />
        </button>
    );
}

function ToolbarDivider() {
    return <span className="mx-1 inline-block h-5 w-px bg-[#e5e7eb]" />;
}

export default function RichTextEditor({
    label,
    value = '',
    onChange,
    className = '',
    error,
}: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3] },
            }),
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-primary underline cursor-pointer',
                },
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: 'tiptap-editor min-h-[180px] px-4 py-3 text-sm text-[#101814] focus:outline-none prose prose-sm max-w-none',
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange?.(html);
        },
    });

    // Sync content when value changes externally (e.g. edit modal opening)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    const addLink = () => {
        const url = window.prompt('Masukkan URL:');
        if (url && editor) {
            editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: url })
                .run();
        }
    };

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-[#101814]">
                    {label}
                </label>
            )}
            <div
                className={`overflow-hidden rounded-md border bg-white transition-all focus-within:ring-2 ${
                    error
                        ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-200'
                        : 'border-[#dae7e0] focus-within:border-primary focus-within:ring-primary/20'
                }`}
            >
                {/* Toolbar */}
                {editor && (
                    <div className="flex flex-wrap items-center gap-0.5 border-b border-[#f0f5f2] px-3 py-2">
                        <ToolbarButton
                            icon="format_bold"
                            title="Bold"
                            isActive={editor.isActive('bold')}
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                        />
                        <ToolbarButton
                            icon="format_italic"
                            title="Italic"
                            isActive={editor.isActive('italic')}
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                        />
                        <ToolbarButton
                            icon="format_underlined"
                            title="Underline"
                            isActive={editor.isActive('underline')}
                            onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }
                        />
                        <ToolbarButton
                            icon="strikethrough_s"
                            title="Strikethrough"
                            isActive={editor.isActive('strike')}
                            onClick={() =>
                                editor.chain().focus().toggleStrike().run()
                            }
                        />

                        <ToolbarDivider />

                        <ToolbarButton
                            icon="title"
                            title="Heading 1"
                            isActive={editor.isActive('heading', { level: 1 })}
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 1 })
                                    .run()
                            }
                        />
                        <ToolbarButton
                            icon="format_h2"
                            title="Heading 2"
                            isActive={editor.isActive('heading', { level: 2 })}
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 2 })
                                    .run()
                            }
                        />
                        <ToolbarButton
                            icon="format_h3"
                            title="Heading 3"
                            isActive={editor.isActive('heading', { level: 3 })}
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 3 })
                                    .run()
                            }
                        />

                        <ToolbarDivider />

                        <ToolbarButton
                            icon="format_list_bulleted"
                            title="Bullet List"
                            isActive={editor.isActive('bulletList')}
                            onClick={() =>
                                editor.chain().focus().toggleBulletList().run()
                            }
                        />
                        <ToolbarButton
                            icon="format_list_numbered"
                            title="Ordered List"
                            isActive={editor.isActive('orderedList')}
                            onClick={() =>
                                editor.chain().focus().toggleOrderedList().run()
                            }
                        />

                        <ToolbarDivider />

                        <ToolbarButton
                            icon="format_quote"
                            title="Blockquote"
                            isActive={editor.isActive('blockquote')}
                            onClick={() =>
                                editor.chain().focus().toggleBlockquote().run()
                            }
                        />
                        <ToolbarButton
                            icon="link"
                            title="Link"
                            isActive={editor.isActive('link')}
                            onClick={addLink}
                        />
                    </div>
                )}

                {/* Editor Content */}
                <EditorContent editor={editor} />
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
}
