<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DatosPago extends Model
{
    protected $table="datospagos";
    protected $fillable=[
        'propietariotarjeta',
        'numerotarjeta',
        'cvv',
        'fechavencimiento',
        'user_id'
    ];

      //INNER JOIN CON USER_ID
    public function  user(){
        return $this->hasOne(User::class,'id','user_id');
    }

}
