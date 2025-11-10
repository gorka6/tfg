<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CharacterTrait extends Model
{
use HasFactory;


protected $table = 'traits';
protected $primaryKey = 'trait_id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'name',
'description',
'race_id',
'subrace_id',
'class_id',
];


public function race()
{
return $this->belongsTo(Race::class, 'race_id', 'race_id');
}


public function subrace()
{
return $this->belongsTo(Subrace::class, 'subrace_id', 'subrace_id');
}


public function characterClass()
{
return $this->belongsTo(CharacterClass::class, 'class_id', 'class_id');
}


public function characters()
{
return $this->belongsToMany(Character::class, 'traits_learnt', 'trait_id', 'character_id');
}
}
