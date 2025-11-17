<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ClassesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('classes')->insert([

            [
                'name' => 'Barbarian',
                'hit_die' => 12,
                'sav_throw_1' => 1, 
                'sav_throw_2' => 3,
                'start_eq_1' => 'Greataxe (or any martial melee weapon)',
                'start_eq_2' => 'Two handaxes (or any simple weapon)',
                'start_eq_3' => 'Explorer\'s Pack',
                'start_eq_4' => '4 Javelins',
            ],
            [
                'name' => 'Bard',
                'hit_die' => 8,
                'sav_throw_1' => 2,
                'sav_throw_2' => 6,
                'start_eq_1' => 'Rapier (or longsword or simple weapon)',
                'start_eq_2' => 'Diplomat\'s or Entertainer\'s Pack',
                'start_eq_3' => 'Lute (or other musical instrument)',
                'start_eq_4' => 'Leather Armor and a Dagger',
            ],
            [
                'name' => 'Cleric',
                'hit_die' => 8,
                'sav_throw_1' => 5,
                'sav_throw_2' => 6,
                'start_eq_1' => 'Mace (or warhammer if proficient)',
                'start_eq_2' => 'Scale mail (or leather/chain depending)',
                'start_eq_3' => 'Light crossbow and 20 bolts (or simple weapon)',
                'start_eq_4' => 'Priest\'s Pack (or Explorer\'s Pack) + holy symbol',
            ],
            [
                'name' => 'Druid',
                'hit_die' => 8,
                'sav_throw_1' => 4,
                'sav_throw_2' => 5,
                'start_eq_1' => 'Scimitar (or any simple melee weapon)',
                'start_eq_2' => 'Wooden shield (or any simple weapon)',
                'start_eq_3' => 'Leather Armor',
                'start_eq_4' => 'Explorer\'s Pack and a Druidic Focus',
            ],
            [
                'name' => 'Fighter',
                'hit_die' => 10,
                'sav_throw_1' => 1, 
                'sav_throw_2' => 3,
                'start_eq_1' => 'Chain mail (or leather + longbow & 20 arrows)',
                'start_eq_2' => 'Martial weapon and a shield (or two martial weapons)',
                'start_eq_3' => 'Light crossbow and 20 bolts (or two handaxes)',
                'start_eq_4' => 'Dungeoneer\'s Pack (or Explorer\'s Pack)',
            ],
            [
                'name' => 'Monk',
                'hit_die' => 8,
                'sav_throw_1' => 1, 
                'sav_throw_2' => 2,
                'start_eq_1' => 'Shortsword (or any simple weapon)',
                'start_eq_2' => 'Explorer\'s Pack (or Dungeoneer\'s Pack)',
                'start_eq_3' => '10 darts',
                'start_eq_4' => 'Monk robes / simple clothes', // inventado si hace falta
            ],
            [
                'name' => 'Paladin',
                'hit_die' => 10,
                'sav_throw_1' => 5,
                'sav_throw_2' => 6,
                'start_eq_1' => 'Longsword and Shield (or two martial weapons)',
                'start_eq_2' => 'Five javelins (or any simple melee weapon)',
                'start_eq_3' => 'Chain mail',
                'start_eq_4' => 'Explorer\'s Pack',
            ],
            [
                'name' => 'Ranger',
                'hit_die' => 10,
                'sav_throw_1' => 1, 
                'sav_throw_2' => 2,
                'start_eq_1' => 'Scale mail (or leather armor)',
                'start_eq_2' => 'Two shortswords (or two simple melee weapons)',
                'start_eq_3' => 'Longbow and 20 arrows (or two shortswords)',
                'start_eq_4' => 'Explorer\'s Pack',
            ],
            [
                'name' => 'Rogue',
                'hit_die' => 8,
                'sav_throw_1' => 2,
                'sav_throw_2' => 4,
                'start_eq_1' => 'Rapier (or shortsword)',
                'start_eq_2' => 'Shortbow and 20 arrows (or shortsword)',
                'start_eq_3' => 'Leather Armor, two daggers',
                'start_eq_4' => 'Thieves\' Tools and Burglar\'s Pack',
            ],
            [
                'name' => 'Sorcerer',
                'hit_die' => 6,
                'sav_throw_1' => 3,
                'sav_throw_2' => 6,
                'start_eq_1' => 'Light crossbow and 20 bolts (or any simple weapon)',
                'start_eq_2' => 'Component pouch or arcane focus',
                'start_eq_3' => 'Two daggers',
                'start_eq_4' => 'Explorer\'s Pack',
            ],
            [
                'name' => 'Warlock',
                'hit_die' => 8,
                'sav_throw_1' => 3,
                'sav_throw_2' => 6,
                'start_eq_1' => 'Light crossbow and 20 bolts (or any simple weapon)',
                'start_eq_2' => 'Leather Armor and simple weapon',
                'start_eq_3' => 'Arcane Focus (rod, staff, or wand)',
                'start_eq_4' => 'Dungeoneer\'s Pack',
            ],
            [
                'name' => 'Wizard',
                'hit_die' => 6,
                'sav_throw_1' => 4,
                'sav_throw_2' => 5,
                'start_eq_1' => 'Quarterstaff (or a dagger)',
                'start_eq_2' => 'Component pouch or arcane focus',
                'start_eq_3' => 'Scholar\'s Pack (or Explorer\'s Pack)',
                'start_eq_4' => 'Spellbook',
            ],
        ]);
    }
}
