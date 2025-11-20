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
        Schema::create('historial_visto', function (Blueprint $table) {
    // ID del registro de historial (cada fila es una "vista" de algo)
    $table->id();

    // Usuario que vio el contenido
    $table->foreignId('user_id')->constrained('users');

    // Contenido visto (película o serie)
    $table->foreignId('contenido_id')->constrained('contenidos');

    // Episodio visto (solo se usa si el contenido es serie)
    // Si es película, este valor será NULL
    $table->foreignId('episodio_id')
          ->nullable()
          ->constrained('episodios');

    // Cuántos segundos lleva viendo (por ejemplo, para continuar donde se quedó)
    $table->integer('progreso_segundos')->default(0);

    // Si ya terminó de ver el contenido/episodio (true = ya lo acabó)
    $table->boolean('completado')->default(false);

    // Fechas de creación / actualización del registro
    $table->timestamps();
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
