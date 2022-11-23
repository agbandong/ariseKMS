<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Organization::create([
            'name' => 'Arise Philippines',
            'company_country' => 'Philippines',
            'headquarters_country' => 'Philippines',
            'legal_company_country' => 'Philippines',
            'company_fax' => null,
            'website' => 'https://www.arise.ph/',
            'is_in_trade_association' => false,
            'is_in_business_alliance' => true,
            'exchange_name' => null,
            'exchange_symbol' => null,
            'is_subsidiary_details' => 'Subsidiary of Arise',
            'number_employees' => 70,
            'past_annual_revenue' => 100,
            'currency' => 'Philippine Peso',
            'description_business_and_activities' => 'Arise',
            'country_focus' => 'Philippines',
            'sector' => 'Social assistance',
            'approved' => true,
        ]);

        User::create([
            'name' => 'Admin',
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => 'admin@Arise.com',
            //Find hash
            'password' => Hash::make('password!@#$%12345'),
            'organization_id' => 1, 
            'position' => 'admin',
            'role' => 'admin',
            'approved' => true,
        ]);

        Organization::factory(20)->create();
        User::factory(20)->create();
    }
}
