import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Register() {
  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    has_title : false,
    title : '',
    first_name: '',
    last_name: '',
    organization: '',
    email: '',
    position: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Register" />

      <form onSubmit={onSubmit}>
        <div>
          {form.data.has_title &&
          (
            <div>
              <InputLabel htmlFor="title">Title:</InputLabel>
              <TextInput
            id="title"
            type="text"
            className="mt-1 block w-full"
            value={form.data.title}
            onChange={e => form.setData('title', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.title} /></div>)}
        </div>
        
        <div>
            <InputLabel htmlFor="has_title">
              <div className="flex items-center">
                <Checkbox
                  name="has_title"
                  id="has_title"
                  checked={form.data.has_title}
                  onChange={e => form.setData('has_title', e.currentTarget.checked)}
                />
                <div className="ml-2">Has Title</div>
              </div>
              
              <InputError className="mt-2" message={form.errors.has_title} />
            </InputLabel>

            
        </div>

        <div className='mt-4'>
          <InputLabel htmlFor="first_name">First Name</InputLabel>
          <TextInput
            id="first_name"
            type="text"
            className="mt-1 block w-full"
            value={form.data.first_name}
            onChange={e => form.setData('first_name', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="first_name"
          />
          <InputError className="mt-2" message={form.errors.first_name} />
        </div>

        <div className='mt-4'>
          <InputLabel htmlFor="last_name">Last Name</InputLabel>
          <TextInput
            id="last_name"
            type="text"
            className="mt-1 block w-full"
            value={form.data.last_name}
            onChange={e => form.setData('last_name', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="last_name"
          />
          <InputError className="mt-2" message={form.errors.last_name} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
          />
          <InputError className="mt-2" message={form.errors.email} />
        </div>

        <div className='mt-4'>
          <InputLabel htmlFor="organization">Organization</InputLabel>
          <TextInput
            id="organization"
            type="text"
            className="mt-1 block w-full"
            value={form.data.organization}
            onChange={e => form.setData('organization', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.organization} />
        </div>
        
        <div className='mt-4'>
          <InputLabel htmlFor="position">Position</InputLabel>
          <TextInput
            id="position"
            type="text"
            className="mt-1 block w-full"
            value={form.data.position}
            onChange={e => form.setData('position', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.position} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextInput
            id="password"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="new-password"
          />
          <InputError className="mt-2" message={form.errors.password} />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password_confirmation">Confirm Password</InputLabel>
          <TextInput
            id="password_confirmation"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password_confirmation}
            onChange={e =>
              form.setData('password_confirmation', e.currentTarget.value)
            }
            required
            autoComplete="new-password"
          />
          <InputError className="mt-2" message={form.errors.password_confirmation} />
        </div>

        {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
          <div className="mt-4">
            <InputLabel htmlFor="terms">
              <div className="flex items-center">
                <Checkbox
                  name="terms"
                  id="terms"
                  checked={form.data.terms}
                  onChange={e => form.setData('terms', e.currentTarget.checked)}
                  required
                />

                <div className="ml-2">
                  I agree to the 
                  <a
                    target="_blank"
                    href={route('terms.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                  >
                    Terms of Service 
                  </a>
                  and
                  <a
                    target="_blank"
                    href={route('policy.show')}
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <InputError className="mt-2" message={form.errors.terms} />
            </InputLabel>
          </div>
        )}

        <div className="flex items-center justify-end mt-4">
          <InertiaLink
            href={route('login')}
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Already registered?
          </InertiaLink>

          <PrimaryButton
            className={classNames('ml-4', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Register
          </PrimaryButton>
        </div>
      </form>
    </AuthenticationCard>
  );
}
