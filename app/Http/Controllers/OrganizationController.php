<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    //
    
    public function create(){
        return Inertia::render('Organizations/Create');;
    }

    public function show(){

    }

}
