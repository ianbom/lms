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
}
