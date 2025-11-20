<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PerfilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $avatarIds = Img::where('nombre', 'like', 'Avatar%')->pluck('id')->toArray();

        foreach ($users as $user) {
            // Crea 1 o 2 perfiles por usuario para simular
            $perfilesCount = ($user->id === 1) ? 1 : rand(1, 2);

            for ($i = 1; $i <= $perfilesCount; $i++) {
                 DB::table('perfiles')->insert([
                    'user_id' => $user->id,
                    'name' => ($i === 1) ? $user->name . ' (Principal)' : 'Hijo ' . $i,
                    'img_id' => $avatarIds[array_rand($avatarIds)],
                    'tipo_cuenta' => ($i === 1) ? 'Adulto' : 'Infantil',
                ]);
            }
}
    }
}