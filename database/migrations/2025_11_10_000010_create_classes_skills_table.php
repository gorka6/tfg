<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('classes_skills', function (Blueprint $table) {
            $table->unsignedBigInteger('class_id');
            $table->unsignedBigInteger('skill_id');

            $table->primary(['class_id', 'skill_id']);

            $table->foreign('class_id')->references('class_id')->on('classes');
            $table->foreign('skill_id')->references('skill_id')->on('skills');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('classes_skills');
    }
};

