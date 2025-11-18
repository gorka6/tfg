<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TraitLearnt extends Model
{
use HasFactory;


protected $table = 'traits_learnt';
public $timestamps = false;
public $incrementing = false;
protected $primaryKey = null;


protected $fillable = ['ficha_id', 'trait_id'];


public function ficha()
{
return $this->belongsTo(Ficha::class, 'ficha_id', 'id');
}


public function trait()
{
return $this->belongsTo(CharacterTrait::class, 'trait_id', 'id');
}
}
