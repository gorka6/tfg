<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('subraces', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('race_id');
            $table->string('name', 50);
            $table->text('description')->nullable();

            $table->foreign('race_id')->references('id')->on('races');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subraces');
    }
};
