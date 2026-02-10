<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kode OTP Admin</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td align="center" style="padding: 40px 16px;">
                <table role="presentation" width="480" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #16a34a; padding: 32px 40px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">
                                🔐 Kode Verifikasi OTP
                            </h1>
                        </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="margin: 0 0 16px; color: #374151; font-size: 15px; line-height: 1.6;">
                                Halo <strong>{{ $userName }}</strong>,
                            </p>
                            <p style="margin: 0 0 24px; color: #374151; font-size: 15px; line-height: 1.6;">
                                Gunakan kode OTP berikut untuk melanjutkan login ke dashboard admin ImpactAcademy:
                            </p>

                            <!-- OTP Code -->
                            <div style="background-color: #f0fdf4; border: 2px dashed #16a34a; border-radius: 12px; padding: 24px; text-align: center; margin: 0 0 24px;">
                                <span style="font-size: 36px; font-weight: 800; letter-spacing: 12px; color: #15803d; font-family: 'Courier New', monospace;">
                                    {{ $otpCode }}
                                </span>
                            </div>

                            <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px; line-height: 1.5;">
                                ⏱️ Kode ini berlaku selama <strong>5 menit</strong>.
                            </p>
                            <p style="margin: 0 0 0; color: #6b7280; font-size: 13px; line-height: 1.5;">
                                Jika Anda tidak melakukan login, abaikan email ini.
                            </p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                &copy; {{ date('Y') }} ImpactAcademy. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
