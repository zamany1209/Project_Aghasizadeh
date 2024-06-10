<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forms extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'forms_name_id',
        'ip',
        'json_data',
    ];
}
