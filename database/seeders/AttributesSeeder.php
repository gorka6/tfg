<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttributesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
DB::table('attributes')->insert([
    ['name' => 'Strength',     'abbrev' => 'str'],
    ['name' => 'Dexterity',    'abbrev' => 'dex'],
    ['name' => 'Constitution', 'abbrev' => 'con'],
    ['name' => 'Intelligence', 'abbrev' => 'int'],
    ['name' => 'Wisdom',       'abbrev' => 'wis'],
    ['name' => 'Charisma',     'abbrev' => 'cha'],
]);

    }
}
