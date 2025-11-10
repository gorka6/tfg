<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ClassSkill extends Model
{
use HasFactory;


protected $table = 'classes_skills';
public $timestamps = false;
public $incrementing = false;
protected $primaryKey = null;


protected $fillable = ['class_id', 'skill_id'];


public function characterClass()
{
return $this->belongsTo(CharacterClass::class, 'class_id', 'class_id');
}


public function skill()
{
return $this->belongsTo(Skill::class, 'skill_id', 'skill_id');
}
}
