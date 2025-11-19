<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('skills_learnt', function (Blueprint $table) {
            $table->unsignedBigInteger('ficha_id');
            $table->unsignedBigInteger('skill_id');

            $table->primary(['ficha_id', 'skill_id']);

            $table->foreign('ficha_id')->references('id')->on('fichas');
            $table->foreign('skill_id')->references('id')->on('skills');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('skills_learnt');
    }
};
