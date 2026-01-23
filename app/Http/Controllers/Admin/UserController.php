<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function listUserPage(Request $request)
    {
        $filters = $request->only(['search', 'role', 'verified', 'sort', 'direction', 'per_page']);
        $users = $this->userService->getAllUsers($filters);
        $stats = $this->userService->getUserStats();

        return Inertia::render('Admin/User/ListUser', [
            'users' => $users,
            'stats' => $stats,
            'filters' => $filters,
        ]);
    }

    public function deleteUser($userId)
    {
        try {
            $this->userService->deleteUser($userId);
            return redirect()->back()->with('success', 'User berhasil dihapus.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }
}
