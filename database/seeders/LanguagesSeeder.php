<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            DB::table('languages')->insert([
            ['name' => 'Common'],
            ['name' => 'Dwarvish'],
            ['name' => 'Elvish'],
            ['name' => 'Giant'],
            ['name' => 'Gnomish'],
            ['name' => 'Goblin'],
            ['name' => 'Halfling'],
            ['name' => 'Orc'],
            ['name' => 'Abyssal'],
            ['name' => 'Celestial'],
            ['name' => 'Draconic'],
            ['name' => 'Deep Speech'],
            ['name' => 'Infernal'],
            ['name' => 'Primordial'],
            ['name' => 'Sylvan'],
            ['name' => 'Undercommon'],
        ]);
    }
}
