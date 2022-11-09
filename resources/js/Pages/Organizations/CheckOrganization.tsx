import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';


export default function CheckOrganization() {
  const route = useRoute();
  const form = useForm({
    organization: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    //Edit later to check if in org list
    form.get(route('register'), {
      errorBag: 'createTeam',
      preserveScroll: true,
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Welcome" />

      <form onSubmit={onSubmit}>
        <div>
          <InputLabel htmlFor="organization">Organization</InputLabel>
          <TextInput
            id="organization"
            className="mt-1 block w-full"
            value={form.data.organization}
            onChange={e => form.setData('organization', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.organization} />
        </div>

        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 mt-4">
            <div className="flex items-center justify-end">
            <InertiaLink
              href={route('register2')}
              className="underline text-sm text-gray-600 hover:text-gray-900"
            >
              Register Organization?
            </InertiaLink>

            <InertiaLink
            href={route('login')}
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Already have an account?
          </InertiaLink>


            <PrimaryButton
              className={classNames('ml-4', { 'opacity-25': form.processing })}
              disabled={form.processing}
            >
              Check Organization
            </PrimaryButton>
          </div>
        </div>
      </form>
    </AuthenticationCard>
  );
}
