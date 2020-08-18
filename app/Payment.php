<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
  protected $fillable = ['access_code', 'booking_id', 'message', 'amount', 'status', 'reference', 'authorization_code', 'currency_code', 'payed_at'];

  public function booking(){
    return $this->belongsTo(Booking::class);
  }

  public function works()
  {
    return $this->hasMany(Work::class);
  }

  public function user(){
    return $this->booking->user;
  }
}
