import Icon from '@/Components/Icon';

export default function CurriculumSidebar() {
    return (
        <aside className="z-20 flex h-full w-[340px] shrink-0 flex-col border-l border-slate-200 bg-white">
            {/* Progress Header */}
            <div className="border-b border-slate-100 bg-white p-6">
                <h3 className="mb-1 text-lg font-bold text-slate-900">
                    Course Curriculum
                </h3>
                <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-500">
                        35% Completed
                    </span>
                    <span className="font-bold text-primary">12/34</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100">
                    <div
                        className="h-2.5 rounded-full bg-primary"
                        style={{ width: '35%' }}
                    ></div>
                </div>
            </div>

            {/* Scrollable Lesson List */}
            <div className="custom-scrollbar flex-1 space-y-6 overflow-y-auto p-4">
                {/* Module 1 */}
                <div>
                    <h4 className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Module 1: Introduction
                    </h4>
                    <div className="flex flex-col gap-2">
                        {/* Completed Lesson */}
                        <button className="group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-slate-50">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                <Icon
                                    name="check"
                                    size={14}
                                    className="font-bold"
                                />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-medium text-slate-500 line-through decoration-slate-400">
                                    Welcome to the Course
                                </h5>
                                <span className="mt-1 block text-xs text-slate-400">
                                    4:30 min
                                </span>
                            </div>
                        </button>
                        {/* Completed Lesson */}
                        <button className="group flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-slate-50">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                <Icon
                                    name="check"
                                    size={14}
                                    className="font-bold"
                                />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-medium text-slate-500 line-through decoration-slate-400">
                                    Setting Up Your Workspace
                                </h5>
                                <span className="mt-1 block text-xs text-slate-400">
                                    12:15 min
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Module 2 */}
                <div>
                    <h4 className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Module 2: Fundamentals
                    </h4>
                    <div className="flex flex-col gap-2">
                        {/* Active Lesson */}
                        <button className="flex w-full scale-[1.02] transform items-start gap-3 rounded-xl bg-primary p-4 text-left text-white shadow-lg shadow-primary/30 transition-transform">
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 animate-pulse items-center justify-center rounded-full bg-white/20 text-white">
                                <Icon name="play_arrow" size={16} />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-bold leading-snug">
                                    Understanding Brushes
                                </h5>
                                <div className="mt-2 flex items-center gap-2 text-white/80">
                                    <Icon name="schedule" size={14} />
                                    <span className="text-xs font-medium">
                                        45:00 min
                                    </span>
                                </div>
                            </div>
                        </button>
                        {/* Pending Lesson */}
                        <button className="group flex w-full items-start gap-3 rounded-xl p-3 text-left opacity-60 transition-colors hover:bg-slate-50">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300">
                                <Icon
                                    name="lock"
                                    size={10}
                                    className="font-bold"
                                />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-medium text-slate-600 transition-colors group-hover:text-primary">
                                    Color Theory Basics
                                </h5>
                                <span className="mt-1 block text-xs text-slate-400">
                                    22:10 min
                                </span>
                            </div>
                        </button>
                        {/* Pending Lesson */}
                        <button className="group flex w-full items-start gap-3 rounded-xl p-3 text-left opacity-60 transition-colors hover:bg-slate-50">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300">
                                <Icon
                                    name="lock"
                                    size={10}
                                    className="font-bold"
                                />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-medium text-slate-600 transition-colors group-hover:text-primary">
                                    Layers and Masks Deep Dive
                                </h5>
                                <span className="mt-1 block text-xs text-slate-400">
                                    35:45 min
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Module 3 */}
                <div>
                    <h4 className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Module 3: Advanced Techniques
                    </h4>
                    <div className="flex flex-col gap-2">
                        <button className="group flex w-full items-start gap-3 rounded-xl p-3 text-left opacity-60 transition-colors hover:bg-slate-50">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300">
                                <Icon
                                    name="lock"
                                    size={10}
                                    className="font-bold"
                                />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-medium text-slate-600">
                                    Lighting and Shadows
                                </h5>
                                <span className="mt-1 block text-xs text-slate-400">
                                    28:00 min
                                </span>
                            </div>
                        </button>
                        <button className="group flex w-full items-start gap-3 rounded-xl p-3 text-left opacity-60 transition-colors hover:bg-slate-50">
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300">
                                <Icon
                                    name="lock"
                                    size={10}
                                    className="font-bold"
                                />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-medium text-slate-600">
                                    Final Composition
                                </h5>
                                <span className="mt-1 block text-xs text-slate-400">
                                    55:20 min
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Next Lesson Preview (Sticky Bottom) */}
            <div className="border-t border-slate-100 bg-slate-50 p-4">
                <span className="mb-1 block text-xs font-bold uppercase text-slate-400">
                    Up Next
                </span>
                <div className="flex items-center gap-3">
                    <div
                        className="h-10 w-16 rounded-lg bg-slate-200 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWqBEZx4R3Jgvq8i9ZPFJkf6eS6Ky5xFmZcinOVI1qXrfhjRZp6u12Uxhuix3Cqf9WTy03WKkPt7pjLyPzHRs595xle7VuVB7TMN0F7Knr-6W2q-AIJ6JUO8uekZDLxoO-ahkQfT4SIfCJDdmJ7ZLmAUt1j0PlZXgNSHRpIyGPz4AXB1EJ5cke7gNhUaHc23_vMCq-UiVFPCxLLYgTGSBUedUQq968Gy1vnQKhFDJ7E-k1YmklHP9ef6ddgJqIibaECgcUpe90v2A7')",
                        }}
                    ></div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="truncate text-sm font-bold text-slate-800">
                            Color Theory Basics
                        </span>
                        <span className="text-xs text-slate-500">Module 2</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
