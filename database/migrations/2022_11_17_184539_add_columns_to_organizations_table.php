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
            
            $table->string('company_country');
            $table->string('headquarters_country');
            $table->string('legal_company_country');
            //$table->boolean('has_proof');
            //$table->string('registration_proofs_path', 2048)->nullable();
            //$table->string('registration_proofs_excuse')->nullable();
            $table->integer('company_fax')->nullable();
            $table->string('website')->nullable();
            $table->boolean('is_in_trade_association');
            $table->boolean('is_in_business_alliance');
            $table->string('exchange_name')->nullable();
            $table->string('exchange_symbol', 10)->nullable();
            $table->string('is_subsidiary_details')->nullable();
            $table->integer('number_employees');
            $table->integer('past_annual_revenue');
            $table->string('currency');
            $table->string('description_business_and_activities');
            $table->string('country_focus')->nullable();
            $table->string('sector');
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
        Schema::table('organizations', function (Blueprint $table) {
            //
        });
    }
};
