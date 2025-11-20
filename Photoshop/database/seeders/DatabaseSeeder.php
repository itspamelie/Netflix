<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
        UserSeeder::class,
        GeneroSeeder::class,
        ContenidoSeeder::class,
        TemporadaSeeder::class,
        EpisodioSeeder::class,
        HistorialSeeder::class,
        MilistaSeeder::class,
    ]);

    }
}
