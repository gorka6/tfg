<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Background extends Model
{
use HasFactory;


protected $table = 'backgrounds';
protected $primaryKey = 'background_id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'name',
'description',
'skill1_id',
'skill2_id',
];


public function skill1()
{
return $this->belongsTo(Skill::class, 'skill1_id', 'skill_id');
}


public function skill2()
{
return $this->belongsTo(Skill::class, 'skill2_id', 'skill_id');
}
}