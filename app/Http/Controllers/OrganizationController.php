<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    //
    public function index(){
        return Inertia::render('Organizations/CheckOrganization');
    }

    public function create(){
        return Inertia::render('Organizations/Register');
    }

    public function store(){

    }

}
