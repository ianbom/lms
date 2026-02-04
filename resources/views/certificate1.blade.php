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

        @page {
            size: A4 landscape;
            margin: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #F3F4F6;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
        }

        .certificate-wrapper {
            width: 297mm;
            height: 210mm;
            background-image: url('{{ public_path('template-sertif.jpeg') }}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            overflow: hidden;
        }

        /* Content Overlay */
        .certificate-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        /* Certificate Number - positioned to the right of "No:" */
        .certificate-number {
            position: absolute;
            top: 23.4%; /* Adjusted to align with "No:" text baseline */
            left: 38%;
            transform: translateX(0); /* Left aligned starting from center offset */
            font-size: 16px;
            font-weight: 600;
            color: black; /* Using red as requested/shown in reference */
            letter-spacing: 0.05em;
            text-align: left;
        }

        /* User Name - centered below "Diberikan kepada" */
        .user-name {
            position: absolute;
            top: 39%;
            /* right: 10%; */
            width: 100%;
            font-size: 36px;
            font-weight: 700;
            color: black; /* Red color */
            text-align: center;
            line-height: 1;
            padding: 0 10px;
        }

        /* Class Title - centered below "Sebagai Peserta Impact Academy" */
        .class-title {
            position: absolute;
            top: 54%;
            left: 0;
            width: 100%;
            font-size: 24px;
            font-weight: 700;
            color: black; /* Red color */
            text-align: center;
            line-height: 1.2;
            padding: 0 10px;
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
                width: 100%;
                height: 100vh;
            }
        }
    </style>
</head>
<body>
    <div class="certificate-wrapper">
        <div class="certificate-content">
            <!-- Certificate Number (after No:) -->
            <div class="certificate-number">
                {{ $certificate->issued_code ?? $certificateNumber ?? 'CERT-XXXXXXXX' }}
            </div>

            <!-- User Name (after Diberikan kepada) -->
            <div class="user-name">
                {{ $certificate->user->name ?? $userName ?? 'Nama Peserta' }}
            </div>

            <!-- Class Title (after Sebagai Peserta Impact Academy) -->
            <div class="class-title">
                {{ $certificate->class->title ?? $classTitle ?? 'Nama Kelas' }}
            </div>
        </div>
    </div>
</body>
</html>
