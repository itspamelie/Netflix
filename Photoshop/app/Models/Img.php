<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Img extends Model
{
    protected $table="imgs";
    protected $fillable=[
        'nombre',
        'img',];

}
