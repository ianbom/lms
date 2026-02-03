export default function HeroSection() {
    return (
        <section className="w-full max-w-[1440px] px-4 pb-16 pt-10 md:px-10">
            <div className="mb-10 flex flex-col gap-6 text-center md:text-left">
                <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#111814] md:text-6xl">
                    Start the conversation <br />
                    <span className="text-gray-400">
                        that defines your future.
                    </span>
                </h1>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:h-[500px] md:grid-cols-4">
                {/* Tall Image Left */}
                <div className="group relative h-64 overflow-hidden rounded-2xl md:col-span-1 md:h-full">
                    <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDI9R8riZTRYMphpOcTM-CaHllOcVrbt8pjFa8RYibTMQ9iV0HAWoNOZTUKfPjqIM1nId8DPGz8knnlwPnZUM-YZF3Yak2ZIhvabQfoblHDtrnKBgwMBy94HKEBgl_tXHQ9Ffq-xohf8uuHp0a3qzja6Kfm0sFcrGC3FwMrz3pEq6QKZ3Pd71tKIPjcO5jyPoaU3YLLDyEz4GpFr8uIvy8cOFrc6RSkQKzWq3q0J8uEtksR2t378C7-zyGElYCGY0DWK1WaG8szMlVq')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent"></div>
                </div>
                {/* Wide Image Top Middle */}
                <div className="flex h-64 flex-col gap-4 md:col-span-2 md:h-full">
                    <div className="group relative h-1/2 w-full overflow-hidden rounded-2xl">
                        <div
                            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWSS4Z-BAeS-O-9q0A0LVouNJI73iJj4RmT4GMRRmFQF3pLUEn3hIFeVG-pJc4QA6bEY__ILl9Qjv6KSmaRgFgb-zg2N-PWmviny80wuhGQh_q3oyluzFMjhLRyzSa-aNJrueHLWyufYWbTcUCbMFzhLw5zgdRnF3oCSQa_8GlTh0KrGE5VTG0H8qI1zrgMHpNgt7piTU8QWqxD13mwTOqFhqTi0mPAzqpyr4PzbcRc-HI1ClRka_MlcHmHlDHw7gmevSLvo883PR7')",
                            }}
                        ></div>
                    </div>
                    <div className="flex h-1/2 w-full gap-4">
                        <div className="bg-input-bg flex h-full w-1/2 items-center justify-center rounded-2xl bg-[#E6F4EF] p-6 text-center">
                            <div>
                                <span className="text-premium-green text-4xl font-bold text-[#00753D]">
                                    98%
                                </span>
                                <p className="mt-1 text-sm font-medium text-gray-600">
                                    Placement Rate
                                </p>
                            </div>
                        </div>
                        <div className="group relative h-full w-1/2 overflow-hidden rounded-2xl">
                            <div
                                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAm1XOlbXHViR6Nby57syxGyu7OIUYT-DvUlwpxha3B3pWVTGtyUGSqek-EAOGJe_kBJtoN6LsCWJ63JCvpjLnE_MP1YwT7uTjDxFjdGS9OgRYo0lxIym680EuyOGNJQbGexXcnnf83AhvmjntH9QIWDEDDZD-l-L_Bfn87tthVxUJrngQyDcJB2HmZtIo2LhwsM5IB-8JNSl3d8La_oQKvtN2GfKhMEGVp8DClkbr3t3HGy1xcRVt_wGIKdkEL8tV_d7L7IcobMxKx')",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                {/* Tall Image Right */}
                <div className="group relative h-64 overflow-hidden rounded-2xl md:col-span-1 md:h-full">
                    <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWBWJccdlXCVZhmATsezyMh3E8QSi1ukI70RyRS4WmF1mKLEf3qj3U3GNRaeuBaqREvfno1VYhcfPkwiMD0vSWO8gCej-ZFWzfUJGiqEYbDcxG_4SrAUca48DjRaLrgDgCfPmrgGMGqvvQVAuDZzbUqQv8rUG-Amh0SxFbpMfvMN81cXiDuwEMuL8ReU9p8J0qxPxD4Gyah86Wi4HQ_fcuY0jPaZS7UnbsM7TZ3DsgCpqxNEWPUzJ4FJPO7bO83qONSasj9n631Wli')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent"></div>
                </div>
            </div>
        </section>
    );
}
