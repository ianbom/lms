<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureClassIsPublished
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get classId from route parameters
        $classId = $request->route('classId');
        
        if ($classId) {
            // Find the class
            $class = \App\Models\Classes::find($classId);
            
            // If class not found or status is draft, return 404
            if (!$class || $class->status === 'draft') {
                abort(404);
            }
        }
        
        return $next($request);
    }
}

