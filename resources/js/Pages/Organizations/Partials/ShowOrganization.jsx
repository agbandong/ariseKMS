import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function ShowProject(props) {
    return (
      <div>
        <div className={`p-6 sm:px-20 bg-white border-b border-gray-200 ${!(props.approved ^ props.organization.approved)? null: 'hidden'}`}>
          <div className="flex justify-between items-center">
            <span className="text-gray-800"><Link href={ route('organization.show', props.organization) }>{props.organization.name}</Link></span>
            {props.organization.approved ? <Link href={route('organization.users', props.organization)}><SecondaryButton className='float-right'>Users</SecondaryButton></Link>: null}
          </div>
        </div>
      </div>
    );
  }