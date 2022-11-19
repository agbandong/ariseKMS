import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import ShowProject from '@/Components/ShowProject';
import NavLink from '@/Components/NavLink';
import { Head, Link } from '@inertiajs/inertia-react';

export default function ShowAll(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Projects
        </h2>
      }
        head="Projects"
    >

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            {props.projects.length > 0 ?  props.projects.map(userProject=>
              <ShowProject project={userProject} key={userProject.id}/>  
            ): 'You have no projects'}
          </div>
        </div>
      </div>
      <Link href={route('projects.create')}>
        <PrimaryButton className='mx-7 mt-7'>
            Create Project
        </PrimaryButton>
      </Link>
    </AuthenticatedLayout>
  );
}
