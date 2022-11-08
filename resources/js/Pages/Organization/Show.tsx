import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ShowProject from '@/Components/ShowProject';
import NavLink from '@/Components/NavLink';
import {Organization} from '@/types';
import useRoute from '@/Hooks/useRoute';

interface Props{
  organization:Organization;
}

export default function Dashboard(prop:Props) {
  const route = useRoute();
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {prop.organization.name}
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <span className="text-gray-800"><a href={/*route('organizations.edit', prop.organization) */ "remove later"}>Edit</a></span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}