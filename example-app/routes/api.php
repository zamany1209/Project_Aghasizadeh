<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\Api_AdminController;

Route::get('/user', function (Request $request) {
    if (Auth::check()) {
        return 1;
    }
    else{
        return 0;
    }
})->middleware(['auth', 'verified']);
Route::post('/tokens/create', function (Request $request) {
    $token = $request;
    return $token;
    // return ['token' => $token->plainTextToken];
});
Route::get('/users', [Api_AdminController::class, 'Test']);