<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdateProfileRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function editUser(): Response
    {
        return Inertia::render('User/Dashboard/Profile');
    }

    public function updateProfile(UpdateProfileRequest $request): RedirectResponse
    {   
        try {
        $user = $request->user();
        $validated = $request->validated();

        if ($user->email !== $validated['email']) {
            $validated['email_verified_at'] = null;
        }

        $user->update($validated);

        return redirect()->back()->with('success', 'Profil berhasil diperbarui.');
        } catch (\Throwable $th) {
           return redirect()->back()->with('error', 'Gagal memperbarui profil.');
        }
        
    }
}
