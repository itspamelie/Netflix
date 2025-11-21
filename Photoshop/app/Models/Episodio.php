<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Episodio extends Model
{
    protected $table="episodios";
    protected $fillable=[
        'titulo',
        'numero',
        'duracion',
        'sinopsis',
        'video',
        'temporada_id',
        'contenido_id'
    ];
  //INNER JOIN CON TEMPORADA_ID
    public function  temporada(){
        return $this->hasOne(Temporada::class,'id','temporada_id');
    }
      //INNER JOIN CON CONTENIDO_ID
    public function  contenido(){
        return $this->hasOne(Contenido::class,'id','contenido_id');
    }
}
