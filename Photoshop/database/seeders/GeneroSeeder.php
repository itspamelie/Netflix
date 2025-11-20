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
        DB::table('generos')->insert([
            ['nombre' => 'Acción'],
            ['nombre' => 'Comedia'],
            ['nombre' => 'Drama'],
            ['nombre' => 'Aventura'],
            ['nombre' => 'Terror'],
            ['nombre' => 'Ciencia Ficción'],
            ['nombre' => 'Animación'],
        ]);
    }
}
