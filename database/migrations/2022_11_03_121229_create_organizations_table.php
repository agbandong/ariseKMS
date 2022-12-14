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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            /*Company Information*/
            $table->string('name')->unique();
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
            
            /*Company representative*/
            //$table->foreignId('legal_representative_id');
            //$table->string('legal_representative_country');
            //$table->string('legal_representative_street');
            //$table->string('legal_representative_city');
            //$table->string('legal_representative_province_state');
            //$table->string('legal_representative_post_zip_code');
            //$table->integer('legal_representative_phone', $unsigned = true);
            
            /*For UN AND CSR RELATED AFFILIATIONS
            See affiliated agencies table*/
            
            /*Primary Contact*/
            //$table->foreignId('primary_contact_id');
            //$table->string('contact_country');
            //$table->string('contact_street');
            //$table->string('contact_city');
            //$table->string('contact_province_state');
            //$table->string('contact_post_zip_code');
            //$table->integer('contact_phone', $unsigned = true);
            /*For other invited users
            See organization invitations table*/
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
        Schema::dropIfExists('users');
        Schema::dropIfExists('organizations');
    }
};
