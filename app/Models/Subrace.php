<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subrace extends Model
{
use HasFactory;


protected $table = 'subraces';
protected $primaryKey = 'subrace_id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'race_id',
'name',
'description',
];


public function race()
{
return $this->belongsTo(Race::class, 'race_id', 'race_id');
}


public function traits()
{
return $this->hasMany(CharacterTrait::class, 'subrace_id', 'subrace_id');
}


public function attributeBonuses()
{
return $this->hasMany(AttributeBonus::class, 'subrace_id', 'subrace_id');
}
}
