<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookingServiceVariation extends Model
{
  protected $fillable = [ 'booking_id', 'variation_id' ];

  public function booking()
  {
    return $this->belongsTo(Booking::class);
  }

  public function variation()
  {
    return $this->belongsTo(Variation::class);
  }
}
