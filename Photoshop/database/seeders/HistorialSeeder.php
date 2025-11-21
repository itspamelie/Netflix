<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class HistorialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('historiales')->insert([

            // ======================================================
            // 1) Película vista parcialmente (sin episodio_id)
            // ======================================================
            [
                'perfil_id' => 2,                // usuario 1 (admin, por ej.)
                'contenido_id' => 1,           // Avengers Endgame (película)
                'episodio_id' => null,         // las películas NO tienen episodio
                'progreso_segundos' => 3500,   // 58 minutos aprox
                'completado' => false,
                'created_at' => now(),
                'updated_at' => now()
            ],

            // ======================================================
            // 2) Serie: Breaking Bad - Episodio 1 comenzado
            // ======================================================
            [
                'perfil_id' => 2,
                'contenido_id' => 3,           // Breaking Bad
                'episodio_id' => 1,            // Episodio 1 (Pilot)
                'progreso_segundos' => 1200,   // 20 minutos
                'completado' => false,
                'created_at' => now(),
                'updated_at' => now()
            ],

            // ======================================================
            // 3) Serie: Breaking Bad - Episodio 2 completado
            // ======================================================
            [
                'perfil_id' => 2,
                'contenido_id' => 3,           
                'episodio_id' => 2,            // Episodio 2
                'progreso_segundos' => 9999,   // marca alta → terminado
                'completado' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],

            // ======================================================
            // 4) Serie: Stranger Things - Episodio 1 empezado
            // ======================================================
            [
                'perfil_id' => 3,
                'contenido_id' => 4,           // Stranger Things
                'episodio_id' => 2,            // Episodio 1 de S1
                'progreso_segundos' => 1800,   // 30 minutos
                'completado' => false,
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);
    }
}
