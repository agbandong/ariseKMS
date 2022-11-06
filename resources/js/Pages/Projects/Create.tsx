import CreateProjectForm from '@/Pages/Projects/Partials/CreateProjectForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';

export default function Create() {
  return (
    <AppLayout
      title="Create Project"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Create Project
        </h2>
      )}
    >
      <div>
        <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
          <CreateProjectForm />
        </div>
      </div>
    </AppLayout>
  );
}
