<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Organization>
 */
class OrganizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $sectorChoices = [
            "Administrative, support, waste management & remediation service",
            "Agriculture",
            "Arts, entertainment & recreation",
            "Construction",
            "Consumer goods",
            "Educational services",
            "Energy",
            "Engineering",
            "Finance",
            "Health care",
            "Hospitality",
            "Information & communication technology",
            "Insurance & reinsurance",
            "Management of companies & enterprises",
            "Manufacturing",
            "Media",
            "Mining",
            "Public administration",
            "Professional, scientific & technical services",
            "Real estate, rental & leasing",
            "Retail trade",
            "Social assistance",
            "Transportation",
            "Tourism",
            "Wholesale trade",
            "Utilities",
        ];
        $name = fake()->company();
        $hasExchange = rand(0,1) == 1;
        return [
            //
            'name' => $name,
            'company_country' => fake()->country(),
            'headquarters_country' => fake()->country(),
            'legal_company_country' => fake()->country(),
            //Edit company_fax later fake->phoneNumber()
            'company_fax' => rand(10000000,9999999),
            'website' => 'www.' . $name . '.com',
            'is_in_trade_association' => rand(0,1) == 1,
            'is_in_business_alliance' => rand(0,1) == 1,
            'exchange_name' => $hasExchange? $name: null,
            //Edit exchange_symbol later
            'exchange_symbol' => $hasExchange? fake()->stateAbbr(): null,
            'is_subsidiary_details' => rand(0,1) == 1? 'Subsidiary of ' . fake()->company():null,
            'number_employees' => rand(1, 10000),
            'currency' => fake()->currencyCode(),
            'past_annual_revenue' => rand(10000, 1000000),
            'description_business_and_activities' => fake()->catchPhrase(),
            'country_focus' => fake()->country(),
            'sector' => $sectorChoices[rand(0,count($sectorChoices)-1)],
            'approved' => rand(0,1) == 1,
        ];
    }
}
