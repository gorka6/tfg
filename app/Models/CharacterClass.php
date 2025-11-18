<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CharacterClass extends Model
{
use HasFactory;


protected $table = 'classes';
protected $primaryKey = 'id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'name',
'hit_die',
'sav_throw_1',
'sav_throw_2',
'start_eq_1',
'start_eq_2',
'start_eq_3',
'start_eq_4',
];


public function savingThrowAttribute1()
{
return $this->belongsTo(Attribute::class, 'sav_throw_1', 'id');
}


public function savingThrowAttribute2()
{
return $this->belongsTo(Attribute::class, 'sav_throw_2', 'id');
}


public function skills()
{
return $this->belongsToMany(Skill::class, 'classes_skills', 'class_id', 'skill_id');
}


public function traits()
{
return $this->hasMany(CharacterTrait::class, 'class_id', 'id');
}
}
