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
       // Prerequisitos
        SuscripcionSeeder::class, // primero para que UsersSeeder funcione
        ImgSeeder::class,
        GeneroSeeder::class,
        ClasificacionSeeder::class,
        // Tablas principales
        UserSeeder::class,
        DatosPagosSeeder::class,
        PerfilesSeeder::class,
        ContenidoSeeder::class,
        TemporadaSeeder::class,
        EpisodioSeeder::class, 
        // Tablas sin dependencias de FK
        AnunciosSeeder::class, 
        // Tablas de relación/transaccionales
        MiListaSeeder::class,
        HistorialSeeder::class,
    ]);

    }
}
