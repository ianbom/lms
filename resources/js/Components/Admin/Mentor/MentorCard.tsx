import Icon from '@/Components/Icon';
import { Mentor } from '@/types/admin';

interface MentorCardProps {
    mentor: Mentor;
    onClick?: (mentor: Mentor) => void;
}

export default function MentorCard({ mentor, onClick }: MentorCardProps) {
    return (
        <div
            className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            onClick={() => onClick?.(mentor)}
        >
            {/* Profile Section */}
            <div className="flex flex-1 flex-col items-center p-6">
                {/* Avatar with Online Status */}
                <div className="relative mb-4">
                    <div
                        className="size-20 rounded-full border-2 border-white bg-slate-100 bg-cover bg-center shadow-sm"
                        style={{
                            backgroundImage: mentor.avatarUrl
                                ? `url("${mentor.avatarUrl}")`
                                : undefined,
                        }}
                    >
                        {!mentor.avatarUrl && (
                            <div className="flex size-full items-center justify-center text-2xl font-bold text-slate-400">
                                {mentor.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div
                        className={`absolute bottom-1 right-1 size-4 rounded-full border-2 border-white ${
                            mentor.isOnline ? 'bg-primary' : 'bg-slate-300'
                        }`}
                    />
                </div>

                {/* Name & Email */}
                <h3 className="mb-1 text-lg font-bold text-[#101815] transition-colors group-hover:text-primary">
                    {mentor.name}
                </h3>
                <p className="text-sm text-[#64748b]">{mentor.email}</p>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-slate-100" />

            {/* Stats Section */}
            <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50/50 py-4">
                <StatItem
                    label="Kelas"
                    value={mentor.stats.classes}
                    isPrimary
                />
                <StatItem
                    label="Siswa Aktif"
                    value={mentor.stats.activeStudents}
                />
                <StatItem label="Rating" value={mentor.stats.rating} showStar />
            </div>
        </div>
    );
}

interface StatItemProps {
    label: string;
    value: number;
    isPrimary?: boolean;
    showStar?: boolean;
}

function StatItem({ label, value, isPrimary, showStar }: StatItemProps) {
    return (
        <div className="flex flex-col items-center gap-1 px-2">
            <span
                className={`text-center text-[10px] font-bold uppercase tracking-wider ${
                    isPrimary ? 'text-primary' : 'text-[#64748b]'
                }`}
            >
                {label}
            </span>
            <div className="flex items-center gap-1">
                <span className="text-base font-bold text-[#101815]">
                    {showStar ? value.toFixed(1) : value}
                </span>
                {showStar && (
                    <Icon
                        name="star"
                        size={16}
                        className="text-amber-400"
                        filled
                    />
                )}
            </div>
        </div>
    );
}
