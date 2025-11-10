<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SkillLearnt extends Model
{
use HasFactory;


protected $table = 'skills_learnt';
public $timestamps = false;
public $incrementing = false;
protected $primaryKey = null;


protected $fillable = ['character_id', 'skill_id'];


public function character()
{
return $this->belongsTo(Character::class, 'character_id', 'character_id');
}


public function skill()
{
return $this->belongsTo(Skill::class, 'skill_id', 'skill_id');
}
}
