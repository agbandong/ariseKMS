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
        Schema::table('organizations', function (Blueprint $table) {
            //
            /*
            $table->string('company_country');
            $table->string('headquarters_country');
            $table->string('legal_company_country');
            //$table->boolean('has_proof');
            //$table->string('registration_proofs_path', 2048)->nullable();
            //$table->string('registration_proofs_excuse')->nullable();
            //$table->unsignedInteger('company_fax', 20)->nullable();
            //$table->string('website', 2048);
            $table->boolean('is_in_trade_association');
            $table->boolean('is_in_business_alliance');
            $table->string('exchange_name')->nullable();
            $table->string('exchange_symbol', 10)->nullable();
            $table->string('is_subsidiary_details')->nullable();
            $table->integer('number_employees');
            $table->integer('past_annual_revenue');
            $table->string('description_business_and_activities');
            //$table->string('country_focus')->nullable();
            /*The link to documents on current engagements*/
            //$table->string('current_engangement_path', 2048)->nullable();*/
            
            /*Check if need to create sector table*/
            /*$table->string('sector');*/
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('organizations', function (Blueprint $table) {
            //
        });
    }
};
