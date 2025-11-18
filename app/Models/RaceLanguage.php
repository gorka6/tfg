<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RaceLanguage extends Model
{
use HasFactory;


protected $table = 'races_languages';
public $timestamps = false;
public $incrementing = false;
protected $primaryKey = null;


protected $fillable = ['race_id', 'language_id'];


public function race()
{
return $this->belongsTo(Race::class, 'race_id', 'id');
}


public function language()
{
return $this->belongsTo(Language::class, 'language_id', 'id');
}
}
