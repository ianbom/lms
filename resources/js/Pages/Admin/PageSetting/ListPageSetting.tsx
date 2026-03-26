import PageSettingForm, {
    PageSettingFormData,
    PageSettingFormErrors,
} from '@/Components/Admin/PageSetting/PageSettingForm';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

interface PageSetting {
    id: number;
    type: 'e-learning' | 'learning-package' | 'webinar';
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    pageSettings: PageSetting[];
}

const TYPE_LABELS: Record<string, string> = {
    'e-learning': 'E-Learning',
    'learning-package': 'Learning Package',
    webinar: 'Webinar',
};

const TYPE_COLORS: Record<string, string> = {
    'e-learning': 'bg-blue-50 text-blue-700 ring-blue-600/20',
    'learning-package': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    webinar: 'bg-violet-50 text-violet-700 ring-violet-600/20',
};

const EMPTY_FORM: PageSettingFormData = {
    type: '',
    title: '',
    description: '',
};

export default function ListPageSetting({ pageSettings }: Props) {
    // --- Create Modal ---
    const [showCreate, setShowCreate] = useState(false);
    const [createForm, setCreateForm] =
        useState<PageSettingFormData>(EMPTY_FORM);
    const [createErrors, setCreateErrors] = useState<PageSettingFormErrors>({});
    const [createProcessing, setCreateProcessing] = useState(false);

    // --- Edit Modal ---
    const [editTarget, setEditTarget] = useState<PageSetting | null>(null);
    const [editForm, setEditForm] = useState<PageSettingFormData>(EMPTY_FORM);
    const [editErrors, setEditErrors] = useState<PageSettingFormErrors>({});
    const [editProcessing, setEditProcessing] = useState(false);

    // --- Delete confirm ---
    const [deleteTarget, setDeleteTarget] = useState<PageSetting | null>(null);
    const [deleteProcessing, setDeleteProcessing] = useState(false);

    // Validate form
    const validate = (data: PageSettingFormData): PageSettingFormErrors => {
        const errs: PageSettingFormErrors = {};
        if (!data.type) errs.type = 'Tipe wajib dipilih.';
        if (!data.title.trim()) errs.title = 'Judul wajib diisi.';
        if (!data.description.trim())
            errs.description = 'Deskripsi wajib diisi.';
        return errs;
    };

    // --- Create handlers ---
    const openCreate = () => {
        setCreateForm(EMPTY_FORM);
        setCreateErrors({});
        setShowCreate(true);
    };

    const handleCreate = () => {
        const errs = validate(createForm);
        if (Object.keys(errs).length > 0) {
            setCreateErrors(errs);
            return;
        }
        setCreateProcessing(true);
        router.post(
            route('admin.page-settings.store'),
            createForm as unknown as Record<string, string>,
            {
                onSuccess: () => {
                    setShowCreate(false);
                    setCreateForm(EMPTY_FORM);
                },
                onError: (e) => setCreateErrors(e as PageSettingFormErrors),
                onFinish: () => setCreateProcessing(false),
            },
        );
    };

    // --- Edit handlers ---
    const openEdit = (setting: PageSetting) => {
        setEditTarget(setting);
        setEditForm({
            type: setting.type,
            title: setting.title,
            description: setting.description,
        });
        setEditErrors({});
    };

    const handleEdit = () => {
        if (!editTarget) return;
        const errs = validate(editForm);
        if (Object.keys(errs).length > 0) {
            setEditErrors(errs);
            return;
        }
        setEditProcessing(true);
        router.put(
            route('admin.page-settings.update', editTarget.id),
            editForm as unknown as Record<string, string>,
            {
                onSuccess: () => setEditTarget(null),
                onError: (e) => setEditErrors(e as PageSettingFormErrors),
                onFinish: () => setEditProcessing(false),
            },
        );
    };

    // --- Delete handler ---
    const handleDelete = () => {
        if (!deleteTarget) return;
        setDeleteProcessing(true);
        router.delete(route('admin.page-settings.destroy', deleteTarget.id), {
            onSuccess: () => setDeleteTarget(null),
            onFinish: () => setDeleteProcessing(false),
        });
    };

    return (
        <AdminLayout breadcrumbs={[{ label: 'Page Settings' }]}>
            <Head title="Page Settings" />

            <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                            Page Settings
                        </h1>
                        <p className="mt-1 text-slate-500">
                            Kelola judul dan deskripsi halaman berdasarkan tipe
                            kelas.
                        </p>
                    </div>
                    <button
                        onClick={openCreate}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
                    >
                        <Icon name="add" size={18} />
                        Tambah Setting
                    </button>
                </div>

                {/* Table Card */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    {pageSettings.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                            <Icon name="settings" size={40} className="mb-3" />
                            <p className="font-medium">
                                Belum ada page setting.
                            </p>
                            <p className="mt-1 text-sm">
                                Klik "Tambah Setting" untuk menambahkan.
                            </p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    <th className="px-5 py-3.5 text-left font-semibold text-slate-600">
                                        Tipe
                                    </th>
                                    <th className="px-5 py-3.5 text-left font-semibold text-slate-600">
                                        Judul
                                    </th>
                                    <th className="px-5 py-3.5 text-left font-semibold text-slate-600">
                                        Deskripsi
                                    </th>
                                    <th className="px-5 py-3.5 text-right font-semibold text-slate-600">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pageSettings.map((setting) => (
                                    <tr
                                        key={setting.id}
                                        className="transition hover:bg-slate-50"
                                    >
                                        <td className="px-5 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${TYPE_COLORS[setting.type]}`}
                                            >
                                                {TYPE_LABELS[setting.type] ??
                                                    setting.type}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 font-medium text-slate-800">
                                            {setting.title}
                                        </td>
                                        <td className="max-w-xs px-5 py-4 text-slate-500">
                                            <span className="line-clamp-2">
                                                {setting.description}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="inline-flex items-center gap-1">
                                                <button
                                                    onClick={() =>
                                                        openEdit(setting)
                                                    }
                                                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-primary"
                                                    title="Edit"
                                                >
                                                    <Icon
                                                        name="edit"
                                                        size={17}
                                                    />
                                                </button>
                                                {/* <button
                                                    onClick={() =>
                                                        setDeleteTarget(setting)
                                                    }
                                                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                                                    title="Hapus"
                                                >
                                                    <Icon
                                                        name="delete"
                                                        size={17}
                                                    />
                                                </button> */}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* ── Create Modal ── */}
            {showCreate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h2 className="text-lg font-bold text-slate-900">
                                Tambah Page Setting
                            </h2>
                            <button
                                onClick={() => setShowCreate(false)}
                                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
                            >
                                <Icon name="close" size={20} />
                            </button>
                        </div>
                        <div className="px-6 py-5">
                            <PageSettingForm
                                formData={createForm}
                                errors={createErrors}
                                onChange={setCreateForm}
                            />
                        </div>
                        <div className="flex justify-end gap-3 border-t border-slate-100 px-6 py-4">
                            <button
                                onClick={() => setShowCreate(false)}
                                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleCreate}
                                disabled={createProcessing}
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60"
                            >
                                {createProcessing && (
                                    <Icon
                                        name="progress_activity"
                                        size={16}
                                        className="animate-spin"
                                    />
                                )}
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Edit Modal ── */}
            {editTarget && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                            <h2 className="text-lg font-bold text-slate-900">
                                Edit Page Setting
                            </h2>
                            <button
                                onClick={() => setEditTarget(null)}
                                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
                            >
                                <Icon name="close" size={20} />
                            </button>
                        </div>
                        <div className="px-6 py-5">
                            <PageSettingForm
                                formData={editForm}
                                errors={editErrors}
                                onChange={setEditForm}
                            />
                        </div>
                        <div className="flex justify-end gap-3 border-t border-slate-100 px-6 py-4">
                            <button
                                onClick={() => setEditTarget(null)}
                                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleEdit}
                                disabled={editProcessing}
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60"
                            >
                                {editProcessing && (
                                    <Icon
                                        name="progress_activity"
                                        size={16}
                                        className="animate-spin"
                                    />
                                )}
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Delete Confirm Modal ── */}
            {deleteTarget && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
                        <div className="p-6 text-center">
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                                <Icon
                                    name="delete"
                                    size={28}
                                    className="text-red-500"
                                />
                            </div>
                            <h2 className="mb-2 text-lg font-bold text-slate-900">
                                Hapus Page Setting?
                            </h2>
                            <p className="text-sm text-slate-500">
                                Setting{' '}
                                <span className="font-semibold">
                                    "{deleteTarget.title}"
                                </span>{' '}
                                akan dihapus secara permanen.
                            </p>
                        </div>
                        <div className="flex gap-3 border-t border-slate-100 px-6 py-4">
                            <button
                                onClick={() => setDeleteTarget(null)}
                                className="flex-1 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={deleteProcessing}
                                className="flex-1 rounded-lg bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-60"
                            >
                                {deleteProcessing ? 'Menghapus...' : 'Hapus'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
