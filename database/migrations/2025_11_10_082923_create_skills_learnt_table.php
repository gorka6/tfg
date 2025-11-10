<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('skills_learnt', function (Blueprint $table) {
            $table->unsignedBigInteger('character_id');
            $table->unsignedBigInteger('skill_id');

            $table->primary(['character_id', 'skill_id']);

            $table->foreign('character_id')->references('character_id')->on('characters');
            $table->foreign('skill_id')->references('skill_id')->on('skills');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('skills_learnt');
    }
};
