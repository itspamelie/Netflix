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
        Schema::create('listas', function (Blueprint $table) {
    $table->id();
    $table->foreignId('perfil_id')->constrained('perfiles');
    $table->foreignId('contenido_id')->constrained('contenidos');
    $table->timestamps();
    // Cuándo se agregó a la lista...
    $table->unique(['perfil_id', 'contenido_id']);
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
