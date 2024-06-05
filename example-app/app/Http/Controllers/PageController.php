<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;

use function Pest\Laravel\json;

class PageController extends Controller
{
    //
    public function Index(Request $request)
    {
        $minutes = 1;
        $response = new \Illuminate\Http\Response('Set Cookie');
        $response->withCookie(cookie()->make('name', 'set', $minutes, null, null, true, true));
        $get_imagelist = null;
        $token = null;
        if(Auth::check()){
            $user = $request->user();
            $currentToken = $user->currentAccessToken();
            if($currentToken){
                $token = $currentToken->plainTextToken;
            }
            else{
                $user->tokens()->delete();
                $create_token = $user->createToken('admin', ['*'], now()->addWeek());
                $token = $create_token->plainTextToken;
            }
            $get_img = resource_path('data\list-img.json');
            $get_imagelist = File::get($get_img);
        }
        
        $get = resource_path('data\list-page-components.json');
        $ffs = File::get($get);
        $data = json_decode($ffs);
        Inertia::setRootView('index'); 
        return  Inertia::render('Index', [
            'name' => $request->page,
            're_data' => json_encode($data->landing),
            're_token' => $token,
            're_image_list' => $get_imagelist
        ]);
    }
    public function Admin(Request $request)
    {
        if (Auth::check()) {
            $get = resource_path('data\Admin-Data.json');
            $ffs = File::get($get);
            Inertia::setRootView('admin'); 
            return  Inertia::render('Admin', [
                'name' => "Admin",
                're_data' => $ffs
            ]);
        }
        return redirect()->intended('register');
    }
    public function Test(Request $request)
    {
        $get = resource_path('data\Data.json');
        $ffs = File::get($get);
        Inertia::setRootView('test'); 
        return  Inertia::render('Test', [
            'name' => $request->page,
            're_data' => $ffs
        ]);
    }
}
