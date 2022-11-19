import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
  return (
    <AuthenticatedLayout

      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.project.name}</h2>}

    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="p-8 bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <Link href={ route('projects.edit', props.project) }>Edit</Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
