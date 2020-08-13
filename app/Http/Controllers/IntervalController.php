<?php

namespace App\Http\Controllers;

use App\Interval;
use Illuminate\Http\Request;

class IntervalController extends Controller
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

      $search         = $request->search;
      $orderBy        = $request->orderBy;
      $pageSize       = $request->pageSize;

      return Interval::search($search)->paginate($pageSize);
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
        'name'      => 'required',
        'quantity'  => 'required|int',
      ]);

      return Interval::create([
        'name'      => $request->name,
        'quantity'  => $request->quantity,
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Interval  $interval
     * @return \Illuminate\Http\Response
     */
    public function show(Interval $interval)
    {
      return $interval;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Interval  $interval
     * @return \Illuminate\Http\Response
     */
    public function edit(Interval $interval)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Interval  $interval
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Interval $interval)
    {
      $request->validate([
        'name'      => '',
        'quantity'  => 'int',
      ]);

      $interval->update($request->all());
      return $interval;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Interval  $interval
     * @return \Illuminate\Http\Response
     */
    public function destroy(Interval $interval)
    {
      if ($interval->bookings()->first()) {
        $interval->delete();
      } else {
        $interval->forceDelete();
      }
      
      return ['status' => true];
    }
}
