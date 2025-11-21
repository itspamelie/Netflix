<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contenido extends Model
{
      protected $table="contenidos";
    protected $fillable=[
        'titulo',
        'descripcion',
        'tipo',
        'fechaEstreno',
        'duracion',
        'portada',
        'video',
        'genero_id',
        'clasificacion_id'
    ];

      //INNER JOIN CON CLASIFICACION_ID
    public function  clasificacion(){
        return $this->hasOne(Clasificacion::class,'id','clasificacion_id');
    }
      //INNER JOIN CON GENERO_ID
    public function  genero(){
        return $this->hasOne(Genero::class,'id','genero_id');
    }
}
