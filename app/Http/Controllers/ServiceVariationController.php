<?php

namespace App\Http\Controllers;

use App\Service;
use App\Variation;
use App\ServiceVariation;
use Illuminate\Http\Request;

class ServiceVariationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return ServiceVariation::with(['variation', 'service'])->get();
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
        'service_id'    => 'required|int',
        'variation_id'  => 'required|int',
        'value'         => 'required',
        'amount'        => 'numeric',
      ]);

      $service          = Service::findOrFail($request->service_id);
      Variation::findOrFail($request->variation_id);

      return $service->variations()->create([
        'service_id'      => $request->service_id,
        'variation_id'    => $request->variation_id,
        'value'           => $request->value,
        'amount'          => $request->amount,
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ServiceVariation  $serviceVariation
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceVariation $serviceVariation)
    {
      return $serviceVariation->load(['service', 'variation']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ServiceVariation  $serviceVariation
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceVariation $serviceVariation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ServiceVariation  $serviceVariation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceVariation $serviceVariation)
    {
      $request->validate([
        'service_id'    => 'int',
        'variation_id'  => 'int',
        'value'         => '',
        'amount'        => 'numeric',
      ]);

      $request->service_id && Service::findOrFail($request->service_id);
      $request->variation_id && Variation::findOrFail($request->variation_id);

      $serviceVariation->update($request->all());
      return $serviceVariation;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ServiceVariation  $serviceVariation
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceVariation $serviceVariation)
    {
      $serviceVariation->delete();
      return ['status' => true];
    }
}
