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
        Schema::create('contenidos', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descripcion');
            $table->string('tipo');
            $table->string('fechaEstreno');
            $table->string('duracion')->nullable();
            $table->string('portada');
            $table->string('video')->nullable();
            $table->foreignId('genero_id')->constrained('generos');
            $table->foreignId('clasificacion_id')->constrained('clasificaciones');
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
