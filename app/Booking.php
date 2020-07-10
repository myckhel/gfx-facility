<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
  protected $fillable = ['user_id', 'service_id', 'package_id', 'address', 'note', 'status'];

  public function getAmount()
  {
    return $this->service->amount;
  }

  public function schedule()
  {
    return $this->hasOne(Schedule::class);
  }

  public function service()
  {
    return $this->belongsTo(Service::class);
  }

  public function package()
  {
    return $this->belongsTo(Package::class);
  }

  public function location()
  {
    return $this->belongsTo(Location::class);
  }

  public function car()
  {
    return $this->belongsTo(Car::class);
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
