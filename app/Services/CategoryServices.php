<?php

namespace App\Services;

use App\Models\Category;

class CategoryServices
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
}
