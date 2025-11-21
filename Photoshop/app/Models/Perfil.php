<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    protected $table="perfiles";
    protected $fillable = [
        'name',
        'user_id',
        'img_id',
        'tipo_cuenta'
    ];

     //INNER JOIN CON USER_ID
    public function  user(){
        return $this->hasOne(User::class,'id','user_id');
    }
     //INNER JOIN CON IMG_ID
    public function  img(){
        return $this->hasOne(Img::class,'id','img_id');
    }
}
