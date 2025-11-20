<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\Alignment;

class Ficha extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'background_id',
        'race_id',
        'subrace_id',
        'class_id',
        'exp',
        'str',
        'dex',
        'con',
        'int',
        'wis',
        'cha',
        'alignment'
    ];

    protected $casts = [
        'alignment' => Alignment::class,
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
    public function background()
    {
        return $this->belongsTo(Background::class, 'background_id', 'id');
    }


    public function race()
    {
        return $this->belongsTo(Race::class, 'race_id', 'id');
    }


    public function subrace()
    {
        return $this->belongsTo(Subrace::class, 'subrace_id', 'id');
    }


    public function characterClass()
    {
        return $this->belongsTo(CharacterClass::class, 'class_id', 'id');
    }


    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'skills_learnt', 'ficha_id', 'skill_id');
    }


    public function traits()
    {
        return $this->belongsToMany(CharacterTrait::class, 'traits_learnt', 'ficha_id', 'trait_id');
    }
}
