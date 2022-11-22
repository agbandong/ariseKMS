import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SecondaryButton from '@/Components/SecondaryButton';
import { Link } from '@inertiajs/inertia-react';

export default function ShowUsers(props) {
  const tableRows = ["Name", "First name", "Last Name", "Email", "Position", "Role"]

  const [seeApproved, setSeeApproved] = useState(false);

  return (
    

    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {props.organization_name}
        </h2>
      }
        head="Organization"
    >
        <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className='float-right mb-4'>
            <button className={`p-4 border-2 rounded-l-lg ${!seeApproved? 'bg-blue-700' : null} hover:bg-blue-400`} onClick={()=>setSeeApproved(false)}>
              Pending
            </button>
            <button className={`p-4 border-2 rounded-r-lg ${seeApproved? 'bg-blue-700' : null} hover:bg-blue-400`} onClick={()=>setSeeApproved(true)}>
              Approved
            </button>
          </div>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Users
          </h2>
          <div className="p-8 bg-white overflow-hidden shadow-xl sm:rounded-lg clear-right">
            {props.users.length > 0 ? 
              <table className='table-auto rounded-xl'>
                <thead>
                  <tr>
                  {tableRows.map((row, index)=><th key={index}>{row}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {/* todo add person data */}
                  {props.users.map(user=>
                    (user.approved == seeApproved) ?
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.position}</td>
                      <td>{user.role}</td>
                      <td><Link href=''><SecondaryButton>Edit</SecondaryButton></Link></td>
                    </tr>
                    : null
                  )}
                </tbody>
              </table> 
            :
            'No users in this organization'}
          </div>
      </div>
    </AuthenticatedLayout>
  );
}
