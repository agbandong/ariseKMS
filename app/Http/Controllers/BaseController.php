<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organization;
use App\Models\User;
use App\Models\Project;
use App\Models\ProjectReport;
use DateTime;

class BaseController extends Controller
{
    //
    public function index(){
        //note to self: specify attributes to get()
        $approvedUsers = User::where("approved", true);
        $userCount = $approvedUsers->count();
        $organizationCount = Organization::where("approved", true)->count();
        $projectCount = Project::count();
        $reportCount = ProjectReport::count();

        //Count by counts per item: this time date
        //strtotime function converts datetime to unix time
        //date function converts Unix time to date string
        $dateApproved = $approvedUsers->get()->countBy(function ($item) {
            return date('Y/m/d', strtotime($item['email_verified_at']));
        });

        dd($dateApproved);

        return Inertia::render('Dashboard', ['userCount' => $userCount, 'organizationCount' => $organizationCount, 
            'projectCount' => $projectCount, 'reportCount' => $reportCount, 'dateApproved' => $dateApproved]);
    }

    public function members(){
        //Find a way to make this real time
        $userCount = User::where("approved", true)->count();
        //Find a way to sort by date
        //Use php to sort by date
        $userGrowth = User::where("approved", true);
        //Sort by sector
        $membershipBySector = Organization::count();

        //Get what data you need
        $allMembers = User::where("approved", true)->get()->all();
        $allOrgs = Organization::get()->all();

    }

    public function projects(){

    }
}
