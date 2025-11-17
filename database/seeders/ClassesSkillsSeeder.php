<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassesSkillsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('classes_skills')->insert([
            // Barbarian (class_id = 1)
            ['class_id' => 1, 'skill_id' => 10], // Animal Handling
            ['class_id' => 1, 'skill_id' => 1],  // Athletics
            ['class_id' => 1, 'skill_id' => 16], // Intimidation
            ['class_id' => 1, 'skill_id' => 8],  // Nature
            ['class_id' => 1, 'skill_id' => 13], // Perception
            ['class_id' => 1, 'skill_id' => 14], // Survival

            // Bard (class_id = 2) - can choose from ALL skills (insert all options)
            ['class_id' => 2, 'skill_id' => 1],
            ['class_id' => 2, 'skill_id' => 2],
            ['class_id' => 2, 'skill_id' => 3],
            ['class_id' => 2, 'skill_id' => 4],
            ['class_id' => 2, 'skill_id' => 5],
            ['class_id' => 2, 'skill_id' => 6],
            ['class_id' => 2, 'skill_id' => 7],
            ['class_id' => 2, 'skill_id' => 8],
            ['class_id' => 2, 'skill_id' => 9],
            ['class_id' => 2, 'skill_id' => 10],
            ['class_id' => 2, 'skill_id' => 11],
            ['class_id' => 2, 'skill_id' => 12],
            ['class_id' => 2, 'skill_id' => 13],
            ['class_id' => 2, 'skill_id' => 14],
            ['class_id' => 2, 'skill_id' => 15],
            ['class_id' => 2, 'skill_id' => 16],
            ['class_id' => 2, 'skill_id' => 17],
            ['class_id' => 2, 'skill_id' => 18],

            // Cleric (class_id = 3)
            ['class_id' => 3, 'skill_id' => 6],  // History
            ['class_id' => 3, 'skill_id' => 11], // Insight
            ['class_id' => 3, 'skill_id' => 12], // Medicine
            ['class_id' => 3, 'skill_id' => 18], // Persuasion
            ['class_id' => 3, 'skill_id' => 9],  // Religion

            // Druid (class_id = 4)
            ['class_id' => 4, 'skill_id' => 5],  // Arcana
            ['class_id' => 4, 'skill_id' => 10], // Animal Handling
            ['class_id' => 4, 'skill_id' => 11], // Insight
            ['class_id' => 4, 'skill_id' => 12], // Medicine
            ['class_id' => 4, 'skill_id' => 8],  // Nature
            ['class_id' => 4, 'skill_id' => 13], // Perception
            ['class_id' => 4, 'skill_id' => 9],  // Religion
            ['class_id' => 4, 'skill_id' => 14], // Survival

            // Fighter (class_id = 5)
            ['class_id' => 5, 'skill_id' => 2],  // Acrobatics
            ['class_id' => 5, 'skill_id' => 10], // Animal Handling
            ['class_id' => 5, 'skill_id' => 1],  // Athletics
            ['class_id' => 5, 'skill_id' => 6],  // History
            ['class_id' => 5, 'skill_id' => 11], // Insight
            ['class_id' => 5, 'skill_id' => 16], // Intimidation
            ['class_id' => 5, 'skill_id' => 13], // Perception
            ['class_id' => 5, 'skill_id' => 14], // Survival

            // Monk (class_id = 6)
            ['class_id' => 6, 'skill_id' => 2],  // Acrobatics
            ['class_id' => 6, 'skill_id' => 1],  // Athletics
            ['class_id' => 6, 'skill_id' => 6],  // History
            ['class_id' => 6, 'skill_id' => 11], // Insight
            ['class_id' => 6, 'skill_id' => 9],  // Religion
            ['class_id' => 6, 'skill_id' => 4],  // Stealth

            // Paladin (class_id = 7)
            ['class_id' => 7, 'skill_id' => 1],  // Athletics
            ['class_id' => 7, 'skill_id' => 11], // Insight
            ['class_id' => 7, 'skill_id' => 16], // Intimidation
            ['class_id' => 7, 'skill_id' => 12], // Medicine
            ['class_id' => 7, 'skill_id' => 18], // Persuasion
            ['class_id' => 7, 'skill_id' => 9],  // Religion

            // Ranger (class_id = 8)
            ['class_id' => 8, 'skill_id' => 10], // Animal Handling
            ['class_id' => 8, 'skill_id' => 1],  // Athletics
            ['class_id' => 8, 'skill_id' => 11], // Insight
            ['class_id' => 8, 'skill_id' => 7],  // Investigation
            ['class_id' => 8, 'skill_id' => 8],  // Nature
            ['class_id' => 8, 'skill_id' => 13], // Perception
            ['class_id' => 8, 'skill_id' => 4],  // Stealth
            ['class_id' => 8, 'skill_id' => 14], // Survival

            // Rogue (class_id = 9)
            ['class_id' => 9, 'skill_id' => 2],  // Acrobatics
            ['class_id' => 9, 'skill_id' => 1],  // Athletics
            ['class_id' => 9, 'skill_id' => 15], // Deception
            ['class_id' => 9, 'skill_id' => 11], // Insight
            ['class_id' => 9, 'skill_id' => 16], // Intimidation
            ['class_id' => 9, 'skill_id' => 7],  // Investigation
            ['class_id' => 9, 'skill_id' => 13], // Perception
            ['class_id' => 9, 'skill_id' => 18], // Persuasion
            ['class_id' => 9, 'skill_id' => 3],  // Sleight of Hand
            ['class_id' => 9, 'skill_id' => 4],  // Stealth

            // Sorcerer (class_id = 10)
            ['class_id' => 10, 'skill_id' => 5], // Arcana
            ['class_id' => 10, 'skill_id' => 15], // Deception
            ['class_id' => 10, 'skill_id' => 11], // Insight
            ['class_id' => 10, 'skill_id' => 16], // Intimidation
            ['class_id' => 10, 'skill_id' => 18], // Persuasion
            ['class_id' => 10, 'skill_id' => 9],  // Religion

            // Warlock (class_id = 11)
            ['class_id' => 11, 'skill_id' => 5], // Arcana
            ['class_id' => 11, 'skill_id' => 15], // Deception
            ['class_id' => 11, 'skill_id' => 6],  // History
            ['class_id' => 11, 'skill_id' => 16], // Intimidation
            ['class_id' => 11, 'skill_id' => 7],  // Investigation
            ['class_id' => 11, 'skill_id' => 8],  // Nature
            ['class_id' => 11, 'skill_id' => 9],  // Religion

            // Wizard (class_id = 12)
            ['class_id' => 12, 'skill_id' => 5], // Arcana
            ['class_id' => 12, 'skill_id' => 6], // History
            ['class_id' => 12, 'skill_id' => 11], // Insight
            ['class_id' => 12, 'skill_id' => 7], // Investigation
            ['class_id' => 12, 'skill_id' => 12], // Medicine
            ['class_id' => 12, 'skill_id' => 9], // Religion
        ]);
    }
}
