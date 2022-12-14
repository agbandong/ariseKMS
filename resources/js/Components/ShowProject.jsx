import React from 'react';

export default function ShowProject(props) {
    return (
      <div>
        <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-800"><a href={ route('projects.show', props.project) }>{props.project.name}</a></span>
          </div>
        </div>
      </div>
    );
  }