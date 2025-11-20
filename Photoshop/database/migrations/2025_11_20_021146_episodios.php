<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('episodios', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');//titulo de la serie o pelicukla
            $table->integer('numero'); // número de episodio dentro de la temporada
            $table->integer('duracion'); // duración
            $table->string('sinopsis');
            $table->string('video');
            $table->timestamps(); //recomendado
            $table->foreignId('temporada_id')->constrained('temporadas');
            $table->foreignId('contenido_id')->constrained('contenidos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
