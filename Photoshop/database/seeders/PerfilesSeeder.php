<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class PerfilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        // Perfil para USER_ID = 1 (Adulto)
        DB::table('perfiles')->insert([
            [
                'user_id' => 3,
                'name' => 'Admin User (Principal)',
                'img_id' => 3,
                'tipo_cuenta' => 'Adulto',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
        
        // Perfiles para USER_ID = 2 (Adulto e Infantil)
        DB::table('perfiles')->insert([
            // Perfil Adulto (Principal)
            [
                'user_id' => 2,
                'name' => 'Laura García (Principal)', // Asumiendo el nombre del usuario 2 del seeder anterior
                'img_id' => 2,
                'tipo_cuenta' => 'Adulto',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Perfil Infantil
            [
                'user_id' => 2,
                'name' => 'Hijo 1',
                'img_id' => 1,
                'tipo_cuenta' => 'Infantil',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);            

    }
}