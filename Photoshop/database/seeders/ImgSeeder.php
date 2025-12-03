<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ImgSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('imgs')->insert([
            ['nombre' => 'Avatar Rojo', 'img' => 'avatar_rojo.jpg'],
            ['nombre' => 'Avatar Azul', 'img' => 'avatar_azul.jpg'],
            ['nombre' => 'Avatar Verde', 'img' => 'avatar_verde.png'],
            ['nombre' => 'Avatar Amarillo', 'img' => 'avatar_amarillo.jpg'],
            ['nombre' => 'Avatar Morado', 'img' => 'avatar_morado.jpg']
        ]);
    }
}
