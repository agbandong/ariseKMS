<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::table('users', function (Blueprint $table) {
            //Note create a role table later for later
                $table->foreignId('organization_id')->constrained();
                $table->string('first_name');
                $table->string('last_name');
                $table->string('role');
                $table->string('position');
                $table->boolean('approved');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            
        });
    }
};
