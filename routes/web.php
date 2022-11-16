<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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

/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get('/', function (){
    $loggedIn = Auth::check();
    if($loggedIn) {return to_route('dashboard');}
    else {
        //Route::get('/dashboard', [ProjectController::class, 'index'])->name('dashboard');
        return Inertia::render('Auth/Login'); 
    } 
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('guest')->group(function(){
    Route::get('/register/new', [OrganizationController::class, 'index'])->name('register/new');
    Route::get('/register/organization', [OrganizationController::class, 'create'])->name('register/organization');
    Route::get('/register/organization/check', [OrganizationController::class, 'check'])->name('register/organization/check');
    Route::post('/register/organization/done', [OrganizationController::class, 'store'])->name('register/organization/done');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
