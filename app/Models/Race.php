<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Race extends Model
{
use HasFactory;


protected $table = 'races';
protected $primaryKey = 'race_id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'name',
'speed',
];


public function subraces()
{
return $this->hasMany(Subrace::class, 'race_id', 'race_id');
}


public function traits()
{
return $this->hasMany(CharacterTrait::class, 'race_id', 'race_id');
}


public function attributeBonuses()
{
return $this->hasMany(AttributeBonus::class, 'race_id', 'race_id');
}


public function languages()
{
return $this->belongsToMany(Language::class, 'races_languages', 'race_id', 'language_id');
}
}
