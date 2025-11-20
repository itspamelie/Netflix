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
            ['name'=>'Administrador','email'=>'admin@example.com','password'=>Hash::make('123'), 'phone'=>'6361992890', 'role'=>1,'img'=>'default.jpg', 'suscripcion_id'=>2, 'estatus_suscripcion'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'David Vega','email'=>'david@example.com','password'=>Hash::make('123'), 'phone'=>'6361992890', 'role'=>0,'img'=>'default.png', 'suscripcion_id'=>2, 'estatus_suscripcion'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Carlos Jiménez','email'=>'carlos@example.com','password'=>Hash::make('123'), 'phone'=>'6361992890', 'role'=>0,'img'=>'default.jpg', 'suscripcion_id'=>3, 'estatus_suscripcion'=>true,'created_at'=>now(),'updated_at'=>now()]
        ]);

    }
}
