<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AttributeBonus extends Model
{
use HasFactory;


protected $table = 'attribute_bonuses';
protected $primaryKey = 'bonus_id';
public $incrementing = true;
protected $keyType = 'int';
public $timestamps = false;


protected $fillable = [
'race_id',
'subrace_id',
'attribute_id',
'bonus',
];


public function race()
{
return $this->belongsTo(Race::class, 'race_id', 'race_id');
}


public function subrace()
{
return $this->belongsTo(Subrace::class, 'subrace_id', 'subrace_id');
}


public function attribute()
{
return $this->belongsTo(Attribute::class, 'attribute_id', 'attribute_id');
}
}
