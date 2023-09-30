<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WisataController;
use App\Http\Controllers\NilaialtController;
use App\Http\Controllers\RekomendasiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ HomeController::class, 'index'  ]);
Route::get('/wisata', [ HomeController::class, 'wisata'  ])->name('list.wisata');
Route::get('/erick', [ HomeController::class, 'erick'  ])->name('erick');
Route::get('/rekomendasiwisata', [ HomeController::class, 'formreko'])->name('formreko.wisata');
Route::post('/hitungbobot', [ HomeController::class, 'hitungbobot'])->name('hitungbobot');
Route::get('/hasilrekomendasi', [ HomeController::class, 'hasilrekomendasi'  ])->name('hasilrekomendasi');


Route::get('/guest', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    //crud alternatif / data tempat wisata
    Route::get('/listwisata', [WisataController::class,'index'])->name('admin.wisata');
    Route::get('/createwisata', [WisataController::class,'create'])->name('create.wisata');
    Route::post('/storewisata', [WisataController::class, 'store'])->name('store.wisata');
    Route::get('/wisata/edit', [WisataController::class, 'edit'])->name('edit.wisata');
    Route::post('/wisata/update', [WisataController::class, 'update'])->name('update.wisata');
    Route::post('/wisata/delete', [WisataController::class, 'destroy'])->name('delete.wisata');
     //crud bobot nilai wisata
     Route::get('/listnilaialt', [nilaialtController::class,'index'])->name('admin.nilaialt');
     Route::get('/nilaialt/edit', [nilaialtController::class, 'edit'])->name('edit.nilaialt');
     Route::post('/nilaialt/update', [nilaialtController::class, 'update'])->name('update.nilaialt');
     Route::post('/nilaialt/delete', [nilaialtController::class, 'destroy'])->name('delete.nilaialt');

});

require __DIR__.'/auth.php';