<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});
Route::get('/about-us', function () {
    return Inertia::render('AboutScreen');
});
Route::get('/rmncah', function () {
    return Inertia::render('RMNCAHScreen');
});
Route::get('/hivaidstb', function () {
    return Inertia::render('HivAidsTbScreen');
});
Route::get('/watsan', function () {
    return Inertia::render('WatSanScreen');
});
Route::get('/advocacy', function () {
    return Inertia::render('AdvocacyScreen');
});
Route::get('/gallery', function () {
    return Inertia::render('GalleryScreen');
});
Route::get('/donate', function () {
    return Inertia::render('DonateScreen');
});
