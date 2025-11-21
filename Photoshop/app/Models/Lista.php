<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
        protected $table="listas";
    protected $fillable=[
        'perfil_id',
        'contenido_id'
    ];

     //INNER JOIN CON PERFIL_ID
    public function  perfil(){
        return $this->hasOne(Perfil::class,'id','perfil_id');
    }
     //INNER JOIN CON CONTENIDO_ID
    public function  contenido(){
        return $this->hasOne(Contenido::class,'id','contenido_id');
    }
}
