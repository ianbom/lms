import Icon from '@/Components/Icon';

interface Stats {
    total: number;
    admins: number;
    users: number;
    verified: number;
    unverified: number;
    new_this_month: number;
}

interface UserStatsProps {
    stats: Stats;
}

export default function UserStats({ stats }: UserStatsProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {/* Total Users */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">Total Users</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                        <Icon name="people" size={20} className="text-blue-600" />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
                </div>
            </div>

            {/* Admin Users */}
            <div className="flex flex-col justify-between rounded-xl border border-l-4 border-y-slate-100 border-l-purple-500 border-r-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">Admin</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50">
                        <Icon name="admin_panel_settings" size={20} className="text-purple-600" />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-purple-600">{stats.admins}</p>
                </div>
            </div>

            {/* Regular Users */}
            <div className="flex flex-col justify-between rounded-xl border border-l-4 border-y-slate-100 border-l-green-500 border-r-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">User</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                        <Icon name="person" size={20} className="text-green-600" />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-green-600">{stats.users}</p>
                </div>
            </div>

            {/* Verified Users */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">Terverifikasi</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                        <Icon name="verified" size={20} className="text-emerald-600" />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-slate-900">{stats.verified}</p>
                </div>
            </div>

            {/* Unverified Users */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">Belum Verifikasi</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                        <Icon name="warning" size={20} className="text-orange-600" />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-slate-900">{stats.unverified}</p>
                </div>
            </div>

            {/* New This Month */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">Bulan Ini</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50">
                        <Icon name="trending_up" size={20} className="text-cyan-600" />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-slate-900">{stats.new_this_month}</p>
                </div>
            </div>
        </div>
    );
}
