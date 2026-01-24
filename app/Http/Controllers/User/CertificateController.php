<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\CertificateService;
use App\Services\ClassService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    protected $certificateService, $classService;

    public function __construct(CertificateService $certificateService, ClassService $classService)
    {
        $this->certificateService = $certificateService;
        $this->classService = $classService;
    }

    public function listCertificatePage()
    {

        return Inertia::render('User/Dashboard/MyCertificate');
    }
}
