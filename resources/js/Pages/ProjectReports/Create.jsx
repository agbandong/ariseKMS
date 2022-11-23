import CreateProjectForm from '@/Pages/ProjectReports/Partials/CreateReportForm';
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
            Create a Project Report
          </h2>
        }
      >
        <div>
          <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <CreateProjectForm auth={props.auth} project={props.project}/>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  }