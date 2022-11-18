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
            'company_fax' => 'max:15',
            'website' => 'max:120',
            'exchange_name' => 'max:60',
            'exchange_symbol' => 'max:10',
            'is_subsidiary_details' => 'max:120',
            'number_employees' => 'min:0',
            'past_annual_revenue' => 'min:0',
            'description_business_and_activities' => 'max:300',
            'sector_other' => 'max:50',
            'country_focus' => 'max:60',
        ]);

        $otherRequest = ($request->sector == 'other');

        Organization::create([
            'name' => $request->name,
            
            'company_country' => $request->company_country,
            'headquarters_country' => $request->headquarters_country_same ? $request->company_country : $request->headquarters_country,
            'legal_company_country' => $request->legal_company_country_same ? $request->company_country : $request->legal_company_country,
            'company_fax' => $request->has_fax ? $request->company_fax : null,
            'website' => $request->website,
            'is_in_trade_association' => $request->is_in_trade_association,
            'is_in_business_alliance' => $request->is_in_business_alliance,
            'exchange_name' => $request->is_publically_traded ? $request->exchange_name : null,
            'exchange_symbol' => $request->is_publically_traded ? $request->exchange_symbol : null,
            'is_subsidiary_details' => $request->is_subsidiary ? $request->is_subsidiary_details : null,
            'number_employees' => $request->number_employees,
            'past_annual_revenue' => $request->past_annual_revenue,
            'description_business_and_activities' => $request->description_business_and_activities,
            'country_focus' => $request->has_country_focus ? $request->country_focus : null,
            'sector' => $otherRequest ? $request->sectorOther : $request->sector,
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

    public function showUsers(){
        return Inertia::render('Organizations/ShowUsers');
    }
}
