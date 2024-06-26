<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Page;
use App\Models\User;
use Illuminate\Support\Facades\Log;


class AdminController extends Controller
{
    //
    public function Create_Page(Request $request)
    {
        if (Auth::check()) {
            if($request->input('url_page') == "Search"|| $request->input('url_page') == "landing" || $request->input('url_page') == "404"){
                return response()->json(['message' => 'شما قبلاً این صفحه را ایجاد کرده‌اید.'], 409);
            }else{
                $jsonData = '{"components": [],"title":null,"comments":[]}';
                $name = $request->input('url_page');
                $filePath = resource_path("data/pages/ $name.json");
        
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
            $filePath = resource_path("data/pages/ $name.json");
    
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
            $path = resource_path("data/pages/ $name_get.json");
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
    public function Change_Password(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'new_password' => 'required',
        ]);
        if (Auth::check()) {
            $existingPage = User::where('email', $request->input('email'))->update(['password' => Hash::make($request->input('new_password'))]);
            if ($existingPage) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function UPLOAD_FILE(Request $request)
    {
        if (Auth::check()) {
            // $request->validate([
            //     'file' => 'required|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:20480',
            // ]);
            $request->validate([
                'file' => 'required|mimes:jpeg,png,jpg,gif,svg|max:20480',
            ]);
    
            if ($request->hasFile('file')) {

                $file = $request->file('file');
            
                // تغییر نام فایل با استفاده از زمان و نام اصلی فایل
                $filename = time() . '_' . $file->getClientOriginalName();
                
                $jsonFilePath = resource_path('data/list-img.json');

                // خواندن محتوای فایل JSON فعلی
                $jsonData = json_decode(File::get($jsonFilePath), true);
        
                // اضافه کردن نام فایل به آرایه Image
                $jsonData['Image'][] = $filename;
        
                // ذخیره محتوای جدید در فایل JSON
                File::put($jsonFilePath, json_encode($jsonData));

                // ذخیره فایل در پوشه 'public/uploads'
                $destinationPath = public_path('/asset/img');
                $file->move($destinationPath, $filename);
    
                return response()->json(['success' => 'File uploaded successfully']);
            }
    
            return response()->json(['error' => 'File not uploaded'], 400);
        }
    }
    public function Change_Font(Request $request)
    {
        if (Auth::check()) {
            $request->validate([
                'file' => 'required|mimes:woff2,woff|max:20480',
            ]);
    
            if ($request->hasFile('file')) {

                $filePath_1 = public_path('/asset/font/KalamehWeb-Medium.woff2');
                if (File::exists($filePath_1)) {
                    File::delete($filePath_1);
                }
                $filePath_2 = public_path('/asset/font/KalamehWeb-Medium.woff');
                if (File::exists($filePath_2)) {
                    File::delete($filePath_2);
                }
                $file = $request->file('file');
                $extension = $file->getClientOriginalExtension();
                $filename = "KalamehWeb-Medium.".$extension;
                $destinationPath = public_path('/asset/font');
                $file->move($destinationPath, $filename);

                return response()->json(['success' => 'File uploaded successfully'],201);
            }
    
            return response()->json(['error' => 'File not uploaded'], 400);
        }
    }
    public function Delete_File(Request $request)
    {
        try {
            if (Auth::check()) {
                $request->validate([
                    'file_name' => 'required|string'
                ]);
    
                if ($request->input('file_name')) {
                    $jsonFilePath = resource_path('data/list-img.json');
    
                    // خواندن محتوای فایل JSON فعلی
                    if (File::exists($jsonFilePath)) {
                        $jsonData = json_decode(File::get($jsonFilePath), true);
    
                        if (($key = array_search($request->input('file_name'), $jsonData['Image'])) !== false) {
                            unset($jsonData['Image'][$key]);
                        }
    
                        $jsonData['Image'] = array_values($jsonData['Image']);
    
                        File::put($jsonFilePath, json_encode($jsonData, JSON_PRETTY_PRINT));
    
                        $filePath_1 = public_path('asset/img/' . $request->input('file_name'));
                        if (File::exists($filePath_1)) {
                            File::delete($filePath_1);
                        }
    
                        return response()->json(['success' => 'File deleted successfully'], 201);
                    } else {
                        return response()->json(['error' => 'JSON file not found'], 404);
                    }
                }
    
                return response()->json(['error' => 'File name not provided'], 400);
            }
    
            return response()->json(['error' => 'Unauthorized'], 401);
        } catch (\Exception $e) {
            Log::error('Error deleting file: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while deleting the file'], 500);
        }
    }

}
