import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface MyClass {
    id: number;
    classId: number;
    title: string;
    slug: string;
    thumbnail_url: string | null;
    progress: number;
    status: 'active' | 'completed';
    firstVideoId: number | null;
    mentor: {
        name: string;
        avatar_url: string | null;
    } | null;
}

interface CourseCardProps {
    classItem: MyClass;
}

function CourseCard({ classItem }: CourseCardProps) {
    const isCompleted = classItem.status === 'completed';

    return (
        <Link
            href={
                classItem.firstVideoId
                    ? route('user.study.watch', {
                          classId: classItem.classId,
                          videoId: classItem.firstVideoId,
                      })
                    : route('user.classes.detail', { slug: classItem.slug })
            }
            className="border-border-light shadow-card hover:shadow-card-hover group flex flex-col overflow-hidden rounded-xl border bg-white transition-all"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                    alt={classItem.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={
                        classItem.thumbnail_url ||
                        'https://via.placeholder.com/400x300?text=No+Image'
                    }
                />
                <div
                    className={`absolute right-3 top-3 rounded-full px-2 py-1 text-xs font-semibold backdrop-blur-sm ${
                        isCompleted
                            ? 'bg-green-100 text-green-700'
                            : 'bg-white/90 text-primary'
                    }`}
                >
                    {isCompleted ? 'Completed' : 'Active'}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h4 className="mb-1 line-clamp-2 text-base font-bold text-slate-900">
                    {classItem.title}
                </h4>
                {classItem.mentor && (
                    <div className="mb-4 flex items-center gap-2">
                        <div className="h-5 w-5 overflow-hidden rounded-full bg-gray-200">
                            <img
                                alt={classItem.mentor.name}
                                className="h-full w-full object-cover"
                                src={
                                    classItem.mentor.avatar_url ||
                                    'https://via.placeholder.com/40?text=M'
                                }
                            />
                        </div>
                        <span className="text-xs font-medium text-slate-500">
                            {classItem.mentor.name}
                        </span>
                    </div>
                )}
                <div className="mt-auto">
                    <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                        <span>Progress</span>
                        <span>{classItem.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-100">
                        <div
                            className={`h-1.5 rounded-full ${isCompleted ? 'bg-green-600' : 'bg-primary'}`}
                            style={{ width: `${classItem.progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

interface MyClassesProps {
    myClasses: MyClass[];
}

export default function MyClasses({ myClasses }: MyClassesProps) {
    if (myClasses.length === 0) {
        return (
            <div className="col-span-12">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">
                        Kelas Saya
                    </h3>
                </div>
                <div className="border-border-light shadow-card flex flex-col items-center justify-center rounded-xl border bg-white p-8">
                    <Icon
                        name="school"
                        size={48}
                        className="mb-4 text-gray-300"
                    />
                    <h4 className="mb-2 text-lg font-bold text-slate-900">
                        Belum Ada Kelas
                    </h4>
                    <p className="mb-4 text-center text-sm text-slate-500">
                        Anda belum memiliki kelas. Mulai belajar dengan membeli
                        kelas pertama Anda!
                    </p>
                    <Link
                        href={route('user.classes')}
                        className="hover:bg-primary-hover flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors"
                    >
                        <span>Jelajahi Kelas</span>
                        <Icon name="arrow_forward" size={18} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="col-span-12">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">Kelas Saya</h3>
                <Link
                    href={route('user.my-class')}
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                    Lihat Semua Kelas
                    <Icon name="arrow_forward" size={16} />
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {myClasses.map((classItem) => (
                    <CourseCard key={classItem.id} classItem={classItem} />
                ))}
            </div>
        </div>
    );
}
