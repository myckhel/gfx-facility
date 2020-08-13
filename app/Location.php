<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Traits\Searchable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{
  use Searchable, SoftDeletes;
  protected $fillable = ['user_id', 'address', 'state', 'city', 'notes'];
  public $searches = ['state', 'address', 'city'];

  public function user(){
    return $this->belongsTo(User::class);
  }

  public function bookings(){
    return $this->hasMany(Booking::class);
  }
}
