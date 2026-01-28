import Icon from '@/Components/Icon';

export default function AuthBanner() {
    return (
        <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#002A22] lg:flex">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')",
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#002A22] via-[#002A22]/90 to-primary/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#002A22]/90"></div>
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            ></div>
            <div className="relative z-10 flex h-full flex-col justify-center px-16 text-white">
                <div className="mb-auto pt-16">
                    <div className="inline-flex items-center gap-2 text-white/90">
                        <Icon name="school" className="text-3xl" />
                        <span className="text-lg font-semibold uppercase tracking-wide opacity-90">
                            ImpactAcademy
                        </span>
                    </div>
                </div>
                <div className="max-w-xl">
                    <h1 className="mb-6 text-5xl font-bold leading-[1.15] tracking-tight">
                        Tingkatkan Keahlian Profesional Anda.
                    </h1>
                    <p className="max-w-md text-lg font-light leading-relaxed text-white/80">
                        Bergabung dengan komunitas pembelajar elit dan akses
                        materi berstandar industri global.
                    </p>
                    <div className="mt-10 inline-flex items-center gap-4 rounded-lg border border-white/10 bg-white/10 p-3 pr-6 shadow-2xl backdrop-blur-md">
                        <div className="flex -space-x-3">
                            <img
                                alt="User Avatar"
                                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-[#00382e]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdRQvRrbw2ldgB4qO4FZTcvV5c2ElYaerqdZ-ui1dZt7jQuowN7XzRnEYdMAQWpZKCgHoJgKvUEQtG8uJzrm-EpWMICuKb6SceoTVBAR1xlgiWv3Vws6pNTV4cbrrxIMrNS_ozt74kV8mwSKZG_IAXh870es-0QXU6waqAMkT8RvfF8j8s846ZyEeFbSHZobpju_xdzboegSXNRwnFk5tXVc_JX4WvGW3WFK5SSqv8QMAvrZLQDwn8OyLPAWQBOnKOZTWxfXM8J8RL"
                            />
                            <img
                                alt="User Avatar"
                                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-[#00382e]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3nvTL7qUcB8e8XYX_8n8SYcFLT-2xsoD5KKPyMOpRZJ7nA3jcyCFDgwBRVhbl1PIS0PWc0f8mbzBKncvC0Rb8bu7g2Ot7sH2h7Zo5umyQZ2YR8Vp-qMTyUQJu6UyWk2PqEEskSpEheOYQVig9ek8MqqwkIgSmkb7XEwGf5Ckyqs7XmxmO5ysHxxAYCWrlwxGBUflx4mSAGGDd9ZmiDCAciyfmLg2gxBdJEIfnfrUocuGT2Q3SjGYqUC0Oxe8KTawrei6HQIdNQ-U5"
                            />
                            <img
                                alt="User Avatar"
                                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-[#00382e]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnFjQetmBguvGi-BZOcVQLgRUF5Jn38r3BSll9z3484tch1ZAKbc2imHFA-uI_hMuYLUBWLAfvmxdMUJZdVXjqQM_F72poeU_emLxm_79xT87Kft8eEtdk_QzT5s1WVlkzx93dOSbEas4VPB0wGdFGTMx6en2pcnSUmhhexRdSJ1cc6dzUuaJsLmuUL7cToIpzgDzxzT8tzn6qIqDpgeuyLsgl630PCkM6RmbW-ROHdDquZHFN_GpblnV5IymEo8CrNbcEfrF9ba1m"
                            />
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-white ring-2 ring-[#00382e] backdrop-blur-sm">
                                +2k
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                                Komunitas
                            </span>
                            <span className="text-sm font-semibold text-white">
                                Bergabung dengan 10rb+ profesional
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex items-center justify-between pb-12 text-xs font-medium uppercase tracking-wider text-white/40">
                    <span>© 2024 ImpactAcademy Inc.</span>
                    <span className="flex gap-4">
                        <a
                            href="#"
                            className="transition-colors hover:text-white"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-white"
                        >
                            Terms
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
