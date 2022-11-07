<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'project_files_path'
    ];
    
    public function users(){
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
