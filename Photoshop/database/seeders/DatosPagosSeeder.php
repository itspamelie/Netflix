<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DatosPagosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
DB::table('datospagos')->insert([
            [
                'user_id' => 1,
                'propietariotarjeta' => 'Admin User',
                'numerotarjeta' => '4000 1234 5678 0001', // Ficticio
                'cvv' => 123,
                'fechavencimiento' => '2028-10-01',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'propietariotarjeta' => 'Laura García',
                'numerotarjeta' => '5000 9876 5432 0002',
                'cvv' => 456,
                'fechavencimiento' => '2027-05-01',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 3,
                'propietariotarjeta' => 'Carlos Pérez',
                'numerotarjeta' => '3700 1111 2222 0003',
                'cvv' => 789,
                'fechavencimiento' => '2026-12-01',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
        
    }
}
