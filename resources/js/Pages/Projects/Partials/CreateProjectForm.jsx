import { useForm } from '@inertiajs/inertia-react';
import React from 'react';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton'


export default function CreateProjectForm({auth}) {
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

  const onHandleChange = (event) => {
    form.setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

  return (
    <FormSection
      onSubmit={createProject}
      title={'Project Details'}
      description={'Create a new project in Arise.'}
      renderActions={() => (
        <>
          <PrimaryButton
            className='opacity-25'
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
            src={auth.user.profile_photo_url}
            alt={auth.user.name}
          />

          <div className="ml-4 leading-tight">
            <div>{auth.user.name}</div>
            <div className="text-gray-700 text-sm">{auth.user.email}</div>
          </div>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-4">
        <InputLabel htmlFor="name" value="Project Name" />
        <TextInput
          type="text"
          name="name"
          value={form.data.name}
          className="mt-1 block w-full"
          autoComplete="name"
          isFocused={true}
          handleChange={onHandleChange}
          required
        />
        <InputError message={form.errors.name} className="mt-2" />
      </div>

      <PrimaryButton
            className='opacity-25'
          >
            Save
          </PrimaryButton>
    </FormSection>
  );
}