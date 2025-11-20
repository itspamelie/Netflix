<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TemporadaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('temporadas')->insert([

            // ================================
            // BREAKING BAD (contenido_id = 3)
            // ================================
            [
                'contenido_id' => 3,
                'numero' => 1,
                'titulo' => 'Season 1',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'contenido_id' => 3,
                'numero' => 2,
                'titulo' => 'Season 2',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'contenido_id' => 3,
                'numero' => 3,
                'titulo' => 'Season 3',
                'created_at' => now(),
                'updated_at' => now()
            ],

            // ===================================
            // STRANGER THINGS (contenido_id = 4)
            // ===================================
            [
                'contenido_id' => 4,
                'numero' => 1,
                'titulo' => 'Season 1',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'contenido_id' => 4,
                'numero' => 2,
                'titulo' => 'Season 2',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'contenido_id' => 4,
                'numero' => 3,
                'titulo' => 'Season 3',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);
    }
}
