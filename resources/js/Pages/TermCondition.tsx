import TCHero from '@/Components/TermCondition/TCHero';
import TCSection from '@/Components/TermCondition/TCSection';
import TCSidebar from '@/Components/TermCondition/TCSidebar';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function TermCondition() {
    return (
        <UserLayout>
            <Head title="Terms and Conditions" />

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
                <TCHero />

                <div className="layout-container flex w-full grow flex-col bg-white">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:px-10">
                        <TCSidebar />

                        <main className="max-w-[800px] flex-1">
                            <TCSection
                                id="intro"
                                title="1. Pendahuluan"
                                icon="info"
                            >
                                <p className="mb-4 leading-8">
                                    Selamat datang di{' '}
                                    <strong>Platform Name</strong>. Dengan
                                    mengakses atau menggunakan situs web,
                                    aplikasi seluler, atau layanan kami
                                    ("Layanan"), Anda setuju untuk terikat oleh
                                    Syarat dan Ketentuan ini ("Ketentuan").
                                    Ketentuan ini berlaku bagi semua pengunjung,
                                    pengguna, dan orang lain yang mengakses atau
                                    menggunakan Layanan.
                                </p>
                                <p className="mb-4 leading-8">
                                    Jika Anda tidak setuju dengan bagian mana
                                    pun dari ketentuan ini, maka Anda tidak
                                    boleh mengakses Layanan. Syarat dan
                                    Ketentuan ini merupakan perjanjian antara
                                    Anda dan Platform Name.
                                </p>
                                <div className="my-6 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                                    <p className="text-primary-900 text-sm font-medium">
                                        <span className="font-bold">
                                            Penting:
                                        </span>{' '}
                                        Penggunaan Anda atas Layanan juga tunduk
                                        pada Kebijakan Privasi kami, yang
                                        mencakup bagaimana kami mengumpulkan,
                                        menggunakan, dan mengungkapkan informasi
                                        pribadi Anda.
                                    </p>
                                </div>
                            </TCSection>

                            <TCSection
                                id="definitions"
                                title="2. Definisi"
                                icon="menu_book"
                            >
                                <p className="mb-4 leading-8">
                                    Untuk tujuan Syarat dan Ketentuan ini:
                                </p>
                                <ul className="list-none space-y-4 pl-0">
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            <strong>"Afiliasi"</strong> berarti
                                            entitas yang mengendalikan,
                                            dikendalikan oleh, atau berada di
                                            bawah kendali bersama dengan salah
                                            satu pihak, di mana "kendali"
                                            berarti kepemilikan 50% atau lebih
                                            saham, kepentingan ekuitas, atau
                                            sekuritas lain yang berhak
                                            memberikan suara untuk pemilihan
                                            direktur atau otoritas pengelola
                                            lainnya.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            <strong>"Akun"</strong> berarti akun
                                            unik yang dibuat untuk Anda guna
                                            mengakses Layanan kami atau bagian
                                            dari Layanan kami.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            <strong>"Perusahaan"</strong>{' '}
                                            (disebut sebagai "Perusahaan",
                                            "Kami", "Kita", atau "Milik Kami"
                                            dalam Perjanjian ini) mengacu pada
                                            Platform Name Inc.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                        <span className="leading-7">
                                            <strong>"Layanan"</strong> mengacu
                                            pada Situs Web dan/atau Aplikasi.
                                        </span>
                                    </li>
                                </ul>
                            </TCSection>

                            <TCSection
                                id="account"
                                title="3. Akun Pengguna"
                                icon="person"
                            >
                                <p className="mb-4 leading-8">
                                    Saat Anda membuat akun dengan kami, Anda
                                    harus memberikan informasi yang akurat,
                                    lengkap, dan terkini setiap saat. Kegagalan
                                    untuk melakukannya merupakan pelanggaran
                                    terhadap Ketentuan, yang dapat mengakibatkan
                                    penghentian segera akun Anda di Layanan
                                    kami.
                                </p>
                                <p className="mb-4 leading-8">
                                    Anda bertanggung jawab untuk menjaga kata
                                    sandi yang Anda gunakan untuk mengakses
                                    Layanan dan untuk setiap aktivitas atau
                                    tindakan di bawah kata sandi Anda, baik kata
                                    sandi Anda ada pada Layanan kami atau
                                    layanan Media Sosial Pihak Ketiga.
                                </p>
                                <p className="mb-4 leading-8">
                                    Anda setuju untuk tidak mengungkapkan kata
                                    sandi Anda kepada pihak ketiga mana pun.
                                    Anda harus memberi tahu kami segera setelah
                                    menyadari adanya pelanggaran keamanan atau
                                    penggunaan akun Anda yang tidak sah.
                                </p>
                            </TCSection>

                            <TCSection
                                id="payment"
                                title="4. Pembayaran & Langganan"
                                icon="payments"
                            >
                                <p className="mb-4 leading-8">
                                    Beberapa bagian Layanan ditagih berdasarkan
                                    langganan ("Langganan"). Anda akan ditagih
                                    di muka secara berulang dan berkala ("Siklus
                                    Penagihan"). Siklus Penagihan ditetapkan
                                    baik secara bulanan atau tahunan, tergantung
                                    pada jenis paket langganan yang Anda pilih
                                    saat membeli Langganan.
                                </p>
                                <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
                                    4.1 Perubahan Biaya
                                </h3>
                                <p className="mb-4 leading-8">
                                    Perusahaan, atas kebijakannya sendiri dan
                                    setiap saat, dapat mengubah biaya Langganan.
                                    Setiap perubahan biaya Langganan akan
                                    berlaku pada akhir Siklus Penagihan saat
                                    itu.
                                </p>
                                <h3 className="mb-3 mt-6 text-lg font-bold text-gray-900">
                                    4.2 Pengembalian Dana
                                </h3>
                                <p className="mb-4 leading-8">
                                    Kecuali jika diwajibkan oleh hukum, biaya
                                    Langganan yang dibayarkan tidak dapat
                                    dikembalikan. Permintaan pengembalian dana
                                    tertentu untuk Langganan dapat
                                    dipertimbangkan oleh Perusahaan berdasarkan
                                    kasus per kasus dan dikabulkan atas
                                    kebijakan tunggal Perusahaan.
                                </p>
                            </TCSection>

                            <TCSection
                                id="ip"
                                title="5. Hak Kekayaan Intelektual"
                                icon="copyright"
                            >
                                <p className="mb-4 leading-8">
                                    Layanan dan konten aslinya (tidak termasuk
                                    Konten yang disediakan oleh Anda atau
                                    pengguna lain), fitur, dan fungsionalitasnya
                                    adalah dan akan tetap menjadi milik
                                    eksklusif Perusahaan dan pemberi lisensinya.
                                    Layanan dilindungi oleh hak cipta, merek
                                    dagang, dan hukum lain baik di Indonesia
                                    maupun negara asing.
                                </p>
                                <p className="mb-4 leading-8">
                                    Merek dagang dan tampilan dagang kami tidak
                                    boleh digunakan sehubungan dengan produk
                                    atau layanan apa pun tanpa persetujuan
                                    tertulis sebelumnya dari Perusahaan.
                                </p>
                            </TCSection>

                            <TCSection
                                id="liability"
                                title="6. Batasan Tanggung Jawab"
                                icon="gavel"
                            >
                                <p className="mb-4 leading-8">
                                    Meskipun terdapat kerusakan yang mungkin
                                    Anda alami, seluruh tanggung jawab
                                    Perusahaan dan pemasoknya berdasarkan
                                    ketentuan apa pun dari Ketentuan ini dan
                                    ganti rugi eksklusif Anda untuk semua hal di
                                    atas akan terbatas pada jumlah yang
                                    sebenarnya Anda bayarkan melalui Layanan
                                    atau 100 USD jika Anda belum membeli apa pun
                                    melalui Layanan.
                                </p>
                                <p className="mb-4 leading-8">
                                    Sejauh diizinkan oleh hukum yang berlaku,
                                    dalam keadaan apa pun Perusahaan atau
                                    pemasoknya tidak bertanggung jawab atas
                                    kerugian khusus, insidental, tidak langsung,
                                    atau konsekuensial apa pun (termasuk, namun
                                    tidak terbatas pada, kerugian atas hilangnya
                                    keuntungan, hilangnya data atau informasi
                                    lain, gangguan bisnis, cedera pribadi,
                                    hilangnya privasi yang timbul dari atau
                                    dengan cara apa pun terkait dengan
                                    penggunaan atau ketidakmampuan untuk
                                    menggunakan Layanan, perangkat lunak pihak
                                    ketiga dan/atau perangkat keras pihak ketiga
                                    yang digunakan dengan Layanan, atau
                                    sebaliknya sehubungan dengan ketentuan apa
                                    pun dari Ketentuan ini), bahkan jika
                                    Perusahaan atau pemasok mana pun telah
                                    diberitahu tentang kemungkinan kerugian
                                    tersebut dan bahkan jika ganti rugi gagal
                                    dari tujuan utamanya.
                                </p>
                            </TCSection>
                        </main>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
