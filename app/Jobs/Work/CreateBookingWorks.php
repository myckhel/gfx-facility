<?php

namespace App\Jobs\Work;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;

class CreateBookingWorks implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $payment;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($payment)
    {
      $this->payment = $payment;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
      $payment    = $this->payment;
      $booking    = $payment->booking;
      $schedule   = $booking->schedule;
      $interval   = $booking->interval;

      $creates    = [];
      $i          = 0;

      do {
        $creates[] = [
          'booking_id' => $booking->id,
        ];
        $i++;
      } while ((int)$interval->quantity > $i);

      $payment->works()->createMany($creates);
    }
}
