<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
  protected $fillable = ['name', 'service_id', 'amount', 'description'];
  protected $casts = [ 'amount' => 'float' ];

  public function service()
  {
    return $this->belongsTo(Service::class);
  }

  public function services()
  {
    return $this->hasMany(Service::class);
  }

  public function bookings()
  {
    return $this->hasMany(Booking::class);
  }

  public function variations()
  {
    return $this->hasMany(ServiceVariation::class);
  }
}
