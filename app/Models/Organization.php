<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        //'company_country',
        'headquarters_country',
        'legal_company_country',
        //'has_proof',
        //'registration_proofs_path',
        'company_fax',
        //'website',
        'is_trade_org',
        'is_in_trade_association',
        'exchange_name',
        'exchange_symbol',
        'is_subsidiary_details',
        'number_employees',
        'past_annual_revenue',
        'description_business_and_activities',
        //'current_engangement_path',
        'sector',
        //'legal_reprentative_id',
        //'legal_reprentative_country',
        //'legal_reprentative_street',
        //'legal_reprentative_city',
        //'legal_reprentative_province_state',
        //'legal_reprentative_post_zip_code',
        //'legal_representative_phone',
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
