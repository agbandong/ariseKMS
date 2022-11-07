import React from 'react';
import {Project} from '@/types';

interface Props {
  project:Project
}


export default function ShowProject({project}:Props) {
  return (
    <div>
      <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
        <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-800">{project.name}</span>
            </div>
          </div>
        </div>
    </div>
  );
}