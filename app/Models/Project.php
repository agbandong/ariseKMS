<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'project_files_path',
        'description',
        'location',
        'stage',
        'number_of_benificiaries',
    ];
    
    protected $appends =[
        
    ];

    public function users(){
        return $this->belongsToMany(User::class)->withTimestamps();
    }

    public function reports(){
        return $this->hasMany(ProjectReport::class)->withTimestamps();
    }
}
