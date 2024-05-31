<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class Api_AdminController extends Controller
{
    //
    public function Test(Request $request)
    {
        
        $user = $request->user();
        $user->tokens()->delete();
        $result = $user->createToken('post', ['*'], now()->addSeconds(86400));
        return $result;
        // return User::all();
    }
}
