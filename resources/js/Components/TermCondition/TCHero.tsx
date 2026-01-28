import Icon from '@/Components/Icon';

export default function TCHero() {
    return (
        <div className="relative w-full border-b border-gray-200 bg-gradient-to-br from-emerald-300 to-white px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        Legal Documentation
                    </p>
                    <h1 className="mb-4 text-3xl font-black leading-tight tracking-[-0.033em] text-gray-900 md:text-4xl lg:text-5xl">
                        Syarat dan Ketentuan Penggunaan Platform Impact Academy
                    </h1>
                    <p className="text-lg font-normal leading-relaxed text-gray-600 md:text-xl">
                        Selamat datang di Impact Academy, platform pembelajaran
                        digital yang dikelola oleh Socialimpact.ID. Impact
                        Academy hadir sebagai ruang belajar kolaboratif untuk
                        mendorong lahirnya individu dan organisasi yang berdaya,
                        berkelanjutan, dan berdampak sosial.
                    </p>
                    <p className="mt-4 text-base font-normal leading-relaxed text-gray-600 md:text-lg">
                        Dengan mengakses, mendaftar, dan menggunakan platform
                        Impact Academy, berarti Kamu telah membaca, memahami,
                        dan menyetujui seluruh ketentuan yang tertulis di
                        halaman ini.
                    </p>
                    {/* <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Icon name="calendar_today" className="text-base" />
                            Terakhir diperbarui: 24 Mei 2024
                        </span>
                        <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
