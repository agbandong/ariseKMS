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
            //
            $table->string('title')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->foreignId('organization_id')->constrained('organizations');
            $table->string('position');
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
            $table->dropColumn('title');
            $table->dropColumn('first_name');
            $table->dropColumn('last_name');
            $table->dropUnique('organization_id');
            $table->dropIndex('position');
        });
    }
};
