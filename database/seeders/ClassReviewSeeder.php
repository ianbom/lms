<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];

        for ($i = 1; $i <= 20; $i++) {
            $data[] = [
                'user_id' => 5,
                'class_id' => 2,
                'enrollment_id' => 3,
                'rating' => rand(1, 5),
                'comment' => 'Review ke-' . $i . ' untuk kelas ini.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }

        DB::table('class_reviews')->insert($data);
    }
}
