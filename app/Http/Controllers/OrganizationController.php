<?php

namespace App\Http\Controllers;

use App\Models\Organization;
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

    public function store(Request $request){
        //dd($request);

        $request->validate([
            'name' => 'unique:organizations|max:25',
            'company_country' => 'max:60',
            'headquarters_country' => 'max:60',
            'legal_company_country' => 'max:60',
            'exchange_name' => 'max:60',
            'exchange_symbol' => 'max:10',
            'is_subsidiary_details' => 'max:120',
            'number_employees' => 'min:0',
            'past_annual_revenue' => 'min:0',
            'description_business_and_activities' => 'max:300',
            'sector' => 'max:150'
        ]);

        Organization::create([
            'name' => $request->name,
            'company_country' => $request->company_country,
            'headquarters_country' => $request->headquarters_country_same ? $request->company_country : $request->headquarters_country,
            'legal_company_country' => $request->legal_company_country_same ? $request->company_country : $request->legal_company_country,
            'company_country' => $request->company_country,
            'company_country' => $request->company_country,
            'is_in_trade_association' => $request->is_in_trade_association,
            'is_in_business_alliance' => $request->is_in_business_alliance,
            'exchange_name' => $request->is_publically_traded ? $request->exchange_name : null,
            'exchange_symbol' => $request->is_publically_traded ? $request->exchange_symbol : null,
            'is_subsidiary_details' => $request->is_subsidiary ? $request->is_subsidiary_details : null,
            'number_employees' => $request->number_employees,
            'past_annual_revenue' => $request->past_annual_revenue,
            'description_business_and_activities' => $request->description_business_and_activities,
            'sector' => $request->sector,
        ]);

        return Inertia::render('Organizations/PleaseWait');
    }

    public function check(Request $request){
        //Edit routes to prevent unauthorized access
        //dd($request);
        if(Organization::get()->contains('name', $request->query("organization"))){
            return to_route('register', ['organization' => $request->query("organization")]);
        };
        
        return back();
    }

    public function createInvitations(){
        
    }
}
