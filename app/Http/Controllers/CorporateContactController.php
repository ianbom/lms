<?php

namespace App\Http\Controllers;

use App\Http\Requests\CorporateContactRequest;
use App\Http\Requests\ContactUsRequest;
use App\Mail\CorporateContactMail;
use App\Mail\ContactUsMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;

class CorporateContactController extends Controller
{
    public function send(CorporateContactRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Mail::to('info@socialimpact.id')->send(new CorporateContactMail($validated));

        return back()->with('success', 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.');
    }

    public function sendContactUs(ContactUsRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Mail::to('info@socialimpact.id')->send(new ContactUsMail($validated));

        return back()->with('success', 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.');
    }
}

