<?php

namespace Database\Seeders;

use App\Models\PageSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PageSetting::create([ 
            'type' => 'e-learning',
            'title' => 'Eksplorasi Modul E-Learning',
            'description' => 'Tingkatkan keahlian Anda dengan kurikulum terstruktur dari trainer berpengalaman.',
        ]);

        PageSetting::create([ 
            'type' => 'learning-package',
            'title' => 'Eksplorasi Modul Learning Package',
            'description' => 'Tingkatkan keahlian Anda dengan kurikulum terstruktur dari trainer berpengalaman.',
        ]);

        PageSetting::create([ 
            'type' => 'webinar',
            'title' => 'Eksplorasi Modul Webinar',
            'description' => 'Tingkatkan keahlian Anda dengan kurikulum terstruktur dari trainer berpengalaman.',
        ]);
    }
}
