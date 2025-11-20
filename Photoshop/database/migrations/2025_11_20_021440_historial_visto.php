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
        Schema::create('historiales', function (Blueprint $table) {
    $table->id();
    $table->foreignId('perfil_id')->constrained('perfiles');
    $table->foreignId('contenido_id')->constrained('contenidos');
    // Episodio visto (solo se usa si el contenido es serie)
    // Si es película, este valor será NULL
    $table->foreignId('episodio_id')
          ->nullable()
          ->constrained('episodios');
    $table->integer('progreso_segundos')->default(0);
    $table->boolean('completado')->default(false);
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
