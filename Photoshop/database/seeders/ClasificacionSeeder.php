<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ClasificacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
           DB::table('clasificaciones')->insert([
            ['nombre' => 'A','descripcion'=>'Apta para todos los públicos: El contenido es apropiado para todas las edades.'],
            ['nombre' => 'B','descripcion'=>'Recomendada para mayores de 7 o 12 años: El contenido no es recomendado para menores de esa edad, puede verse en compañía de un adulto.'],
            ['nombre' => 'C','descripcion'=>'Restringida para mayores de 15 o 17 años: El contenido puede ser inapropiado para menores. '],
            ['nombre' => 'D','descripcion'=>'Solo para adultos (18+): Contenido explícito, como violencia o sexo, que no se considera adecuado para menores.']
        ]);
    }
}
