<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Language extends Model
{
use HasFactory;


protected $table = 'languages';
protected $primaryKey = 'language_id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = ['name'];


public function races()
{
return $this->belongsToMany(Race::class, 'races_languages', 'language_id', 'race_id');
}
}