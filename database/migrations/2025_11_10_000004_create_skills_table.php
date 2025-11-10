<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('skills', function (Blueprint $table) {
            $table->bigIncrements('skill_id');
            $table->string('name', 50);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('attribute_id');

            $table->foreign('attribute_id')->references('attribute_id')->on('attributes');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('skills');
    }
};


