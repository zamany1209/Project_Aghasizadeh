<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Comments;

class CommentsController extends Controller
{
    //
    public function Get_Comments(Request $request)
    {
        $comments = Comments::select('id','page','name','comment','reply','status')->where('page',$request->input('page_name'))->where('status',true)->get();
        return response()->json(['comments'=> $comments], 201);
    }
    public function Send_Comment(Request $request)
    {
        $comments = Comments::where('page',$request->input('page_name'))->where('ip',$request->ip())->get();
        if(count($comments) > 5){
            return response()->json(['data' => ''],409);
        }else{
            $check_cookie = $request->cookie('comment_' . strval($request->input('page_name')));
            if($check_cookie){
                return response()->json(['data' => ''],408);
            }else{
                $comment = Comments::create([
                    'page' => $request->input('page_name'),
                    'ip' => $request->ip(),
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'comment' => $request->input('comment'),
                    'reply' => '',
                ]);
                if($comment->save()){
                    $cookie = cookie('comment_' . strval($request->input('page_name')),true, 1);
                    return response()->json(['data' => ""],201)->cookie($cookie);
                }else{
                    return response()->json(['data' => ""],409);
                }
            }
        }
    }
    public function Edit_Reply(Request $request)
    {
        if (Auth::check()) {
            $comments = Comments::where('id',$request->input('id'))->update(['reply' => $request->input('reply')]);
            if ($comments) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
    public function Delete_Comment(Request $request)
    {
        if (Auth::check()) {
            $comment = Comments::where('id', $request->input('id'))->delete();
            if ($comment) {
                return response()->json(['message' => 'تغییرات اعمال شد'], 201);
            }
            else{
                return response()->json(['message' => 'متاسفانه تغییر اعمال نشد'], 409);
            }
        }
    }
}
