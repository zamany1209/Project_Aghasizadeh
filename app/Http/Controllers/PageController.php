<?php

namespace App\Http\Controllers;

use App\Models\Forms_name;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use App\Models\Page;
use App\Models\Visit;

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
            $get_imagelist = File::get(resource_path('data/list-img.json'));
            $get_component_list_img = File::get(resource_path('data/list-component-img.json'));
            $get_component_list = File::get(resource_path('data/list-components.json'));
        }
        
        $data = File::get(resource_path('data/pages/ landing.json'));
        Inertia::setRootView('index'); 
        return  Inertia::render('Index', [
            'name' => ' landing',
            're_url' => $domain,
            're_data' => $data,
            're_data_search' => null,
            're_token' => $token,
            're_image_list' => $get_imagelist,
            're_component_img' => $get_component_list_img,
            're_component' => $get_component_list
        ]);
    }
    public function Search(Request $request)
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
            $get_imagelist = File::get(resource_path('data/list-img.json'));
            $get_component_list_img = File::get(resource_path('data/list-component-img.json'));
            $get_component_list = File::get(resource_path('data/list-components.json'));
        }
        
        if($request->data){
            $searchTerm = $request->data;
            $data_search = Page::select('id','url','name','access','image','keywords')->where('access', true)->where('url', 'like', '%'.$searchTerm.'%')
            ->orWhere('name', 'like', '%'.$searchTerm.'%')
            ->orWhere('keywords', 'like', '%'.$searchTerm.'%')
            ->get();
        }
        else{
            $data_search = Page::select('id','url','name','access','image','keywords')->where('access', true)->orderByRaw('RAND()')->limit(10)->get();
        }

        $data = File::get(resource_path('data/pages/ Search.json'));
        Inertia::setRootView('index'); 
        return  Inertia::render('Index', [
            'name' => ' Search',
            're_url' => $domain,
            're_data' => $data,
            're_data_search' => $data_search,
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
            $get_imagelist = File::get(resource_path('data/list-img.json'));
            $get_component_list_img = File::get(resource_path('data/list-component-img.json'));
            $get_component_list = File::get(resource_path('data/list-components.json'));
        }
        $url_name = Page::select('id','url','name','access','image','keywords')->where('url', $request->name)->first();
        if($url_name && $url_name['access']){
            $file_components = File::get(resource_path("data/pages/ $request->name.json"));
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
    public function Not_found(Request $request)
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
            $get_imagelist = File::get(resource_path('data/list-img.json'));
            $get_component_list_img = File::get(resource_path('data/list-component-img.json'));
            $get_component_list = File::get(resource_path('data/list-components.json'));
        }
        
        $data = File::get(resource_path('data/pages/ 404.json'));
        Inertia::setRootView('index'); 
        return  Inertia::render('Index', [
            'name' => ' 404',
            're_url' => $domain,
            're_data' => $data,
            're_data_search' => null,
            're_token' => $token,
            're_image_list' => $get_imagelist,
            're_component_img' => $get_component_list_img,
            're_component' => $get_component_list
        ]);
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

            $ffs_1 = File::get(resource_path('data/Admin-Data.json'));
            $ffs_3 = File::get(resource_path('data/list-img.json'));
            $page_list = Page::select('id','url','access', 'visit')->get();
            $form_list = Forms_name::select('id','url','name', 'title','description','json_data','duplicate','status')->get();
            $change_data = json_decode($ffs_1);
            $VisitLastWeek = Visit::where('type', 'like',"last_week_".'%')->get();
            $VisitWeek = Visit::where('type', 'like',"week_".'%')->get();
            $VisitMonth = Visit::select('name','date','value')->where('type', 'like', '%'."month_".'%')->get();
            $VisitTotalWeek = Visit::where('type', 'total_week')->first();
            $VisitTotalMonth = Visit::where('type', 'total_month')->first();
            $VisitTotalLastWeek = Visit::where('type', 'total_last_week')->first();
            $VisitTotalLastMonth = Visit::where('type', 'total_last_month')->first();
            $data["components"] = $change_data->components;
            $data["visit_web_site"]["total_week"] = $VisitTotalWeek->value;
            $data["visit_web_site"]["total_month"] = $VisitTotalMonth->value;
            $data["visit_web_site"]["total_last_week"] = $VisitTotalLastWeek->value;
            $data["visit_web_site"]["total_last_month"] = $VisitTotalLastMonth->value;
            $data["visit_web_site"]["visit_month"] = $VisitMonth;
            $data["visit_web_site"]["visit_week"] = $VisitWeek;
            $data["visit_web_site"]["visit_last_week"] = $VisitLastWeek;
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
