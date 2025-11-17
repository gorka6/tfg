<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RacesLanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('races_languages')->insert([
            // Dwarf
            ['race_id' => 1, 'language_id' => 1], // Common
            ['race_id' => 1, 'language_id' => 2], // Dwarvish

            // Elf
            ['race_id' => 2, 'language_id' => 1], // Common
            ['race_id' => 2, 'language_id' => 3], // Elvish

            // Halfling
            ['race_id' => 3, 'language_id' => 1], // Common
            ['race_id' => 3, 'language_id' => 7], // Halfling

            // Human
            ['race_id' => 4, 'language_id' => 1], // Common

            // Dragonborn
            ['race_id' => 5, 'language_id' => 1],  // Common
            ['race_id' => 5, 'language_id' => 11], // Draconic

            // Gnome
            ['race_id' => 6, 'language_id' => 1], // Common
            ['race_id' => 6, 'language_id' => 5], // Gnomish

            // Half-Elf
            ['race_id' => 7, 'language_id' => 1], // Common
            ['race_id' => 7, 'language_id' => 3], // Elvish

            // Half-Orc
            ['race_id' => 8, 'language_id' => 1], // Common
            ['race_id' => 8, 'language_id' => 8], // Orc

            // Tiefling
            ['race_id' => 9, 'language_id' => 1],  // Common
            ['race_id' => 9, 'language_id' => 13], // Infernal
        ]);
    }
}
