<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Skill extends Model
{
use HasFactory;


protected $table = 'skills';
protected $primaryKey = 'id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'name',
'description',
'attribute_id',
];


public function attribute()
{
return $this->belongsTo(Attribute::class, 'attribute_id', 'id');
}


public function characterClasses()
{
return $this->belongsToMany(CharacterClass::class, 'classes_skills', 'skill_id', 'class_id');
}
}
