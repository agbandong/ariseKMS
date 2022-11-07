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
            //Company Information
            $table->string('name');
            $table->string('legal_representative_name');
            $table->string('legal_representative_title');
            //Duped in application?
            $table->string('company_country');
            $table->string('headquarters_country');
            $table->string('legal_company_country');
            $table->boolean('has_proof');
            $table->string('registration_proofs_path', 2048)->nullable();
            //Address
            $table->string('company_street');
            $table->string('company_city');
            $table->string('company_province_state');
            $table->string('company_post_zip_code');
            $table->string('company_street');
            $table->unsignedInteger('company_phone', 20);
            $table->unsignedInteger('company_fax', 20)->nullable();
            $table->string('website', 2048);
            $table->boolean('is_trade_org');
            $table->boolean('is_in_association');
            $table->string('exchange_name')->nullable();
            $table->string('exchange_symbol', 10)->nullable();
            $table->string('is_subsiary_details')->nullable();
            $table->unsignedInteger('number_employees', 10000000);
            $table->unsignedInteger('past_annual_revenue');
            //UN AND CSR RELATED AFFILIATIONS
            $table->boolean('is_member_UN_compact');
            $table->string('affiliated_UN_agency')->nullable();
            //TODO
            //list organizations or platforms in the area of DRR, CSR or sustainable development that you are a member of
            //AKA create a table for UN Affiliations
            $table->string('current_engangement_path', 2048)->nullable();
            $table->string('sector');
            //Other
            $table->string('description_business_and_activities');
            $table->string('description_business_activities');
            $table->timestamps();
            //Primary Contact
            $table->foreignId('primary_contact_id');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organizations');
    }
};
