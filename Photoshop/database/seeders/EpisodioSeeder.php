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
                'contenido_id' => 2,
                'numero' => 1,
                'titulo' => 'Pilot',
                'duracion' => 58,
                'video' => 'pilotbreakingbad.mp4',
                'sinopsis' => 'Walter White descubre el negocio de la metanfetamina.',
                'created_at' => now(),
                'updated_at' => now()
            ],

            // ===========================================================
            // STRANGER THINGS - TEMPORADA 1 (temporada_id = 4)
            // ===========================================================
            [
                'temporada_id' => 4,
                'contenido_id' => 4,
                'numero' => 1,
                'titulo' => 'The Vanishing of Will Byers',
                'duracion' => 49,
                'video' => 'cap1st.mp4',
                'sinopsis' => 'Un niño desaparece misteriosamente en Hawkins.',
                'created_at' => now(),
                'updated_at' => now()
            ],
    

        ]);

    }
}
