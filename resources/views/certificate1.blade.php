<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sertifikat - {{ $certificate->user->name ?? $userName ?? 'Nama Peserta' }}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Great+Vibes&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #F3F4F6;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .certificate-wrapper {
            width: 100%;
            max-width: 900px;
            aspect-ratio: 1.414 / 1;
            background: #FFFFFF;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            position: relative;
            overflow: hidden;
        }

        /* Decorative Border */
        .border-outer {
            position: absolute;
            inset: 12px;
            border: 2px solid #E5E7EB;
            border-radius: 8px;
            pointer-events: none;
        }

        .border-inner {
            position: absolute;
            inset: 20px;
            border: 1px dashed #D1D5DB;
            border-radius: 6px;
            pointer-events: none;
        }

        /* Corner Decorations */
        .corner {
            position: absolute;
            width: 60px;
            height: 60px;
            pointer-events: none;
        }

        .corner svg {
            width: 100%;
            height: 100%;
            fill: none;
            stroke: #D1D5DB;
            stroke-width: 2;
        }

        .corner-tl { top: 8px; left: 8px; }
        .corner-tr { top: 8px; right: 8px; transform: scaleX(-1); }
        .corner-bl { bottom: 8px; left: 8px; transform: scaleY(-1); }
        .corner-br { bottom: 8px; right: 8px; transform: scale(-1); }

        /* Main Content */
        .certificate-content {
            position: relative;
            z-index: 10;
            height: 100%;
            padding: 50px 60px;
            display: flex;
            flex-direction: column;
        }

        /* Header */
        .certificate-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-icon {
            width: 45px;
            height: 45px;
            background: #111827;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo-icon svg {
            width: 28px;
            height: 28px;
            fill: white;
        }

        .logo-text {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
            letter-spacing: -0.025em;
        }

        .badge-icon svg {
            width: 55px;
            height: 55px;
        }

        /* Main Section */
        .certificate-main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 10px 0;
        }

        .certificate-title {
            font-size: 3rem;
            font-weight: 700;
            color: #111827;
            letter-spacing: -0.025em;
            margin-bottom: 4px;
        }

        .certificate-subtitle {
            font-size: 1.125rem;
            font-weight: 500;
            color: #6B7280;
            margin-bottom: 30px;
        }

        .recipient-name {
            font-size: 2.75rem;
            font-weight: 800;
            color: #F59E0B;
            margin-bottom: 20px;
            word-break: break-word;
        }

        .completion-text {
            font-size: 0.75rem;
            font-weight: 600;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 8px;
        }

        .course-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
        }

        /* Footer */
        .certificate-footer {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
            align-items: end;
            padding-top: 20px;
            border-top: 1px solid #E5E7EB;
        }

        .footer-section {
            display: flex;
            flex-direction: column;
        }

        .footer-left {
            align-items: flex-start;
        }

        .footer-center {
            align-items: center;
        }

        .footer-right {
            align-items: flex-end;
        }

        .date-value {
            font-size: 1rem;
            font-weight: 700;
            color: #111827;
        }

        .date-label {
            font-size: 0.75rem;
            font-weight: 500;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 4px;
        }

        .signature {
            font-family: 'Great Vibes', cursive;
            font-size: 2rem;
            color: #111827;
            transform: rotate(-2deg);
            margin-bottom: 8px;
        }

        .signature-line {
            width: 120px;
            height: 1px;
            background: #D1D5DB;
            margin-bottom: 8px;
        }

        .signature-title {
            font-size: 0.75rem;
            font-weight: 700;
            color: #111827;
        }

        .qr-section {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .qr-code {
            width: 70px;
            height: 70px;
            background: #F9FAFB;
            border: 1px solid #E5E7EB;
            border-radius: 4px;
            padding: 4px;
            margin-bottom: 6px;
        }

        .qr-code img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .certificate-id {
            font-size: 0.625rem;
            font-family: monospace;
            color: #6B7280;
            letter-spacing: 0.05em;
        }

        /* Print Styles */
        @media print {
            body {
                background: none;
                padding: 0;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .certificate-wrapper {
                box-shadow: none;
                max-width: 100%;
                width: 100%;
                height: 100vh;
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }

            .certificate-content {
                padding: 30px 35px;
            }

            .certificate-title {
                font-size: 2rem;
            }

            .recipient-name {
                font-size: 1.75rem;
            }

            .course-title {
                font-size: 1.125rem;
            }

            .certificate-footer {
                grid-template-columns: 1fr;
                gap: 20px;
                text-align: center;
            }

            .footer-left,
            .footer-center,
            .footer-right {
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="certificate-wrapper">
        <!-- Decorative Borders -->
        <div class="border-outer"></div>
        <div class="border-inner"></div>

        <!-- Corner Decorations -->
        <div class="corner corner-tl">
            <svg viewBox="0 0 60 60">
                <path d="M5 55 L5 20 Q5 5 20 5 L55 5" />
                <path d="M15 45 L15 25 Q15 15 25 15 L45 15" opacity="0.5" />
            </svg>
        </div>
        <div class="corner corner-tr">
            <svg viewBox="0 0 60 60">
                <path d="M5 55 L5 20 Q5 5 20 5 L55 5" />
                <path d="M15 45 L15 25 Q15 15 25 15 L45 15" opacity="0.5" />
            </svg>
        </div>
        <div class="corner corner-bl">
            <svg viewBox="0 0 60 60">
                <path d="M5 55 L5 20 Q5 5 20 5 L55 5" />
                <path d="M15 45 L15 25 Q15 15 25 15 L45 15" opacity="0.5" />
            </svg>
        </div>
        <div class="corner corner-br">
            <svg viewBox="0 0 60 60">
                <path d="M5 55 L5 20 Q5 5 20 5 L55 5" />
                <path d="M15 45 L15 25 Q15 15 25 15 L45 15" opacity="0.5" />
            </svg>
        </div>

        <!-- Main Content -->
        <div class="certificate-content">
            <!-- Header -->
            <header class="certificate-header">
                <div class="logo-section">
                    <div class="logo-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                        </svg>
                    </div>
                    <span class="logo-text">{{ $settings->platform_name ?? 'EduPlatform' }}</span>
                </div>
                <div class="badge-icon">
                    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="#F59E0B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#F59E0B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <circle cx="12" cy="8" r="3" fill="#F59E0B" fill-opacity="0.2" stroke="#F59E0B" stroke-width="1.5"/>
                    </svg>
                </div>
            </header>

            <!-- Main Section -->
            <main class="certificate-main">
                <h1 class="certificate-title">Sertifikat</h1>
                <p class="certificate-subtitle">Penyelesaian Kelas</p>

                <h2 class="recipient-name">{{ $certificate->user->name ?? $userName ?? 'Nama Peserta' }}</h2>

                <p class="completion-text">Telah Berhasil Menyelesaikan</p>
                <h3 class="course-title">{{ $certificate->class->title ?? $classTitle ?? 'Nama Kelas' }}</h3>
            </main>

            <!-- Footer -->
            <footer class="certificate-footer">
                <div class="footer-section footer-left">
                    <p class="date-value">{{ isset($certificate) && $certificate->issued_at ? $certificate->issued_at->format('d F Y') : ($issuedAt ?? now()->format('d F Y')) }}</p>
                    <p class="date-label">Tanggal Terbit</p>
                </div>

                <div class="footer-section footer-center">
                    <p class="signature">{{ $settings->signature_name ?? 'Admin' }}</p>
                    <div class="signature-line"></div>
                    <p class="signature-title">{{ $settings->signature_title ?? 'Platform Director' }}</p>
                </div>

                <div class="footer-section footer-right qr-section">
                    @if(isset($qrCodeUrl))
                        <div class="qr-code">
                            <img src="{{ $qrCodeUrl }}" alt="QR Code Verifikasi">
                        </div>
                    @else
                        <div class="qr-code" style="display: flex; align-items: center; justify-content: center;">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1">
                                <rect x="3" y="3" width="7" height="7"/>
                                <rect x="14" y="3" width="7" height="7"/>
                                <rect x="3" y="14" width="7" height="7"/>
                                <rect x="14" y="14" width="3" height="3"/>
                                <rect x="18" y="14" width="3" height="3"/>
                                <rect x="14" y="18" width="3" height="3"/>
                                <rect x="18" y="18" width="3" height="3"/>
                            </svg>
                        </div>
                    @endif
                    <p class="certificate-id">ID: {{ $certificate->certificate_number ?? $certificateNumber ?? 'CERT-XXXXXXXX' }}</p>
                </div>
            </footer>
        </div>
    </div>
</body>
</html>
