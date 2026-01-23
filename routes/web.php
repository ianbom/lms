<?php

use App\Http\Controllers\Admin\ClassController as AdmClassController;
use App\Http\Controllers\Admin\MentorController;
use App\Http\Controllers\Admin\ModuleController as AdmModuleController;
use App\Http\Controllers\Admin\QuizController as AdmQuizController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\UserController as AdmUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\ClassController as UserClassController;
use App\Http\Controllers\User\DashboardController as UserDashboardController;
use App\Http\Controllers\User\OrderController as UserOrderController;
use App\Http\Controllers\User\StudyController;
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
       Route::get('/dashboard', [UserDashboardController::class, 'dashboardPage'])->name('dashboard');
       Route::get('/classes', [UserClassController::class, 'listClassPage'])->name('classes');
       Route::get('/classes/{classId}', [UserClassController::class, 'detailClassPage'])->name('classes.show');
       Route::get('/classes/{classId}/purchase', [UserClassController::class, 'purchaseClassPage'])->name('classes.purchase');
       Route::post('/classes/{classId}/purchase', [UserOrderController::class, 'orderClass'])->name('classes.order');
       Route::get('/order/success', [UserOrderController::class, 'orderSuccessPage'])->name('order.success');

       Route::get('/myClass', [UserDashboardController::class, 'myClassPage'])->name('my-class');
       Route::get('/myOrder', [UserDashboardController::class, 'myOrderPage'])->name('my-order');

       // Study/Watch Video Routes
       Route::get('/study/{classId}/video/{videoId}', [StudyController::class, 'watchClassPage'])->name('study.watch');
       Route::post('/study/video/{videoId}/progress', [StudyController::class, 'updateProgress'])->name('study.progress');
       Route::post('/study/video/{videoId}/complete', [StudyController::class, 'markCompleted'])->name('study.complete');
       Route::post('/study/video/{videoId}/notes', [StudyController::class, 'addNote'])->name('study.notes.add');
       Route::put('/study/notes/{noteId}', [StudyController::class, 'updateNote'])->name('study.notes.update');
       Route::delete('/study/notes/{noteId}', [StudyController::class, 'deleteNote'])->name('study.notes.delete');

       // Study/Take Quiz Routes
       Route::get('/study/{classId}/quiz/{quizId}', [StudyController::class, 'takeQuizPage'])->name('study.quiz');
       Route::post('/study/quiz/{quizId}/start', [StudyController::class, 'startQuiz'])->name('study.quiz.start');
       Route::post('/study/quiz/{quizId}/submit', [StudyController::class, 'submitQuiz'])->name('study.quiz.submit');
       Route::get('/study/quiz/result/{attemptId}', [StudyController::class, 'getQuizResult'])->name('study.quiz.result');
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
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile');
        Route::get('/classes/{classId}', [AdmClassController::class, 'detailClassPage'])->name('classes.show');
        Route::put('/classes/{classId}', [AdmClassController::class, 'updateClass'])->name('classes.update');
        Route::post('/classes/{classId}/publish', [AdmClassController::class, 'publishClass'])->name('classes.publish');

        Route::get('/classes', [AdmClassController::class, 'listClassPage'])->name('classes');
        Route::get('/create/classes', [AdmClassController::class, 'createClassPage'])->name('classes.create');
        Route::post('/create/classes', [AdmClassController::class, 'storeClass'])->name('classes.store');

        Route::get('/classes/{classId}/modules/create', [AdmModuleController::class, 'createModulePage'])->name('module.create');
        Route::post('/classes/{classId}/modules', [AdmModuleController::class, 'storeModule'])->name('module.store');
        Route::put('/modules/{moduleId}', [AdmModuleController::class, 'updateModule'])->name('module.update');

        Route::get('/classes/{classId}/quiz/create', [AdmQuizController::class, 'createQuizPage'])->name('quiz.create');
        Route::post('/classes/quiz/create', [AdmQuizController::class, 'storeQuiz'])->name('quiz.store');

        Route::get('/mentors', [MentorController::class, 'listMentorPage'])->name('mentors');
        Route::get('/mentors/create', [MentorController::class, 'createMentorPage'])->name('mentors.create');
        Route::post('/mentors', [MentorController::class, 'storeMentor'])->name('mentors.store');

        Route::get('/categories', [CategoryController::class, 'listCategoryPage'])->name('categories');
        Route::get('/categories/create', [CategoryController::class, 'createCategoryPage'])->name('categories.create');
        Route::post('/categories', [CategoryController::class, 'storeCategory'])->name('categories.store');

        Route::get('/orders', [OrderController::class, 'listOrderPage'])->name('orders');
        Route::post('/orders/{orderId}/approve', [OrderController::class, 'approveOrder'])->name('orders.approve');
        Route::post('/orders/{orderId}/reject', [OrderController::class, 'rejectOrder'])->name('orders.reject');

        Route::get('/users', [AdmUserController::class, 'listUserPage'])->name('users');
        Route::delete('/users/{userId}', [AdmUserController::class, 'deleteUser'])->name('users.delete');

    });
});

require __DIR__.'/auth.php';

