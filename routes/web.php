<?php

use App\Http\Controllers\Admin\ClassController as AdmClassController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MentorController;
use App\Http\Controllers\Admin\ModuleController as AdmModuleController;
use App\Http\Controllers\Admin\QuizController as AdmQuizController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PageSettingController;
use App\Http\Controllers\Admin\UserController as AdmUserController;
use App\Http\Controllers\Admin\TestimonyController;
use App\Http\Controllers\CorporateContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\ClassController as UserClassController;
use App\Http\Controllers\User\DashboardController as UserDashboardController;
use App\Http\Controllers\User\OrderController as UserOrderController;
use App\Http\Controllers\User\CertificateController;
use App\Http\Controllers\User\ProfileController as UserProfileController;
use App\Http\Controllers\User\ClassReviewController;
use App\Http\Controllers\User\StudyController;
use App\Http\Controllers\Auth\AdminOtpController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('home');
});

Route::get('/dashboard', function () {
    return Inertia::render('User/Home/Home');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', [UserDashboardController::class, 'homePage'])->name('home');

Route::get('/privacy-policy', function () {
    return Inertia::render('Privacy');
})->name('privacy');
Route::get('/review', function () {
    return Inertia::render('Admin/Class/ClassReviewDetail');
})->name('review');

Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermCondition');
})->name('terms');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact');

Route::post('/contact-us', [CorporateContactController::class, 'sendContactUs'])->name('contact.store');

Route::get('/corporate-training', function () {
    $categories = \App\Models\Category::select('id', 'name')->orderBy('name')->get();
    return Inertia::render('CorporateTraining', [
        'categories' => $categories,
    ]);
})->name('corporate-training');

Route::post('/corporate-training/contact', [CorporateContactController::class, 'send'])->name('corporate-training.contact');

Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

// Public certificate verification route
Route::get('/certificate/verify', [CertificateController::class, 'verifyCertificate'])->name('certificate.verify');
Route::get('/certificate/verify', [CertificateController::class, 'downloadCertificatePublic']);

    // User Modul Routes
    Route::prefix('user')->name('user.')->group(function () {

       Route::get('/classes', [UserClassController::class, 'listClassPage'])->name('classes');
       Route::get('/classes/{classId}', [UserClassController::class, 'detailClassPage'])->middleware('class.published')->name('classes.show');

       Route::get('/order/success', [UserOrderController::class, 'orderSuccessPage'])->name('order.success');

       Route::middleware(['auth', 'verified', 'has.course.access', 'class.published'])->group(function () {

           Route::get('/study/{classId}/module/{moduleId}', [StudyController::class, 'watchModulePage'])->name('study.module');
           Route::get('/study/{classId}/video/{videoId}', [StudyController::class, 'watchClassPage'])->name('study.watch');
           Route::post('/study/{classId}/video/{videoId}/progress', [StudyController::class, 'updateProgress'])->name('study.progress');
           Route::post('/study/{classId}/video/{videoId}/complete', [StudyController::class, 'markCompleted'])->name('study.complete');
           Route::post('/study/{classId}/video/{videoId}/notes', [StudyController::class, 'addNote'])->name('study.notes.add');

           Route::get('/study/{classId}/quiz/{quizId}', [StudyController::class, 'takeQuizPage'])->name('study.quiz');
           Route::post('/study/{classId}/quiz/{quizId}/start', [StudyController::class, 'startQuiz'])->name('study.quiz.start');
           Route::post('/study/{classId}/quiz/{quizId}/submit', [StudyController::class, 'submitQuiz'])->name('study.quiz.submit');

           // Review Page
           Route::get('/study/{classId}/review', [ClassReviewController::class, 'reviewPage'])->name('study.review');
       });


       Route::middleware(['auth', 'verified'])->group(function () {
           Route::get('/dashboard', [UserDashboardController::class, 'dashboardPage'])->name('dashboard');
           Route::get('/classes/{classId}/purchase', [UserClassController::class, 'purchaseClassPage'])->middleware('class.published')->name('classes.purchase');
           Route::post('/classes/{classId}/purchase', [UserOrderController::class, 'orderClass'])->middleware('class.published')->name('classes.order');

           Route::get('/myClass', [UserDashboardController::class, 'myClassPage'])->name('my-class');
           Route::get('/myOrder', [UserDashboardController::class, 'myOrderPage'])->name('my-order');
           Route::put('/study/notes/{noteId}', [StudyController::class, 'updateNote'])->name('study.notes.update');
           Route::delete('/study/notes/{noteId}', [StudyController::class, 'deleteNote'])->name('study.notes.delete');
           Route::get('/profile', [ProfileController::class, 'editUser'])->name('profile.edit');
           Route::patch('/profile', [UserProfileController::class, 'updateProfile'])->name('profile.update');
           Route::get('/study/quiz/result/{attemptId}', [StudyController::class, 'getQuizResult'])->name('study.quiz.result');

           Route::get('/certificates', [CertificateController::class, 'listCertificatePage'])->name('certificates');
           Route::post('/certificates/claim/{classId}', [CertificateController::class, 'claimCertificate'])->name('certificates.claim');
           Route::get('/certificates/{certificateId}/download', [CertificateController::class, 'downloadCertificate'])->name('certificates.download');
           Route::get('/certificates/{certificateId}/view', [CertificateController::class, 'viewCertificate'])->name('certificates.view');

           // Class Review Routes
           Route::post('/classes/{classId}/reviews', [ClassReviewController::class, 'store'])->middleware('class.published')->name('reviews.store');
           Route::put('/reviews/{reviewId}', [ClassReviewController::class, 'update'])->name('reviews.update');
           Route::delete('/reviews/{reviewId}', [ClassReviewController::class, 'destroy'])->name('reviews.destroy');
       });
    });


