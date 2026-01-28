import TCHero from '@/Components/TermCondition/TCHero';
import TCSection from '@/Components/TermCondition/TCSection';
import TCSidebar from '@/Components/TermCondition/TCSidebar';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function TermCondition() {
    return (
        <UserLayout fullWidth>
            <Head title="Terms and Conditions" />

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
                <TCHero />

                <div className="layout-container flex w-full grow flex-col bg-white">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:px-10">
                        <TCSidebar />

                        <main className="max-w-[800px] flex-1">
                            {/* A. Ketentuan Umum */}
                            <TCSection
                                id="general"
                                title="A. Ketentuan Umum"
                                icon="info"
                            >
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Ruang Lingkup Layanan
                                </h3>
                                <p className="mb-4 leading-8">
                                    Ketentuan ini mengatur hubungan antara
                                    pengguna (“Kamu”) dengan Impact Academy
                                    (“Kami”) terkait penggunaan platform, konten
                                    pembelajaran, fitur digital, serta seluruh
                                    layanan yang tersedia di dalamnya. Setiap
                                    aktivitas di platform dianggap sebagai
                                    bentuk persetujuan terhadap ketentuan ini,
                                    termasuk kebijakan privasi dan kebijakan
                                    pengembalian dana.
                                </p>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Pembaruan Ketentuan
                                </h3>
                                <p className="mb-4 leading-8">
                                    Impact Academy dapat melakukan penyesuaian,
                                    pembaruan, atau perubahan kebijakan
                                    sewaktu-waktu. Versi terbaru akan selalu
                                    ditampilkan di halaman ini. Kami menyarankan
                                    Kamu untuk mengeceknya secara berkala agar
                                    tetap mendapatkan informasi terbaru.
                                </p>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Akun Pengguna Terdaftar
                                </h3>
                                <p className="mb-4 leading-8">
                                    Sebagian fitur pembelajaran hanya dapat
                                    diakses oleh pengguna yang telah terdaftar.
                                    Kamu wajib menggunakan data yang valid saat
                                    mendaftar dan bertanggung jawab penuh atas
                                    keamanan akunmu. Seluruh data pribadi akan
                                    kami kelola sesuai prinsip perlindungan data
                                    yang berlaku di Indonesia.
                                </p>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Pengembangan Fitur Platform
                                </h3>
                                <p className="mb-4 leading-8">
                                    Kami berhak menambah, memperbarui, atau
                                    menghentikan fitur tertentu demi
                                    meningkatkan kualitas layanan. Perubahan ini
                                    dapat dilakukan tanpa pemberitahuan
                                    sebelumnya.
                                </p>
                            </TCSection>

                            {/* B. Tanggung Jawab Pengguna */}
                            <TCSection
                                id="responsibilities"
                                title="B. Tanggung Jawab Pengguna"
                                icon="person"
                            >
                                <p className="mb-4 leading-8">
                                    Dalam menggunakan Impact Academy, Kamu tidak
                                    diperbolehkan untuk:
                                </p>
                                <ul className="list-none space-y-4 pl-0">
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Mengakses sistem secara ilegal,
                                            meretas, atau mengganggu keamanan
                                            platform.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Merekam, menyebarkan, menggandakan,
                                            atau membagikan konten pembelajaran
                                            tanpa izin resmi.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Memberikan akses akun kepada pihak
                                            lain, baik dengan cara dipinjamkan,
                                            dijual, atau dibagikan.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Melanggar hak cipta, merek dagang,
                                            atau hak kekayaan intelektual
                                            lainnya.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Membuat tiruan platform, konten,
                                            atau layanan Impact Academy.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Menggunakan platform untuk aktivitas
                                            yang bertentangan dengan hukum.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-4 leading-8">
                                    Impact Academy berkomitmen untuk bekerja
                                    sama dengan pihak berwenang apabila
                                    ditemukan pelanggaran hukum.
                                </p>
                            </TCSection>

                            {/* C. Pelanggaran dan Sanksi */}
                            <TCSection
                                id="violations"
                                title="C. Pelanggaran dan Sanksi"
                                icon="warning"
                            >
                                <p className="mb-4 leading-8">
                                    Jika ditemukan pelanggaran terhadap
                                    ketentuan ini, Impact Academy berhak:
                                </p>
                                <ul className="list-none space-y-4 pl-0">
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Menangguhkan atau mencabut akses
                                            akun secara sementara maupun
                                            permanen.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Tidak memberikan pengembalian dana
                                            atas layanan yang telah dibeli.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Mengambil langkah hukum jika
                                            diperlukan.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-4 leading-8">
                                    Keputusan ini diambil demi menjaga keamanan,
                                    kenyamanan, dan integritas ekosistem
                                    pembelajaran.
                                </p>
                            </TCSection>

                            {/* D. Pemesanan dan Pembayaran Layanan */}
                            <TCSection
                                id="payments"
                                title="D. Pemesanan dan Pembayaran Layanan"
                                icon="payments"
                            >
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Proses Pemesanan
                                </h3>
                                <p className="mb-4 leading-8">
                                    Saat Kamu mendaftar program atau kelas,
                                    sistem akan mencatat pesanan dan mengirimkan
                                    konfirmasi melalui email beserta detail
                                    pembayaran.
                                </p>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Metode Pembayaran
                                </h3>
                                <p className="mb-4 leading-8">
                                    Pembayaran dilakukan melalui mitra penyedia
                                    pembayaran resmi. Kamu bertanggung jawab
                                    memastikan data yang digunakan valid dan
                                    dana mencukupi.
                                </p>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Harga dan Pengembalian Dana
                                </h3>
                                <p className="mb-4 leading-8">
                                    Kami berupaya menjaga keakuratan informasi
                                    harga dan layanan. Pengembalian dana hanya
                                    dapat diproses apabila terjadi kesalahan
                                    teknis yang berasal dari sistem Impact
                                    Academy, dengan ketentuan:
                                </p>
                                <ul className="mb-4 list-none space-y-2 pl-0">
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Permohonan dikirim melalui email
                                            resmi Impact Academy.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Nominal pengembalian sesuai selisih
                                            kesalahan.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Proses maksimal 30 hari kerja.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mb-4 leading-8">
                                    Biaya langganan dan transaksi yang telah
                                    berhasil tidak dapat dipindahkan ke akun
                                    lain.
                                </p>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Promo dan Diskon
                                </h3>
                                <p className="mb-4 leading-8">
                                    Kode promo bersifat personal dan hanya dapat
                                    digunakan pada akun yang terdaftar sebagai
                                    penerima promo tersebut.
                                </p>
                                <h3 className="mb-2 text-lg font-bold text-gray-900">
                                    Hak Akses Pembelajaran
                                </h3>
                                <p className="mb-4 leading-8">
                                    Hak akses diberikan selama masa berlangganan
                                    atau periode program berlangsung. Akses ini
                                    hanya untuk penggunaan pribadi, bukan
                                    komersial.
                                </p>
                            </TCSection>

                            {/* E. Hak Kekayaan Intelektual */}
                            <TCSection
                                id="intellectual-property"
                                title="E. Hak Kekayaan Intelektual"
                                icon="copyright"
                            >
                                <p className="mb-4 leading-8">
                                    Seluruh materi pembelajaran, desain visual,
                                    video, audio, modul, dan sistem platform
                                    merupakan aset resmi Impact Academy atau
                                    mitra konten kami yang dilindungi hukum.
                                </p>
                                <p className="mb-4 leading-8">
                                    Kamu tidak diperbolehkan untuk:
                                </p>
                                <ul className="list-none space-y-4 pl-0">
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Menyalin atau menyebarluaskan konten
                                            tanpa izin tertulis.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            Menggunakan materi untuk kepentingan
                                            komersial.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-4 leading-8">
                                    Kamu bertanggung jawab menjaga keamanan
                                    akun, termasuk username dan password. Jika
                                    terjadi akses tidak sah, segera laporkan
                                    kepada tim kami.
                                </p>
                            </TCSection>

                            {/* F. Tautan ke Pihak Ketiga */}
                            <TCSection
                                id="third-party"
                                title="F. Tautan ke Pihak Ketiga"
                                icon="link"
                            >
                                <p className="mb-4 leading-8">
                                    Platform Impact Academy dapat memuat tautan
                                    ke situs eksternal. Kami tidak bertanggung
                                    jawab atas isi, kebijakan, atau aktivitas
                                    yang terjadi di luar platform Impact
                                    Academy. Setiap transaksi dengan pihak
                                    ketiga menjadi tanggung jawab masing-masing
                                    pihak.
                                </p>
                            </TCSection>

                            {/* G. Batasan Tanggung Jawab */}
                            <TCSection
                                id="liability"
                                title="G. Batasan Tanggung Jawab"
                                icon="gavel"
                            >
                                <p className="mb-4 leading-8">
                                    Kami berkomitmen memberikan layanan terbaik.
                                    Namun, Impact Academy tidak menjamin
                                    platform selalu bebas dari gangguan teknis,
                                    bug, atau keterlambatan sistem.
                                </p>
                                <p className="mb-4 leading-8">
                                    Dalam batas hukum yang berlaku, tanggung
                                    jawab kami atas klaim pengguna dibatasi
                                    maksimal sebesar nilai layanan yang telah
                                    dibayarkan.
                                </p>
                            </TCSection>

                            {/* H. Hukum yang Berlaku */}
                            <TCSection
                                id="law"
                                title="H. Hukum yang Berlaku"
                                icon="account_balance"
                            >
                                <p className="mb-4 leading-8">
                                    Seluruh ketentuan ini tunduk pada hukum
                                    Republik Indonesia. Apabila terjadi
                                    sengketa, penyelesaian akan diupayakan
                                    secara musyawarah dalam waktu maksimal 60
                                    hari sebelum menempuh jalur hukum.
                                </p>
                            </TCSection>

                            {/* I. Hubungi Kami */}
                            <TCSection
                                id="contact"
                                title="I. Hubungi Kami"
                                icon="contact_support"
                            >
                                <p className="mb-4 leading-8">
                                    Jika Kamu memiliki pertanyaan seputar
                                    layanan atau ketentuan penggunaan Impact
                                    Academy, silakan hubungi tim kami melalui
                                    kanal resmi Impact Academy.
                                </p>
                            </TCSection>
                        </main>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
