<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudyController extends Controller
{
    public function studyClassPage($classId, $videoId){
        return Inertia::render('User/Dashboard/WatchClass', [
            'classId' => $classId,
            'videoId' => $videoId
        ]);
    }
}
