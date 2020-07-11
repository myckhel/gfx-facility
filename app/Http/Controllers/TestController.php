<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Artisan;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Str;

use Whatsnum\Checkwa\Check;

class TestController extends Controller
{
  public function test(Request $request){
    $user = \App\User::first();
    $other_user = \App\User::find(2);

    $callbackRes = json_decode(json_encode([
      'code'        => '1',
      'num'         => '2348110000606',
      'has_picture' => '1',
      'token'       => 'YfLDMlNuwBR6xNIQ',
    ]));

    // event(new \App\Events\CheckWaCallback($callbackRes));
    \App\Jobs\BroadcastCheckwaCallback::dispatch($callbackRes)
                ->delay(30);
    // (new \App\Jobs\BroadcastCheckwaCallback($callbackRes));


    // $check = new Check('private');
    //
    // $res = ['res' => $check->check(8110000606, 234, ['token' => Str::random(), 'hide_image' => '1'])];

    return [$callbackRes];
  }

  public function testCallback(Request $request)
  {
    $req = [
      'code'        => '1',
      'num'         => '2348110000606',
      'has_picture' => '1',
      'token'       => 'YfLDMlNuwBR6xNIQ',
    ];

    $req = json_decode(json_encode($req));

    event(new \App\Events\CheckWaCallback($req));
  }

  public function reset()
  {
    // Artisan::call('app:reset');
  }

  public function welcome()
  {
    return view('welcome');
  }

  public function clearCache()
  {
    $exitCode = Artisan::call('cache:clear');
    return '<h1>Cache facade value cleared</h1>';
  }

  public function appReset()
  {
    $exitCode = Artisan::call('app:reset');
    return '<h1>Cache facade value cleared</h1>';
  }

  public function optimize()
  {
    $exitCode = Artisan::call('optimize');
    return '<h1>Reoptimized class loader</h1>';
  }

  public function routeCache()
  {
    $exitCode = Artisan::call('route:cache');
    return '<h1>Routes cached</h1>';
  }

  public function routeClear()
  {
    $exitCode = Artisan::call('route:clear');
    return '<h1>Route cache cleared</h1>';
  }

  public function viewClear()
  {
    $exitCode = Artisan::call('view:clear');
    return '<h1>View cache cleared</h1>';
  }

  public function configCache()
  {
    $exitCode = Artisan::call('config:cache');
    return '<h1>Clear Config cleared</h1>';
  }

  public function countUsers()
  {
    return ['count' => \App\User::count()];
  }

  public function view()
  {
    return view('welcome');
  }
}
