<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Formscontroller;
use App\Http\Controllers\AdminController;

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
Route::get('blog/{name}', [PageController::class, 'Blog']);
Route::get('form/{name_url}', [Formscontroller::class, 'Forms_control']);
Route::post('form_get', [Formscontroller::class, 'form_get']);
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

require __DIR__.'/auth.php';
