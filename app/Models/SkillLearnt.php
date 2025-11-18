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


protected $fillable = ['ficha_id', 'skill_id'];


public function ficha()
{
return $this->belongsTo(Ficha::class, 'ficha_id', 'id');
}


public function skill()
{
return $this->belongsTo(Skill::class, 'skill_id', 'id');
}
}
