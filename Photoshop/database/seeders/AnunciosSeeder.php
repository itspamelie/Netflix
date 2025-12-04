<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class AnunciosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('anuncios')->insert([
            'nombre' => 'Anuncio Refrescos Verdes',
            'archivo' => 'anuncios/video_refresco.mp4',
            'tipo' => 'Video',
        ]);

         DB::table('anuncios')->insert([
            'nombre' => 'Banner Viajes Exóticos',
            'archivo' => 'anuncios/imagen_viajes.jpg',
            'tipo' => 'Banner',
        ]);

         DB::table('anuncios')->insert([
            'nombre' => 'Audio Promocional App',
            'archivo' => 'anuncios/audio_app.mp4',
            'tipo' => 'Video',
        ]);
    }
}
