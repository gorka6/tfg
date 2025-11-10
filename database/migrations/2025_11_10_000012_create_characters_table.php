<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->bigIncrements('character_id');
            $table->string('name', 100);
            $table->unsignedBigInteger('background_id');
            $table->unsignedBigInteger('race_id');
            $table->unsignedBigInteger('subrace_id')->nullable();
            $table->unsignedBigInteger('class_id');
            $table->bigInteger('exp');
            $table->bigInteger('str');
            $table->bigInteger('dex');
            $table->bigInteger('con');
            $table->bigInteger('int');
            $table->bigInteger('wis');
            $table->bigInteger('cha');

            $table->foreign('background_id')->references('background_id')->on('backgrounds');
            $table->foreign('race_id')->references('race_id')->on('races');
            $table->foreign('subrace_id')->references('subrace_id')->on('subraces');
            $table->foreign('class_id')->references('class_id')->on('classes');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('characters');
    }
};

