<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class PageController extends Controller
{
    //
    public function Index(Request $request)
    {
        $get = resource_path('data\list-page-components.json');
        $ffs = File::get($get);
        Inertia::setRootView('index'); 
        return  Inertia::render('Index', [
            'name' => $request->page,
            'data' => $ffs
        ]);
    }
    public function Admin(Request $request)
    {
        $get = resource_path('data\Data.json');
        $ffs = File::get($get);
        Inertia::setRootView('admin'); 
        return  Inertia::render('Admin', [
            'name' => $request->page,
            'data' => $ffs
        ]);
    }
    public function Test(Request $request)
    {
        $get = resource_path('data\Data.json');
        $ffs = File::get($get);
        Inertia::setRootView('test'); 
        return  Inertia::render('Test', [
            'name' => $request->page,
            'data' => $ffs
        ]);
    }
}
