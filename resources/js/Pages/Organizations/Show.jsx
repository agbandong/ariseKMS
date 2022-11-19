import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ShowProject from '@/Components/ShowProject';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
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
      name: props.project.name,
      company_country : props.project.company_country,
      headquarters_country_same : (props.project.headquarters_country === props.project.company_country),
      headquarters_country : props.project.headquarters_country,
      legal_company_country_same : (props.project.legal_country === props.project.company_country),
      legal_company_country : props.project.legal_country,
      //hasProof : false,
      //registrationProofsPath : '',
      has_fax : (props.project.company_fax === null),
      company_fax : (props.project.company_fax === null) ? 0 : props.project.company_fax,
      website : props.project.website,
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
      approved : false, 

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

  return (
    <AuthenticatedLayout

      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.project.name}</h2>}

    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            
            {/*<Link href={ route('projects.edit', props.project) }>Edit</Link>*/}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
