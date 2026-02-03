<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corporate Training Inquiry</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #00753D 0%, #00994D 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            background: #f9f9f9;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-top: none;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
        }
        .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .label {
            font-weight: bold;
            color: #00753D;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 4px;
        }
        .value {
            font-size: 14px;
            color: #333;
        }
        .message-box {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
            white-space: pre-wrap;
        }
        .footer {
            text-align: center;
            padding: 15px;
            color: #888;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 24px;">Impact Academy</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Corporate Training Inquiry</p>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="label">Nama Lengkap</div>
            <div class="value">{{ $data['full_name'] }}</div>
        </div>
        
        <div class="field">
            <div class="label">Perusahaan</div>
            <div class="value">{{ $data['company_name'] }}</div>
        </div>
        
        @if(!empty($data['office_address']))
        <div class="field">
            <div class="label">Alamat Kantor</div>
            <div class="value">{{ $data['office_address'] }}</div>
        </div>
        @endif
        
        <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></div>
        </div>
        
        <div class="field">
            <div class="label">Nomor Handphone</div>
            <div class="value"><a href="tel:{{ $data['phone'] }}">{{ $data['phone'] }}</a></div>
        </div>
        
        @if(!empty($data['job_title']))
        <div class="field">
            <div class="label">Jabatan</div>
            <div class="value">{{ $data['job_title'] }}</div>
        </div>
        @endif
        
        <div class="field">
            <div class="label">Skala Perusahaan</div>
            <div class="value">{{ $data['company_size'] }} Karyawan</div>
        </div>
        
        <div class="field">
            <div class="label">Pelatihan yang Diinginkan</div>
            <div class="value">{{ $data['interest'] }}</div>
        </div>
        
        @if(!empty($data['message']))
        <div class="field">
            <div class="label">Pesan</div>
            <div class="message-box">{{ $data['message'] }}</div>
        </div>
        @endif
    </div>
    
    <div class="footer">
        Email ini dikirim otomatis dari formulir Corporate Training di Impact Academy.
    </div>
</body>
</html>
