<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\OrganizationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/register1', [OrganizationController::class, 'index'])->name('register1');
Route::get('/register2', [OrganizationController::class, 'create'])->name('register2');
Route::post('/register3', [OrganizationController::class, 'store'])->name('register3');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [ProjectController::class, 'index'])->name('dashboard');
    Route::resource('/projects', ProjectController::class);
});

Route::get('/dashboard', function () {
    return view('dashboard');
});

Route::get('/project', function () {
    return view('project');
});

Route::get('/member', function () {
    return view('member');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/registerorg', function () {
    return view('registerorg');
});