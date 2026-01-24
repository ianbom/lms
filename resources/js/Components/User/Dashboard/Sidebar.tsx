import Icon from '@/Components/Icon';
import { Link, usePage } from '@inertiajs/react';

interface SidebarProps {
    onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
    const currentUrl = usePage().url;

    const isActive = (path: string) => currentUrl.startsWith(path);

    return (
        <aside className="z-20 flex h-full w-[260px] shrink-0 flex-col border-r border-primary-dark bg-primary">
            {/* Logo Area */}
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
                <div className="flex items-center gap-3">
                    {/* Close button for mobile */}
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="mr-1 flex size-8 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
                        >
                            <Icon name="close" size={20} />
                        </button>
                    )}
                    <img
                        src="/ImpactAcademy.png"
                        alt="ImpactAcademy Logo"
                        className="h-10 w-auto brightness-0 invert"
                    />
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                <Link
                    href={route('user.dashboard')}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive('/user/dashboard')
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
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
                    href={route('user.my-order')}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive('/user/myOrder')
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    <Icon
                        name="shopping_bag"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className={`text-sm ${isActive('/user/myOrder') ? 'font-bold' : 'font-medium'}`}>
                        My Orders
                    </span>
                </Link>
                <Link
                    href={route('user.my-class')}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                        isActive('/user/myClass') || isActive('/user/study')
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    <Icon
                        name="book_2"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className={`text-sm ${isActive('/user/myClass') || isActive('/user/study') ? 'font-bold' : 'font-medium'}`}>
                        My Classes
                    </span>
                </Link>
                <Link
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                    <Icon
                        name="workspace_premium"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">Certificates</span>
                </Link>
                <Link
                    href={route('user.profile.edit')}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                    <Icon
                        name="settings"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">Settings</span>
                </Link>
                <Link
                    href="/home"
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                    <Icon
                        name="home"
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">Home</span>
                </Link>
            </nav>

            {/* Bottom User Actions */}
            <div className="border-t border-white/10 p-4">
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-white/70 transition-colors hover:bg-red-500/20 hover:text-red-300"
                >
                    <Icon name="logout" />
                    <span className="text-sm font-medium">Sign Out</span>
                </Link>
            </div>
        </aside>
    );
}
