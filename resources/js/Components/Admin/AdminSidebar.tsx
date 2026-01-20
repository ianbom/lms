import Icon from '@/Components/Icon';
import { NavItem } from '@/types/admin';
import AdminNavItem from './AdminNavItem';
import AdminUserProfile from './AdminUserProfile';

interface AdminSidebarProps {
    navigation: NavItem[];
    user: {
        name: string;
        role: string;
        avatarUrl?: string;
    };
    onLogout?: () => void;
    className?: string;
}

export default function AdminSidebar({
    navigation,
    user,
    onLogout,
    className = '',
}: AdminSidebarProps) {
    return (
        <aside
            className={`border-border hidden h-full w-[260px] shrink-0 flex-col border-r bg-white transition-all duration-300 lg:flex ${className}`}
        >
            {/* Logo */}
            <div className="flex items-center gap-3 p-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-white shadow-lg shadow-primary/30">
                    <Icon name="school" size={24} />
                </div>
                <div>
                    <h1 className="text-lg font-bold leading-tight tracking-tight">
                        EduAdmin
                    </h1>
                    <p className="text-text-muted text-xs font-medium uppercase tracking-wider">
                        LMS Panel
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="no-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-2">
                {navigation.map((item) => (
                    <AdminNavItem key={item.label} {...item} />
                ))}
            </nav>

            {/* User Profile Footer */}
            <AdminUserProfile
                name={user.name}
                role={user.role}
                avatarUrl={user.avatarUrl}
                onLogout={onLogout}
            />
        </aside>
    );
}
