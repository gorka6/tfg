<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('races_languages', function (Blueprint $table) {
            $table->unsignedBigInteger('race_id');
            $table->unsignedBigInteger('language_id');

            $table->primary(['race_id', 'language_id']);

            $table->foreign('race_id')->references('race_id')->on('races');
            $table->foreign('language_id')->references('language_id')->on('languages');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('races_languages');
    }
};

