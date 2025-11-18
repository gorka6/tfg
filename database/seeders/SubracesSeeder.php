<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubracesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('subraces')->insert([
            // Elfos
            [
                'race_id' => 2,
                'name' => 'High Elf',
                'description' => 'Elves with a keen intellect and magical affinity.',
            ],
            [
                'race_id' => 2,
                'name' => 'Wood Elf',
                'description' => 'Elves adapted to forest life, skilled in stealth and archery.',
            ],
            [
                'race_id' => 2,
                'name' => 'Dark Elf',
                'description' => 'Elves adapted to life underground, with innate magical abilities.',
            ],

            // Enanos (Dwarves)
            [
                'race_id' => 1,
                'name' => 'Hill Dwarf',
                'description' => 'Stout dwarves with keen senses and toughness.',
            ],
            [
                'race_id' => 1,
                'name' => 'Mountain Dwarf',
                'description' => 'Dwarves adapted to high mountains, stronger and hardy.',
            ],

            // Halflings
            [
                'race_id' => 3,
                'name' => 'Lightfoot Halfling',
                'description' => 'Halflings who are naturally stealthy and lucky.',
            ],
            [
                'race_id' => 3,
                'name' => 'Stout Halfling',
                'description' => 'Hardy halflings with a bit of dwarven blood.',
            ],

            // Gnomos
            [
                'race_id' => 6,
                'name' => 'Forest Gnome',
                'description' => 'Gnomes who live in wooded areas with a knack for illusion magic.',
            ],
            [
                'race_id' => 6,
                'name' => 'Rock Gnome',
                'description' => 'Gnomes who are inventors and tinkerers, living in rocky areas.',
            ],

        ]);
    }
}
