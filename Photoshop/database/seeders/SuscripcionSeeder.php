<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class SuscripcionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('suscripciones')->insert([
            ['nombre' => 'Básico', 'costo_mensual' => 149.99, 'descripcion' => 'Calidad estándar, 1 pantalla.','cantidad_perfiles'=>1,'fecha_pagos'=>now()->day],
            ['nombre' => 'Estándar', 'costo_mensual' => 199.99, 'descripcion' => 'Calidad HD, 2 pantallas.','cantidad_perfiles'=>2,'fecha_pagos'=>now()->day],
            ['nombre' => 'Premium', 'costo_mensual' => 299.99, 'descripcion' => 'Calidad 4K, 4 pantallas.','cantidad_perfiles'=>4,'fecha_pagos'=>now()->day],
        ]);

    }
}
