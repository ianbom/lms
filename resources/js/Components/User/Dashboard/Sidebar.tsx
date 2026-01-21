import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

export default function Sidebar() {
    return (
        <aside className="z-20 flex h-full w-[260px] shrink-0 flex-col border-r border-slate-200 bg-white">
            {/* Logo Area */}
            <div className="flex h-20 items-center border-b border-slate-100 px-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                        <Icon name="school" size={30} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900">
                            EduLearn
                        </h1>
                        <span className="text-xs font-medium text-slate-500">
                            Pro Platform
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                    <Icon
                        name="dashboard"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">Dashboard</span>
                </Link>
                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                    <Icon
                        name="shopping_bag"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">My Orders</span>
                </Link>
                {/* Active Item */}
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-xl bg-primary-light text-primary transition-colors"
                    // style for active state usually passed via props, but hardcoding for this page as requested
                >
                    <div className="flex w-full items-center gap-3 px-4 py-3">
                        <Icon name="book_2" className="" />
                        <span className="text-sm font-bold">My Classes</span>
                    </div>
                </Link>
                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                    <Icon
                        name="workspace_premium"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">Certificates</span>
                </Link>
                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                    <Icon
                        name="settings"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">Settings</span>
                </Link>
            </nav>

            {/* Bottom User Actions */}
            <div className="border-t border-slate-100 p-4">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600">
                    <Icon name="logout" />
                    <span className="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
