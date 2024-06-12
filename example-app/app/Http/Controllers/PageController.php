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
        $url = $request->url();
        $parsedUrl = parse_url($url);
        $domain = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
        if (isset($parsedUrl['port'])) {
            $domain .= ':' . $parsedUrl['port'];
        }
        $get_component_list = null;
        $get_component_list_img = null;
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
            $get_imagelist = File::get(resource_path('data\list-img.json'));
            $get_component_list_img = File::get(resource_path('data\list-component-img.json'));
            $get_component_list = File::get(resource_path('data\list-components.json'));
        }
        
        $get = resource_path('data\list-page-components.json');
        $ffs = File::get($get);
        $data = json_decode($ffs);
        Inertia::setRootView('index'); 
        return  Inertia::render('Index', [
            'name' => 'landing',
            're_url' => $domain,
            're_data' => json_encode($data->landing),
            're_token' => $token,
            're_image_list' => $get_imagelist,
            're_component_img' => $get_component_list_img,
            're_component' => $get_component_list
        ]);
    }
    public function Page(Request $request)
    {
        $url = $request->url();
        $parsedUrl = parse_url($url);
        $domain = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
        if (isset($parsedUrl['port'])) {
            $domain .= ':' . $parsedUrl['port'];
        }
        $get_imagelist = null;
        $get_component_list_img = null;
        $get_component_list = null;
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
            $get_imagelist = File::get(resource_path('data\list-img.json'));
            $get_component_list_img = File::get(resource_path('data\list-component-img.json'));
            $get_component_list = File::get(resource_path('data\list-components.json'));
        }
        
        $url_name = json_decode(File::get(resource_path('data\list-pages.json')),true);
        if(isset($url_name["data"]["page"][$request->name])){
            $file_components = json_decode(File::get(resource_path('data\list-page-components.json')),true);
            if(!isset($file_components[$request->name])){
                $file_components[$request->name] = ["title"=> "","components"=>[]];
                File::put(resource_path('data\list-page-components.json'),json_encode($file_components, JSON_PRETTY_PRINT));
            }
            Inertia::setRootView('index'); 
            return  Inertia::render('Index', [
                'name' => $request->name,
                're_url' => $domain,
                're_data' => json_encode($file_components[$request->name]),
                're_token' => $token,
                're_image_list' => $get_imagelist,
                're_component_img' => $get_component_list_img,
                're_component' => $get_component_list
            ]);
        }
        else{
            return redirect()->intended('404');
        }
    }
    public function Blog(Request $request)
    {
        $url = $request->url();
        $parsedUrl = parse_url($url);
        $domain = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
        if (isset($parsedUrl['port'])) {
            $domain .= ':' . $parsedUrl['port'];
        }
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
            $get_imagelist = File::get(resource_path('data\list-img.json'));
        }
        
        $url_name = json_decode(File::get(resource_path('data\list-blogs.json')),true);
        if(isset($url_name["data"]["blog"][$request->name])){
            $file_components = json_decode(File::get(resource_path('data\list-blog-components.json')),true);
            // if(!isset($file_components[$request->name])){
            //     $file_components[$request->name] = ["title"=> "","components"=>[]];
            //     File::put(resource_path('data\list-page-components.json'),json_encode($file_components, JSON_PRETTY_PRINT));
            // }
            Inertia::setRootView('blog'); 
            return  Inertia::render('Blog', [
                'name' => 'landing',
                're_url' => $domain,
                're_data' => json_encode($file_components),
                're_token' => $token,
                're_image_list' => $get_imagelist
            ]);
        }
        else{
            return redirect()->intended('404');
        }
    }
    public function Admin(Request $request)
    {
        $url = $request->url();
        $parsedUrl = parse_url($url);
        $domain = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
        if (isset($parsedUrl['port'])) {
            $domain .= ':' . $parsedUrl['port'];
        }

        if (Auth::check()) {
            $ffs_1 = File::get(resource_path('data\Admin-Data.json'));
            $ffs_2 = File::get(resource_path('data\visit-web-site.json'));
            $ffs_3 = File::get(resource_path('data\list-pages.json'));
            $ffs_4 = File::get(resource_path('data\list-img.json'));
            $change_data = json_decode($ffs_1);
            $data["components"] = $change_data->components;
            $data["visit_web_site"] = json_decode($ffs_2);
            $data["list_pages"] = json_decode($ffs_3);
            $data["list_img"] = json_decode($ffs_4);
            Inertia::setRootView('admin'); 
            return  Inertia::render('Admin', [
                'name' => "Admin",
                're_url' => $domain,
                're_data' => json_encode($data)
            ]);
        }
        return redirect()->intended('login');
    }
    public function Save_Components_Page(Request $request)
    {
        if (Auth::check()) {

            $data_get = json_decode($request->input('components'));
            $title_get = $request->input('title');
            $path = resource_path('data\list-page-components.json');
            $get_file = File::get($path);
            $get_file = json_decode($get_file,true);
            $get_file[$request->input('name')]['components'] = $data_get;
            $get_file[$request->input('name')]['title'] = $title_get;
            $get_file = json_encode($get_file, JSON_PRETTY_PRINT);
            if(File::put($path,$get_file)){
                return response()->json(["data"=>1]);
            }
        }
    }
    // public function Test(Request $request)
    // {
    //     $get = resource_path('data\Data.json');
    //     $ffs = File::get($get);
    //     Inertia::setRootView('test'); 
    //     return  Inertia::render('Test', [
    //         'name' => $request->page,
    //         're_data' => $ffs
    //     ]);
    // }
}
