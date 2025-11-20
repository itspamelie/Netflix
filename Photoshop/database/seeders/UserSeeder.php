<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            ['name'=>'Administrador','email'=>'admin@example.com','password'=>Hash::make('admin123'),'img'=>'default.jpg','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'David Vega','email'=>'david@example.com','password'=>Hash::make('secret123'),'img'=>'default.png','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Carlos Jiménez','email'=>'carlos@example.com','password'=>Hash::make('carlos123'),'img'=>'default.jpg','created_at'=>now(),'updated_at'=>now()]
        ]);

    }
}