// Admin OTP Verification Routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/otp', [AdminOtpController::class, 'show'])->name('otp.show');
    Route::post('/otp/verify', [AdminOtpController::class, 'verify'])->name('otp.verify');
    Route::post('/otp/resend', [AdminOtpController::class, 'resend'])->name('otp.resend');
});

Route::middleware(['auth', 'isAdmin', 'admin.otp'])->group(function () {
    // Admin Routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/dashboard/chart-data', [DashboardController::class, 'getChartData'])->name('dashboard.chart');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile');
        Route::get('/classes/{classId}', [AdmClassController::class, 'detailClassPage'])->name('classes.show');
        Route::put('/classes/{classId}', [AdmClassController::class, 'updateClass'])->name('classes.update');
        Route::post('/classes/{classId}/publish', [AdmClassController::class, 'publishClass'])->name('classes.publish');
        Route::get('/classes/{classId}/review', [AdmClassController::class, 'reviewClassPage'])->name('classes.review');
        Route::get('/classes/{classId}/users', [AdmClassController::class, 'classUserListPage'])->name('classes.users');
        Route::get('/classes/{classId}/users/{userId}/quiz-scores', [AdmClassController::class, 'userQuizScores'])->name('classes.users.quizzes');
        Route::delete('/classes/{classId}', [AdmClassController::class, 'deleteClass'])->name('classes.delete');

        Route::get('/classes', [AdmClassController::class, 'listClassPage'])->name('classes');
        Route::get('/create/classes', [AdmClassController::class, 'createClassPage'])->name('classes.create');
        Route::post('/create/classes', [AdmClassController::class, 'storeClass'])->name('classes.store');

        Route::get('/classes/{classId}/modules/create', [AdmModuleController::class, 'createModulePage'])->name('module.create');
        Route::post('/classes/{classId}/modules', [AdmModuleController::class, 'storeModule'])->name('module.store');
        Route::put('/modules/{moduleId}', [AdmModuleController::class, 'updateModule'])->name('module.update');
        Route::post('/classes/{classId}/modules/reorder', [AdmModuleController::class, 'reorderModules'])->name('module.reorder');

        Route::get('/classes/{classId}/quiz/create', [AdmQuizController::class, 'createQuizPage'])->name('quiz.create');
        Route::post('/classes/quiz/create', [AdmQuizController::class, 'storeQuiz'])->name('quiz.store');
        Route::get('/quiz/{quizId}', [AdmQuizController::class, 'getQuiz'])->name('quiz.get');
        Route::put('/quiz/{quizId}', [AdmQuizController::class, 'updateQuiz'])->name('quiz.update');

        Route::get('/mentors', [MentorController::class, 'listMentorPage'])->name('mentors');
        Route::get('/mentors/create', [MentorController::class, 'createMentorPage'])->name('mentors.create');
        Route::post('/mentors', [MentorController::class, 'storeMentor'])->name('mentors.store');
        Route::put('/mentors/{mentor}', [MentorController::class, 'updateMentor'])->name('mentors.update');

        Route::get('/categories', [CategoryController::class, 'listCategoryPage'])->name('categories');
        Route::get('/categories/create', [CategoryController::class, 'createCategoryPage'])->name('categories.create');
        Route::post('/categories', [CategoryController::class, 'storeCategory'])->name('categories.store');
        Route::put('/categories/{categoryId}', [CategoryController::class, 'updateCategory'])->name('categories.update');
        Route::delete('/categories/{categoryId}', [CategoryController::class, 'deleteCategory'])->name('categories.delete');

        Route::get('/orders', [OrderController::class, 'listOrderPage'])->name('orders');
        Route::post('/orders/{orderId}/approve', [OrderController::class, 'approveOrder'])->name('orders.approve');
        Route::post('/orders/{orderId}/reject', [OrderController::class, 'rejectOrder'])->name('orders.reject');
        Route::post('/orders/{orderId}/pending', [OrderController::class, 'pendingOrder'])->name('orders.pending');

        Route::get('/users', [AdmUserController::class, 'listUserPage'])->name('users');
        Route::delete('/users/{userId}', [AdmUserController::class, 'deleteUser'])->name('users.delete');

        Route::get('/testimonies', [TestimonyController::class, 'listTestimonyPage'])->name('testimonies');
        Route::post('/testimonies', [TestimonyController::class, 'storeTestimony'])->name('testimonies.store');
        Route::put('/testimonies/{testimonyId}', [TestimonyController::class, 'updateTestimony'])->name('testimonies.update');
        Route::delete('/testimonies/{testimonyId}', [TestimonyController::class, 'deleteTestimony'])->name('testimonies.delete');

        Route::get('/page-settings', [PageSettingController::class, 'listPageSettingPage'])->name('page-settings');
        Route::post('/page-settings', [PageSettingController::class, 'store'])->name('page-settings.store');
        Route::put('/page-settings/{id}', [PageSettingController::class, 'update'])->name('page-settings.update');
        Route::delete('/page-settings/{id}', [PageSettingController::class, 'destroy'])->name('page-settings.destroy');

    });
});

require __DIR__.'/auth.php';

