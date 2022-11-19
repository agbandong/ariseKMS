import React, { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Checkbox from '@/Components/Checkbox';
import TextInput from '@/Components/TextInput';
import Dropdown from '@/Components/Dropdown';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const sectorChoices = [
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
        "Other"
    ]

    const form /*{ data, setData, post, processing, errors, reset }*/ = useForm({
        name: '',
        
        company_country : '',
        headquarters_country_same : false,
        headquarters_country : '',
        legal_company_country_same : false,
        legal_company_country : '',
        //hasProof : boolean;
        //registrationProofsPath : string;
        has_fax : false,
        company_fax : 0,
        website : '',
        is_in_trade_association : false,
        is_in_business_alliance : false,
        is_publically_traded : false,
        exchange_name : '',
        exchange_symbol : '',
        is_subsidiary : false,
        subsidiary_details : '',
        number_employees : 1,
        past_annual_revenue : 0,
        description_business_and_activities : '',
        has_country_focus : false,
        country_focus : '',
        sector : '',
        sector_other : '',

        //current_engagement_path : string;
        
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

        //terms : false,
        //newUsers : [],
    });
    
    const [start, end] = [0, 3];

    const [formPart, setFormPart] = useState(0);

    const onHandleChange = (event) => {
        form.setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        form.post(route('register/organization'));
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <h1 className='my-12 text-4xl'>Arise Company Membership Form</h1>
            <div className="w-full sm:max-w-6xl mb-4 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <Head title="Register" />

                {/*First Form: Company Details*/}
                <form onSubmit={submit}>
                    <div className={`${(formPart == start) ? '': 'hidden'}`}>
                        <h4 className='text-2xl'>Company Details</h4>
                        
                        {/* Company Name */}
                        <div>
                            <InputLabel forInput="name" value="Company Name*" />

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

                        {/* Company Country */}
                        <div className='mt-4'>
                            <InputLabel forInput="company_country" value="Country of location of company*" />

                            <TextInput
                                type="text"
                                name="company_country"
                                value={form.data.company_country}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={form.errors.company_country} className="mt-2" />
                        </div>
                        
                        {/* Company country Legal : May move */}
                        <div className='mt-4'>
                            
                            <InputLabel forInput="legal_company_country" value="Country of company where it is legally registered*" />
                            {!form.data.legal_company_country_same && (
                            <TextInput
                                type="text"
                                name="legal_company_country"
                                value={form.data.legal_company_country}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                            )}
                            <InputError message={form.errors.legal_company_country} className="mt-2" />
                        </div>

                        <div className="mt-2">
                            <InputLabel forInput="legal_company_country_same">
                            <div className="flex items-center">
                                <Checkbox
                                name="legal_company_country_same"
                                value={form.data.legal_company_country_same}
                                handleChange={onHandleChange}
                                />
                                <div className="ml-2">Same as applicant</div>
                            </div>
                            
                            <InputError className="mt-2" message={form.errors.legal_company_country_same} />
                            </InputLabel>
                        </div>
                        
                        {/* Company headquarters country */}
                        <div className='mt-4'>
                            
                            <InputLabel forInput="headquarters_country" value="Country of company headquarters*" />
                            {!form.data.headquarters_country_same && (
                            <TextInput
                                type="text"
                                name="headquarters_country"
                                value={form.data.headquarters_country}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                            )}
                            <InputError message={form.errors.headquarters_country} className="mt-2" />
                        </div>

                        <div className="mt-2">
                            <InputLabel forInput="headquarters_country_same">
                            <div className="flex items-center">
                                <Checkbox
                                name="headquarters_country_same"
                                value={form.data.headquarters_country_same}
                                handleChange={onHandleChange}
                                /*Just edit in model later*/
                                /*
                                Doesn't work with both...
                                {form.data.headquartersCountrySame? form.setData('headquartersCountry', '') 
                                : form.setData('headquartersCountry', form.data.companyCountry);}}}*/
                                />
                                <div className="ml-2">Same as applicant</div>
                            </div>
                            
                            <InputError className="mt-2" message={form.errors.headquarters_country_same} />
                            </InputLabel>
                        </div>
                        
                        {/* Company business sector */}
                        <div className='mt-4'>
                            <InputLabel forInput="sector" value="Business sector of the company*" />
                            
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <TextInput
                                        type="text"
                                        name="sector"
                                        value={form.data.sector}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        isFocused={true}
                                        required
                                    />
                                </Dropdown.Trigger>
                                    <Dropdown.Content align="left" width="60" height="48">
                                        {sectorChoices.map((choice, index)=>(
                                        <button key={index} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out" 
                                            onClick={() => form.setData('sector', choice)}>
                                            {choice}
                                        </button>
                                        ))}
                                    </Dropdown.Content>              
                            </Dropdown>

                            {(form.data.sector === 'Other') && (
                                <div className='mt-2 ml-8'>
                                    <InputLabel forInput="sectorOther" value="Enter sector*" />
                                    <TextInput
                                        type="text"
                                        name="sectorOther"
                                        value={form.data.sectorOther}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        isFocused={true}
                                        required
                                    />
                                </div>
                            )}
                            <InputError message={form.errors.sectorOther} className="mt-2" />
                            <InputError message={form.errors.sector} className="mt-2" />
                        </div>
                        
                        {/* Company Website */}
                        <div className='mt-4'>
                            <InputLabel forInput="website" value="Website of company*" />

                            <TextInput
                                type="text"
                                name="website"
                                value={form.data.website}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={form.errors.website} className="mt-2" />
                        </div>
                        
                        {/* In trade association */}
                        <div className="mt-4 flex">
                            <InputLabel forInput="is_in_trade_association" value="Are you a trade association?*" className="mr-2"/>
                                <Checkbox
                                name="is_in_trade_association"
                                value={form.data.is_in_trade_association}
                                handleChange={onHandleChange}
                                />
                            <InputError className="mt-2" message={form.errors.is_in_trade_association} />
                        </div>
                        
                        {/* In business alliance */}
                        <div className="mt-4 flex">
                            <InputLabel forInput="is_in_business_alliance" value="Are you a business association/alliance or network?" className="mr-2"/>
                                <Checkbox
                                name="is_in_business_alliance"
                                value={form.data.is_in_business_alliance}
                                handleChange={onHandleChange}
                                />
                            <InputError className="mt-2" message={form.errors.is_in_business_alliance} />
                        </div>
                        
                        {/* Exchange name and Exchange Symbol */}
                        <div className="mt-4 flex">
                            <InputLabel forInput="is_publically_traded" value="Are you a publicly traded company?" className="mr-2"/>
                                <Checkbox
                                name="is_publically_traded"
                                value={form.data.is_publically_traded}
                                handleChange={onHandleChange}
                                />
                            <InputError className="mt-2" message={form.errors.is_publically_traded} />
                        </div>
                        {form.data.is_publically_traded && (
                        <div className='ml-8'>
                            <div className='mt-2'>
                                <InputLabel forInput="exchange_name" value="What is your exchange name?*" />
                                <TextInput
                                    type="text"
                                    name="exchange_name"
                                    value={form.data.exchange_name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                                <InputError message={form.errors.exchange_name} className="mt-2" />
                            </div>

                            <div className='mt-2'>
                                <InputLabel forInput="exchange_symbol" value="What is your exchange symbol?*" />
                                <TextInput
                                    type="text"
                                    name="exchange_symbol"
                                    value={form.data.exchange_symbol}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            
                                <InputError message={form.errors.exchange_symbol} className="mt-2" />
                            </div>
                        </div>
                        )}

                        {/* Is company a subsidiary */}
                        <div className='mt-4'>
                            <div className='flex'>
                                <InputLabel forInput="is_subsidiary" value="Are you a subsidiary of a company?" />

                                <div className="ml-2 items-center">
                                    <Checkbox
                                    name="is_subsidiary"
                                    value={form.data.is_subsidiary}
                                    handleChange={onHandleChange}
                                    />
                                </div>
                                <InputError className="mt-2" message={form.errors.is_subsidiary} /> 
                            </div>
                            {form.data.is_subsidiary && (
                            <div>
                                <InputLabel className="mt-1" forInput="is_subsidiary" value="Explain:*" />
                                <TextInput
                                    type="text"
                                    name="subsidiary_details"
                                    value={form.data.subsidiary_details}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>)}
                            <InputError message={form.errors.subsidiary_details} className="mt-2" />
                        </div>
                        
                        {/* Number of employees */}
                        <div className='mt-4'>
                            <InputLabel forInput="number_employees" value="Current number of employees*" />

                            <TextInput
                                type="number"
                                name="number_employees"
                                value={form.data.number_employees}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={form.errors.number_employees} className="mt-2" />
                        </div>
                        
                        {/* Past annual revenue */}
                        <div className='mt-4'>
                            <InputLabel forInput="past_annual_revenue" value="Past annual revenue*" />

                            <TextInput
                                type="number"
                                name="past_annual_revenue"
                                value={form.data.past_annual_revenue}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={form.errors.past_annual_revenue} className="mt-2" />
                        </div>

                        <div className='mt-4'>
                            <InputLabel forInput="description_business_and_activities" value="Please provide a brief description of your business and primary activities*" />

                            <TextInput
                                type="text"
                                name="description_business_and_activities"
                                value={form.data.description_business_and_activities}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={form.errors.description_business_and_activities} className="mt-2" />
                        </div>
                        
                        {/* Fax */}
                        <div className='mt-4'>
                            <div className='flex'>
                                <InputLabel forInput="hasFax" value="Does your company have a fax machine?*" />

                                <div className="ml-2 items-center">
                                    <Checkbox
                                    name="hasFax"
                                    value={form.data.hasFax}
                                    handleChange={onHandleChange}
                                    />
                                </div>
                                <InputError className="mt-2" message={form.errors.hasFax} /> 
                            </div>
                            {form.data.hasFax && (
                            <div>
                                <InputLabel className="mt-1" forInput="companyFax" value="Enter number*" />
                                <TextInput
                                    type="number"
                                    name="companyFax"
                                    value={form.data.companyFax}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>)}
                            <InputError message={form.errors.companyFax} className="mt-2" />
                        </div>
                        
                        {/* Country Focus */}
                        <div className='mt-4'>
                            <div className='flex'>
                                <InputLabel forInput="has_country_focus" value="Does your company have a specific country focus?" />

                                <div className="ml-2 items-center">
                                    <Checkbox
                                    name="has_country_focus"
                                    value={form.data.has_country_focus}
                                    handleChange={onHandleChange}
                                    />
                                </div>
                                <InputError className="mt-2" message={form.errors.hasFax} /> 
                            </div>
                            {form.data.has_country_focus && (
                            <div>
                                <InputLabel className="mt-1" forInput="country_focus" value="Enter country*" />
                                <TextInput
                                    type="text"
                                    name="country_focus"
                                    value={form.data.country_focus}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>)}
                            <InputError message={form.errors.country_focus} className="mt-2" />
                        </div>
                    </div>
                    
                    {/*Second Form: Company Associations to public service*/}
                    <div className={`${(formPart == 1) ? '': 'hidden'}`}>
                        <h4 className='text-2xl'>Company associations to public service</h4>
                    </div>

                    {/*Third Form: Legal Represantative Details*/}
                    <div className={`${(formPart == 2) ? '': 'hidden'}`}>
                        <div className='mt-4'>
                            <h4 className='text-2xl'>Legal Represantative Details</h4>
                            <InputLabel forInput="name" value="First Name" />

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
                    </div>
                    
                    {/*Last Form: Primary Contact Details*/}
                    <div className={`${(formPart == end) ? '': 'hidden'}`}>
                        <h4 className='text-2xl'>Primary Contact for Arise Engagements and Communications</h4>

                        <div>
                            <InputLabel forInput="name" value="Last Name" />

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
                    </div>
                    

                    <div className="flex items-center justify-end mt-8">
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

                        <SecondaryButton className={`ml-4 ${(formPart == start) ? 'hidden': ''}`} onClick={()=>setFormPart((formPart) - 1)}>
                            Back
                        </SecondaryButton>

                        <SecondaryButton className={`ml-4 ${(formPart == end) ? 'hidden': ''}`} onClick={()=>setFormPart((formPart) + 1)}>
                            Next
                        </SecondaryButton>

                        <PrimaryButton className={`ml-4 ${(formPart == end) ? '': 'hidden'}`} processing={form.processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
