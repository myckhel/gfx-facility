<?php

namespace App\Http\Controllers;

use App\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $this->validatePagination($request, [

      ]);

      $user           = $request->user();
      $search         = $request->search;
      $orderBy        = $request->orderBy;
      $pageSize       = $request->pageSize;

      return $user->locations()->search($search)->paginate($pageSize);
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
        'user_id'   => 'int|nullable',
        'address'   => 'required',
        'state'     => 'required',
        'city'      => 'required',
        'notes'     => ''
      ]);

      $user = $request->user('api');

      return Location::create([
        'user_id'  => $user ? $user->id : $request->user_id,
        'address'  => $request->address,
        'state'    => $request->state,
        'city'     => $request->city,
        'notes'    => $request->notes,
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
      return $location;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function edit(Location $location)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Location $location)
    {
      $request->validate([
        'address'   => '',
        'state'     => '',
        'city'      => '',
        'notes'     => ''
      ]);

      $location->update($request->all());
      return $location;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy(Location $location)
    {
      if ($location->bookings()->first()) {
        $location->delete();
      } else {
        $location->forceDelete();
      }

      return ['status' => true];
    }
}
