import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Checkbox from '@/Components/Checkbox';
import TextInput from '@/Components/TextInput';
import Dropdown from '@/Components/Dropdown';
import { Head, Link , useForm} from '@inertiajs/inertia-react';

export default function Show(props) {
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

  const onHandleChange = (event) => {
    form.setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const form /*{ data, setData, post, processing, errors, reset }*/ = useForm({
      name: props.organization.name,
      company_country : props.organization.company_country,
      headquarters_country_same : (props.organization.headquarters_country === props.organization.company_country),
      headquarters_country : props.organization.headquarters_country,
      legal_company_country_same : (props.organization.legal_company_country === props.organization.company_country),
      legal_company_country : props.organization.legal_company_country,
      //hasProof : false,
      //registrationProofsPath : '',
      has_fax : (!(props.organization.company_fax === null)),
      company_fax : (!(props.organization.company_fax === null)) ? props.organization.company_fax : 0,
      has_website : (!(props.organization.website === null)),
      website : (!(props.organization.website === null)) ? props.organization.website : '',
      is_in_trade_association : props.organization.is_in_trade_association,
      is_in_business_alliance : props.organization.is_in_business_alliance,
      is_publically_traded : (!(props.organization.exchange_name === null)),
      exchange_name : (!(props.organization.exchange_name === null)) ? props.organization.exchange_name : '',
      exchange_symbol : (!(props.organization.exchange_symbol === null)) ? props.organization.exchange_symbol : '',
      is_subsidiary : (!(props.organization.subsidiary_details === null)) ? props.organization.subsidiary_details : '',
      subsidiary_details : props.organization.subsidiary_details,
      number_employees : props.organization.number_employees,
      past_annual_revenue : props.organization.past_annual_revenue,
      currency: props.organization.currency,
      description_business_and_activities : props.organization.description_business_and_activities,
      has_country_focus : (!(props.organization.country_focus === null)),
      country_focus : (!(props.organization.country_focus === null)) ? props.organization.country_focus : '',
      sector : props.organization.sector,
      sector_other : props.organization.sectorOther,

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

  const submit = (e) => {
    e.preventDefault();

    form.post(route('organization.update', props.organization));
  };

  return (
      <AuthenticatedLayout

      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.organization.name}</h2>}

      >
        
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <a href={route('organization.index')}><SecondaryButton>Back</SecondaryButton></a>
          <form onSubmit={submit}>
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">                    
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
                  <InputLabel forInput="company_country" value="Country of location of applicant company*" />

                  <TextInput
                      type="text"
                      name="company_country"
                      value={form.data.company_country}
                      className="mt-1 block w-full"
                      
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
                              
                              handleChange={()=>{}}
                              required
                          />
                      </Dropdown.Trigger>
                          <Dropdown.Content align="left" width="auto" height="48">
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
                              
                              required
                          />
                      </div>
                  )}
                  <InputError message={form.errors.sectorOther} className="mt-2" />
                  <InputError message={form.errors.sector} className="mt-2" />
              </div>
              
              {/* Company Website */}
              <div className='mt-4'>
                  <div className='flex'>
                      <InputLabel forInput="has_website" value="Does your company have a website?*" />
                      <div className="ml-2 items-center">
                          <Checkbox
                          name="has_website"
                          value={form.data.has_website}
                          handleChange={onHandleChange}
                          />
                      </div>
                      <InputError className="mt-2" message={form.errors.has_website} /> 
                  </div>
                  {form.data.has_website && (
                  <div>
                      <InputLabel className="mt-1" forInput="website" value="Enter Website of company*" />
                      <TextInput
                          type="text"
                          name="website"
                          value={form.data.website}
                          className="mt-1 block w-full"
                          
                          handleChange={onHandleChange}
                          required
                      />
                  </div>)}
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
                      
                      handleChange={onHandleChange}
                      required
                  />

                  <InputError message={form.errors.number_employees} className="mt-2" />
              </div>
                                                            
              {/* Currency */}
              <div className='mt-4'>
                  <InputLabel forInput="currency" value="What currency does your company use?*" />

                  <TextInput
                      type="text"
                      name="currency"
                      value={form.data.currency}
                      className="mt-1 block w-full"
                      
                      handleChange={onHandleChange}
                      required
                  />

                  <InputError message={form.errors.currency} className="mt-2" />
              </div>
              
              {/* Past annual revenue */}
              <div className='mt-4'>
                  <InputLabel forInput="past_annual_revenue" value="Past annual revenue in your currency*" />

                  <TextInput
                      type="number"
                      name="past_annual_revenue"
                      value={form.data.past_annual_revenue}
                      className="mt-1 block w-full"
                      
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
                      
                      handleChange={onHandleChange}
                      required
                  />

                  <InputError message={form.errors.description_business_and_activities} className="mt-2" />
              </div>
              
              {/* Fax */}
              <div className='mt-4'>
                  <div className='flex'>
                      <InputLabel forInput="has_fax" value="Does your company have a fax machine?" />

                      <div className="ml-2 items-center">
                          <Checkbox
                          name="has_fax"
                          value={form.data.has_fax}
                          handleChange={onHandleChange}
                          />
                      </div>
                      <InputError className="mt-2" message={form.errors.has_fax} /> 
                  </div>
                  {form.data.has_fax && (
                  <div>
                      <InputLabel className="mt-1" forInput="company_fax" value="Enter number*" />
                      <TextInput
                          type="number"
                          name="company_fax"
                          value={form.data.company_fax}
                          className="mt-1 block w-full"
                          
                          handleChange={onHandleChange}
                          required
                      />
                  </div>)}
                  <InputError message={form.errors.company_fax} className="mt-2" />
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
                          
                          handleChange={onHandleChange}
                          required
                      />
                  </div>)}
                  <InputError message={form.errors.country_focus} className="mt-2" />
            </div>
            <div className="flex items-center justify-end mt-8">
                <Link href={route('organization.delete', props.organization)} method="delete">
                  <SecondaryButton className={`ml-4`}>
                      {props.organization.approved? (<p>Delete</p>) : (<p>Reject</p>)}
                  </SecondaryButton>
                </Link>
                
                <PrimaryButton className={`ml-4`} processing={form.processing}>
                  {props.organization.approved? (<p>Edit</p>) : (<p>Approve</p>)}
                </PrimaryButton>
            </div>
          </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
