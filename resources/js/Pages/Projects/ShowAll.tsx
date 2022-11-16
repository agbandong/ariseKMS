import React from 'react';
import useRoute from '@/Hooks/useRoute';
import Welcome from '@/Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import ShowProject from '@/Components/ShowProject';
import NavLink from '@/Components/NavLink';
import {Project} from '@/types';

interface Props{
  projects:Project[]
}

export default function ShowAll(prop:Props) {
  const route = useRoute();
  return (
    <AppLayout
      title="Projects"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Projects
        </h2>
      )}
    >
      <PrimaryButton className='mx-7 mt-7'>
        <NavLink
        href={route('projects.create')}
        active={route().current('projects.create')}
        >
          Create Project
        </NavLink>
      </PrimaryButton>
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            {prop.projects.length > 0 ?  prop.projects.map(userProject=>
              <ShowProject project={userProject} key={userProject.id}/>  
            ): 'You have no projects'}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
