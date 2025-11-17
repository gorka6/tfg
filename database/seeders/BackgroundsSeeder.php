<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BackgroundsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('backgrounds')->insert([
            [
                'name' => 'Acolyte',
                'description' => 'Serví como asistente en un templo o culto.',
                'skill1_id' => 9,
                'skill2_id' => 11,
            ],
            [
                'name' => 'Criminal',
                'description' => 'Tengo contactos en el mundo criminal y conocimientos de actividades ilegales.',
                'skill1_id' => 15,
                'skill2_id' => 16,
            ],
            [
                'name' => 'Folk Hero',
                'description' => 'Protejo a la gente común con valentía y perseverancia.',
                'skill1_id' => 1,
                'skill2_id' => 13,
            ],
            [
                'name' => 'Noble',
                'description' => 'Vengo de una familia rica y poderosa.',
                'skill1_id' => 6,
                'skill2_id' => 18,
            ],
            [
                'name' => 'Sage',
                'description' => 'He pasado años estudiando temas intelectuales y antiguos.',
                'skill1_id' => 5,
                'skill2_id' => 6,
            ],
            [
                'name' => 'Soldier',
                'description' => 'Entrenado para la guerra y la disciplina militar.',
                'skill1_id' => 1,
                'skill2_id' => 16,
            ],
            [
                'name' => 'Entertainer',
                'description' => 'Me he ganado la vida entreteniendo a las masas.',
                'skill1_id' => 17,
                'skill2_id' => 2,
            ],
            [
                'name' => 'Guild Artisan',
                'description' => 'Mi oficio está reconocido por un gremio poderoso.',
                'skill1_id' => 18,
                'skill2_id' => 6,
            ],
            [
                'name' => 'Hermit',
                'description' => 'Viví en aislamiento y meditación.',
                'skill1_id' => 12,
                'skill2_id' => 7,
            ],
            [
                'name' => 'Outlander',
                'description' => 'Conozco bien la naturaleza y la supervivencia en el campo.',
                'skill1_id' => 1,
                'skill2_id' => 14,
            ],
            [
                'name' => 'Charlatan',
                'description' => 'Soy un engañador experto y maestro del disfraz.',
                'skill1_id' => 15,
                'skill2_id' => 3,
            ],
            [
                'name' => 'Urchin',
                'description' => 'Viví en las calles y conozco sus peligros.',
                'skill1_id' => 2,
                'skill2_id' => 4,
            ],
        ]);
    }
}
