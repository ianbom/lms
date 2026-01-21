import Icon from '@/Components/Icon';

export default function LessonInfo() {
    return (
        <div className="flex flex-col gap-10">
            {/* Meta Data Bar */}
            <div className="shadow-card flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-4">
                {/* Mentor */}
                <div className="flex items-center gap-3">
                    <div
                        className="h-12 w-12 rounded-full border border-slate-100 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkuBfE4DWIKScDlGKVA3c1Yg8MLvw-rqfOVNyLfGANrVrAbAxLTYQKh-2VHirAKVT5K4WZFCBmsWEe5Pg_mz5iQl2O9CKhFzSwDf2PbuHjCMrUN1gSQspgdPyg4T8r4hKjYEdBl22jp8x3-LkMWcs3TgBEkMbxEciXraRM--LlvEj28AC7AKQPhn3joukeOcB27TOIaf9Bn92jPxzf16Cx35teA2kvdAvY0NCkhJgb6esIvnWXQylnmb0qLMDqyHYGe5HQUtiG6-7V')",
                        }}
                    ></div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-400">
                            Mentor
                        </span>
                        <span className="text-base font-bold text-slate-800">
                            Sarah Jenkins
                        </span>
                    </div>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                        <Icon name="favorite" size={20} />
                        Like
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                        <Icon name="share" size={20} />
                        Share
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                        <Icon name="edit_note" size={20} />
                        Notes
                    </button>
                </div>
            </div>

            {/* About & Resources */}
            <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex flex-col gap-4 lg:col-span-2">
                    <h3 className="text-xl font-bold text-slate-900">
                        About this Lesson
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                        In this comprehensive module, we dive deep into the
                        world of digital brushes. You'll learn how to customize
                        brush settings, create your own texture brushes, and
                        understand the dynamics of pressure sensitivity. By the
                        end of this lesson, you will be able to mimic
                        traditional media like watercolor and oil paint within
                        your digital workflow.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            #DigitalArt
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            #Illustration
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            #Procreate
                        </span>
                    </div>
                </div>
                {/* Resources moved to separate component or kept here? HTML has it here inside grid */}
                <LessonResources />
            </div>
        </div>
    );
}

function LessonResources() {
    return (
        <div className="shadow-card h-fit rounded-2xl border border-slate-100 bg-white p-5">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="text-primary">
                    <Icon name="folder_open" size={24} />
                </span>
                Lesson Resources
            </h4>
            <div className="flex flex-col gap-3">
                <a
                    className="group flex items-center justify-between rounded-xl bg-slate-50 p-3 transition-colors hover:bg-primary-light"
                    href="#"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-red-100 text-red-500">
                            <Icon name="picture_as_pdf" size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-700 group-hover:text-primary">
                                Brush_Guide.pdf
                            </span>
                            <span className="text-xs text-slate-400">
                                2.4 MB
                            </span>
                        </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-primary">
                        <Icon name="download" size={20} />
                    </span>
                </a>
                <a
                    className="group flex items-center justify-between rounded-xl bg-slate-50 p-3 transition-colors hover:bg-primary-light"
                    href="#"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 text-blue-500">
                            <Icon name="folder_zip" size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-700 group-hover:text-primary">
                                Textures_Pack.zip
                            </span>
                            <span className="text-xs text-slate-400">
                                145 MB
                            </span>
                        </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-primary">
                        <Icon name="download" size={20} />
                    </span>
                </a>
            </div>
        </div>
    );
}
