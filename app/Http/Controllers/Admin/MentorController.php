<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\MentorService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Admin\CreateMentorRequest;

class MentorController extends Controller
{   
    protected $mentorService;

    public function __construct(MentorService $mentorService){ 
        $this->mentorService = $mentorService;
    }

    public function listMentorPage(){ 
        $mentors = $this->mentorService->getAllMentors(); 
        return Inertia::render('Admin/Mentor/ListMentor', ['mentors' => $mentors]);
    }

    public function createMentorPage(){ 
        return Inertia::render('Admin/Mentor/CreateMentor');
    }

    public function storeMentor(CreateMentorRequest $request){ 
        try {
            $data = $request->validated();
            $avatar = $request->file('avatar');
            $this->mentorService->storeMentor($data, $avatar);
            return redirect()->route('admin.mentors')->with('success', 'Mentor berhasil ditambahkan');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan');
        }
        
    }

    public function updateMentor(CreateMentorRequest $request, $id){ 
        try {
            $data = $request->validated();
            $avatar = $request->file('avatar');
            $this->mentorService->updateMentor($id, $data, $avatar);
            return redirect()->route('admin.mentors')->with('success', 'Mentor updated successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }
}
