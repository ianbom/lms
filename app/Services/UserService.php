<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get all users with filters, search, and sorting
     */
    public function getAllUsers(array $filters = [])
    {
        $query = User::query();

        // Search by name or email
        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        // Filter by role
        if (!empty($filters['role']) && in_array($filters['role'], ['admin', 'user'])) {
            $query->where('role', $filters['role']);
        }

        // Filter by email verification status
        if (isset($filters['verified'])) {
            if ($filters['verified'] === 'verified') {
                $query->whereNotNull('email_verified_at');
            } elseif ($filters['verified'] === 'unverified') {
                $query->whereNull('email_verified_at');
            }
        }

        // Handle sorting
        $sortableFields = ['name', 'email', 'created_at', 'role'];
        $sortField = in_array($filters['sort'] ?? '', $sortableFields) ? $filters['sort'] : 'created_at';
        $sortDirection = ($filters['direction'] ?? 'desc') === 'asc' ? 'asc' : 'desc';
        $query->orderBy($sortField, $sortDirection);

        $perPage = $filters['per_page'] ?? 10;

        return $query->paginate($perPage)->through(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'email_verified_at' => $user->email_verified_at,
                'created_at' => $user->created_at,
                'formatted_created_at' => $user->created_at->format('d M Y'),
            ];
        });
    }

    /**
     * Get user statistics
     */
    public function getUserStats()
    {
        return [
            'total' => User::count(),
            'admins' => User::where('role', 'admin')->count(),
            'users' => User::where('role', 'user')->count(),
            'verified' => User::whereNotNull('email_verified_at')->count(),
            'unverified' => User::whereNull('email_verified_at')->count(),
            'new_this_month' => User::whereMonth('created_at', now()->month)
                                    ->whereYear('created_at', now()->year)
                                    ->count(),
        ];
    }

    /**
     * Find user by ID
     */
    public function getUserById($userId)
    {
        return User::findOrFail($userId);
    }

    /**
     * Delete a user
     */
    public function deleteUser($userId)
    {
        $user = User::findOrFail($userId);
        $user->delete();
        return true;
    }
}
