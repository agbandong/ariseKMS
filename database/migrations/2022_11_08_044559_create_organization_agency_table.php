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
        Schema::create('organization_agency', function (Blueprint $table) {
            $table->id();
            //Check this later
            $table->foreignId('organization_id') -> constrained() -> onDelete('cascade');
            $table->foreignId('affiliated_agency_id') -> constrained()  -> onDelete('cascade');
            $table->timestamps();

            
            $table->index('organization_id');
            $table->index('affiliated_agency_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organization_agency');
    }
};
