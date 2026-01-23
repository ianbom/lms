<?php

namespace Database\Seeders;

use App\Models\Mentor;
use Illuminate\Database\Seeder;

class MentorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mentors = [
            [
                'name' => 'Jane Doe',
                'headline' => 'Senior UI/UX Designer at TechCorp',
                'bio' => 'Jane has over 10 years of experience in product design and has worked with major tech companies.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Jane+Doe&background=6366f1&color=fff&size=200',
            ],
            [
                'name' => 'John Smith',
                'headline' => 'Full Stack Developer & Open Source Contributor',
                'bio' => 'John is passionate about clean code and teaching others. He specializes in React and Laravel.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=John+Smith&background=059669&color=fff&size=200',
            ],
            [
                'name' => 'Sarah Johnson',
                'headline' => 'Digital Marketing Expert',
                'bio' => 'Sarah helps brands grow their online presence through strategic marketing campaigns.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=db2777&color=fff&size=200',
            ],
            [
                'name' => 'Michael Chen',
                'headline' => 'Product Manager',
                'bio' => 'Michael has led multiple successful product launches and enjoys mentoring aspiring PMs.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Michael+Chen&background=ea580c&color=fff&size=200',
            ],
            [
                'name' => 'Emily Wilson',
                'headline' => 'Business Strategist',
                'bio' => 'Emily helps businesses scale and optimize their operations for maximum efficiency.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Emily+Wilson&background=0891b2&color=fff&size=200',
            ],
        ];

        foreach ($mentors as $mentor) {
            Mentor::firstOrCreate(
                ['name' => $mentor['name']],
                $mentor
            );
        }
    }
}
