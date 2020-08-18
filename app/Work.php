<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
  protected $fillable = ['booking_id', 'payment_id', 'status', 'attempted_by'];

  public function booking()
  {
    return $this->belongsTo(Booking::class);
  }

  public function payment()
  {
    return $this->belongsTo(Payment::class);
  }
}
