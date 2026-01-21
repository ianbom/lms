<?php

use App\Http\Controllers\Admin\ClassController as AdmClassController;
use App\Http\Controllers\Admin\MentorController;
use App\Http\Controllers\Admin\ModuleController as AdmModuleController;
use App\Http\Controllers\Admin\QuizController as AdmQuizController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\ClassController as UserClassController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', function () {
            return Inertia::render('User/Home/Home');
        })->name('home');

    // User Modul Routes
    Route::prefix('user')->name('user.')->group(function () {
       Route::get('/classes', [UserClassController::class, 'listClassPage'])->name('classes');
       Route::get('/classes/{classId}', [UserClassController::class, 'detailClassPage'])->name('classes.show');
    });

    // User Video Routes
    Route::prefix('video')->name('user.video.')->group(function () {
        Route::get('/{id}/study', function ($id) {
            return Inertia::render('User/Video/Study', [
                'videoId' => $id,
            ]);
        })->name('study');
    });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin Routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Admin/Dashboard/Dashboard');
        })->name('dashboard');

        Route::get('/classes/{classId}', [AdmClassController::class, 'detailClassPage'])->name('classes.show');

        Route::get('/classes', [AdmClassController::class, 'listClassPage'])->name('classes');
        Route::get('/create/classes', [AdmClassController::class, 'createClassPage'])->name('classes.create');
        Route::post('/create/classes', [AdmClassController::class, 'storeClass'])->name('classes.store');

        Route::get('/classes/{classId}/modules/create', [AdmModuleController::class, 'createModulePage'])->name('module.create');
        Route::post('/classes/{classId}/modules', [AdmModuleController::class, 'storeModule'])->name('module.store');

        Route::get('/classes/{classId}/quiz/create', [AdmQuizController::class, 'createQuizPage'])->name('quiz.create');
        Route::post('/classes/quiz/create', [AdmQuizController::class, 'storeQuiz'])->name('quiz.store');

        Route::get('/mentors', [MentorController::class, 'listMentorPage'])->name('mentors');
        Route::get('/mentors/create', [MentorController::class, 'createMentorPage'])->name('mentors.create');
        Route::post('/mentors', [MentorController::class, 'storeMentor'])->name('mentors.store');

        Route::get('/categories', [CategoryController::class, 'listCategoryPage'])->name('categories');
        Route::get('/categories/create', [CategoryController::class, 'createCategoryPage'])->name('categories.create');
        Route::post('/categories', [CategoryController::class, 'storeCategory'])->name('categories.store');

        Route::get('/orders', [OrderController::class, 'listOrderPage'])->name('orders');
 
    });
});

require __DIR__.'/auth.php';

