import Icon from '@/Components/Icon';
import { Mentor } from '@/types/class';
import {
    formatTime,
    getResourceColor,
    getResourceIcon,
    VideoNavigation,
    VideoNote,
    VideoResource,
    VideoWithProgress,
} from '@/types/study';
import { useState } from 'react';

interface LessonInfoProps {
    video: VideoWithProgress & { module: { id: number; title: string } };
    resources: VideoResource[];
    notes: VideoNote[];
    mentors: Mentor[];
    navigation: VideoNavigation;
    onAddNote: (content: string) => void;
    onUpdateNote: (noteId: number, content: string) => void;
    onDeleteNote: (noteId: number) => void;
    onNavigate: (videoId: number) => void;
}

export default function LessonInfo({
    video,
    resources,
    notes,
    mentors,
    navigation,
    onAddNote,
    onUpdateNote,
    onDeleteNote,
    onNavigate,
}: LessonInfoProps) {
    const [showNotesModal, setShowNotesModal] = useState(false);
    const [newNoteContent, setNewNoteContent] = useState('');
    const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
    const [editingContent, setEditingContent] = useState('');

    const handleAddNote = () => {
        if (newNoteContent.trim()) {
            onAddNote(newNoteContent);
            setNewNoteContent('');
        }
    };

    const handleStartEdit = (note: VideoNote) => {
        setEditingNoteId(note.id);
        setEditingContent(note.content);
    };

    const handleSaveEdit = () => {
        if (editingNoteId && editingContent.trim()) {
            onUpdateNote(editingNoteId, editingContent);
            setEditingNoteId(null);
            setEditingContent('');
        }
    };

    const handleCancelEdit = () => {
        setEditingNoteId(null);
        setEditingContent('');
    };

    const mentor = mentors[0]; // Use first mentor for display

    return (
        <div className="flex flex-col gap-10">
            {/* Meta Data Bar */}
            <div className="shadow-card flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-4">
                {/* Mentor */}
                {mentor && (
                    <div className="flex items-center gap-3">
                        <div
                            className="h-12 w-12 rounded-full border border-slate-100 bg-cover bg-center bg-slate-200"
                            style={{
                                backgroundImage: mentor.avatar_url
                                    ? `url('${mentor.avatar_url}')`
                                    : undefined,
                            }}
                        >
                            {!mentor.avatar_url && (
                                <div className="flex h-full w-full items-center justify-center text-slate-400">
                                    <Icon name="person" size={24} />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-400">
                                Mentor
                            </span>
                            <span className="text-base font-bold text-slate-800">
                                {mentor.name}
                            </span>
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                        <Icon name="favorite" size={20} />
                        Suka
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                        <Icon name="share" size={20} />
                        Bagikan
                    </button>
                    <button
                        onClick={() => setShowNotesModal(true)}
                        className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                    >
                        <Icon name="edit_note" size={20} />
                        Catatan ({notes.length})
                    </button>
                </div>
            </div>

            {/* About & Resources */}
            <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex flex-col gap-4 lg:col-span-2">
                    <h3 className="text-xl font-bold text-slate-900">
                        Tentang Video Ini
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                        {video.description || 'Tidak ada deskripsi untuk video ini.'}
                    </p>

                    {/* Navigation */}
                    <div className="mt-4 flex items-center justify-between">
                        {navigation.previous ? (
                            <button
                                onClick={() => onNavigate(navigation.previous!.id)}
                                className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                            >
                                <Icon name="arrow_back" size={18} />
                                <span>Video Sebelumnya</span>
                            </button>
                        ) : (
                            <div />
                        )}
                        <span className="text-sm text-slate-500">
                            Video {navigation.current_index} dari {navigation.total_videos}
                        </span>
                        {navigation.next ? (
                            <button
                                onClick={() => onNavigate(navigation.next!.id)}
                                className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                            >
                                <span>Video Selanjutnya</span>
                                <Icon name="arrow_forward" size={18} />
                            </button>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>

                {/* Resources */}
                <LessonResources resources={resources} />
            </div>

            {/* Notes Modal */}
            {showNotesModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h3 className="text-lg font-bold text-slate-900">
                                Catatan Video
                            </h3>
                            <button
                                onClick={() => setShowNotesModal(false)}
                                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                            >
                                <Icon name="close" size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="max-h-[60vh] overflow-y-auto p-6">
                            {/* Add Note Form */}
                            <div className="mb-6">
                                <textarea
                                    value={newNoteContent}
                                    onChange={(e) => setNewNoteContent(e.target.value)}
                                    placeholder="Tulis catatan baru..."
                                    className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    rows={3}
                                />
                                <button
                                    onClick={handleAddNote}
                                    disabled={!newNoteContent.trim()}
                                    className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:opacity-50"
                                >
                                    Tambah Catatan
                                </button>
                            </div>

                            {/* Notes List */}
                            <div className="space-y-4">
                                {notes.length === 0 ? (
                                    <p className="text-center text-sm text-slate-500">
                                        Belum ada catatan untuk video ini.
                                    </p>
                                ) : (
                                    notes.map((note) => (
                                        <div
                                            key={note.id}
                                            className="rounded-lg border border-slate-100 bg-slate-50 p-4"
                                        >
                                            {editingNoteId === note.id ? (
                                                <>
                                                    <textarea
                                                        value={editingContent}
                                                        onChange={(e) =>
                                                            setEditingContent(e.target.value)
                                                        }
                                                        className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                                        rows={3}
                                                    />
                                                    <div className="mt-2 flex gap-2">
                                                        <button
                                                            onClick={handleSaveEdit}
                                                            className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white"
                                                        >
                                                            Simpan
                                                        </button>
                                                        <button
                                                            onClick={handleCancelEdit}
                                                            className="rounded-lg bg-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600"
                                                        >
                                                            Batal
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-sm text-slate-700 whitespace-pre-wrap">
                                                        {note.content}
                                                    </p>
                                                    <div className="mt-3 flex items-center justify-between">
                                                        <span className="text-xs text-slate-400">
                                                            {new Date(
                                                                note.created_at,
                                                            ).toLocaleDateString('id-ID', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                            })}
                                                        </span>
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() =>
                                                                    handleStartEdit(note)
                                                                }
                                                                className="text-slate-400 transition-colors hover:text-primary"
                                                            >
                                                                <Icon name="edit" size={16} />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    onDeleteNote(note.id)
                                                                }
                                                                className="text-slate-400 transition-colors hover:text-red-500"
                                                            >
                                                                <Icon name="delete" size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

interface LessonResourcesProps {
    resources: VideoResource[];
}

function LessonResources({ resources }: LessonResourcesProps) {
    if (resources.length === 0) {
        return (
            <div className="shadow-card h-fit rounded-2xl border border-slate-100 bg-white p-5">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="text-primary">
                        <Icon name="folder_open" size={24} />
                    </span>
                    Resource Video
                </h4>
                <p className="text-sm text-slate-500">
                    Tidak ada resource untuk video ini.
                </p>
            </div>
        );
    }

    return (
        <div className="shadow-card h-fit rounded-2xl border border-slate-100 bg-white p-5">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="text-primary">
                    <Icon name="folder_open" size={24} />
                </span>
                Resource Video
            </h4>
            <div className="flex flex-col gap-3">
                {resources.map((resource) => {
                    const colors = getResourceColor(resource.file_type);
                    const icon = getResourceIcon(resource.file_type);

                    return (
                        <a
                            key={resource.id}
                            className="group flex items-center justify-between rounded-xl bg-slate-50 p-3 transition-colors hover:bg-primary-light"
                            href={resource.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded ${colors.bg} ${colors.text}`}
                                >
                                    <Icon name={icon} size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary">
                                        {resource.title}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                        {resource.formatted_size ||
                                            formatFileSize(resource.file_size)}
                                    </span>
                                </div>
                            </div>
                            <span className="text-slate-400 group-hover:text-primary">
                                <Icon name="download" size={20} />
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

// Helper function to format file size
function formatFileSize(bytes: number): string {
    if (!bytes) return '0 KB';
    const units = ['B', 'KB', 'MB', 'GB'];
    let unitIndex = 0;
    let size = bytes;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(1)} ${units[unitIndex]}`;
}
