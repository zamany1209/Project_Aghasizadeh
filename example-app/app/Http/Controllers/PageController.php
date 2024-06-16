<?php

namespace App\Http\Controllers;

use App\Models\Forms_name;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use App\Models\Page;

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
        
        $data = File::get(resource_path('data\pages\landing.json'));
        Inertia::setRootView('index'); 
        return  Inertia::render('Index', [
            'name' => 'landing',
            're_url' => $domain,
            're_data' => $data,
            're_data_search' => null,
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
        $url_name = Page::select('id','url','name','access','image','keywords')->where('url', $request->name)->first();
        if($url_name && $url_name['access']){
            $file_components = File::get(resource_path("data\pages\ $request->name.json"));
            Inertia::setRootView('index'); 
            return  Inertia::render('Index', [
                'name' => $request->name,
                're_url' => $domain,
                're_data' => $file_components,
                're_data_search' => $url_name,
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
    public function Admin(Request $request)
    {
        $url = $request->url();
        $parsedUrl = parse_url($url);
        $domain = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
        if (isset($parsedUrl['port'])) {
            $domain .= ':' . $parsedUrl['port'];
        }

        if (Auth::check()) {
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

            $ffs_1 = File::get(resource_path('data\Admin-Data.json'));
            $ffs_2 = File::get(resource_path('data\visit-web-site.json'));
            $ffs_3 = File::get(resource_path('data\list-img.json'));
            $page_list = Page::select('id','url','access', 'visit')->get();
            $form_list = Forms_name::select('id','url','name', 'title','description','json_data','duplicate','status')->get();
            $change_data = json_decode($ffs_1);
            $data["components"] = $change_data->components;
            $data["visit_web_site"] = json_decode($ffs_2);
            $data["list_pages"] = json_decode($page_list);
            $data['list_forms'] = json_decode($form_list);
            $data["list_img"] = json_decode($ffs_3);
            Inertia::setRootView('admin'); 
            return  Inertia::render('Admin', [
                'name' => "Admin",
                're_url' => $domain,
                're_token' => $token,
                're_data' => json_encode($data)
            ]);
        }
        return redirect()->intended('login');
    }

}
