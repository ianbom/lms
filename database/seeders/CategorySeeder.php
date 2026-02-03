<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Sertifikasi BNSP',
                'slug' => 'sertifikasi-bnsp',
                'description' => 'Program sertifikasi kompetensi profesi standar nasional yang diakui secara resmi.',
            ],
            [
                'name' => 'Impact Measurement',
                'slug' => 'impact-measurement',
                'description' => 'Pelajari cara mengukur, mengelola, dan melaporkan dampak sosial dan lingkungan.',
            ],
            [
                'name' => 'ISO 26000',
                'slug' => 'iso-26000',
                'description' => 'Panduan panduan tanggung jawab sosial untuk organisasi yang berkelanjutan dan etis.',
            ],
            [
                'name' => 'ESG',
                'slug' => 'esg',
                'description' => 'Pahami prinsip Environmental, Social, dan Governance untuk bisnis yang berkelanjutan.',
            ],
            [
                'name' => 'Theory of Change',
                'slug' => 'theory-of-change',
                'description' => 'Kerangka kerja untuk merencanakan dan mengevaluasi perubahan sosial jangka panjang.',
            ],
            [
                'name' => 'Logical Framework Approach',
                'slug' => 'logical-framework-approach',
                'description' => 'Metodologi perencanaan dan manajemen proyek yang sistematis dan terstruktur.',
            ],
            [
                'name' => 'System Thinking',
                'slug' => 'system-thinking',
                'description' => 'Kembangkan pola pikir holistik untuk memecahkan masalah kompleks dalam sistem.',
            ],
        ];

        foreach ($categories as $category) {
            Category::firstOrCreate(
                ['name' => $category['name']], // Check by name
                $category
            );
        }
    }
}
