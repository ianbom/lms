<?php

namespace Database\Seeders;

use App\Models\Testimony;
use Illuminate\Database\Seeder;

class TestimonySeeder extends Seeder
{
    public function run(): void
    {
        $testimonies = [
            [
                'content' => 'Pelatihan yang sangat bermanfaat! Materi ESG yang disampaikan sangat relevan dengan kebutuhan bisnis kami saat ini.',
                'rating' => 5,
                'person_name' => 'Ahmad Fauzi',
                'person_position' => 'Sustainability Manager',
                'person_photo_url' => null,
            ],
            [
                'content' => 'Trainer berpengalaman dan metode pembelajaran yang interaktif. Program Theory of Change membantu kami merancang strategi dampak yang lebih terarah.',
                'rating' => 5,
                'person_name' => 'Siti Rahmawati',
                'person_position' => 'CSR Director',
                'person_photo_url' => null,
            ],
            [
                'content' => 'Konten pelatihan ISO 26000 sangat komprehensif dan mudah dipahami. Tim kami kini lebih siap menerapkan tanggung jawab sosial perusahaan.',
                'rating' => 4,
                'person_name' => 'Budi Santoso',
                'person_position' => 'HR Manager',
                'person_photo_url' => null,
            ],
            [
                'content' => 'Sertifikasi BNSP yang kami ikuti melalui Impact Academy membuka banyak peluang baru bagi karir profesional kami.',
                'rating' => 5,
                'person_name' => 'Dewi Lestari',
                'person_position' => 'Training Coordinator',
                'person_photo_url' => null,
            ],
            [
                'content' => 'Program Impact Measurement sangat membantu kami dalam mengukur dan melaporkan dampak sosial kegiatan CSR perusahaan.',
                'rating' => 4,
                'person_name' => 'Rendra Pratama',
                'person_position' => 'Social Impact Analyst',
                'person_photo_url' => null,
            ],
            [
                'content' => 'Logical Framework Approach yang diajarkan sangat praktis dan langsung bisa diterapkan dalam perencanaan program kami.',
                'rating' => 5,
                'person_name' => 'Nurul Hidayah',
                'person_position' => 'Program Manager',
                'person_photo_url' => null,
            ],
            [
                'content' => 'Pelatihan System Thinking membuka perspektif baru dalam melihat permasalahan bisnis secara holistik. Sangat direkomendasikan!',
                'rating' => 4,
                'person_name' => 'Irfan Hakim',
                'person_position' => 'Strategy Consultant',
                'person_photo_url' => null,
            ],
            [
                'content' => 'Impact Academy memberikan pengalaman belajar yang luar biasa. Fasilitas lengkap dan para trainer sangat profesional dan responsif.',
                'rating' => 5,
                'person_name' => 'Mega Puspita',
                'person_position' => 'Learning & Development Lead',
                'person_photo_url' => null,
            ],
        ];

        foreach ($testimonies as $testimony) {
            Testimony::firstOrCreate(
                ['content' => $testimony['content']],
                $testimony,
            );
        }
    }
}
