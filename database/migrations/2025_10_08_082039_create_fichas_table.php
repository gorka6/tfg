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
        Schema::create('fichas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('nombre');
            $table->integer('ataque');
            $table->enum('alignment', [
            'Lawful Good','Neutral Good','Chaotic Good',
            'Lawful Neutral','True Neutral','Chaotic Neutral',
            'Lawful Evil','Neutral Evil','Chaotic Evil'
            ])->default('True Neutral');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fichas');
    }
};
