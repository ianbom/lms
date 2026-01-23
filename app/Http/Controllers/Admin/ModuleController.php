<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateModuleRequest;
use App\Services\ModuleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModuleController extends Controller
{   
    protected $moduleService;

    public function __construct(ModuleService $moduleService){ 
        $this->moduleService = $moduleService;
    }


    public function createModulePage($classId){ 
        return Inertia::render('Admin/Class/CreateModule', [
            'classId' => $classId,
        ]);
    }

    public function storeModule(CreateModuleRequest $request, $classId){
        
        try {
            $this->moduleService->createModule($request->validated(), $classId);
            return redirect()->route('admin.classes')->with('success', 'Module created successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Failed to create module: ' . $th->getMessage());
        }
    }
}
