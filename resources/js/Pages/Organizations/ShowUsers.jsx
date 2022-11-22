import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ShowUsers(props) {
  const tableRows = ["Name", "First name", "Last Name", "Email", "Role"]

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
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Users
          </h2>
          <div className="p-8 bg-white overflow-hidden shadow-xl sm:rounded-lg">
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
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
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
