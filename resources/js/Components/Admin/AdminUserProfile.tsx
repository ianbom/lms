import Icon from '@/Components/Icon';
import Avatar from './Avatar';

interface AdminUserProfileProps {
    name: string;
    role: string;
    avatarUrl?: string;
    onLogout?: () => void;
}

export default function AdminUserProfile({
    name,
    role,
    avatarUrl,
    onLogout,
}: AdminUserProfileProps) {
    return (
        <div className="border-t border-border p-4">
            <div className="flex cursor-pointer items-center gap-3 rounded-xl p-2 transition-colors hover:bg-gray-50">
                <Avatar
                    src={avatarUrl}
                    initials={name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    size="md"
                    className="border-2 border-white shadow-sm"
                />
                <div className="min-w-0 flex-1 flex-col">
                    <p className="truncate text-sm font-semibold text-text-primary">
                        {name}
                    </p>
                    <p className="truncate text-xs text-text-muted">{role}</p>
                </div>
                <button
                    onClick={onLogout}
                    className="text-text-muted transition-colors hover:text-rose-500"
                    title="Logout"
                >
                    <Icon name="logout" size={20} />
                </button>
            </div>
        </div>
    );
}
