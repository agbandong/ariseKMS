import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Settings(props) {
  const tableRows = ["Name", "Email"];
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Team Settings
        </h2>
      }
      head={`${props.project.name} - Members`}
    >
      <div>
        <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
          {/*
          <UpdateTeamNameForm team={team} permissions={permissions} />

          <div className="mt-10 sm:mt-0">
            <TeamMemberManager
              team={team}
              availableRoles={availableRoles}
              userPermissions={permissions}
            />
          </div>

          {permissions.canDeleteTeam && !team.personal_team ? (
            <>
              <SectionBorder />

              <div className="mt-10 sm:mt-0">
                <DeleteTeamForm team={team} />
              </div>
            </>
          ) : null}*/}
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Members
          </h2>
          <div className='float-right mb-4'>
            <Link href={route(`projects.showAddMembers`, props.project)}>
              <button className={`border hover:bg-blue-400`}>
                Add member
              </button>
           </Link>
          </div>
          <div className='clear-right'>
              {props.project.users.length > 0 ? 
                <table className='table-auto rounded-xl'>
                  <thead>
                    <tr>
                    {tableRows.map((row, index)=><th key={index}>{row}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {/* todo add person data */}
                    {props.project.users.map(user=>
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        {/*<a href={`/storage/${user.id}`}><td><SecondaryButton>Remove</SecondaryButton></td></a>*/}
                      </tr>
                    )}
                  </tbody>
                </table> 
              :
              'No reports in this project'}
            </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
