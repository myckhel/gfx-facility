<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
  protected $fillable = ['name', 'description', 'length', 'amount'];

  public function bookings()
  {
    return $this->hasMany(Booking::class);
  }
}
