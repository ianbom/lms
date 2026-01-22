import Icon from '@/Components/Icon';

interface CourseStatsProps {
    totalModules: number;
    totalLessons: number;
    totalDuration: string;
}

export default function CourseStats({
    totalModules,
    totalLessons,
    totalDuration,
}: CourseStatsProps) {
    return (
        <div className="flex w-full flex-row gap-4">
            <div className="flex flex-1 items-center justify-between rounded-xl border border-[#dae7e0] bg-white p-5 shadow-sm">
                <div>
                    <p className="text-sm font-medium text-[#5e6a62]">
                        Total Modul
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#101814]">
                        {totalModules}
                    </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#dae7e0]/50 text-[#101814]">
                    <Icon name="grid_view" size={24} />
                </div>
            </div>

            <div className="flex flex-1 items-center justify-between rounded-xl border border-[#dae7e0] bg-white p-5 shadow-sm">
                <div>
                    <p className="text-sm font-medium text-[#5e6a62]">
                        Total Video
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#101814]">
                        {totalLessons}
                    </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#fff0e6] text-[#ff8a3d]">
                    <Icon name="play_lesson" size={24} />
                </div>
            </div>

            <div className="flex flex-1 items-center justify-between rounded-xl border border-[#dae7e0] bg-white p-5 shadow-sm">
                <div>
                    <p className="text-sm font-medium text-[#5e6a62]">
                        Total Durasi
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#101814]">
                        {totalDuration}
                    </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#e6f0ff] text-[#3d8aff]">
                    <Icon name="timer" size={24} />
                </div>
            </div>
        </div>
    );
}
