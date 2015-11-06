<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


$app->get('/', function() use ($app) {
  return 'working';
});

$app->group(['prefix' => 'api','namespace' => 'App\Http\Controllers'], function($app)
            {
              $app->get('goal','GoalController@index');

              $app->get('goal/{id}','GoalController@getGoal');

              $app->post('goal','GoalController@createGoal');

              $app->put('goal/{id}','GoalController@updateGoal');

              $app->delete('goal/{id}','GoalController@deleteGoal');
            });

