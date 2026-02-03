<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CorporateContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public array $contactData;

    public function __construct(array $contactData)
    {
        $this->contactData = $contactData;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Corporate Training Inquiry dari ' . $this->contactData['company_name'],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.corporate-contact',
            with: ['data' => $this->contactData],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
