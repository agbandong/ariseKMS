import React, { PropsWithChildren } from 'react';

export default function OrganizationRegisterCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <h1 className="text-4xl pt-6 sm:align">ARISE Membership Application Form</h1>
      <div className="w-full sm:max-w-5xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
