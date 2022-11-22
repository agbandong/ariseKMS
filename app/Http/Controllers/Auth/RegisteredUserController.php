<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Organization;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $organization = Organization::where('name', $request->organization)->get();

        $request->validate([
            'name' => 'required|string|max:255',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'position' => 'required|string|max:255',
            'organization' => ['required', 'string', 'max:255', function ($attribute, $value, $fail) {
                if (Organization::where('name', $value)->exists()) {
                    if(!Organization::where('name', $value)->get()->firstOrFail()->approved){
                        return $fail("The provided $attribute is not approved, please wait for approval.");
                    }
                }
                else{ return $fail("The provided $attribute is not registered."); }
            }],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        //dd(Organization::where('name', $request->organization)->get()->firstOrFail()->id);
        if ($request->organization == 'Arise Philippines') {
            $role = 'admin';
        }
        else{
            $role = 'member';
        }

        $user = User::create([
            'name' => $request->name,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'organization_id' => $organization->firstOrFail()->id, 
            'position' => $request->position,
            'role' => $role,
            'approved' => $request->approved,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
