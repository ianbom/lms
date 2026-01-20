<?php

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

        Route::get('/classes', function () {
            return Inertia::render('Admin/Class/ClassManagement');
        })->name('classes');

        Route::get('/classes/create', function () {
            return Inertia::render('Admin/Class/CreateClass');
        })->name('classes.create');

        Route::get('/classes/{classId}/modules/create', function ($classId) {
            return Inertia::render('Admin/Class/CreateModule', [
                'classId' => $classId,
            ]);
        })->name('classes.modules.create');
    });
});

require __DIR__.'/auth.php';

