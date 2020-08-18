<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('works', function (Blueprint $table) {
        $table->id();
        $table->bigInteger('booking_id')->unsigned()->nullable();
        $table->bigInteger('payment_id')->unsigned();
        $table->enum('status', ['processing', 'on hold', 'pending', 'completed', 'canceled', 'failed'])->default('pending');
        $table->bigInteger('attempted_by')->unsigned()->nullable();
        $table->timestamps();
        $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('set null');
        $table->foreign('payment_id')->references('id')->on('payments')->onDelete('cascade');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('works');
    }
}
