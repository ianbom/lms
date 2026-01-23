import Icon from '@/Components/Icon';

export default function NextActions() {
    return (
        <div className="flex h-full flex-col rounded-xl border border-border-light bg-white shadow-card">
            <div className="border-b border-border-light px-6 py-4">
                <h3 className="text-lg font-bold text-slate-900">Next Actions</h3>
            </div>
            <div className="flex flex-col gap-3 p-4">
                {/* Task 1 */}
                <div className="flex items-center justify-between rounded-md border border-border-light p-3 hover:bg-gray-50">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white">
                            <div className="h-2.5 w-2.5 rounded-md bg-transparent"></div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-900">
                                Kerjakan Pretest Modul 1
                            </p>
                            <p className="text-xs text-slate-500">
                                Digital Marketing Mastery
                            </p>
                        </div>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                        <Icon name="arrow_forward" size={18} />
                    </button>
                </div>

                {/* Task 2 */}
                <div className="flex items-center justify-between rounded-md border border-border-light p-3 hover:bg-gray-50">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white">
                            <div className="h-2.5 w-2.5 rounded-md bg-transparent"></div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-900">
                                Jadwal Mentoring
                            </p>
                            <p className="text-xs text-slate-500">
                                Besok, 19:00 WIB
                            </p>
                        </div>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                        <Icon name="videocam" size={18} />
                    </button>
                </div>

                {/* Task 3 */}
                <div className="flex items-center justify-between rounded-md border border-border-light p-3 hover:bg-gray-50">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white">
                            <div className="h-2.5 w-2.5 rounded-md bg-transparent"></div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-900">
                                Update Profil
                            </p>
                            <p className="text-xs text-slate-500">
                                Lengkapi data diri
                            </p>
                        </div>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                        <Icon name="edit" size={18} />
                    </button>
                </div>
            </div>
            <div className="mt-auto border-t border-border-light px-6 py-3">
                <button className="w-full rounded-md bg-primary py-2 text-sm font-semibold text-white hover:bg-primary-hover">
                    Mulai Quiz
                </button>
            </div>
        </div>
    );
}
