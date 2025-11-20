<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MiListaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('miLista')->insert([

            // ===============================================
            // David (user_id = 1) quiere ver más tarde:
            // ===============================================

            [
                'user_id' => 1,
                'contenido_id' => 1, // Avengers (película)
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'user_id' => 1,
                'contenido_id' => 3, // Breaking Bad (serie)
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'user_id' => 1,
                'contenido_id' => 4, // Stranger Things (serie)
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ===============================================
            // Otro usuario (user_id = 2) — ejemplo extra
            // ===============================================

            [
                'user_id' => 2,
                'contenido_id' => 2, // Joker
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
