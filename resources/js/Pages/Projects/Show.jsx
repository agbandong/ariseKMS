import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/inertia-react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Dashboard(props) {
  return (
    <AuthenticatedLayout

      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.project.name}</h2>}

    >
        <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Link href={ route('projects.edit', props.project) }><SecondaryButton>Settings</SecondaryButton></Link>
          <div className="p-8 bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Project Reports
            </h2>
            <Link href={ route('reports.create', props.project) } className='float-right'><SecondaryButton>Create</SecondaryButton></Link>
            <div className='clear-right'>
              
            </div>
          </div>
        </div>
    </AuthenticatedLayout>
  );
}
