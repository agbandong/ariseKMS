<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\OrganizationController;
use App\Providers\JetstreamServiceProvider;

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

Route::get('/', function (){
    $loggedIn = Auth::check();
    if($loggedIn) {return to_route('dashboard');}
    else {
        //Route::get('/dashboard', [ProjectController::class, 'index'])->name('dashboard');
        return to_route('register/new'); 
    } 
});

Route::middleware('guest')->group(function(){
    Route::get('/register/new', [OrganizationController::class, 'index'])->name('register/new');
    Route::get('/register/organization', [OrganizationController::class, 'create'])->name('register/organization');
    Route::get('/register/organization/check', [OrganizationController::class, 'check'])->name('register/organization/check');
    Route::post('/register/organization/done', [OrganizationController::class, 'store'])->name('register/organization/done');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [ProjectController::class, 'index'])->name('dashboard');
    Route::resource('/projects', ProjectController::class);
    Route::get('/newDashboard2', function () {
        return Inertia::render('DashboardNew');
    });
});

Route::get('/welcome', function(){
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});
