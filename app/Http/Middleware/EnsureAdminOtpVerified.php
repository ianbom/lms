<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdminOtpVerified
{
    public function handle(Request $request, Closure $next): Response
    {
        if (
            auth()->check() &&
            auth()->user()->role === 'admin' &&
            !$request->session()->get('admin_otp_verified', false)
        ) {
            return redirect()->route('admin.otp.show');
        }

        return $next($request);
    }
}
