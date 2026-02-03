<?php

namespace App\Http\Controllers;

use App\Http\Requests\CorporateContactRequest;
use App\Mail\CorporateContactMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;

class CorporateContactController extends Controller
{
    public function send(CorporateContactRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Mail::to('ianalebom@gmail.com')->send(new CorporateContactMail($validated));

        return back()->with('success', 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.');
    }
}
