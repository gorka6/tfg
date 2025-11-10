<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('backgrounds', function (Blueprint $table) {
            $table->bigIncrements('background_id');
            $table->string('name', 50);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('skill1_id');
            $table->unsignedBigInteger('skill2_id');

            $table->foreign('skill1_id')->references('skill_id')->on('skills');
            $table->foreign('skill2_id')->references('skill_id')->on('skills');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('backgrounds');
    }
};

