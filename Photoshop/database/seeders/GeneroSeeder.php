<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GeneroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $generos = [
            'Acción',
            'Comedia',
            'Drama',
            'Ciencia Ficción',
            'Terror',
            'Documental',
            'Romance',
            'Infantil'
        ];

        foreach ($generos as $nombre) {
             DB::table('generos')->insert(['nombre' => $nombre]);
        }
    }
}
