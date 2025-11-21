<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//IMPORTAR CONTROLADORES PARA LA RUTA
use App\Http\Controllers\AnunciosController;
use App\Http\Controllers\ClasificacionesController;
use App\Http\Controllers\ContenidosController;
use App\Http\Controllers\DatosPagosController;
use App\Http\Controllers\EpisodiosController;
use App\Http\Controllers\GenerosController;
use App\Http\Controllers\HistorialesController;
use App\Http\Controllers\ImgsController;
use App\Http\Controllers\ListasController;
use App\Http\Controllers\PerfilesController;
use App\Http\Controllers\SuscripcionesController;
use App\Http\Controllers\TemporadasController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AuthController;

//RUTA DEL LOGIN
Route::post('/login',[AuthController::class,'login']);

Route::middleware("jwt")->group(function(){
//redirecciona al index de AccountsController
Route::resource('ads', AnunciosController::class);
Route::resource('classifications', ClasificacionesController::class);
Route::resource('content', ContenidosController::class);
Route::resource('payment_details', DatosPagosController::class);
Route::resource('episodes', EpisodiosController::class);
Route::resource('genres', GenerosController::class);
Route::resource('history', HistorialesController::class);
Route::resource('images', ImgsController::class);
Route::resource('lists', ListasController::class);
Route::resource('profiles', PerfilesController::class);
Route::resource('subscriptions', SuscripcionesController::class);
Route::resource('seasons', TemporadasController::class);
Route::resource('users', UsersController::class);

});