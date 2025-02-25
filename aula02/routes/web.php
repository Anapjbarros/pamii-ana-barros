<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users/{param}/{paramii}', function ($param, $paramii) {
    return $param. '-'. $paramii;
});

Route::prefix('usuarios')->group(function(){
    Route::get('/edit', function() {
        return 'edit';
    });
    Route::get('/delete', function(){
        return 'delete';
    });
});