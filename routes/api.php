<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Land: Public Api
use App\Http\Controllers\Api\land\v1\CategoryController as landCategoryV1;
use App\Http\Controllers\Api\land\v2\CategoryController as landCategoryV2;

Route::apiResource('land/v1/category', landCategoryV1::class)->only(['index', 'show']);
Route::apiResource('land/v2/category', landCategoryV2::class)->only(['index', 'show']);


// CMS: Private Api for CMS
use App\Http\Controllers\Api\cms\v1\CategoryController as cmsCategoryV1;

Route::apiResource('cms/v1/category', cmsCategoryV1::class);
