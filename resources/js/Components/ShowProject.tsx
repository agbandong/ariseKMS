import React from 'react';
import {Project} from '@/types';
import useRoute from '@/Hooks/useRoute';

interface Props {
  project:Project
}


export default function ShowProject(prop:Props) {
  const route = useRoute();
  return (
    <div>
      <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-800"><a href={ route('projects.show', prop.project) }>{prop.project.name}</a></span>
        </div>
      </div>
    </div>
  );
}