<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'title',
        'type',
        'organization_id',
        'user_id',
        'position',
        'email',
        'country',
        'street',
        'city',
        'province_state',
        'post_zip_code',
        'phone',
    ];

    public function organization(){
        return $this->belongsTo(Organization::class);
    }


}
