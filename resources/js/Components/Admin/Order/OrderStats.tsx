import Icon from '@/Components/Icon';

export default function OrderStats() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat Card 1 */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <p className="text-sm font-medium text-slate-500">
                    Total Orders
                </p>
                <div className="mt-2 flex items-end justify-between">
                    <p className="text-2xl font-bold text-slate-900">1,240</p>
                    <span className="flex items-center rounded bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-600">
                        <Icon name="trending_up" size={14} className="mr-0.5" />
                        +12%
                    </span>
                </div>
            </div>
            {/* Stat Card 2 */}
            <div className="flex flex-col justify-between rounded-xl border border-l-4 border-y-slate-100 border-l-orange-500 border-r-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <p className="text-sm font-medium text-slate-500">
                    Pending Verification
                </p>
                <div className="mt-2 flex items-end justify-between">
                    <p className="text-2xl font-bold text-orange-600">12</p>
                    <span className="text-xs font-medium text-slate-400">
                        Action needed
                    </span>
                </div>
            </div>
            {/* Stat Card 3 */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <p className="text-sm font-medium text-slate-500">Approved</p>
                <div className="mt-2 flex items-end justify-between">
                    <p className="text-2xl font-bold text-slate-900">1,190</p>
                    <span className="text-xs text-slate-400">This month</span>
                </div>
            </div>
            {/* Stat Card 4 */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <p className="text-sm font-medium text-slate-500">Rejected</p>
                <div className="mt-2 flex items-end justify-between">
                    <p className="text-2xl font-bold text-slate-900">38</p>
                    <span className="text-xs text-slate-400">3% rate</span>
                </div>
            </div>
        </div>
    );
}
