<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forms_name extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'url',
        'name',
        'title',
        'json_data',
        'duplicate',
        'status',
    ];
}
