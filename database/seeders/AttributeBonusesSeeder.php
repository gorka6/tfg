<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttributeBonusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('attribute_bonuses')->insert([
            // Dwarf (race_id = 1)
            ['race_id' => 1, 'subrace_id' => null, 'attribute_id' => 3, 'bonus' => 2], // Constitution +2

            // Hill Dwarf (subrace_id = 4)
            ['race_id' => 1, 'subrace_id' => 4, 'attribute_id' => 5, 'bonus' => 1], // Wisdom +1

            // Mountain Dwarf (subrace_id = 5)
            ['race_id' => 1, 'subrace_id' => 5, 'attribute_id' => 1, 'bonus' => 2], // Strength +2

            // Elf (race_id = 2)
            ['race_id' => 2, 'subrace_id' => null, 'attribute_id' => 2, 'bonus' => 2], // Dexterity +2

            // High Elf (subrace_id = 1)
            ['race_id' => 2, 'subrace_id' => 1, 'attribute_id' => 4, 'bonus' => 1], // Intelligence +1

            // Wood Elf (subrace_id = 2)
            ['race_id' => 2, 'subrace_id' => 2, 'attribute_id' => 5, 'bonus' => 1], // Wisdom +1

            // Drow (Dark Elf) (subrace_id = 3)
            ['race_id' => 2, 'subrace_id' => 3, 'attribute_id' => 6, 'bonus' => 1], // Charisma +1

            // Halfling (race_id = 3)
            ['race_id' => 3, 'subrace_id' => null, 'attribute_id' => 2, 'bonus' => 2], // Dexterity +2

            // Lightfoot Halfling (subrace_id = 6)
            ['race_id' => 3, 'subrace_id' => 6, 'attribute_id' => 6, 'bonus' => 1], // Charisma +1

            // Stout Halfling (subrace_id = 7)
            ['race_id' => 3, 'subrace_id' => 7, 'attribute_id' => 3, 'bonus' => 1], // Constitution +1

            // Human (race_id = 4)
            ['race_id' => 4, 'subrace_id' => null, 'attribute_id' => 1, 'bonus' => 1], // Strength +1
            ['race_id' => 4, 'subrace_id' => null, 'attribute_id' => 2, 'bonus' => 1], // Dexterity +1
            ['race_id' => 4, 'subrace_id' => null, 'attribute_id' => 3, 'bonus' => 1], // Constitution +1
            ['race_id' => 4, 'subrace_id' => null, 'attribute_id' => 4, 'bonus' => 1], // Intelligence +1
            ['race_id' => 4, 'subrace_id' => null, 'attribute_id' => 5, 'bonus' => 1], // Wisdom +1
            ['race_id' => 4, 'subrace_id' => null, 'attribute_id' => 6, 'bonus' => 1], // Charisma +1

            // Dragonborn (race_id = 5)
            ['race_id' => 5, 'subrace_id' => null, 'attribute_id' => 1, 'bonus' => 2], // Strength +2
            ['race_id' => 5, 'subrace_id' => null, 'attribute_id' => 6, 'bonus' => 1], // Charisma +1

            // Gnome (race_id = 6)
            ['race_id' => 6, 'subrace_id' => null, 'attribute_id' => 4, 'bonus' => 2], // Intelligence +2

            // Forest Gnome (subrace_id = 8)
            ['race_id' => 6, 'subrace_id' => 8, 'attribute_id' => 2, 'bonus' => 1], // Dexterity +1

            // Rock Gnome (subrace_id = 9)
            ['race_id' => 6, 'subrace_id' => 9, 'attribute_id' => 3, 'bonus' => 1], // Constitution +1

            // Half-Elf (race_id = 7)
            ['race_id' => 7, 'subrace_id' => null, 'attribute_id' => 6, 'bonus' => 2], // Charisma +2

            // Half-Orc (race_id = 8)
            ['race_id' => 8, 'subrace_id' => null, 'attribute_id' => 1, 'bonus' => 2], // Strength +2
            ['race_id' => 8, 'subrace_id' => null, 'attribute_id' => 3, 'bonus' => 1], // Constitution +1

            // Tiefling (race_id = 9)
            ['race_id' => 9, 'subrace_id' => null, 'attribute_id' => 6, 'bonus' => 2], // Charisma +2
            ['race_id' => 9, 'subrace_id' => null, 'attribute_id' => 4, 'bonus' => 1], // Intelligence +1
        ]);
    }
}
