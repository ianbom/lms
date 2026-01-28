import Icon from '@/Components/Icon';

export default function TCHero() {
    return (
        <div className="relative w-full border-b border-gray-200 bg-gradient-to-br from-[#e6f1ec] to-white px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        Legal Documentation
                    </p>
                    <h1 className="mb-4 text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 md:text-5xl">
                        Syarat dan Ketentuan
                    </h1>
                    <p className="max-w-2xl text-lg font-normal leading-relaxed text-gray-600 md:text-xl">
                        Harap baca ketentuan ini dengan seksama sebelum
                        menggunakan layanan kami. Dokumen ini mengatur hubungan
                        hukum antara Anda dan Platform Name.
                    </p>
                    <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Icon name="calendar_today" className="text-base" />
                            Terakhir diperbarui: 24 Mei 2024
                        </span>
                        <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                        <span className="flex items-center gap-1">
                            <Icon name="history" className="text-base" />
                            Versi 1.3
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
