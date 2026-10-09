<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'app')->name('home');

// Serve the React app shell for client-side dashboard routes on refresh.
Route::view('/admin/{path?}', 'app')->where('path', '.*');
Route::view('/auth/{path?}', 'app')->where('path', '.*');
Route::view('/rtl/{path?}', 'app')->where('path', '.*');
