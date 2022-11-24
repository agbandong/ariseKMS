<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class ProjectReportController extends Controller
{
    //
    public function create(Project $project){
        return Inertia::render('ProjectReports/Create', ['project' => $project]);
    }
    public function store(Request $request){
        $project = Project::where('id', $request->project)->get()->firstOrFail();
        $request->validate([
            'name' => ['required', 'unique:project_reports', 'max:64'],
            'description' => ['required|max:124'],
            'report_file' => ['required', 'mimes:pdf', 'max:2048'],
        ]);
        //Error found cache problem
        $report_file_path = null;
        if(isset($request->report_file)){
            $report_file_path = $request->report_file
            ->storeAs($project->project_files_path, 
                $request->name .  '.' . $request->report_file->getClientOriginalExtension(), 
            'public');
        }

        $project->reports()->create([
            'name' => $request->name,
            'user_id' => Auth::user()->id,
            'description' => $request->description,
            'report_file_path' => $report_file_path,
        ]);

        return to_route('projects.show', ['project' => $project]);
    }
}
