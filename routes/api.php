<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'guest'], function () {
  Route::post('/login', 'Auth\LoginController@login');
  Route::post('/register', 'Auth\RegisterController@register');

});

Route::post('/locations',     'LocationController@store');
Route::resource('intervals',  'IntervalController')->only(['index', 'show']);
Route::resource('services',   'ServiceController')->only(['index', 'show']);
Route::resource('variations', 'VariationController')->only(['index', 'show']);
Route::resource('service_variations', 'ServiceVariationController')->only(['index', 'show']);

Route::group(['middleware' => 'auth:api'], function () {
  Route::get('whoami', fn (Request $request) => $request->user());
  Route::get('logout', 'Auth\LoginController@logout');

  Route::resource('locations', 'LocationController')->except('store');
  Route::apiResources([
    'metas'           => 'MetaController',
    'medias'          => 'MediaController',
  ]);
});

Route::group([], function () {
  // Route::get('whoami', fn (Request $request) => $request->user());
  // Route::get('logout', 'Auth\LoginController@logout');

  Route::resource('intervals',  'IntervalController')->only(['store', 'update', 'destroy']);
  Route::resource('services',   'ServiceController')->only(['store', 'update', 'destroy']);
  Route::resource('variations', 'VariationController')->only(['store', 'update', 'destroy']);
  Route::resource('service_variations', 'ServiceVariationController')->only(['store', 'update', 'destroy']);
  Route::apiResources([
    // 'intervals'          => 'IntervalController',
  ]);
});
