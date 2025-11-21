<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Suscripcion extends Model
{
    protected $table="suscripciones";
    protected $fillable=[
        'nombre',
        'descripcion',
        'cantidad_perfiles',
        'costo_mensual',
        'fecha_pagos',
    ];

}
