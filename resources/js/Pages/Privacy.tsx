import Icon from '@/Components/Icon';
import PrivacyContactCard from '@/Components/Privacy/PrivacyContactCard';
import PrivacySidebar from '@/Components/Privacy/PrivacySidebar';
import UserLayout from '@/Layouts/UserLayout';
import { Head, Link } from '@inertiajs/react';

export default function Privacy() {
    return (
        <UserLayout>
            <Head title="Privacy Policy" />

            <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-4 lg:py-18">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                    <PrivacySidebar />

                    {/* Main Article Content */}
                    <main className="min-w-0 flex-1">
                        {/* Page Header */}
                        <div className="mb-4 border-b border-gray-100 pb-6">
                            <h1 className="mb-6 text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
                                Kebijakan Privasi Platform E-Learning Impact
                                Academy
                            </h1>
                            {/* <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1">
                                    <Icon name="schedule" size={16} />
                                    Terakhir diperbarui: 24 Mei 2024
                                </span>
                                <span>•</span>
                                <span>Versi 2.1</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div> */}
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                            {/* Introduction */}
                            <section className="mb-12">
                                <p className="lead mb-6 text-xl text-slate-700">
                                    Kebijakan Privasi ini menjelaskan bagaimana
                                    Impact Academy mengelola, melindungi, dan
                                    menggunakan data pribadi setiap individu
                                    maupun institusi (“Pengguna” atau “Kamu”)
                                    yang mengakses platform e-learning Impact
                                    Academy (“Platform”) yang dikelola secara
                                    resmi sesuai hukum yang berlaku di Republik
                                    Indonesia.
                                </p>
                                <p className="mb-4">
                                    Sebelum menggunakan layanan kami, Kamu
                                    dianjurkan untuk membaca Kebijakan Privasi
                                    dan Ketentuan Layanan secara menyeluruh.
                                    Dengan mengakses, mendaftar, dan menggunakan
                                    Platform Impact Academy, Kamu dianggap telah
                                    memahami serta menyetujui seluruh ketentuan
                                    yang tercantum dalam kebijakan ini.
                                </p>
                            </section>

                            {/* A. Informasi yang Kami Kumpulkan */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="collected-info"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="database"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        A. Informasi yang Kami Kumpulkan
                                    </h2>
                                </div>
                                <p className="mb-6">
                                    Kami mengumpulkan data Pengguna melalui tiga
                                    sumber utama:
                                </p>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            1. Informasi yang Kamu Berikan
                                            Secara Langsung
                                        </h3>
                                        <p>
                                            Data ini diperoleh saat Kamu
                                            melakukan pendaftaran, mengikuti
                                            program, menghubungi tim kami,
                                            mengisi survei, atau berpartisipasi
                                            dalam aktivitas platform. Informasi
                                            tersebut dapat mencakup nama, alamat
                                            email, nomor telepon, data
                                            identitas, dan informasi lain yang
                                            relevan.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            2. Informasi yang Dikumpulkan Secara
                                            Otomatis
                                        </h3>
                                        <p>
                                            Saat Kamu menggunakan Platform,
                                            sistem kami dapat merekam aktivitas
                                            penggunaan, seperti histori akses,
                                            interaksi fitur, dan data teknis
                                            lainnya. Informasi ini membantu kami
                                            memahami pola penggunaan dan
                                            meningkatkan kualitas layanan.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            3. Informasi dari Pihak Ketiga
                                        </h3>
                                        <p>
                                            Dalam kondisi tertentu, Impact
                                            Academy dapat menerima data dari
                                            mitra resmi, seperti penyedia
                                            pembayaran digital, mitra teknologi,
                                            atau rekan kerja sama lainnya.
                                            Seluruh data yang diterima akan
                                            diverifikasi sesuai dengan ketentuan
                                            hukum yang berlaku.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* B. Informasi Pribadi yang Dapat Mengidentifikasi Pengguna */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="personal-info"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="person"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        B. Informasi Pribadi yang Dapat
                                        Mengidentifikasi Pengguna
                                    </h2>
                                </div>
                                <ul className="list-disc space-y-4 pl-1 marker:text-primary">
                                    <p>
                                        <strong>1. Pendaftaran Akun:</strong>{' '}
                                        Untuk mengakses fitur pembelajaran
                                        secara penuh, Pengguna perlu membuat
                                        akun dengan mengisi data dasar seperti
                                        nama, email, dan kata sandi. Dengan
                                        mendaftar, Kamu menyetujui seluruh
                                        ketentuan keanggotaan Impact Academy.
                                    </p>
                                    <p>
                                        <strong>
                                            2. Program, Kuis, dan Penawaran
                                            Khusus:
                                        </strong>{' '}
                                        Pada aktivitas tertentu seperti kuis,
                                        giveaway, atau promo mitra, kami dapat
                                        mengumpulkan data tambahan. Jika
                                        informasi akan dibagikan kepada pihak
                                        ketiga, Kamu akan diberi pemberitahuan
                                        terlebih dahulu.
                                    </p>
                                    <p>
                                        <strong>
                                            3. Survei dan Riset Pengguna:
                                        </strong>{' '}
                                        Kami dapat mengadakan survei untuk
                                        meningkatkan kualitas pembelajaran. Data
                                        yang dikumpulkan hanya digunakan untuk
                                        keperluan analisis dan pengembangan
                                        layanan, serta dibagikan dalam bentuk
                                        agregat bila diperlukan.
                                    </p>
                                    <p>
                                        <strong>4. Promosi dan Event:</strong>{' '}
                                        Impact Academy dapat menginformasikan
                                        kegiatan, program pelatihan, atau acara
                                        kolaborasi dengan mitra. Pengguna akan
                                        selalu diberi kejelasan mengenai data
                                        yang dibutuhkan dalam kegiatan tersebut.
                                    </p>
                                </ul>
                            </section>

                            {/* C. Teknologi yang Digunakan untuk Pengumpulan Data */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="technology"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="dns"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        C. Teknologi Pengumpulan Data
                                    </h2>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Cookies dan Sistem Pelacakan
                                    </h3>
                                    <p>
                                        Platform kami menggunakan cookies untuk
                                        menjaga sesi login, meningkatkan
                                        pengalaman pengguna, serta membantu
                                        analisis performa sistem. Cookies ini
                                        bersifat sementara dan tidak digunakan
                                        untuk mengambil data pribadi tanpa izin.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Alamat IP dan Log Aktivitas
                                    </h3>
                                    <p>
                                        Kami mencatat alamat IP dan aktivitas
                                        sistem untuk keperluan keamanan,
                                        analisis performa, pengujian teknis,
                                        serta peningkatan layanan secara
                                        keseluruhan.
                                    </p>
                                </div>
                            </section>

                            {/* D. Penggunaan Data Pengguna */}
                            <section className="mb-12 scroll-mt-28" id="usage">
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="manufacturing"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        D. Penggunaan Data Pengguna
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Data yang kami kumpulkan digunakan untuk:
                                </p>
                                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                                    <li>
                                        Analisis statistik dan pengembangan
                                        platform
                                    </li>
                                    <li>
                                        Penyediaan layanan pembelajaran dan
                                        fitur pendukung
                                    </li>
                                    <li>Personalisasi pengalaman belajar</li>
                                    <li>Rekomendasi program yang relevan</li>
                                    <li>
                                        Optimalisasi promosi dan komunikasi
                                        layanan
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Semua penggunaan data dilakukan secara
                                    bertanggung jawab dan sesuai dengan prinsip
                                    perlindungan privasi.
                                </p>
                            </section>

                            {/* E. Kebijakan Pengelolaan Email */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="email-policy"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="email"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        E. Kebijakan Pengelolaan Email
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Impact Academy berkomitmen untuk tidak
                                    menjual atau menyalahgunakan alamat email
                                    Pengguna. Jenis email yang dapat Kamu terima
                                    meliputi:
                                </p>
                                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                                    <li>Notifikasi akun dan transaksi</li>
                                    <li>Informasi pembaruan layanan</li>
                                    <li>Newsletter edukasi</li>
                                    <li>Penawaran program dan promo</li>
                                    <li>Undangan survei</li>
                                </ul>
                                <p className="mt-4">
                                    Kamu dapat berhenti menerima email promosi
                                    kapan saja melalui fitur unsubscribe yang
                                    tersedia di setiap email.
                                </p>
                            </section>

                            {/* F. Pengungkapan Informasi kepada Pihak Ketiga */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="disclosure"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="share"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        F. Pengungkapan Informasi
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Kami tidak akan membagikan data pribadi
                                    Pengguna tanpa persetujuan, kecuali:
                                </p>
                                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                                    <li>
                                        Untuk kepentingan hukum dan kewajiban
                                        peraturan
                                    </li>
                                    <li>
                                        Untuk menjaga keamanan sistem dan
                                        pengguna
                                    </li>
                                    <li>
                                        Dalam bentuk data agregat tanpa
                                        identitas personal
                                    </li>
                                </ul>
                            </section>

                            {/* G. Perlindungan dan Keamanan Data */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="security"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="shield_lock"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        G. Perlindungan dan Keamanan Data
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Impact Academy menerapkan langkah teknis,
                                    sistem keamanan digital, serta prosedur
                                    internal untuk menjaga kerahasiaan dan
                                    keamanan data Pengguna.
                                </p>
                                <p>
                                    Namun, Pengguna juga memiliki tanggung jawab
                                    untuk menjaga kerahasiaan akun, termasuk
                                    kata sandi dan kode OTP, serta tidak
                                    membagikannya kepada pihak lain.
                                </p>
                            </section>

                            {/* H. Hak Pengguna */}
                            <section className="mb-12 scroll-mt-28" id="rights">
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="gavel"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        H. Hak Pengguna
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Sebagai Pengguna, Kamu memiliki hak untuk:
                                </p>
                                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                                    <li>
                                        Mengakses dan memverifikasi data pribadi
                                        Kamu
                                    </li>
                                    <li>Meminta penghapusan data</li>
                                    <li>Menarik persetujuan penggunaan data</li>
                                    <li>
                                        Mengajukan pertanyaan terkait
                                        pengelolaan informasi
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Permintaan dapat diajukan melalui kontak
                                    resmi Impact Academy.
                                </p>
                            </section>

                            {/* I. Perubahan Kebijakan Privasi */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="changes"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="update"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        I. Perubahan Kebijakan Privasi
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Kebijakan Privasi ini dapat diperbarui
                                    sesuai perkembangan layanan, teknologi, dan
                                    regulasi hukum. Setiap perubahan penting
                                    akan diumumkan melalui Platform atau email
                                    resmi kepada Pengguna.
                                </p>
                                <p>
                                    Kami menyarankan Kamu untuk meninjau halaman
                                    Kebijakan Privasi secara berkala.
                                </p>
                            </section>

                            {/* J. Kontak Resmi Impact Academy */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="contact"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="contact_support"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        J. Kontak Resmi Impact Academy
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Jika Kamu memiliki pertanyaan, masukan, atau
                                    permintaan terkait perlindungan data
                                    pribadi, silakan menghubungi tim Impact
                                    Academy melalui kanal komunikasi resmi yang
                                    tersedia di Platform.
                                </p>
                            </section>

                            <PrivacyContactCard />
                        </div>
                    </main>
                </div>
            </div>
        </UserLayout>
    );
}
