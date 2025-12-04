<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FichaController;

Route::get('/', function () {
    return Inertia::render('Home/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('fichas/{ficha}/pdf-es', [FichaController::class, 'pdfEs'])->name('fichas.pdf_es');
    Route::get('fichas/{ficha}/pdf-en', [FichaController::class, 'pdfEn'])->name('fichas.pdf_en');
    Route::get('fichas/tiradas', [FichaController::class, 'tiradas'])->name('fichas.tiradas');
    Route::resource('fichas', FichaController::class);
});

require __DIR__ . '/auth.php';
