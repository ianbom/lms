import Icon from '@/Components/Icon';

export default function StatsGrid() {
    return (
        <div className="grid h-full grid-cols-2 gap-4">
            {/* Stat Card 1 */}
            <div className="flex flex-col justify-between rounded-xl border border-border-light bg-white p-5 shadow-card">
                <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-slate-500">
                        Kelas Aktif
                    </span>
                    <Icon name="school" className="text-primary" />
                </div>
                <p className="text-3xl font-bold text-slate-900">3</p>
            </div>

            {/* Stat Card 2 */}
            <div className="flex flex-col justify-between rounded-xl border border-border-light bg-white p-5 shadow-card">
                <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-slate-500">
                        Kelas Selesai
                    </span>
                    <Icon name="workspace_premium" className="text-primary" />
                </div>
                <p className="text-3xl font-bold text-slate-900">12</p>
            </div>

            {/* Stat Card 3 */}
            <div className="flex flex-col justify-between rounded-xl border border-border-light bg-white p-5 shadow-card">
                <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-slate-500">
                        Order Pending
                    </span>
                    <Icon name="shopping_cart" className="text-amber-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900">1</p>
            </div>

            {/* Stat Card 4 */}
            <div className="flex flex-col justify-between rounded-xl border border-border-light bg-white p-5 shadow-card">
                <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-slate-500">
                        Quiz Pending
                    </span>
                    <Icon name="quiz" className="text-rose-500" />
                </div>
                <p className="text-3xl font-bold text-slate-900">2</p>
            </div>
        </div>
    );
}
