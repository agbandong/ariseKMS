<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'report_files_path',
        'description',
        'location',
        'stage',
        'number_of_benificiaries',
    ];

    public function users(){
        return $this->belongsToMany(Project::class)->withTimestamps();
    }
}
