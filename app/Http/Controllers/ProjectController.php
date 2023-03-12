<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Project;
use App\Models\User;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //Ignore error it works
        $userProjects = Auth::user()->projects()->get()->all();
        //return dd($userProjects);
        return Inertia::render('Projects/ShowAll', ['projects' => $userProjects]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //Create class
        return Inertia::render('Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // dd($request);
        $request->validate([
            'name' => 'required|unique:projects|max:64',
            'description' => 'required|max:124',
            'location' => 'required|max:124',
            'stage' => 'required',
        ]);

        Project::create([
            'name' => $request->name,
            'project_files_path' => '/projects/' . $request->name,
            'description' => $request->description,
            'location' => $request->location,
            'stage' => $request->stage,
        ])->users()->attach(Auth::user()->id, ['role' => 'admin',]);

        return to_route('projects.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
        if (!$project->users->contains(Auth::id())){
            return abort(403);
        }

        $reports = $project->reports()->get();
        return Inertia::render('Projects/Show', ['project' => $project, 'reports' => $reports]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
        if (!$project->users->contains(Auth::id())){
            return abort(403);
        }

        return Inertia::render('Projects/Settings', ['project' => $project]);
    }

    public function showAddMembers(Project $project)
    {
        return Inertia::render('Projects/AddMember', ['project' => $project]);
    }

    public function addMembers(Project $project, $users)
    {
        foreach($users as $user){
            $project->users()->attach($user->id(), ['role' => 'member',]);
        }
        return to_route('projects.index');
    }

    public function removeMembers(Project $project, $users){
        foreach($users as $user){
            $project->users()->detach($user->id());
        }
        return to_route('projects.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
        $project->users()->detach();
        $project->delete();
        return to_route('projects.index');
    }
}
