import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
//import IntegerInput from '@/Components/IntegerInput';
import InputError from '@/Components/InputError';



export default function Register() {
  
  const page = useTypedPage();
  const route = useRoute();

  interface Props{
    newUsers : {
      first_name: string;
      last_name: string;
      email: string;
      //position;
    }[]
  }

  const form = useForm({
    name: '',
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
    //description_business_and_activities : string;
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
    terms : false,
    //newUsers : [],
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('register3'));
  }

  return (
    <AuthenticationCard>
      <Head title="Register" />
      {/*TODO create components instead of these forms*/}
      <form onSubmit={onSubmit}>
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <h4>Company Details</h4>
          <div>
            <InputLabel htmlFor="name">Company Name</InputLabel>
            <TextInput
              id="name"
              type="text"
              className="mt-1 block w-full"
              value={form.data.name}
              onChange={e => form.setData('name', e.currentTarget.value)}
              required
              autoFocus
              autoComplete="name"
            />
            <InputError className="mt-2" message={form.errors.name} />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="company_country">Country location of applicant company:</InputLabel>
            <TextInput
              id="company_country"
              type="text"
              className="mt-1 block w-full"
              value={form.data.company_country}
              onChange={e => form.setData('company_country', e.currentTarget.value)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.company_country} />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="headquarters_country">Country location of company headquarters:</InputLabel>
            {!form.data.headquarters_country_same &&
            (<div><TextInput
              id="headquarters_country"
              type="text"
              className="mt-1 block w-full"
              value={form.data.headquarters_country}
              onChange={e => form.setData('headquarters_country', e.currentTarget.value)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.headquarters_country} /></div>)}
          </div>
          
          <div className="mt-2">
            <InputLabel htmlFor="headquarters_country_same">
              <div className="flex items-center">
                <Checkbox
                  name="headquarters_country_same"
                  id="headquarters_country_same"
                  checked={form.data.headquarters_country_same}
                  onChange={e => form.setData('headquarters_country_same', e.currentTarget.checked)}
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
          
          <div className="mt-4">
            <InputLabel htmlFor="legal_company_country">Country location where company is legally registered:</InputLabel>
            {!form.data.legal_company_country_same &&
            (<div><TextInput
              id="legal_company_country"
              type="text"
              className="mt-1 block w-full"
              value={form.data.legal_company_country}
              onChange={e => form.setData('legal_company_country', e.currentTarget.value)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.legal_company_country} /></div>)}
          </div>
          
          <div className="mt-2">
            <InputLabel htmlFor="legal_company_country_same">
              <div className="flex items-center">
                <Checkbox
                  name="legal_company_country_same"
                  id="legal_company_country_same"
                  checked={form.data.legal_company_country_same}
                  onChange={e => form.setData('legal_company_country_same', e.currentTarget.checked)}
                />
                <div className="ml-2">Same as applicant</div>
              </div>
              
              <InputError className="mt-2" message={form.errors.legal_company_country_same} />
            </InputLabel>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="is_in_trade_association">
              <div className="flex items-center">
                <div className="mr-2">Are you a trade association</div>
                <Checkbox
                  name="is_in_trade_association"
                  id="is_in_trade_association"
                  checked={form.data.is_in_trade_association}
                  onChange={e => form.setData('is_in_trade_association', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.is_in_trade_association} />
            </InputLabel>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="is_in_business_alliance">
              <div className="flex items-center">
                <div className="mr-2">Are you a business association/alliance or network</div>
                <Checkbox
                  name="is_in_business_alliance"
                  id="is_in_business_alliance"
                  checked={form.data.is_in_business_alliance}
                  onChange={e => form.setData('is_in_business_alliance', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.is_in_business_alliance} />
            </InputLabel>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="is_publically_traded">
              <div className="flex items-center">
                <div className="mr-2">Are you a publicly traded company</div>
                <Checkbox
                  name="is_publically_traded"
                  id="is_publically_traded"
                  checked={form.data.is_publically_traded}
                  onChange={e => form.setData('is_publically_traded', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.is_publically_traded} />
            </InputLabel>
          </div>
          {form.data.is_publically_traded && 
          (<div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
              <div>
              <InputLabel htmlFor="exchange_name">Exchange Name</InputLabel>
              <TextInput
                id="exchange_name"
                type="text"
                className="mt-1 block w-full"
                value={form.data.exchange_name}
                onChange={e => form.setData('exchange_name', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.exchange_name} />
            </div>

            <div>
              <InputLabel htmlFor="exchange_symbol">Exchange Symbol</InputLabel>
              <TextInput
                id="exchange_symbol"
                type="text"
                className="mt-1 block w-full"
                value={form.data.exchange_symbol}
                onChange={e => form.setData('exchange_symbol', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.exchange_symbol} />
          </div>
          </div>)}
          
          <div className="mt-4">
            <InputLabel htmlFor="is_subsidiary">
              <div className="flex items-center">
                <div className="mr-2">Are you a subsidiary of a company</div>
                <Checkbox
                  name="is_subsidiary"
                  id="is_subsidiary"
                  checked={form.data.is_subsidiary}
                  onChange={e => form.setData('is_subsidiary', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.terms} />
            </InputLabel>
          </div>
          {form.data.is_subsidiary && 
          (<div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div>
              <InputLabel htmlFor="is_subsidiary_details">Details</InputLabel>
              <TextInput
                id="is_subsidiary_details"
                type="text"
                className="mt-1 block w-full"
                value={form.data.is_subsidiary_details}
                onChange={e => form.setData('is_subsidiary_details', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.is_subsidiary_details} />
            </div>
          </div>)}
          
          <div className="mt-4">
            <InputLabel htmlFor="number_employees">What is your total number of staff?</InputLabel>
            <TextInput
              id="number_employees"
              type="number"
              className="mt-1 block w-full"
              value={form.data.number_employees}
              onChange={e => form.setData('number_employees', e.currentTarget.valueAsNumber)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.number_employees} />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="past_annual_revenue">Indicate your annual revenue in the past fiscal year</InputLabel>
            <TextInput
              id="past_annual_revenue"
              type="number"
              className="mt-1 block w-full"
              value={form.data.past_annual_revenue}
              onChange={e => form.setData('past_annual_revenue', e.currentTarget.valueAsNumber)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.past_annual_revenue} />
          </div>
          
          <div className="mt-4">
            <InputLabel htmlFor="sector">What sector is your company in?</InputLabel>
            <TextInput
              id="sector"
              type="text"
              className="mt-1 block w-full"
              value={form.data.sector}
              onChange={e => form.setData('sector', e.currentTarget.value)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.sector} />
          </div>
        </div>



        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <h4>Legal Representative</h4>
          <p>To be added</p>
        </div>

        
        
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <h4>Users Invited</h4>
          <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <h4>Primary Contact</h4>
            <p>To be added</p>
          </div>
          <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <h4>Other Users</h4>
            <p>To be added</p>
          </div>
        </div>

        {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
          <div className="mt-4">
            <InputLabel htmlFor="terms">
              <div className="flex items-center">
                <Checkbox
                  name="terms"
                  id="terms"
                  checked={form.data.terms}
                  onChange={e => form.setData('terms', e.currentTarget.checked)}
                  required
                />

                <div className="ml-2">
                  I agree to the 
                  <a
                    target="_blank"
                    href={route('terms.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                  >
                    Terms of Service 
                  </a>
                  and 
                  <a
                    target="_blank"
                    href={route('policy.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <InputError className="mt-2" message={form.errors.terms} />
            </InputLabel>
          </div>
        )}

        <div className="flex items-center justify-end mt-4">
          <InertiaLink
            href={route('register1')}
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Company already registered?
          </InertiaLink>

          <PrimaryButton
            className={classNames('ml-4', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Register
          </PrimaryButton>
        </div>
      </form>
    </AuthenticationCard>
  );
}
