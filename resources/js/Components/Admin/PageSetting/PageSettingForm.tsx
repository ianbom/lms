interface PageSettingFormData {
    type: 'e-learning' | 'learning-package' | 'webinar' | '';
    title: string;
    description: string;
}

interface PageSettingFormErrors {
    type?: string;
    title?: string;
    description?: string;
}

interface PageSettingFormProps {
    formData: PageSettingFormData;
    errors: PageSettingFormErrors;
    onChange: (data: PageSettingFormData) => void;
}

export type { PageSettingFormData, PageSettingFormErrors };

const TYPE_OPTIONS = [
    { value: 'e-learning', label: 'E-Learning' },
    { value: 'learning-package', label: 'Learning Package' },
    { value: 'webinar', label: 'Webinar' },
];

export default function PageSettingForm({
    formData,
    errors,
    onChange,
}: PageSettingFormProps) {
    const handleChange = <K extends keyof PageSettingFormData>(
        key: K,
        value: PageSettingFormData[K],
    ) => {
        onChange({ ...formData, [key]: value });
    };

    return (
        <div className="flex flex-col gap-5">
            {/* Type */}
            <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Tipe Halaman <span className="text-red-500">*</span>
                </label>
                <select
                    value={formData.type}
                    onChange={(e) =>
                        handleChange(
                            'type',
                            e.target.value as PageSettingFormData['type'],
                        )
                    }
                    className={`w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.type
                            ? 'border-red-400 bg-red-50'
                            : 'border-slate-300 bg-white'
                    }`}
                >
                    <option value="">-- Pilih Tipe --</option>
                    {TYPE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {errors.type && (
                    <p className="mt-1 text-xs text-red-500">{errors.type}</p>
                )}
            </div>

            {/* Title */}
            <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Judul Halaman <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Contoh: E-Learning Terbaik"
                    className={`w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.title
                            ? 'border-red-400 bg-red-50'
                            : 'border-slate-300 bg-white'
                    }`}
                />
                {errors.title && (
                    <p className="mt-1 text-xs text-red-500">{errors.title}</p>
                )}
            </div>

            {/* Description */}
            <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Deskripsi <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={formData.description}
                    onChange={(e) =>
                        handleChange('description', e.target.value)
                    }
                    placeholder="Deskripsi singkat halaman"
                    className={`w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.description
                            ? 'border-red-400 bg-red-50'
                            : 'border-slate-300 bg-white'
                    }`}
                />
                {errors.description && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.description}
                    </p>
                )}
            </div>
        </div>
    );
}
