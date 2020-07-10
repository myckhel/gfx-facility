<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
  protected $fillable = ['name', 'service_id', 'amount', 'description', 'isdefault', 'subtitles', 'length'];
  protected $casts = ['subtitles' => 'json', 'isdefault' => 'bool', 'amount' => 'float', 'length' => 'float'];

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

  public function parent(){
    return $this->belongsTo(Service::class);
  }

  public function child(){
    return $this->hasOne(Service::class);
  }

  // public function leave(){
  //   if ($this->child()->exists()) {
  //     return
  //   } else {
  //
  //   }
  // }

  // public function scopeLeave($q){
  //   return $q->when($this->child()->exists(), function($q) {
  //
  //   }, function($q){
  //
  //   });
  // }
}
