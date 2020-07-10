<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
  protected $fillable = ['booking_id', 'period', 'start_at', 'time_at'];

  public function booking()
  {
    return $this->belongsTo(Booking::class);
  }
}
