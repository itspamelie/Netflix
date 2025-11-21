<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Historial extends Model
{
    protected $table="historiales";
    protected $fillable=[
    'perfil_id',
    'contenido_id',
    'episodio_id',
    'progreso_segundos',
    'completado',
];
  //INNER JOIN CON PERFIL_ID
    public function  perfil(){
        return $this->hasOne(Perfil::class,'id','perfil_id');
    }
     //INNER JOIN CON CONTENIDO_ID
    public function  contenido(){
        return $this->hasOne(Contenido::class,'id','contenido_id');
    }
     //INNER JOIN CON EPISODIO_ID
    public function  episodio(){
        return $this->hasOne(Episodio::class,'id','episodio_id');
    }


}
