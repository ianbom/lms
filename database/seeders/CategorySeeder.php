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
                'name' => 'Design',
                'slug' => 'design',
                'description' => 'Master the art of visual communication, from UI/UX to graphic design.',
            ],
            [
                'name' => 'Development',
                'slug' => 'development',
                'description' => 'Learn coding languages, frameworks, and software engineering principles.',
            ],
            [
                'name' => 'Business',
                'slug' => 'business',
                'description' => 'Develop leadership skills, entrepreneurship, and business strategies.',
            ],
            [
                'name' => 'Marketing',
                'slug' => 'marketing',
                'description' => 'Explore digital marketing, SEO, content creation, and brand management.',
            ],
            [
                'name' => 'Creative Arts',
                'slug' => 'creative-arts',
                'description' => 'Develope your creativity in music, writing, photography, and more.',
            ],
            [
                'name' => 'Personal Development',
                'slug' => 'personal-development',
                'description' => 'Improve productivity, soft skills, and personal growth.',
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
