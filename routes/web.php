<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\OrganizationController;
use App\Models\Organization;
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
})->name('welcome');

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::resource('/projects', ProjectController::class);
    Route::get('/organization', [OrganizationController::class, 'index'])->name('organization');
    Route::get('/organization/{organization}', [OrganizationController::class, 'show'])->name('organization.show');
    Route::post('/organization/{organization}', [OrganizationController::class, 'update'])->name('organization.update');
    Route::delete('/organization/{organization}', [OrganizationController::class, 'destroy'])->name('organization.delete');
    Route::get('/organization/users', [OrganizationController::class, 'showUsers'])->name('organization.users');

});

Route::middleware('guest')->group(function(){
    Route::get('/register/organization', [OrganizationController::class, 'create'])->name('organization.register');
    Route::get('/register/organization/check', [OrganizationController::class, 'check'])->name('organization.check');
    Route::post('/register/organization', [OrganizationController::class, 'store'])->name('organization.store');
    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
