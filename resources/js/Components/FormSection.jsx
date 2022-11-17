import React from 'react';
import SectionTitle from '@/Components/SectionTitle';

export default function FormSection({
  onSubmit,
  title,
  description,
  children,
  renderActions
}) {

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <SectionTitle title={title} description={description} />

      <div className="mt-5 md:mt-0 md:col-span-2">
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div
            className=
              'px-4 py-5 bg-white sm:p-6 shadow'
          >
            <div className="grid grid-cols-6 gap-6">{children}</div>
          </div>
        
          
        </form>
      </div>
    </div>
  );
}