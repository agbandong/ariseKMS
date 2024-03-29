<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\ProjectReportController;
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

Route::get('/sampleCharts', function (){return Inertia::render('ChartsSample'); });

//Add roleAuth
Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', [BaseController::class, 'index'])->name('dashboard');
    Route::resource('/projects', ProjectController::class);
    Route::prefix('/projects/{project}')->name('projects.')->group(
        function(){
            Route::get('/members', [ProjectController::class, 'showMembers'])->name('members');
            Route::get('/addMembers', [ProjectController::class, 'showAddMembers'])->name('showAddMembers');
            Route::patch('/members', [ProfileController::class, 'addMembers'])->name('addMembers');
            Route::delete('/members', [ProfileController::class, 'removeMembers'])->name('removeMembers');
        }
    );
    Route::prefix('/organization')->name('organization.')->group(
    function(){
        Route::get('/', [OrganizationController::class, 'index'])->name('index');
        Route::get('/{organization}', [OrganizationController::class, 'show'])->name('show');
        Route::post('/{organization}', [OrganizationController::class, 'update'])->name('update');
        Route::delete('/{organization}', [OrganizationController::class, 'destroy'])->name('delete');
        Route::get('/{organization}/users', [OrganizationController::class, 'showUsers'])->name('users');
    });
    Route::post('/user/approve/{user}', [RegisteredUserController::class, 'approve'])->name('user.approve');
    Route::delete('/user/delete/{user}', [RegisteredUserController::class, 'destroy'])->name('user.delete');

    Route::prefix('/projects/{project}/projectReports')->name('reports.')->group(
    function(){
        Route::get('/create', [ProjectReportController::class, 'create'])->name('create');
        Route::get('/{projectReport}/download', [ProjectReportController::class, 'download'])->name('download');
        Route::post('/create', [ProjectReportController::class, 'store'])->name('store');
        Route::get('/create', [ProjectReportController::class, 'create'])->name('create');
        Route::delete('/{projectReport}/destroy', [ProjectReportController::class, 'destroy'])->name('destroy');
    });
});

Route::middleware('guest')->group(function(){
    Route::get('/register/organization', [OrganizationController::class, 'create'])->name('organization.register');
    Route::get('/register/organization/check', [OrganizationController::class, 'check'])->name('organization.check');
    Route::post('/register/organization', [OrganizationController::class, 'store'])->name('organization.store');
    Route::get('/register/wait', [RegisteredUserController::class, 'wait'])->name('wait');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
});



require __DIR__.'/auth.php';
