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
      firstName: string;
      lastName: string;
      email: string;
      //position;
    }[]
  }

  const form = useForm({
    name: '',
    companyCountry : '',
    headquartersCountrySame : false,
    headquartersCountry : '',
    legalCompanyCountrySame : false,
    legalCompanyCountry : '',
    //hasProof : boolean;
    //registrationProofsPath : string;
    //companyFax : Nullable<number>;
    //website : string;
    isInTradeAssociation : false,
    isInBusinessAlliance : false,
    isPublicallyTraded : false,
    exchangeName : '',
    exchangeSymbol : '',
    isSubsidiary : false,
    isSubsidiaryDetails : '',
    numberEmployees : 1,
    pastAnnualRevenue : 0,
    //descriptionBusinessAndActivities : string;
    //countryFocus : Nullable<string>;
    //currentEngagementPath : string;
    sector : '',
    /*Legal representative*/
    //legalRepresentativeCountry : string;
    //legalRepresentativeStreet : string;
    //legalRepresentativeCity : string;
    //legalRepresentativeProvinceState : string;
    //legalRepresentativePostZipCode : string;
    //legalRepresentativePhone : number;
    /*Primary contact*/
    //contactCountry : '',
    //contactStreet : '',
    //contactCity : '',
    //contactProvinceState : '',
    //contactPostZipCode : '',
    //contactPhone : '',
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
            <InputLabel htmlFor="companyCountry">Country location of applicant company:</InputLabel>
            <TextInput
              id="companyCountry"
              type="text"
              className="mt-1 block w-full"
              value={form.data.companyCountry}
              onChange={e => form.setData('companyCountry', e.currentTarget.value)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.companyCountry} />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="headquartersCountry">Country location of company headquarters:</InputLabel>
            {!form.data.headquartersCountrySame &&
            (<div><TextInput
              id="headquartersCountry"
              type="text"
              className="mt-1 block w-full"
              value={form.data.headquartersCountry}
              onChange={e => form.setData('headquartersCountry', e.currentTarget.value)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.headquartersCountry} /></div>)}
          </div>
          
          <div className="mt-2">
            <InputLabel htmlFor="headquartersCountrySame">
              <div className="flex items-center">
                <Checkbox
                  name="headquartersCountrySame"
                  id="headquartersCountrySame"
                  checked={form.data.headquartersCountrySame}
                  onChange={e => form.setData('headquartersCountrySame', e.currentTarget.checked)}
                  /*Just edit in model later*/
                  /*
                  Doesn't work with both...
                  {form.data.headquartersCountrySame? form.setData('headquartersCountry', '') 
                  : form.setData('headquartersCountry', form.data.companyCountry);}}}*/
                />
                <div className="ml-2">Same as applicant</div>
              </div>
              
              <InputError className="mt-2" message={form.errors.headquartersCountrySame} />
            </InputLabel>
          </div>
          
          <div className="mt-4">
            <InputLabel htmlFor="legalCompanyCountry">Country location where company is legally registered:</InputLabel>
            {!form.data.legalCompanyCountrySame &&
            (<div><TextInput
              id="legalCompanyCountry"
              type="text"
              className="mt-1 block w-full"
              value={form.data.legalCompanyCountry}
              onChange={e => form.setData('legalCompanyCountry', e.currentTarget.value)}
              required
              autoFocus
            />
            <InputError className="mt-2" message={form.errors.legalCompanyCountry} /></div>)}
          </div>
          
          <div className="mt-2">
            <InputLabel htmlFor="legalCompanyCountrySame">
              <div className="flex items-center">
                <Checkbox
                  name="legalCompanyCountrySame"
                  id="legalCompanyCountrySame"
                  checked={form.data.legalCompanyCountrySame}
                  onChange={e => form.setData('legalCompanyCountrySame', e.currentTarget.checked)}
                />
                <div className="ml-2">Same as applicant</div>
              </div>
              
              <InputError className="mt-2" message={form.errors.legalCompanyCountrySame} />
            </InputLabel>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="isInTradeAssociation">
              <div className="flex items-center">
                <div className="mr-2">Are you a trade association</div>
                <Checkbox
                  name="isInTradeAssociation"
                  id="isInTradeAssociation"
                  checked={form.data.isInTradeAssociation}
                  onChange={e => form.setData('isInTradeAssociation', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.isInTradeAssociation} />
            </InputLabel>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="isInBusinessAlliance">
              <div className="flex items-center">
                <div className="mr-2">Are you a business association/alliance or network</div>
                <Checkbox
                  name="isInBusinessAlliance"
                  id="isInBusinessAlliance"
                  checked={form.data.isInBusinessAlliance}
                  onChange={e => form.setData('isInBusinessAlliance', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.isInBusinessAlliance} />
            </InputLabel>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="isPublicallyTraded">
              <div className="flex items-center">
                <div className="mr-2">Are you a publicly traded company</div>
                <Checkbox
                  name="isPublicallyTraded"
                  id="isPublicallyTraded"
                  checked={form.data.isPublicallyTraded}
                  onChange={e => form.setData('isPublicallyTraded', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.isPublicallyTraded} />
            </InputLabel>
          </div>
          {form.data.isPublicallyTraded && 
          (<div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
              <div>
              <InputLabel htmlFor="exchangeName">Exchange Name</InputLabel>
              <TextInput
                id="exchangeName"
                type="text"
                className="mt-1 block w-full"
                value={form.data.exchangeName}
                onChange={e => form.setData('exchangeName', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.exchangeName} />
            </div>

            <div>
              <InputLabel htmlFor="exchangeSymbol">Exchange Symbol</InputLabel>
              <TextInput
                id="exchangeSymbol"
                type="text"
                className="mt-1 block w-full"
                value={form.data.exchangeSymbol}
                onChange={e => form.setData('exchangeSymbol', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.name} />
          </div>
          </div>)}
          
          <div className="mt-4">
            <InputLabel htmlFor="open">
              <div className="flex items-center">
                <div className="mr-2">Are you a subsidiary of a company</div>
                <Checkbox
                  name="open"
                  id="open"
                  checked={form.data.isSubsidiary}
                  onChange={e => form.setData('isSubsidiary', e.currentTarget.checked)}
                />
              </div>
              <InputError className="mt-2" message={form.errors.terms} />
            </InputLabel>
          </div>
          {form.data.isSubsidiary && 
          (<div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div>
              <InputLabel htmlFor="isSubsidiaryDetails">Details</InputLabel>
              <TextInput
                id="isSubsidiaryDetails"
                type="text"
                className="mt-1 block w-full"
                value={form.data.isSubsidiaryDetails}
                onChange={e => form.setData('isSubsidiaryDetails', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.isSubsidiaryDetails} />
            </div>
          </div>)}
          
          <div className="mt-4">
            <InputLabel htmlFor="numberEmployees">What is your total number of staff?</InputLabel>
            <TextInput
              id="numberEmployees"
              type="number"
              className="mt-1 block w-full"
              value={form.data.numberEmployees}
              onChange={e => form.setData('numberEmployees', e.currentTarget.valueAsNumber)}
              required
              autoFocus
              autoComplete="numberEmployees"
            />
            <InputError className="mt-2" message={form.errors.name} />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="pastAnnualRevenue">Indicate your annual revenue in the past fiscal year</InputLabel>
            <TextInput
              id="pastAnnualRevenue"
              type="number"
              className="mt-1 block w-full"
              value={form.data.pastAnnualRevenue}
              onChange={e => form.setData('pastAnnualRevenue', e.currentTarget.valueAsNumber)}
              required
              autoFocus
              autoComplete="pastAnnualRevenue"
            />
            <InputError className="mt-2" message={form.errors.pastAnnualRevenue} />
          </div>
          
          <div className="mt-4">
            <InputLabel htmlFor="name">What sector is your company in?</InputLabel>
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
