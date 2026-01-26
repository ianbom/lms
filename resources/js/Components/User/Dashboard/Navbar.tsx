export default function Navbar() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-background-light px-8 py-4">
            {/* Logo atau konten kiri bisa ditambahkan di sini */}
            <div></div>
            {/* Actions */}
            <div className="flex items-center gap-6">
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
