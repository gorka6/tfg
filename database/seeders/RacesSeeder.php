<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RacesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('races')->insert([
            ['name' => 'Dwarf',      'speed' => 25],
            ['name' => 'Elf',        'speed' => 30],
            ['name' => 'Halfling',   'speed' => 25],
            ['name' => 'Human',      'speed' => 30],
            ['name' => 'Dragonborn', 'speed' => 30],
            ['name' => 'Gnome',      'speed' => 25],
            ['name' => 'Half-Elf',   'speed' => 30],
            ['name' => 'Half-Orc',   'speed' => 30],
            ['name' => 'Tiefling',   'speed' => 30],
        ]);
    }
}
