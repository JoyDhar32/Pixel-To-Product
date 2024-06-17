<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StripePaymentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{name}/{amount}',[StripePaymentController::class,'index']) ->name('index');
Route::post('/checkout',[StripePaymentController::class,'checkout'])->name('checkout');

Route::get('/success',[StripePaymentController::class,'success'])->name('success');