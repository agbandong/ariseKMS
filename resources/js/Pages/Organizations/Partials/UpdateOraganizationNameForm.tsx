import useRoute from '@/Hooks/useRoute';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { ProjectPermissions, Project, User } from '@/types';
import { useForm } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React from 'react';

interface Props {
  project: Project & { owner: User };
  permissions: ProjectPermissions;
}

export default function UpdateProjectNameForm({ project, permissions }: Props) {
  const route = useRoute();
  const form = useForm({
    name: project.name,
  });

  function updateProjectName() {
    form.put(route('projects.update', [project]), {
      errorBag: 'updateProjectName',
      preserveScroll: true,
    });
  }

  return (
    <FormSection
      onSubmit={updateProjectName}
      title={'Project Name'}
      description={`The project's name and owner information.`}
      renderActions={
        permissions.canUpdateProject
          ? () => (
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
            )
          : undefined
      }
    >
      {/* <!-- Project Owner Information --> */}
      <div className="col-span-6">
        <InputLabel value="Project Owner" />

        <div className="flex items-center mt-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={project.owner.profile_photo_url}
            alt={project.owner.name}
          />

          <div className="ml-4 leading-tight">
            <div>{project.owner.name}</div>
            <div className="text-gray-700 text-sm">{project.owner.email}</div>
          </div>
        </div>
      </div>

      {/* <!-- Project Name --> */}
      <div className="col-span-6 sm:col-span-4">
        <InputLabel htmlFor="name" value="Project Name" />

        <TextInput
          id="name"
          type="text"
          className="mt-1 block w-full"
          value={form.data.name}
          onChange={e => form.setData('name', e.currentTarget.value)}
          disabled={!permissions.canUpdateProject}
        />

        <InputError message={form.errors.name} className="mt-2" />
      </div>
    </FormSection>
  );
}
