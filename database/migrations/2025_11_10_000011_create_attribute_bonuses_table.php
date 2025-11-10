<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('attribute_bonuses', function (Blueprint $table) {
            $table->bigIncrements('bonus_id');
            $table->unsignedBigInteger('race_id');
            $table->unsignedBigInteger('subrace_id')->nullable();
            $table->unsignedBigInteger('attribute_id');
            $table->bigInteger('bonus');

            $table->foreign('race_id')->references('race_id')->on('races');
            $table->foreign('subrace_id')->references('subrace_id')->on('subraces');
            $table->foreign('attribute_id')->references('attribute_id')->on('attributes');

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('attribute_bonuses');
    }
};

