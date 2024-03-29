<?php

namespace Database\Factories;

use App\Models\Organization;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {  
        $firstName = fake()->firstName();
        $lastName = fake()->lastName();
        return [
            'name' => $firstName . ' ' . $lastName,
            'first_name' => $firstName,
            'last_name' => $lastName,
            'organization_id' => (Organization::where('approved', true)->count() > 0) ? Organization::where('approved', true)->inRandomOrder()->first()->id : null,
            'role' => fake()->name(),
            'position' => fake()->jobTitle(),
            'approved'=> rand(0,1) == 1,
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => fake()->dateTime(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
