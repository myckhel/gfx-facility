<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Searchable;

class Interval extends Model
{
  use Searchable;

  protected $fillable = ['name', 'quantity'];
  protected $casts    = ['quantity' => 'int'];

  public $searches    = ['name', 'quantity'];

  public function bookings()
  {
    return $this->hasMany(Booking::class);
  }
}
