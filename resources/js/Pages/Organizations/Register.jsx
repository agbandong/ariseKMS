import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    

    const form /*{ data, setData, post, processing, errors, reset }*/ = useForm({
        name: '',
        /*
        company_country : '',
        headquarters_country_same : false,
        headquarters_country : '',
        legal_company_country_same : false,
        legal_company_country : '',
        //hasProof : boolean;
        //registrationProofsPath : string;
        //companyFax : Nullable<number>;
        //website : string;
        is_in_trade_association : false,
        is_in_business_alliance : false,
        is_publically_traded : false,
        exchange_name : '',
        exchange_symbol : '',
        is_subsidiary : false,
        is_subsidiary_details : '',
        number_employees : 1,
        past_annual_revenue : 0,
        description_business_and_activities : '',
        //country_focus : Nullable<string>;
        //current_engagement_path : string;
        sector : '',
        /*Legal representative*/
        //legal_reprentative_country : string;
        //legal_reprentative_street : string;
        //legal_reprentative_city : string;
        //legal_reprentative_province_state : string;
        //legal_reprentative_post_zip_code : string;
        //legal_representative_phone : number;
        /*Primary contact*/
        //contact_country : '',
        //contact_street : '',
        //contact_city : '',
        //contact_province_state : '',
        //contact_post_zip_code : '',
        //contact_phone : '',

        /*terms : false,
        //newUsers : [],*/
    });

    

    useEffect(() => {
        return () => {
            form.reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        form.setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        form.post(route('register/organization'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Name" />

                    <TextInput
                        type="text"
                        name="name"
                        value={form.data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={form.errors.name} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('register')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Company already registered?
                    </Link>

                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already have an account?
                    </Link>

                    <PrimaryButton className="ml-4" processing={form.processing}>
                        Register
                    </PrimaryButton>
                </div>
                {/*Hello*/}
            </form>
            
        </GuestLayout>
    );
}
