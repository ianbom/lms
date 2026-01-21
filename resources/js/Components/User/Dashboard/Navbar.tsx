import Icon from '@/Components/Icon';

export default function Navbar() {
    return (
        <header className="flex h-20 shrink-0 items-center justify-between bg-background-light px-8 py-4">
            {/* Search */}
            <div className="flex w-full max-w-md items-center rounded-full border border-slate-100 bg-white px-4 py-2.5 shadow-sm">
                <span className="text-slate-400">
                    <Icon name="search" size={24} />
                </span>
                <input
                    className="ml-2 w-full border-none bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:ring-0"
                    placeholder="Search for courses, lessons..."
                    type="text"
                />
            </div>
            {/* Actions */}
            <div className="flex items-center gap-6">
                <button className="relative rounded-full border border-slate-100 bg-white p-2 text-slate-600 shadow-sm transition-colors hover:text-primary">
                    <Icon name="notifications" size={20} />
                    <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
                </button>
                <div
                    className="h-10 w-10 rounded-full border-2 border-white bg-cover bg-center shadow-sm"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD_d3COl4NsXkQASKtOz4JK3LKFBvJkHdWgX05P3Z5X2v3yKO-ws3zz-5dZwbCt3fBb1YFphBmQuNdbTdFVBJxbliunBwcvvw-AzMvXcMA-K-lcWx5puPV__gfopyZw45u69tb3i_L3mxehT8_ijOrAy1JOv9XqeoRjLF-npHPg_Qx_pbgrU113uPyKOavN94XC5QYdVWAsp7_FNLwTTTCE5ZtL9rlqMBZsNIWYSxNuaToIXeJAYDz4dhyze8Q_bWrnBTNILXg-AFK')",
                    }}
                ></div>
            </div>
        </header>
    );
}
