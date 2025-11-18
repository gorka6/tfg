<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attribute extends Model
{
use HasFactory;


protected $table = 'attributes';
protected $primaryKey = 'id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'name',
];


public function skills()
{
return $this->hasMany(Skill::class, 'attribute_id', 'id');
}
}
