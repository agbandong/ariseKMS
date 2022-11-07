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
            $table->string('company_country');
            $table->string('headquarters_country');
            $table->string('legal_company_country');
            $table->boolean('has_proof');
            $table->string('registration_proof_path', 2048)->nullable();
            //TODO address
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
            //list any other organizations or platforms in the area of DRR, CSR or sustainable development that you are a member of
            //list and attach a copy of any documents that showcase your current engagement in DRR, CSR or sustainable development
            $table->string('sector');
            //Other
            $table->string('description_business_and_activities');
            $table->string('description_business_activities');
            $table->timestamps();
            //User
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
