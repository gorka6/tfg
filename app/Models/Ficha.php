<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\Alignment;

class Ficha extends Model
{
    protected $fillable = ['user_id', 'nombre', 'ataque', 'alignment'];

    protected $casts = [
        'alignment' => Alignment::class,
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
