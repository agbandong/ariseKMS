<?php

namespace App\Actions\Fortify;

use App\Models\Organization;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            //'name' => ['required', 'string', 'max:255'],
            'title' => ['string', 'max:50'],
            'first_name' => ['required', 'string', 'max:122'],
            'last_name' => ['required', 'string', 'max:122'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'organization' => ['required', 'string', 'max:25'],
            'position' => ['required', 'string', 'max:50'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();
        
        //Note to self mess with the validator later
        $validateOrg = Organization::get()->contains('name', $input['organization']);
        //TODO add error
        if(!$validateOrg)  {return back();};

        return User::create([
            'name' => $input['first_name'] . ' ' . $input['last_name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'title' => $input['has_title'] ? $input['title'] : null,
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            //TODO create a organization generator
            'organization_id' => Organization::where('name', $input['organization'])->pluck('id')->first(),
            'position' => $input['position'],
        ]);
    }
}
