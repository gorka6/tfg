<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 50);
            $table->bigInteger('hit_die');
            $table->unsignedBigInteger('sav_throw_1');
            $table->unsignedBigInteger('sav_throw_2');
            $table->text('start_eq_1')->nullable();
            $table->text('start_eq_2')->nullable();
            $table->text('start_eq_3')->nullable();
            $table->text('start_eq_4')->nullable();

            $table->foreign('sav_throw_1')->references('id')->on('attributes');
            $table->foreign('sav_throw_2')->references('id')->on('attributes');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
