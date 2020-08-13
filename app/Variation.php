<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Searchable;
use App\Service;

class Variation extends Model
{
  use Searchable;

  protected $fillable = [ 'name'];
  protected $casts    = [ 'name'];

  public function service_variations()
  {
    return $this->hasMany(ServiceVariation::class);
  }
}
