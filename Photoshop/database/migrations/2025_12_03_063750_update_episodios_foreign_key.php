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
        Schema::table('episodios', function (Blueprint $table) {
        $table->dropForeign(['contenido_id']);
        $table->foreign('contenido_id')
              ->references('id')
              ->on('contenidos')
              ->onDelete('cascade');
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
          Schema::table('episodios', function (Blueprint $table) {
        $table->dropForeign(['contenido_id']);
        $table->foreign('contenido_id')
              ->references('id')
              ->on('contenidos');
    });
    }
};
