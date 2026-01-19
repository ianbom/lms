import { Instructor } from '@/types/module';

interface MentorCardProps {
    mentor: Instructor;
}

export default function MentorCard({ mentor }: MentorCardProps) {
    return (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
            <p className="mb-3 text-xs uppercase tracking-wide text-gray-500">
                MENTOR
            </p>
            <div className="flex items-center gap-3">
                <div
                    className="size-12 flex-shrink-0 rounded-full bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: `url('${mentor.avatarUrl}')` }}
                />
                <div>
                    <p className="font-bold text-gray-900">{mentor.name}</p>
                    {(mentor.title || mentor.company) && (
                        <p className="text-sm text-gray-500">
                            {mentor.title}
                            {mentor.title && mentor.company && ' @ '}
                            {mentor.company}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
