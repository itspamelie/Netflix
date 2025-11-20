<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EpisodioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('episodios')->insert([

            // ===========================================================
            // BREAKING BAD - TEMPORADA 1 (temporada_id = 1)
            // ===========================================================
            [
                'temporada_id' => 1,
                'numero' => 1,
                'titulo' => 'Pilot',
                'duracion' => 58,
                'sinopsis' => 'Walter White descubre el negocio de la metanfetamina.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'temporada_id' => 1,
                'numero' => 2,
                'titulo' => 'Cat\'s in the Bag...',
                'duracion' => 48,
                'sinopsis' => 'Walt y Jesse tratan de limpiar un desastre.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'temporada_id' => 1,
                'numero' => 3,
                'titulo' => '...And the Bag\'s in the River',
                'duracion' => 47,
                'sinopsis' => 'Walt enfrenta una decisión moral complicada.',
                'created_at' => now(),
                'updated_at' => now()
            ],


            // ===========================================================
            // BREAKING BAD - TEMPORADA 2 (temporada_id = 2)
            // ===========================================================
            [
                'temporada_id' => 2,
                'numero' => 1,
                'titulo' => 'Seven Thirty-Seven',
                'duracion' => 47,
                'sinopsis' => 'Walt calcula cuánto dinero necesita ganar.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'temporada_id' => 2,
                'numero' => 2,
                'titulo' => 'Grilled',
                'duracion' => 48,
                'sinopsis' => 'Walt y Jesse son capturados por un rival peligroso.',
                'created_at' => now(),
                'updated_at' => now()
            ],


            // ===========================================================
            // STRANGER THINGS - TEMPORADA 1 (temporada_id = 4)
            // ===========================================================
            [
                'temporada_id' => 4,
                'numero' => 1,
                'titulo' => 'The Vanishing of Will Byers',
                'duracion' => 49,
                'sinopsis' => 'Un niño desaparece misteriosamente en Hawkins.',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'temporada_id' => 4,
                'numero' => 2,
                'titulo' => 'The Weirdo on Maple Street',
                'duracion' => 55,
                'sinopsis' => 'Aparece una niña misteriosa llamada Eleven.',
                'created_at' => now(),
                'updated_at' => now()
            ],

            // ===========================================================
            // STRANGER THINGS - TEMPORADA 2 (temporada_id = 5)
            // ===========================================================
            [
                'temporada_id' => 5,
                'numero' => 1,
                'titulo' => 'MADMAX',
                'duracion' => 48,
                'sinopsis' => 'Un nuevo jugador entra al equipo.',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);

    }
}
