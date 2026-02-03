<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateCategoryRequest;
use App\Services\CategoryService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{   
    protected $categoryService; 

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }
    public function listCategoryPage(){ 
        $categories = $this->categoryService->getAllCategories(); 
        return Inertia::render('Admin/Category/ListCategory', ['categories' => $categories]);
    }

    public function createCategoryPage()
    {
        return Inertia::render('Admin/Category/CreateCategory');
    }

    public function storeCategory(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:120|unique:categories,name',
            'description' => 'nullable|string'
        ], [
            'name.required' => 'Nama kategori wajib diisi.',
            'name.unique' => 'Nama kategori sudah ada.',
            'name.max' => 'Nama kategori maksimal 120 karakter.'
        ]);

        $this->categoryService->createCategory($request->all());

        return redirect()->route('admin.categories')->with('success', 'Kategori berhasil dibuat');
    }

    public function updateCategory(UpdateCategoryRequest $request, $categoryId)
    {
        try {
            $this->categoryService->updateCategory((int) $categoryId, $request->validated());
            return redirect()->back()->with('success', 'Kategori berhasil diperbarui');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Terjadi kesalahan: ' . $th->getMessage());
        }
    }

    public function deleteCategory($categoryId)
    {
        try {
            $this->categoryService->deleteCategory((int) $categoryId);
            return redirect()->back()->with('success', 'Kategori berhasil dihapus');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }
}

