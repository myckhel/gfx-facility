<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Service;

class ServiceVariation extends Model
{
  protected $fillable = [ 'service_id', 'variation_id', 'value', 'amount'];
  protected $casts    = [ 'amount' => 'float'];

  public function service()
  {
    return $this->belongsTo(Service::class);
  }

  public function variation()
  {
    return $this->belongsTo(Variation::class);
  }
}
