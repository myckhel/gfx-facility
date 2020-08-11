<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Location extends Model
{
  protected $fillable = ['user_id', 'address', 'state', 'city', 'notes'];

  public function user(){
    return $this->belongsTo(User::class);
  }
}
