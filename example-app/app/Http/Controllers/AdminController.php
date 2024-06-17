<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\Page;
use App\Models\User;

class AdminController extends Controller
{
    //
    public function Create_Page(Request $request)
    {
        if (Auth::check()) {
            if($request->input('url_page') == "Search"|| $request->input('url_page') == "landing"){
                return response()->json(['message' => 'شما قبلاً این صفحه را ایجاد کرده‌اید.'], 409);
            }else{
                $jsonData = '{"components": [],"title":null,"comments":[]}';
                $name = $request->input('url_page');
                $filePath = resource_path("data\pages\ $name.json");
        
                // اطمینان از وجود پوشه 'files' در مسیر 'resources'
                if (!File::exists(dirname($filePath))) {
                    File::makeDirectory(dirname($filePath), 0755, true);
                }
                if(!File::exists($filePath)){
                    File::put($filePath, $jsonData);
                }
                $existingPage = Page::where('url', $request->input('url_page'))->first();
                if ($existingPage) {
                        return response()->json(['message' => 'شما قبلاً این صفحه را ایجاد کرده‌اید.'], 409);
                    
                }
    
            
                $page = Page::create([
                    'url' => $request->input('url_page'),
                    'name' => "index",
                    'image' => "/assets/images/head_1.jpg",
                    'keywords' => "test",
                ]);
                return response()->json(['message' => 'صفحه شما با موفقیت ایجاد شد'], 201);
            }
        }
    }
    public function Access_Page(Request $request)
    {
        if (Auth::check()) {
            $existingPage = Page::where('id', $request->input('id'))->update(['access' => $request->input('data_checked')]);

            if ($existingPage) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function Edit_Data_Search(Request $request)
    {
        if (Auth::check()) {
            $existingPage = Page::where('id', $request->input('id'))->update(['name' => $request->input('name'),'image' => $request->input('image'),'keywords' => $request->input('keywords')]);

            if ($existingPage) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function Delete_Page(Request $request)
    {
        if (Auth::check()) {
            $name = $request->input('url_page');
            $filePath = resource_path("data\pages\ $name.json");
    
            // اطمینان از وجود پوشه 'files' در مسیر 'resources'
            if (!File::exists(dirname($filePath))) {
                File::makeDirectory(dirname($filePath), 0755, true);
            }
            if(File::exists($filePath)){
                File::delete($filePath);
            }
            $page = Page::where('id', $request->input('id'))->get();
            $existingPage = Page::where('id', $request->input('id'))->delete();
            if ($existingPage) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function Save_Components_Page(Request $request)
    {
        if (Auth::check()) {

            $data_get = json_decode($request->input('components'));
            $title_get = $request->input('title');
            $name_get = $request->input('name');
            $path = resource_path("data\pages\ $name_get.json");
            $get_file = File::get($path);
            $get_file = json_decode($get_file,true);
            $get_file['components'] = $data_get;
            $get_file['title'] = $title_get;
            $get_file = json_encode($get_file, JSON_PRETTY_PRINT);
            if(File::put($path,$get_file)){
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
        }
    }
    public function Edit_Data_Profile(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'family' => 'required',
            'email' => 'required|email',
        ]);
        if (Auth::check()) {
            $find_user = User::where('email', $request->input('email'))->first();
            if(!$find_user){
                $existingPage = User::where('id', $request->input('id'))->update(['name' => $request->input('name'),'family' => $request->input('family'),'email' => $request->input('email')]);
                if ($existingPage) {
                    return response()->json(['message' => 'تغییرات اعمال شد'], 201);
                }
                else{
                    return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
                }
            }
            else if($find_user->id == $request->input('id')){
                $existingPage = User::where('id', $request->input('id'))->update(['name' => $request->input('name'),'family' => $request->input('family'),'email' => $request->input('email')]);
                if ($existingPage) {
                    return response()->json(['message' => 'تغییرات اعمال شد'], 201);
                }
                else{
                    return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
                }
            }
            else{
                return response()->json(['message' => 'این ایمیل تکراری است '], 408);
            }
        }
    }

}
