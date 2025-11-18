<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('traits', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 50);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('race_id')->nullable();
            $table->unsignedBigInteger('subrace_id')->nullable();
            $table->unsignedBigInteger('class_id')->nullable();

            $table->foreign('race_id')->references('id')->on('races');
            $table->foreign('subrace_id')->references('id')->on('subraces');
            $table->foreign('class_id')->references('id')->on('classes');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('traits');
    }
};

