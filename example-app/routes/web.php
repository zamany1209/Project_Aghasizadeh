<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Formscontroller;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CommentsController;
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('set', [Formscontroller::class, 'create_form_name']);
Route::get('/', [PageController::class, 'Index'])->name('home');
Route::get('page/{name}', [PageController::class, 'Page']);
Route::get('search', [PageController::class, 'Search']);
Route::get('search/{data}', [PageController::class, 'Search']);
Route::get('/login', [PageController::class, 'login'])->name('login');
Route::get('/Admin_panel', [PageController::class, 'Admin'])->name('Admin_panel');
Route::get('/index', [PageController::class, 'Index']);

Route::get('/dashboard', function () {
    return redirect(route('Admin_panel', absolute: false));
});
Route::get('/admin', function () {
    return redirect(route('Admin_panel'));
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
////Admin/////
Route::post('save_components', [AdminController::class, 'Save_Components_Page']);
Route::post('create_page', [AdminController::class, 'Create_Page']);
Route::post('access_page', [AdminController::class, 'Access_Page']);
Route::post('delete_page', [AdminController::class, 'Delete_Page']);
Route::post('edit_data_search', [AdminController::class, 'Edit_Data_Search']);
Route::post('edit_data_profile', [AdminController::class, 'Edit_Data_Profile']);
Route::post('upload_file', [AdminController::class, 'UPLOAD_FILE']);

////Forms////
Route::get('form/{name_url}', [Formscontroller::class, 'Forms_control']);
Route::post('form_get', [Formscontroller::class, 'form_get']);
Route::post('edit_form', [Formscontroller::class, 'Edit_Form']);
Route::post('create_form', [Formscontroller::class, 'Create_Form']);
Route::post('delete_form', [Formscontroller::class, 'Delete_Form']);
Route::post('list_form', [Formscontroller::class, 'List_Form']);
Route::post('access_form', [Formscontroller::class, 'Access_Form']);
/////Comments///////
Route::post('get_comment', [CommentsController::class, 'Get_Comments']);
Route::post('edit_reply', [CommentsController::class, 'Edit_Reply']);
Route::post('send_comment', [CommentsController::class, 'Send_Comment']);
Route::post('delete_comment', [CommentsController::class, 'Delete_Comment']);
require __DIR__.'/auth.php';
