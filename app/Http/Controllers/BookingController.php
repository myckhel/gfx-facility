<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Service;
use App\Location;
use App\Interval;
use Illuminate\Http\Request;

class BookingController extends Controller
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

      $user = $request->user('api');

      return $user->bookings()->with(['schedule', 'location', 'service', 'variations'])
      ->latest()->paginate($pageSize);
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
        'booking_id'  => 'int',
        'location_id' => 'int',
        'interval_id' => 'int',
        'start_at'    => 'date|after:now'
      ]);

      $user           = $request->user('api');
      $location_id    = $request->location_id;
      $service_id     = $request->service_id;
      $interval_id    = $request->interval_id;
      $variation_ids  = $request->variation_ids;

      Service::findOrFail($service_id);
      $location = Location::findOrFail($location_id);
      $interval = Interval::findOrFail($interval_id);

      $booking        = $user->bookings()->create([
        'service_id'  => $service_id,
        'interval_id' => $interval_id,
        'location_id' => $location_id,
      ]);

      $request->booking_id = $booking->id;
      $bookControl         = new ScheduleController;

      $schedule   = $bookControl->store($request);

      $bookServiceVariationControl  = new BookingServiceVariationController;

      $request->booking_id    = $booking->id;
      $bookServiceVariation   = $bookServiceVariationControl->store($request);

      $booking->schedule = $schedule;
      $booking->location = $location;
      $booking->interval = $interval;
      $booking->bookServiceVariations = $bookServiceVariation;
      return $booking;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
      return $booking->load(['schedule', 'location', 'service', 'variations']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
      $status     = $request->status;
      $booking->update([
        'status'  => $status,
      ]);
      return $booking;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
