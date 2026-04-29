<?php

use App\Models\Category;
use App\Models\Classes;
use App\Models\Enrollment;
use App\Models\Module;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;

it('exports class users with quiz scores filtered by joined date range', function () {
    $this->withoutMiddleware();

    $admin = User::factory()->create([
        'role' => 'admin',
    ]);

    $category = Category::query()->create([
        'name' => 'Sustainability',
        'slug' => 'sustainability',
        'description' => 'Category description',
    ]);

    $class = Classes::query()->create([
        'created_by' => $admin->id,
        'category_id' => $category->id,
        'type' => 'online-course',
        'title' => 'Kelas Export Peserta',
        'slug' => 'kelas-export-peserta',
        'description' => 'Deskripsi kelas',
        'price' => 100000,
        'discount' => 0,
        'price_final' => 100000,
        'status' => 'published',
    ]);

    $module = Module::query()->create([
        'class_id' => $class->id,
        'title' => 'Modul 1',
        'description' => 'Deskripsi modul',
        'sort_order' => 1,
        'is_active' => true,
    ]);

    $quizA = Quiz::query()->create([
        'module_id' => $module->id,
        'title' => 'Quiz Dasar',
        'sort_order' => 1,
        'is_pretest' => false,
    ]);

    $quizB = Quiz::query()->create([
        'module_id' => $module->id,
        'title' => 'Quiz Lanjutan',
        'sort_order' => 2,
        'is_pretest' => false,
    ]);

    $includedUser = User::factory()->create([
        'name' => 'Budi Export',
        'email' => 'budi@example.com',
        'phone' => '08123456789',
        'company' => 'PT Maju',
        'position' => 'Supervisor',
        'role' => 'user',
    ]);

    $excludedUser = User::factory()->create([
        'name' => 'Siti Lama',
        'email' => 'siti@example.com',
        'phone' => '08999999999',
        'company' => 'PT Lama',
        'position' => 'Manager',
        'role' => 'user',
    ]);

    Enrollment::query()->create([
        'user_id' => $includedUser->id,
        'class_id' => $class->id,
        'status' => 'active',
        'activated_at' => '2026-04-15 10:00:00',
        'created_at' => '2026-04-15 10:00:00',
        'updated_at' => '2026-04-15 10:00:00',
    ]);

    Enrollment::query()->create([
        'user_id' => $excludedUser->id,
        'class_id' => $class->id,
        'status' => 'active',
        'activated_at' => '2026-03-01 09:00:00',
        'created_at' => '2026-03-01 09:00:00',
        'updated_at' => '2026-03-01 09:00:00',
    ]);

    QuizAttempt::query()->create([
        'user_id' => $includedUser->id,
        'quiz_id' => $quizA->id,
        'started_at' => now(),
        'submitted_at' => now(),
        'score' => 70,
        'is_passed' => true,
    ]);

    QuizAttempt::query()->create([
        'user_id' => $includedUser->id,
        'quiz_id' => $quizA->id,
        'started_at' => now(),
        'submitted_at' => now(),
        'score' => 90,
        'is_passed' => true,
    ]);

    QuizAttempt::query()->create([
        'user_id' => $includedUser->id,
        'quiz_id' => $quizB->id,
        'started_at' => now(),
        'submitted_at' => now(),
        'score' => 85,
        'is_passed' => true,
    ]);

    QuizAttempt::query()->create([
        'user_id' => $excludedUser->id,
        'quiz_id' => $quizA->id,
        'started_at' => now(),
        'submitted_at' => now(),
        'score' => 60,
        'is_passed' => false,
    ]);

    $response = $this
        ->actingAs($admin)
        ->get(route('admin.classes.users.export', [
            'classId' => $class->id,
            'joined_from' => '2026-04-01',
            'joined_to' => '2026-04-30',
        ]));

    $response->assertOk();
    $response->assertDownload();

    $content = $response->streamedContent();

    expect($content)
        ->toContain('Budi Export')
        ->toContain('08123456789')
        ->toContain('PT Maju')
        ->toContain('Supervisor')
        ->toContain('15-04-2026 10:00:00')
        ->toContain('Modul 1 - Quiz Dasar')
        ->toContain('Modul 1 - Quiz Lanjutan')
        ->toContain('90')
        ->toContain('85')
        ->not->toContain('Siti Lama')
        ->not->toContain('60');
});
