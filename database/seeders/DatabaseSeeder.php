<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'a',
            'email' => 'a@a.a',
            'password' => 'a'
        ]);

        $this->call([
        AttributesSeeder::class,
        LanguagesSeeder::class,
        RacesSeeder::class,
        SkillsSeeder::class,
        BackgroundsSeeder::class,
        ClassesSeeder::class,
        SubracesSeeder::class,
        TraitsSeeder::class,
        RacesLanguagesSeeder::class,
        ClassesSkillsSeeder::class,
        AttributeBonusesSeeder::class,
    ]);
    }
}
