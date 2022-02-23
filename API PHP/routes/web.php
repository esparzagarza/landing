<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    echo response("Not found", 404);
});
