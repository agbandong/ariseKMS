import { useForm } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import classNames from 'classnames';

export default function CreateTeamForm() {
  const route = useRoute();
  const page = useTypedPage();
  const form = useForm({
    name: '',
  });

  //Create a project controller
  function createProject() {
    form.post(route('projects.store'), {
      errorBag: 'createProject',
      preserveScroll: true,
    });
  }

  return (
    <FormSection
      onSubmit={createProject}
      title={'Project Details'}
      description={'Create a new project in Arise.'}
      renderActions={() => (
        <>
          <ActionMessage on={form.recentlySuccessful} className="mr-3">
            Saved.
          </ActionMessage>

          <PrimaryButton
            className={classNames({ 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Save
          </PrimaryButton>
        </>
      )}
    >
      <div className="col-span-6">
        <InputLabel value="Project Manager" />

        <div className="flex items-center mt-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={page.props.user.profile_photo_url}
            alt={page.props.user.name}
          />

          <div className="ml-4 leading-tight">
            <div>{page.props.user.name}</div>
            <div className="text-gray-700 text-sm">{page.props.user.email}</div>
          </div>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-4">
        <InputLabel htmlFor="name" value="Project Name" />
        <TextInput
          id="name"
          type="text"
          className="mt-1 block w-full"
          value={form.data.name}
          onChange={e => form.setData('name', e.currentTarget.value)}
          autoFocus
        />
        <InputError message={form.errors.name} className="mt-2" />
      </div>
    </FormSection>
  );
}
