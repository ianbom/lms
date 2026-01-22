import Icon from '@/Components/Icon';
import { Link, usePage } from '@inertiajs/react';

export default function Sidebar() {
    const currentUrl = usePage().url;

    const isActive = (path: string) => currentUrl.startsWith(path);

    return (
        <aside className="z-20 flex h-full w-[260px] shrink-0 flex-col border-r border-slate-200 bg-white">
            {/* Logo Area */}
            <div className="flex h-16 items-center border-b border-slate-100 px-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                        <Icon name="school" size={20} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900">
                            ImpactAcademy
                        </h1>
                        <span className="text-xs font-medium text-slate-500">
                            Learning Platform
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                <Link
                    href={route('user.dashboard')}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive('/user/dashboard')
                            ? 'bg-primary-light text-primary'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                    <Icon
                        name="dashboard"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className={`text-sm ${isActive('/user/dashboard') ? 'font-bold' : 'font-medium'}`}>
                        Dashboard
                    </span>
                </Link>
                <Link
                    href={route('my-order')}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive('/myOrder')
                            ? 'bg-primary-light text-primary'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                    <Icon
                        name="shopping_bag"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className={`text-sm ${isActive('/myOrder') ? 'font-bold' : 'font-medium'}`}>
                        My Orders
                    </span>
                </Link>
                <Link
                    href={route('my-class')}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive('/myClass')
                            ? 'bg-primary-light text-primary'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                    <Icon
                        name="book_2"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className={`text-sm ${isActive('/myClass') ? 'font-bold' : 'font-medium'}`}>
                        My Classes
                    </span>
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
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                    <Icon name="logout" />
                    <span className="text-sm font-medium">Sign Out</span>
                </Link>
            </div>
        </aside>
    );
}
