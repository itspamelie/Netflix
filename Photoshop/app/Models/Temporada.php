<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Temporada extends Model
{
      protected $table="temporadas";
    protected $fillable=[
        'contenido_id',
        'numero',
        'titulo'
    ];

      //INNER JOIN CON CONTENIDO_ID
    public function  contenido(){
        return $this->hasOne(Contenido::class,'id','contenido_id');
    }
}
