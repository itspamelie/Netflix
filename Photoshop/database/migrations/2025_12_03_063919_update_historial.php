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
         Schema::table('historiales', function (Blueprint $table) {

        // Primero removemos FKs actuales
        $table->dropForeign(['perfil_id']);
        $table->dropForeign(['contenido_id']);
        $table->dropForeign(['episodio_id']);

        // Las volvemos a crear con cascade
        $table->foreign('perfil_id')
            ->references('id')->on('perfiles')
            ->onDelete('cascade');

        $table->foreign('contenido_id')
            ->references('id')->on('contenidos')
            ->onDelete('cascade');

        $table->foreign('episodio_id')
            ->references('id')->on('episodios')
            ->onDelete('cascade');
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        
    Schema::table('historiales', function (Blueprint $table) {

        $table->dropForeign(['perfil_id']);
        $table->dropForeign(['contenido_id']);
        $table->dropForeign(['episodio_id']);

        // Restaurar sin cascade
        $table->foreign('perfil_id')->references('id')->on('perfiles');
        $table->foreign('contenido_id')->references('id')->on('contenidos');
        $table->foreign('episodio_id')->references('id')->on('episodios');
    });
    }
};
