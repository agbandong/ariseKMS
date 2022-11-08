<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'headquarters_country',
        'legal_company_country',
        'has_proof',
        'registration_proofs_path',
        'company_phone',
        'company_fax',
        'website',
        'is_trade_org',
        'is_in_trade_association',
        'exchange_name',
        'exchange_symbol',
        'is_subsiary_details',
        'number_employees',
        'past_annual_revenue',
        'description_business_and_activities',
        'current_engangement_path',
        'sector',
        'legal_reprentative_id',
        'legal_country',
        'legal_street',
        'legal_city',
        'legal_province_state',
        'legal_post_zip_code',
        'primary_contact_id',
        'contact_country',
        'contact_street',
        'contact_city',
        'contact_province_state',
        'contact_post_zip_code',
        'contact_street',
        'contact_phone',
    ];

    public function users(){
        return $this->hasMany(User::class);
    }

    public function organizationInvitations(){
        return $this->belongsToMany(OrganizationInvitation::class);
    }
}
