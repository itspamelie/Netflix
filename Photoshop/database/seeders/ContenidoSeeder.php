<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ContenidoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contenidos')->insert([
            
            // ==========================
            // PELÍCULAS
            // ==========================
            [
                'titulo' => 'Avengers: Endgame',
                'descripcion' => 'Los Vengadores intentan revertir el chasquido de Thanos.',
                'tipo' => 'pelicula',
                'fechaEstreno' => '2019',
                'duracion' => '181', // minutos
                'clasificacion_id' => 3,
                'portada' => 'endgame.jpg',
                'video' => 'endgame.mp4',
                'genero_id' => 1, // Acción
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'titulo' => 'Joker',
                'descripcion' => 'La historia de la transformación de Arthur Fleck en el Joker.',
                'tipo' => 'pelicula',
                'fechaEstreno' => '2019',
                'duracion' => '122',
                'clasificacion_id' => 4,
                'portada' => 'joker.jpg',
                'video' => 'joker.mp4',
                'genero_id' => 3, // Drama
                'created_at' => now(),
                'updated_at' => now()
            ],

            // ==========================
            // SERIES (NO llevan duración)
            // ==========================
            [
                'titulo' => 'Breaking Bad',
                'descripcion' => 'Un profesor de química se convierte en fabricante de drogas.',
                'tipo' => 'serie',
                'fechaEstreno' => '2008',
                'duracion' => null,   // las series no tienen duración total
                'clasificacion_id' => 4,
                'portada' => 'breakingbad.jpg',
                'video' => 'breakingbadc1.mp4',
                'genero_id' => 3, // Drama
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'titulo' => 'Stranger Things',
                'descripcion' => 'Un grupo de niños enfrenta fuerzas sobrenaturales en Hawkins.',
                'tipo' => 'serie',
                'fechaEstreno' => '2016',
                'duracion' => null,
                'clasificacion_id' => 2,
                'portada' => 'strangerthingsc1.jpg',
                'video' => 'strangerthingsc1.mp4',
                'genero_id' => 6, // Ciencia Ficción
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);
    }
}
