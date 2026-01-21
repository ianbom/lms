<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function listClassPage(){ 

        return inertia::render('User/Classes/ListClass');
    }

    public function detailClassPage(){ 

    }

    public function purchaseClassPage(){ 

    }
}
