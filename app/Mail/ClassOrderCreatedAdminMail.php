<?php

namespace App\Mail;

use App\Models\ClassOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class ClassOrderCreatedAdminMail extends Mailable
{
    use Queueable, SerializesModels;

    public ClassOrder $order;

    public function __construct(ClassOrder $order)
    {
        $this->order = $order->loadMissing(['user', 'class']);
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Order Kelas Baru - '.$this->order->class->title,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.class-order-created-admin',
            with: [
                'order' => $this->order,
                'proofUrl' => $this->order->proof_url ? url($this->order->proof_url) : null,
            ],
        );
    }

    public function attachments(): array
    {
        if (! $this->order->proof_url) {
            return [];
        }

        $proofPath = str_replace('/storage/', '', $this->order->proof_url);

        if (! Storage::disk('public')->exists($proofPath)) {
            return [];
        }

        $extension = pathinfo($proofPath, PATHINFO_EXTENSION) ?: 'jpg';

        return [
            Attachment::fromPath(Storage::disk('public')->path($proofPath))
                ->as('bukti-transfer-order-'.$this->order->id.'.'.$extension),
        ];
    }
}
