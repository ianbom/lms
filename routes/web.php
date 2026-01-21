<?php

use App\Http\Controllers\Admin\ClassController as AdmClassController;
use App\Http\Controllers\Admin\ModuleController as AdmModuleController;
use App\Http\Controllers\Admin\QuizController as AdmQuizController;
use App\Http\Controllers\ProfileController;
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
    Route::prefix('modul')->name('user.modul.')->group(function () {
        Route::get('/', function () {
            return Inertia::render('User/Modul/ListModul');
        })->name('index');

        Route::get('/{id}', function ($id) {
            return Inertia::render('User/Modul/DetailModul', [
                'moduleId' => $id,
            ]);
        })->name('show');

        Route::get('/{id}/purchase', function ($id) {
            return Inertia::render('User/Modul/PurchaseModul', [
                'moduleId' => $id,
            ]);
        })->name('purchase');
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

        Route::get('/classes/{classId}', function ($classId) {
            // return Inertia::render('Admin/Class/DetailClass', [
            //     'classId' => $classId
            // ]);
        })->name('classes.show');

        Route::get('/classes', [AdmClassController::class, 'listClassPage'])->name('classes');
        Route::get('/create/classes', [AdmClassController::class, 'createClassPage'])->name('classes.create');
        Route::post('/create/classes', [AdmClassController::class, 'storeClass'])->name('classes.store');

        Route::get('/classes/{classId}/modules/create', [AdmModuleController::class, 'createModulePage'])->name('module.create');
        Route::post('/classes/{classId}/modules', [AdmModuleController::class, 'storeModule'])->name('module.store');

        Route::get('/classes/{classId}/quiz/create', [AdmQuizController::class, 'createQuizPage'])->name('quiz.create');
        Route::post('/classes/quiz/create', [AdmQuizController::class, 'storeQuiz'])->name('quiz.store');

    });
});

require __DIR__.'/auth.php';

