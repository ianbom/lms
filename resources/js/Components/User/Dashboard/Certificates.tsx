import Icon from '@/Components/Icon';

export default function Certificates() {
    return (
        <div className="flex h-full flex-col rounded-xl border border-border-light bg-white p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                    Sertifikat Saya
                </h3>
            </div>
            <div className="flex flex-col gap-3">
                {/* Certificate Item 1 */}
                <div className="flex items-center justify-between rounded-md border border-border-light p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-700">
                            <Icon name="workspace_premium" size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">
                                UI/UX Design Fundamentals
                            </p>
                            <p className="text-sm text-slate-500">
                                Diterbitkan: 15 Sep 2023
                            </p>
                        </div>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border-light bg-white text-slate-900 sm:hidden">
                        <Icon name="download" size={16} />
                    </button>
                    <button className="hidden items-center gap-2 rounded-md border border-border-light bg-white px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-gray-50 sm:flex">
                        <Icon name="download" size={16} />
                        Download
                    </button>
                </div>

                {/* Certificate Item 2 */}
                <div className="flex items-center justify-between rounded-md border border-border-light p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-700">
                            <Icon name="workspace_premium" size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">
                                Basic Excel Proficiency
                            </p>
                            <p className="text-sm text-slate-500">
                                Diterbitkan: 10 Agt 2023
                            </p>
                        </div>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border-light bg-white text-slate-900 sm:hidden">
                        <Icon name="download" size={16} />
                    </button>
                    <button className="hidden items-center gap-2 rounded-md border border-border-light bg-white px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-gray-50 sm:flex">
                        <Icon name="download" size={16} />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}
