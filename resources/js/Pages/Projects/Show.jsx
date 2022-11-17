import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ShowProject from '@/Components/ShowProject';
import NavLink from '@/Components/NavLink';

export default function Dashboard(props) {
  return (
    <AuthenticatedLayout

      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}

    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            {props.project.name}
            
          </div>

          <span className="text-gray-800"><a href={ route('projects.edit', props.project) }>Edit</a></span>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
