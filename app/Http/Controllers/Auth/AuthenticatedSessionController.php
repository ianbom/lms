<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Services\AdminOtpService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    protected AdminOtpService $otpService;

    public function __construct(AdminOtpService $otpService)
    {
        $this->otpService = $otpService;
    }

    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $user = Auth::user();

        // Admin requires OTP verification
        if ($user->role === 'admin') {
            $userId = $user->id;
            $remember = $request->boolean('remember');

            // Logout admin — they need to verify OTP first
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            $request->session()->regenerate();

            // Store user info in session for OTP flow
            $request->session()->put('admin_otp_user_id', $userId);
            $request->session()->put('admin_otp_remember', $remember);

            // Generate and send OTP
            $this->otpService->generateAndSend(User::find($userId));

            return redirect()->route('admin.otp.show');
        }

        $request->session()->regenerate();

        if ($user->role === 'user') {
            return redirect()->intended(route('user.dashboard', absolute: false));
        }

        return redirect()->intended(route('home', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
