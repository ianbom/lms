import { Mentor } from '@/types/admin';
import MentorCard from './MentorCard';

interface MentorCardGridProps {
    mentors: Mentor[];
    onMentorClick?: (mentor: Mentor) => void;
    onMentorEdit?: (mentor: Mentor) => void;
}

export default function MentorCardGrid({
    mentors,
    onMentorClick,
    onMentorEdit,
}: MentorCardGridProps) {
    if (mentors.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white py-16">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-slate-100">
                    <span className="material-symbols-outlined text-3xl text-slate-400">
                        person_search
                    </span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-[#101815]">
                    Tidak ada mentor ditemukan
                </h3>
                <p className="text-sm text-[#64748b]">
                    Coba ubah filter atau kata kunci pencarian Anda.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
                <MentorCard
                    key={mentor.id}
                    mentor={mentor}
                    onClick={onMentorClick}
                    onEdit={onMentorEdit}
                />
            ))}
        </div>
    );
}
