<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'first_name',
        'last_name',
        'organization_id',
        'position',
        'email',
    ];

    public function organization(){
        return $this->belongsTo(Organization::class);
    }


}
