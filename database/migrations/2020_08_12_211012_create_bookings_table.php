<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('bookings', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->bigInteger('service_id')->unsigned()->nullable();
          $table->bigInteger('interval_id')->unsigned()->nullable();
          $table->bigInteger('location_id')->unsigned()->nullable();
          $table->enum('status', ['pending', 'accepted', 'rejected', 'canceled', 'completed'])->default('pending');
          $table->timestamps();
          $table->foreign('service_id')->references('id')->on('services')->onDelete('set null');
          $table->foreign('interval_id')->references('id')->on('intervals')->onDelete('cascade');
          $table->foreign('location_id')->references('id')->on('locations')->onDelete('set null');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
