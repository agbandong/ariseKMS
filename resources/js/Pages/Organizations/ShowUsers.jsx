import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ShowUsers(props) {
  const tableRows = ["Name", "Email", "Role", "Projects"]

  return (
    

    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Organization
        </h2>
      }
        head="Organization"
    >
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Persons
      </h2>

      <table>
        <thead>
          <tr>
          {tableRows.map((row, index)=><th key={index}>{row}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* todo add person data */}
        </tbody>
      </table>
    </AuthenticatedLayout>
  );
}
