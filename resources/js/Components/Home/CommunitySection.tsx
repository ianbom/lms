import { Link } from '@inertiajs/react';

interface CommunitySectionProps {
    title?: string;
    description?: string;
    secondaryDescription?: string;
    buttonText?: string;
    buttonHref?: string;
    image?: string;
}

export default function CommunitySection({
    title = "You're Not Learning Alone",
    description = 'At LMS Platform, learning is more than just watching videos. Join a vibrant community of learners from around the world. Engage in forums, join peer groups, and attend live workshops.',
    secondaryDescription = "Whether you're diving into AI, design, or marketing, find support, collaboration, and motivation through leaderboards and challenges.",
    buttonText = 'Join Our Community',
    buttonHref = '#',
    image = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0vJtfi7kqRMa7d_tLk178ZVFuALiB8KDU2dxPQTEwILkLygeTDdMA_3bOz5gI6nWksUndI5PzN9myGjp9TcDzDPwJJajHka4lOUFKQEKQ5f-GMytmo7xIvOK59JsSUzXAFWzDn11MPK7jsMgQlzLz93_bbuvbbcVALLCYf06yBdkDUnSDPfgnp_iOiZr4LxqpOKEDP1cVsnhGul-gMwsezAGMCGP9KPiYdwRLQkGXQmQUNcVNArFnNVTReJfcS4AbJr9TjCiCrs',
}: CommunitySectionProps) {
    return (
        <section className="overflow-hidden bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">
                    {/* Right - Image */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                alt="Man smiling"
                                className="h-auto w-full rounded-3xl object-cover shadow-2xl"
                                src={image}
                            />

                            {/* Floating Chat Card */}
                            <div className="floating-card absolute -right-6 top-10 max-w-[200px] rounded-xl rounded-bl-none border border-gray-100 bg-white p-3 shadow-lg">
                                <div className="flex items-start gap-2">
                                    <div className="size-8 rounded-full bg-blue-100"></div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">
                                            Sarah
                                        </p>
                                        <p className="text-[10px] text-gray-500">
                                            What's the best way to start with
                                            React?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Live Session Card */}
                            <div className="floating-card-delayed absolute -left-6 bottom-20 max-w-[240px] rounded-xl rounded-br-none bg-primary p-4 shadow-lg">
                                <p className="mb-2 text-xs font-medium text-white">
                                    Live Session This Friday: "Designing for
                                    Impact"
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="size-6 rounded-full bg-white/20"></div>
                                        <div className="size-6 rounded-full bg-white/20"></div>
                                        <div className="size-6 rounded-full bg-white/20"></div>
                                    </div>
                                    <span className="text-[10px] text-white/80">
                                        +240 joining
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left - Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                            {title}
                        </h2>
                        <p className="mb-8 text-lg text-gray-600">
                            {description}
                        </p>
                        <p className="mb-8 text-lg text-gray-600">
                            {secondaryDescription}
                        </p>

                        <Link
                            href={buttonHref}
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
