<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ficha extends Model
{
    protected $fillable = ['nombre', 'ataque', 'alignment'];

    protected $casts = [
        'alignment' => Alignment::class,
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
