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
            $table->bigIncrements('id');
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
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

            $table->foreign('background_id')->references('id')->on('backgrounds');
            $table->foreign('race_id')->references('id')->on('races');
            $table->foreign('subrace_id')->references('id')->on('subraces');
            $table->foreign('class_id')->references('id')->on('classes');
            $table->enum('alignment', [
                'lg', 'ng', 'cg',
                'ln', 'tn', 'cn',
                'le', 'ne', 'ce'
            ])->default('tn');

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
