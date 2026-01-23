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
                'avatar_url' => null,
            ],
            [
                'name' => 'John Smith',
                'headline' => 'Full Stack Developer & Open Source Contributor',
                'bio' => 'John is passionate about clean code and teaching others. He specializes in React and Laravel.',
                'avatar_url' => null,
            ],
            [
                'name' => 'Sarah Johnson',
                'headline' => 'Digital Marketing Expert',
                'bio' => 'Sarah helps brands grow their online presence through strategic marketing campaigns.',
                'avatar_url' => null,
            ],
            [
                'name' => 'Michael Chen',
                'headline' => 'Product Manager',
                'bio' => 'Michael has led multiple successful product launches and enjoys mentoring aspiring PMs.',
                'avatar_url' => null,
            ],
            [
                'name' => 'Emily Wilson',
                'headline' => 'Business Strategist',
                'bio' => 'Emily helps businesses scale and optimize their operations for maximum efficiency.',
                'avatar_url' => null,
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
