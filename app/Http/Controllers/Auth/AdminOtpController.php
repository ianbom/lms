<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\AdminOtpService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AdminOtpController extends Controller
{
    protected AdminOtpService $otpService;

    public function __construct(AdminOtpService $otpService)
    {
        $this->otpService = $otpService;
    }

    public function show(Request $request): Response|RedirectResponse
    {
        $userId = $request->session()->get('admin_otp_user_id');

        if (!$userId) {
            return redirect()->route('login');
        }

        $user = User::find($userId);
        if (!$user) {
            return redirect()->route('login');
        }

        return Inertia::render('Auth/AdminOtpVerify', [
            'email' => $this->maskEmail($user->email),
            'status' => session('status'),
        ]);
    }

    public function verify(Request $request): RedirectResponse
    {
        $request->validate([
            'otp_code' => ['required', 'string', 'size:6'],
        ]);

        $userId = $request->session()->get('admin_otp_user_id');

        if (!$userId) {
            return redirect()->route('login')
                ->with('status', 'Sesi telah berakhir. Silakan login kembali.');
        }

        $user = User::find($userId);

        if (!$user) {
            return redirect()->route('login');
        }

        if (!$this->otpService->verify($user, $request->input('otp_code'))) {
            return redirect()->back()->withErrors([
                'otp_code' => 'Kode OTP tidak valid atau sudah kedaluwarsa.',
            ]);
        }

        // OTP verified — log the user in
        Auth::login($user, $request->session()->get('admin_otp_remember', false));

        $request->session()->forget(['admin_otp_user_id', 'admin_otp_remember']);
        $request->session()->put('admin_otp_verified', true);
        $request->session()->regenerate();

        return redirect()->intended(route('admin.dashboard'));
    }

    public function resend(Request $request): RedirectResponse
    {
        $userId = $request->session()->get('admin_otp_user_id');

        if (!$userId) {
            return redirect()->route('login');
        }

        $user = User::find($userId);

        if (!$user) {
            return redirect()->route('login');
        }

        $this->otpService->generateAndSend($user);

        return redirect()->back()->with('status', 'Kode OTP baru telah dikirim ke email Anda.');
    }

    private function maskEmail(string $email): string
    {
        $parts = explode('@', $email);
        $name = $parts[0];
        $domain = $parts[1];

        if (strlen($name) <= 2) {
            $masked = $name[0] . '***';
        } else {
            $masked = substr($name, 0, 2) . str_repeat('*', max(strlen($name) - 2, 3));
        }

        return $masked . '@' . $domain;
    }
}
