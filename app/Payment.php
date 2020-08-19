<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
  protected $fillable = ['access_code', 'booking_id', 'message', 'amount', 'status', 'reference', 'authorization_code', 'currency_code', 'payed_at'];

  public function updatePay($paymentDetails)
  {
    return $this->update([
      'status'              => 'success',// dev purpose $paymentDetails['status'],
      'message'             => $paymentDetails['message'],
      'reference'           => $paymentDetails['reference'],
      'authorization_code'  => $paymentDetails['authorization'] ? $paymentDetails['authorization']['authorization_code'] : null,
      'currency_code'       => $paymentDetails['currency'],
      'paid_at'             => now(),//$paymentDetails['data']['paidAt'],
    ]);
  }

  public function booking(){
    return $this->belongsTo(Booking::class);
  }

  public function works()
  {
    return $this->hasMany(Work::class);
  }

  public function user(){
    return $this->booking->user;
  }
}
