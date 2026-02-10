<?php

namespace App\Services;

use App\Mail\AdminOtpMail;
use App\Models\AdminOtp;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class AdminOtpService
{
    public function generateAndSend(User $user): void
    {
        // Delete any existing OTPs for this user
        AdminOtp::where('user_id', $user->id)->delete();

        // Generate 6-digit OTP
        $otpCode = str_pad((string) random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        // Save OTP with 5-minute expiration
        AdminOtp::create([
            'user_id' => $user->id,
            'otp_code' => $otpCode,
            'expires_at' => now()->addMinutes(5),
        ]);

        // Send OTP via email
        Mail::to($user->email)->send(new AdminOtpMail($otpCode, $user->name));
    }

    public function verify(User $user, string $code): bool
    {
        $otp = AdminOtp::where('user_id', $user->id)
            ->where('otp_code', $code)
            ->first();

        if (!$otp) {
            return false;
        }

        if ($otp->isExpired()) {
            $otp->delete();
            return false;
        }

        // OTP valid — delete it
        $otp->delete();

        return true;
    }
}
