<?php

namespace App\Services;

use App\Models\Category;

class CategoryService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllCategories(){ 
        $categories = Category::orderBy('name', 'asc')->get(); 
        return $categories;
    }

    public function createCategory(array $data)
    {
        $data['slug'] = \Illuminate\Support\Str::slug($data['name']);
        return Category::create($data);
    }

    /**
     * Update a category by ID.
     */
    public function updateCategory(int $id, array $data): Category
    {
        $category = Category::findOrFail($id);
        
        if (isset($data['name'])) {
            $data['slug'] = \Illuminate\Support\Str::slug($data['name']);
        }
        
        $category->update($data);
        return $category->fresh();
    }

    /**
     * Delete a category by ID.
     * Throws exception if category is being used by classes.
     */
    public function deleteCategory(int $id): bool
    {
        $category = Category::findOrFail($id);
        
        // Check if category is used by any classes
        if ($category->classes()->exists()) {
            throw new \Exception('Kategori tidak dapat dihapus karena masih digunakan oleh kelas.');
        }
        
        return $category->delete();
    }
}
