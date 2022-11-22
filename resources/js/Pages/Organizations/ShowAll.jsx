import React, { useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ShowOrganization from '@/Pages/Organizations/Partials/ShowOrganization';
import SecondaryButton from '@/Components/SecondaryButton';


export default function ShowAll(props) {
  const [seeApproved, setSeeApproved] = useState(false);

  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Organizations
        </h2>
      }
        head="Organizations"
    >        
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className='float-right mb-4'>
              <button className={`p-4 border-2 rounded-l-lg ${!seeApproved? 'bg-blue-700' : null} hover:bg-blue-400`} onClick={()=>setSeeApproved(false)}>
                Pending
              </button>
              <button className={`p-4 border-2 rounded-r-lg ${seeApproved? 'bg-blue-700' : null} hover:bg-blue-400`} onClick={()=>setSeeApproved(true)}>
                Approved
              </button>
            </div>
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg block clear-right">
                {props.organizations.length > 0 ?  props.organizations.map(organization=>
                  <ShowOrganization organization={organization} approved={seeApproved} key={organization.id}/>
                ): 'There are no organizations'}
            </div>
          </div>
        </div>
    </AuthenticatedLayout>
  );
}
