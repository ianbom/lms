import Icon from '@/Components/Icon';
import { VideoNote } from '@/types/study';
import { useState } from 'react';

interface VideoNotesInputProps {
    note: VideoNote | null;
    onSave: (content: string) => Promise<void>;
    onUpdate: (noteId: number, content: string) => Promise<void>;
}

export default function VideoNotesInput({
    note,
    onSave,
    onUpdate,
}: VideoNotesInputProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState(note?.content || '');
    const [isSaving, setIsSaving] = useState(false);

    const hasExistingNote = !!note;
    const hasChanges = content !== (note?.content || '');

    const handleSave = async () => {
        if (!content.trim()) return;

        setIsSaving(true);
        try {
            if (hasExistingNote && note) {
                await onUpdate(note.id, content);
            } else {
                await onSave(content);
            }
        } catch (error) {
            console.error('Failed to save note:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setContent(note?.content || '');
        setIsOpen(false);
    };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-card">
            {/* Toggle Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-4 transition-colors hover:bg-slate-50"
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                        <Icon name="edit_note" size={24} className="text-amber-600" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold text-slate-900">
                            Catatan Video
                        </h3>
                        <p className="text-sm text-slate-500">
                            {hasExistingNote
                                ? 'Anda memiliki catatan untuk video ini'
                                : 'Tambahkan catatan untuk video ini'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {hasExistingNote && (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                            Tersimpan
                        </span>
                    )}
                    <Icon
                        name={isOpen ? 'expand_less' : 'expand_more'}
                        size={24}
                        className="text-slate-400"
                    />
                </div>
            </button>

            {/* Expandable Content */}
            {isOpen && (
                <div className="border-t border-slate-100 p-4">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Tulis catatan Anda di sini... Anda bisa mencatat poin-poin penting dari video ini."
                        className="min-h-[150px] w-full resize-none rounded-xl border border-slate-200 p-4 text-slate-700 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />

                    {/* Character count */}
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                            {content.length} karakter
                        </span>

                        {/* Last updated */}
                        {hasExistingNote && note?.updated_at && (
                            <span className="text-xs text-slate-400">
                                Terakhir diperbarui:{' '}
                                {new Date(note.updated_at).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </span>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex items-center justify-end gap-3">
                        <button
                            onClick={handleCancel}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
                        >
                            Batal
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!content.trim() || !hasChanges || isSaving}
                            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSaving ? (
                                <>
                                    <Icon
                                        name="refresh"
                                        size={16}
                                        className="animate-spin"
                                    />
                                    Menyimpan...
                                </>
                            ) : (
                                <>
                                    <Icon name="save" size={16} />
                                    {hasExistingNote ? 'Perbarui Catatan' : 'Simpan Catatan'}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
