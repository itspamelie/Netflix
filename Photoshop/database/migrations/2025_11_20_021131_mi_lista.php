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
        Schema::create('miLista', function (Blueprint $table) {
    $table->id();
    // ID único del registro (cada fila = un contenido guardado por un user)
    $table->foreignId('user_id')->constrained('users');
    // Usuario que guardó el contenido
    $table->foreignId('contenido_id')->constrained('contenidos');
    // Contenido que quiere ver más tarde (película o serie)
    $table->timestamps();
    // Cuándo se agregó a la lista
    $table->unique(['user_id', 'contenido_id']);
    // Evita que el usuario agregue el mismo contenido dos veces
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
