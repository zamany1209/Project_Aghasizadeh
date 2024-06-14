<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use App\Models\Forms;
use App\Models\Forms_name;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use function Pest\Laravel\json;

class Formscontroller extends Controller
{
    //
    public function Forms_control(Request $request)
    {
        $forms = Forms_name::where('url', $request->name_url)->first();
        if ($forms) {
            $url = $request->url();
            $parsedUrl = parse_url($url);
            $domain = $parsedUrl['scheme'] . '://' . $parsedUrl['host'];
            if (isset($parsedUrl['port'])) {
                $domain .= ':' . $parsedUrl['port'];
            }
            Inertia::setRootView('forms'); 
            return  Inertia::render('Form_control', [
                'name' => "Admin",
                're_url' => $domain,
                're_data' => $forms->json_data,
                'id_form' => $forms->id,
                'name_url' => $request->name_url
            ]);
        } else {
        }

    }
    public function form_get(Request $request)
    {
        $check_cookie = $request->cookie('form_' . strval($request->input('name_url')));
        if($check_cookie){
            return 3;
        }else{
            $user = Forms::create([
                'forms_name_id' => $request->input('id_form'),
                'ip' => $request->ip(),
                'json_data' => json_encode($request->input('data_forms'))
            ]);
            if($user->save()){
                $cookie = cookie('form_' . strval($request->input('name_url')),true, 1440);
                return response()->json(['data' => 1])->cookie($cookie);;
            }
        }
    }
}
