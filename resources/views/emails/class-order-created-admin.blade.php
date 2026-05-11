<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order kelas baru</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f4f7f5;
            color: #1f2933;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
        }
        .wrapper {
            width: 100%;
            padding: 32px 16px;
            box-sizing: border-box;
        }
        .container {
            max-width: 640px;
            margin: 0 auto;
            overflow: hidden;
            border: 1px solid #dce7df;
            border-radius: 18px;
            background: #ffffff;
        }
        .header {
            padding: 28px 30px;
            background: linear-gradient(135deg, #00753D 0%, #0a9b57 100%);
            color: #ffffff;
        }
        .brand {
            margin: 0 0 8px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            opacity: 0.85;
        }
        .title {
            margin: 0;
            font-size: 24px;
            line-height: 1.25;
        }
        .subtitle {
            margin: 10px 0 0;
            color: rgba(255, 255, 255, 0.86);
            font-size: 14px;
        }
        .content {
            padding: 28px 30px 30px;
        }
        .summary {
            margin-bottom: 22px;
            padding: 16px;
            border: 1px solid #dce7df;
            border-radius: 14px;
            background: #f8fbf9;
        }
        .summary-title {
            margin: 0 0 4px;
            color: #00753D;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }
        .summary-text {
            margin: 0;
            color: #4b5563;
            font-size: 14px;
        }
        .details {
            width: 100%;
            border-collapse: collapse;
        }
        .details tr {
            border-bottom: 1px solid #edf2ef;
        }
        .details tr:last-child {
            border-bottom: none;
        }
        .details th,
        .details td {
            padding: 13px 0;
            vertical-align: top;
            text-align: left;
            font-size: 14px;
        }
        .details th {
            width: 180px;
            color: #6b7280;
            font-weight: 700;
        }
        .details td {
            color: #111827;
            font-weight: 600;
        }
        .details a {
            color: #00753D;
            text-decoration: none;
        }
        .amount {
            color: #00753D;
            font-size: 18px;
            font-weight: 800;
        }
        .proof-box {
            margin-top: 24px;
            padding: 16px;
            border-radius: 14px;
            background: #ecfdf3;
            color: #065f37;
            font-size: 14px;
        }
        .button {
            display: inline-block;
            margin-top: 12px;
            padding: 10px 14px;
            border-radius: 10px;
            background: #00753D;
            color: #ffffff !important;
            font-weight: 700;
            text-decoration: none;
        }
        .footer {
            padding: 18px 30px 24px;
            background: #f8fbf9;
            color: #7b8794;
            font-size: 12px;
            text-align: center;
        }
        @media (max-width: 520px) {
            .header,
            .content,
            .footer {
                padding-left: 20px;
                padding-right: 20px;
            }
            .details th,
            .details td {
                display: block;
                width: 100%;
                padding: 8px 0;
            }
            .details th {
                padding-bottom: 0;
            }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <div class="header">
                <p class="brand">Impact Academy</p>
                <h1 class="title">Order kelas baru menunggu verifikasi</h1>
                <p class="subtitle">Peserta mengirim bukti transfer untuk kelas berikut.</p>
            </div>

            <div class="content">
                <div class="summary">
                    <p class="summary-title">Ringkasan</p>
                    <p class="summary-text">Order #ORD-{{ $order->id }} dibuat pada {{ $order->created_at?->timezone(config('app.timezone'))->format('d M Y H:i') }}.</p>
                </div>

                <table class="details" role="presentation">
                    <tr>
                        <th>Nama user</th>
                        <td>{{ $order->user->name }}</td>
                    </tr>
                    <tr>
                        <th>Email user</th>
                        <td><a href="mailto:{{ $order->user->email }}">{{ $order->user->email }}</a></td>
                    </tr>
                    <tr>
                        <th>No. telp</th>
                        <td>
                            @if($order->user->phone)
                                <a href="tel:{{ $order->user->phone }}">{{ $order->user->phone }}</a>
                            @else
                                -
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <th>Kelas yang diambil</th>
                        <td>{{ $order->class->title }}</td>
                    </tr>
                    <tr>
                        <th>Harga kelas</th>
                        <td><span class="amount">Rp {{ number_format((float) $order->amount, 0, ',', '.') }}</span></td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{{ ucfirst($order->status) }}</td>
                    </tr>
                </table>

                <div class="proof-box">
                    <strong>Bukti transfer</strong><br>
                    Bukti transfer dilampirkan pada email ini.
                    @if($proofUrl)
                        <br><a class="button" href="{{ $proofUrl }}">Lihat bukti transfer</a>
                    @endif
                </div>
            </div>

            <div class="footer">
                Email ini dikirim otomatis dari sistem Impact Academy setelah peserta mengirim order kelas.
            </div>
        </div>
    </div>
</body>
</html>
