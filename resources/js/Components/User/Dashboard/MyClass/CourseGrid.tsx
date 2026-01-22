import { Enrollment } from '@/types/enrollment';
import CourseCard from './CourseCard';

interface CourseGridProps {
    enrollments: Enrollment[];
}

export default function CourseGrid({ enrollments }: CourseGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
            {enrollments.map((enrollment) => {
                const isCompleted = enrollment.status === 'completed';
                const mainMentor = enrollment.class.mentors[0];

                return (
                    <CourseCard
                        key={enrollment.id}
                        title={enrollment.class.title}
                        mentor={mainMentor?.name || 'Unknown Mentor'}
                        mentorImage={
                            mainMentor?.profile_picture_url ||
                            '/images/placeholder-avatar.jpg'
                        }
                        thumbnail={
                            enrollment.class.thumbnail_url ||
                            '/images/placeholder-class.jpg'
                        }
                        progress={enrollment.progress}
                        completed={isCompleted}
                        status={isCompleted ? 'Completed' : 'Active'}
                        statusColor={
                            isCompleted
                                ? 'bg-green-100 text-green-700'
                                : 'bg-white/90 text-primary'
                        }
                        href={route('user.study.watch', {
                            classId: enrollment.class.id,
                            videoId: enrollment.class.first_video_id,
                        })}
                    />
                );
            })}
        </div>
    );
}
