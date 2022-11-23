<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organization;
use App\Models\User;

class BaseController extends Controller
{
    //
    public function index(){
        
        $userCount = User::count();
        $organizationCount = Organization::where("approved", true)->count();
        // $projectCount = Project::count();
        // $reportCount = Report;;count();

        return Inertia::render('Dashboard', ['userCount' => $userCount, 'organizationCount' => $organizationCount]);
    }
}
