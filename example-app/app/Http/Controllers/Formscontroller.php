<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\Forms;
use App\Models\Forms_name;
use Illuminate\Support\Facades\Auth;

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
            return response()->json(['data' => 3]);
        }else{
            $user = Forms::create([
                'forms_name_id' => $request->input('id_form'),
                'ip' => $request->ip(),
                'json_data' => json_encode($request->input('data_forms'))
            ]);
            if($user->save()){
                $cookie = cookie('form_' . strval($request->input('name_url')),true, 1);
                return response()->json(['data' => 1])->cookie($cookie);;
            }
        }
    }
    public function Edit_Form(Request $request)
    {
        if (Auth::check()) {
            $existingPage = Forms_name::where('id', $request->input('id'))->update(['name' => $request->input('name'),'title' => $request->input('title'),'description' => $request->input('description'),'json_data' => $request->input('json_data')]);
            if ($existingPage) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function Create_Form(Request $request)
    {
        if (Auth::check()) {
            $randomKey = Str::random(16);
            $form = Forms_name::create([
                'url' => $randomKey,
                'name' => $request->input('name'),
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'json_data' => $request->input('json_data'),
                'duplicate' => true,
                'status' => true
            ]);
            if ($form->save()) {
                return response()->json(['message' => 'تغییرات اعمال شد','id' =>$form,'url' => $randomKey], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function List_Form(Request $request)
    {
        if (Auth::check()) {
            $list_form = Forms::where('forms_name_id', $request->input('id'))->get();
            return response()->json(['list_form'=> $list_form], 201);
        }
    }
    public function Access_Form(Request $request)
    {
        if (Auth::check()) {
            $existingPage = Forms_name::where('id', $request->input('id'))->update(['status' => $request->input('data_checked')]);

            if ($existingPage) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function Delete_Form(Request $request)
    {
        if (Auth::check()) {
            $existingPage = Forms_name::where('id', $request->input('id'))->delete();
            if ($existingPage) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    
}
