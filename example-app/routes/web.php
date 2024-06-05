<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Api\Api_AdminController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', [PageController::class, 'Index'])->name('home');
Route::get('/login', [PageController::class, 'login'])->name('login');
Route::get('/Admin_panel', [PageController::class, 'Admin'])->name('Admin_panel');
Route::get('/index', [PageController::class, 'Index']);
Route::get('/test/{page}', [PageController::class, 'Test']);

Route::get('/dashboard', function () {
    return redirect(route('Admin_panel', absolute: false));
});
Route::get('/admin', function () {
    return redirect(route('Admin_panel', absolute: false));
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/users', [Api_AdminController::class, 'Test']);

require __DIR__.'/auth.php';
