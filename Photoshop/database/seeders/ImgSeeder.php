<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImgSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('imgs')->insert([
            ['nombre' => 'Avatar Rojo', 'img' => 'avatar_rojo.png'],
            ['nombre' => 'Avatar Azul', 'img' => 'avatar_azul.png'],
            ['nombre' => 'Avatar Verde', 'img' => 'avatar_verde.png'],
            ['nombre' => 'Avatar Amarillo', 'img' => 'avatar_amarillo.png'],
            ['nombre' => 'Avatar Morado', 'img' => 'avatar_morado.png']
        ]);
    }
}
