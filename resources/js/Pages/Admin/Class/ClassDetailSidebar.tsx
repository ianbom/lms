import { ClassData, Mentor } from './types';

interface ClassDetailSidebarProps {
    classData: ClassData;
}

export default function ClassDetailSidebar({
    classData,
}: ClassDetailSidebarProps) {
    return (
        <div className="space-y-6">
            {/* Class Detail Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-800">
                    Detail Kelas
                </h3>
                <div className="space-y-4">
                    {classData.thumbnail_url && (
                        <div>
                            <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                                Thumbnail
                            </label>
                            <img
                                src={classData.thumbnail_url}
                                alt={classData.title}
                                className="h-48 w-full rounded-md object-cover"
                            />
                        </div>
                    )}
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500">
                            Status
                        </label>
                        <div className="mt-1">
                            <span
                                className={`rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wide ${
                                    classData.status === 'published'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}
                            >
                                {classData.status === 'published'
                                    ? 'Published'
                                    : 'Draft'}
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500">
                            Tanggal Publikasi
                        </label>
                        <div className="mt-1 text-sm font-medium text-slate-700">
                            {classData.published_at
                                ? new Date(
                                      classData.published_at,
                                  ).toLocaleDateString('id-ID', {
                                      day: 'numeric',
                                      month: 'long',
                                      year: 'numeric',
                                  })
                                : 'Belum Dipublis'}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500">
                            Harga
                        </label>
                        <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-xl font-bold text-primary">
                                Rp{' '}
                                {classData.price_final?.toLocaleString(
                                    'id-ID',
                                ) || 0}
                            </span>
                            {classData.discount > 0 && (
                                <span className="text-sm text-slate-400 line-through">
                                    Rp{' '}
                                    {classData.price?.toLocaleString('id-ID') ||
                                        0}
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500">
                            Deskripsi
                        </label>
                        <div
                            className="prose prose-sm mt-1 max-h-40 overflow-y-auto text-slate-600"
                            dangerouslySetInnerHTML={{
                                __html: classData.description,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Mentor Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-800">
                    Mentor
                </h3>
                <div className="space-y-3">
                    {classData.mentors && classData.mentors.length > 0 ? (
                        classData.mentors.map((mentor: Mentor) => (
                            <div
                                key={mentor.id}
                                className="flex items-center gap-3"
                            >
                                <img
                                    src={
                                        mentor.avatar_url ||
                                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                            mentor.name,
                                        )}&background=random`
                                    }
                                    alt={mentor.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <span className="font-medium text-slate-700">
                                    {mentor.name}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="text-sm text-slate-500">
                            Belum ada mentor
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
