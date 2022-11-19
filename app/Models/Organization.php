<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'company_country',
        'headquarters_country',
        'legal_company_country',
        //'has_proof',
        //'registration_proofs_path',
        //'registration_proofs_excuse',
        'company_fax',
        'website',
        'is_in_trade_association',
        'is_in_business_alliance',
        'exchange_name',
        'exchange_symbol',
        'is_subsidiary_details',
        'number_employees',
        'currency',
        'past_annual_revenue',
        'description_business_and_activities',
        'country_focus',
        'sector',
        'approved'
        //'legal_reprentative_id',
        //'primary_contact_id',
    ];

    public function users(){
        return $this->hasMany(User::class);
    }

    public function contacts(){
        return $this->hasMany(Person::class);
    }
}
