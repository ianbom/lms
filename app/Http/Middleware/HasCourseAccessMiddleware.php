<?php

namespace App\Http\Middleware;

use App\Models\Enrollment;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class HasCourseAccessMiddleware
{
    /**
     * Handle an incoming request.
     * Check if user has access to the class based on enrollment.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $classId = $request->route('classId');

        if (!$classId) {
            return redirect()->route('user.classes')
                ->with('error', 'Kelas tidak ditemukan.');
        }

        if (!$user) {
            return redirect()->route('login')
                ->with('error', 'Silakan login terlebih dahulu.');
        }

        $hasAccess = Enrollment::where('user_id', $user->id)
            ->where('class_id', $classId)
            ->exists();

        if (!$hasAccess) {
            abort(403, 'Anda tidak memiliki akses ke kelas ini.');
        }

        return $next($request);
    }
}
