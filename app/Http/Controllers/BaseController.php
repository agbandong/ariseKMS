<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organization;
use App\Models\User;
use App\Models\Project;
use App\Models\ProjectReport;


class BaseController extends Controller
{
    //
    public function index(){
        
        $userCount = User::where("approved", true)->count();
        $organizationCount = Organization::where("approved", true)->count();
        $projectCount = Project::count();
        $reportCount = ProjectReport::count();

        return Inertia::render('Dashboard', ['userCount' => $userCount, 'organizationCount' => $organizationCount, 
            'projectCount' => $projectCount, 'reportCount' => $reportCount]);
    }
}
