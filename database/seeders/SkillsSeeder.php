<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class SkillsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('skills')->insert([
            ['name' => 'Athletics', 'description' => 'Fuerza física para escalar, saltar o nadar.', 'attribute_id' => 1],
            ['name' => 'Acrobatics', 'description' => 'Equilibrio y maniobras ágiles.', 'attribute_id' => 2],
            ['name' => 'Sleight of Hand', 'description' => 'Destreza manual para trucos y hurtos.', 'attribute_id' => 2],
            ['name' => 'Stealth', 'description' => 'Moverse sigilosamente sin ser detectado.', 'attribute_id' => 2],
            ['name' => 'Arcana', 'description' => 'Conocimiento sobre magia y hechizos.', 'attribute_id' => 3],
            ['name' => 'History', 'description' => 'Conocimiento sobre eventos pasados y culturas.', 'attribute_id' => 3],
            ['name' => 'Investigation', 'description' => 'Buscar pistas y deducir información.', 'attribute_id' => 3],
            ['name' => 'Nature', 'description' => 'Conocimiento sobre plantas, animales y clima.', 'attribute_id' => 3],
            ['name' => 'Religion', 'description' => 'Conocimiento sobre dioses, rituales y dogmas.', 'attribute_id' => 3],
            ['name' => 'Animal Handling', 'description' => 'Trato y control de animales.', 'attribute_id' => 4],
            ['name' => 'Insight', 'description' => 'Leer emociones e intenciones de otras personas.', 'attribute_id' => 4],
            ['name' => 'Medicine', 'description' => 'Diagnosticar enfermedades y tratar heridas.', 'attribute_id' => 4],
            ['name' => 'Perception', 'description' => 'Notar detalles, sonidos o movimientos importantes.', 'attribute_id' => 4],
            ['name' => 'Survival', 'description' => 'Encontrar comida, rastrear y orientarse en la naturaleza.', 'attribute_id' => 4],
            ['name' => 'Deception', 'description' => 'Engañar y mentir con convicción.', 'attribute_id' => 5],
            ['name' => 'Intimidation', 'description' => 'Usar amenazas para influir o asustar.', 'attribute_id' => 5],
            ['name' => 'Performance', 'description' => 'Actuar, cantar o entretener a una audiencia.', 'attribute_id' => 5],
            ['name' => 'Persuasion', 'description' => 'Convencer o influir en otros mediante palabras.', 'attribute_id' => 5],
        ]);
    }
}
