import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/inertia-react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Dashboard(props) {
  const tableRows = ["Name", "Description", "Link"];
  return (
    <AuthenticatedLayout

      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.project.name}</h2>}
      head={props.project.name}
    >
        <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href={ route('projects.edit', props.project) }><SecondaryButton>Settings</SecondaryButton></Link>
          <Link href={ route('projects.members', props.project) }><SecondaryButton>Members</SecondaryButton></Link>
          <div className="p-8 bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Project Reports
            </h2>
            <Link href={ route('reports.create', props.project) } className='float-right'><SecondaryButton>Create</SecondaryButton></Link>
            <div className='clear-right'>
              {props.reports.length > 0 ? 
                <table className='table-auto rounded-xl'>
                  <thead>
                    <tr>
                    {tableRows.map((row, index)=><th key={index}>{row}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {/* todo add person data */}
                    {props.reports.map(report=>
                      <tr key={report.id}>
                        <td>{report.name}</td>
                        <td>{report.description}</td>
                        <td>{report.report_file_path}</td>
                        <a href={`/storage/${report.report_file_path}`}><td><SecondaryButton>Download</SecondaryButton></td></a>
                      </tr>
                    )}
                  </tbody>
                </table>
              :
              'No reports in this project'}
            </div>
          </div>
        </div>
    </AuthenticatedLayout>
  );
}
