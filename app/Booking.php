<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
  protected $fillable = [ 'service_id', 'interval_id', 'location_id', 'status'];

  public function getPaymentAmount()
  {
    // temp
    return $this->service->amount;
  }

  public function getAmount()
  {
    return $this->service->amount;
  }

  public function schedule()
  {
    return $this->hasOne(Schedule::class);
  }

  public function variations()
  {
    return $this->hasMany(BookingServiceVariation::class);
  }

  public function works()
  {
    return $this->hasMany(Work::class);
  }

  public function payments()
  {
    return $this->hasMany(Payment::class);
  }

  public function service()
  {
    return $this->belongsTo(Service::class);
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function location()
  {
    return $this->belongsTo(Location::class);
  }

  public function interval()
  {
    return $this->belongsTo(Interval::class);
  }
}
