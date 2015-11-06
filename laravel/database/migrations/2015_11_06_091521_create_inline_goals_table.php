<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInlineGoalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
      Schema::create('goals', function(Blueprint $table)
                     {
                       $table->increments('id');
                       $table->string('title');
                       $table->string('author');
                       $table->string('status');
                       $table->timestamps();
                     });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
      Schema::drop('goals');
    }
}
