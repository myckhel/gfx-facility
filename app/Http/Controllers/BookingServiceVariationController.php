<?php

namespace App\Http\Controllers;

use App\BookingServiceVariation;
use App\Booking;
use App\Variation;
use Illuminate\Http\Request;

class BookingServiceVariationController extends Controller
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

      return $user->booking_service_variations()
      ->with(['variation', 'booking'])->paginate($pageSize);
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
        'booking_id'      => 'int',
        'variation_ids'   => 'array',
        'variation_ids.*' => 'int',
      ]);

      $booking          = Booking::findOrFail($request->booking_id);
      // Variation::findOrFail($request->variation_id);

      return $booking->variations()->createMany(
        array_map(fn ($id) => ['variation_id' => $id], $request->variation_ids)
      );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BookingServiceVariation  $bookingServiceVariation
     * @return \Illuminate\Http\Response
     */
    public function show(BookingServiceVariation $bookingServiceVariation)
    {
      return $bookingServiceVariation->load(['variation', 'booking']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BookingServiceVariation  $bookingServiceVariation
     * @return \Illuminate\Http\Response
     */
    public function edit(BookingServiceVariation $bookingServiceVariation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BookingServiceVariation  $bookingServiceVariation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BookingServiceVariation $bookingServiceVariation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BookingServiceVariation  $bookingServiceVariation
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookingServiceVariation $bookingServiceVariation)
    {
      if ($bookingServiceVariation->variation || $bookingServiceVariation->booking) {
        $interval->delete();
      } else {
        $interval->forceDelete();
      }

      return ['status' => true];
    }
}
