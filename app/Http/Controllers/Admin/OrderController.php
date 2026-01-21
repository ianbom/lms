<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function listOrderPage(){ 

        return Inertia::render('Admin/Order/ListOrder');
    }
}
