import CreateProjectForm from '@/Pages/Projects/Partials/CreateProjectForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';

export default function Create(props) {
    return (
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        title="Create Project"
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Create Project
          </h2>
        }
      >
        <div>
          <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <CreateProjectForm auth={props.auth}/>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  }