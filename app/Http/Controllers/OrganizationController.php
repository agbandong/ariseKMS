<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    //
    public function index(){
        $allOrgs = Organization::get()->all();
        
        return Inertia::render('Organizations/ShowAll', ['organizations' => $allOrgs]);
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
            'currency' => 'max:50',
            'sector_other' => 'max:50',
            'country_focus' => 'max:60',
        ]);

        $otherRequest = ($request->sector == 'Other');

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
            'currency' => $request->currency,
            'past_annual_revenue' => $request->past_annual_revenue,
            'description_business_and_activities' => $request->description_business_and_activities,
            'country_focus' => $request->has_country_focus ? $request->country_focus : null,
            'sector' => $otherRequest ? $request->sectorOther : $request->sector,
            'approved' => false,
        ]);

        return Inertia::render('Organizations/PleaseWait');
    }

    public function update(Request $request, Organization $organization){
        if ($request->organization->name == $organization->name){
            $nameValiation = 'max:25';
        } else{
            $nameValiation = 'unique:organizations|max:25';
        };
        $request->validate([
            'name' => $nameValiation,
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
            'currency' => 'max:50',
            'sector_other' => 'max:50',
            'country_focus' => 'max:60',
        ]);

        $otherRequest = ($request->sector == 'Other');

        $organization->update([
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
            'currency' => $request->currency,
            'past_annual_revenue' => $request->past_annual_revenue,
            'description_business_and_activities' => $request->description_business_and_activities,
            'country_focus' => $request->has_country_focus ? $request->country_focus : null,
            'sector' => $otherRequest ? $request->sectorOther : $request->sector,
            'approved' => true,
        ]);

        return to_route('organization');
    }

    public function check(Request $request){
        //Edit routes to prevent unauthorized access
        //dd($request);
        if(Organization::get()->contains('name', $request->query("organization"))){
            return to_route('register', ['organization' => $request->query("organization")]);
        };
        
        return back();
    }

    public function show(Organization $organization){

        return Inertia::render('Organizations/Show', ['organization' => $organization]);
    }
    
    public function showUsers(Organization $organization){
        $users = $organization->users()->get()->all();

        return Inertia::render('Organizations/ShowUsers', ['users' => $users, 'organization_name' => $organization->name]);
    }

    public function destroy(Organization $organization){
        $organization->delete();
        return to_route('organization');
    }
}
