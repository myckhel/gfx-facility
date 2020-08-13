<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return Service::whereDoesntHave('service')->with('services')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $request->validate([
        'name'          => 'required',
        'service_id'    => 'int',
        'description'   => 'required',
        'amount'        => 'required|numeric',
      ]);

      $name           = $request->name;
      $service_id     = $request->service_id;
      $description    = $request->description;
      $amount         = $request->amount;

      $create         = [
        'name'        => $name,
        'description' => $description,
        'amount'      => $amount,
      ];

      $service        = new Service;
      if($service_id) $service = Service::findOrFail($service_id);
      else return $service::create($create);

      return $service->services()->create($create);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
      return $service;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
      $request->validate([
        'name'          => '',
        'service_id'    => 'int',
        'description'   => '',
        'amount'        => 'numeric',
      ]);

      $service->update($request->all());
      return $service;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
      return ['status' => $service->delete()];
    }
}
