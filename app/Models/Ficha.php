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
        return $this->belongsTo(Background::class, 'background_id', 'background_id');
    }


    public function race()
    {
        return $this->belongsTo(Race::class, 'race_id', 'race_id');
    }


    public function subrace()
    {
        return $this->belongsTo(Subrace::class, 'subrace_id', 'subrace_id');
    }


    public function characterClass()
    {
        return $this->belongsTo(CharacterClass::class, 'class_id', 'class_id');
    }


    public function skillsLearnt()
    {
        return $this->belongsToMany(Skill::class, 'skills_learnt', 'character_id', 'skill_id');
    }


    public function traitsLearnt()
    {
        return $this->belongsToMany(CharacterTrait::class, 'traits_learnt', 'character_id', 'trait_id');
    }
}
