import Icon from '@/Components/Icon';
import { Mentor } from '@/types/class';

interface MentorSectionProps {
    mentors: Mentor[];
}

export default function MentorSection({ mentors }: MentorSectionProps) {
    if (mentors.length === 0) return null;

    return (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            {/* Section Header */}
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light">
                    <Icon name="school" size={24} className="text-primary" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">
                        Mentor Kelas
                    </h3>
                    <p className="text-sm text-slate-500">
                        {mentors.length} mentor {mentors.length > 1 ? 'siap membimbing Anda' : 'membimbing kelas ini'}
                    </p>
                </div>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mentors.map((mentor) => (
                    <MentorCard key={mentor.id} mentor={mentor} />
                ))}
            </div>
        </div>
    );
}

interface MentorCardProps {
    mentor: Mentor;
}

function MentorCard({ mentor }: MentorCardProps) {
    return (
        <div className="group flex flex-col items-center rounded-xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-5 transition-all hover:border-primary/20 hover:shadow-md">
            {/* Avatar */}
            <div className="relative mb-4">
                <div
                    className="h-20 w-20 rounded-full border-2 border-white bg-cover bg-center bg-slate-200 shadow-md ring-2 ring-primary/10 transition-all group-hover:ring-primary/30"
                    style={{
                        backgroundImage: mentor.avatar_url
                            ? `url('${mentor.avatar_url}')`
                            : undefined,
                    }}
                >
                    {!mentor.avatar_url && (
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
                            <Icon name="person" size={36} />
                        </div>
                    )}
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
            </div>

            {/* Info */}
            <div className="text-center">
                <h4 className="font-bold text-slate-900 group-hover:text-primary">
                    {mentor.name}
                </h4>
                {mentor.headline && (
                    <p className="mt-1 text-sm text-slate-500">
                        {mentor.headline}
                    </p>
                )}
            </div>

            {/* Stats/Badge */}
            <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    <Icon name="star" size={12} className="mr-1 inline" />
                    Mentor
                </span>
            </div>

            {/* Bio */}
            {mentor.bio && (
                <p className="mt-3 line-clamp-2 text-center text-xs leading-relaxed text-slate-500">
                    {mentor.bio}
                </p>
            )}
        </div>
    );
}
