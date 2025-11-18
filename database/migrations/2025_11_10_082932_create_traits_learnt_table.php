<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('traits_learnt', function (Blueprint $table) {
            $table->unsignedBigInteger('character_id');
            $table->unsignedBigInteger('trait_id');

            $table->primary(['character_id', 'trait_id']);

            $table->foreign('character_id')->references('id')->on('fichas');
            $table->foreign('trait_id')->references('id')->on('traits');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('traits_learnt');
    }
};

