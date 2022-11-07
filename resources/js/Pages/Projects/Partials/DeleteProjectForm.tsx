import useRoute from '@/Hooks/useRoute';
import ActionSection from '@/Components/ActionSection';
import ConfirmationModal from '@/Components/ConfirmationModal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { Project } from '@/types';
import { useForm } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { useState } from 'react';

interface Props {
  project: Project;
}

export default function DeleteProjectForm({ project }: Props) {
  const route = useRoute();
  const [confirmingProjectDeletion, setConfirmingProjectDeletion] = useState(false);
  const form = useForm({});

  function confirmProjectDeletion() {
    setConfirmingProjectDeletion(true);
  }

  function deleteProject() {
    form.delete(route('projects.destroy', [project]), {
      errorBag: 'deleteProject',
    });
  }

  return (
    <ActionSection
      title={'Delete Project'}
      description={'Permanently delete this project.'}
    >
      <div className="max-w-xl text-sm text-gray-600">
        Once a project is deleted, all of its resources and data will be
        permanently deleted. Before deleting this project, please download any data
        or information regarding this project that you wish to retain.
      </div>

      <div className="mt-5">
        <DangerButton onClick={confirmProjectDeletion}>
          Delete Project
        </DangerButton>
      </div>

      {/* <!-- Delete Project Confirmation Modal --> */}
      <ConfirmationModal
        isOpen={confirmingProjectDeletion}
        onClose={() => setConfirmingProjectDeletion(false)}
      >
        <ConfirmationModal.Content title={'Delete Project'}>
          Are you sure you want to delete this project? Once a project is deleted, all
          of its resources and data will be permanently deleted.
        </ConfirmationModal.Content>

        <ConfirmationModal.Footer>
          <SecondaryButton onClick={() => setConfirmingProjectDeletion(false)}>
            Cancel
          </SecondaryButton>

          <DangerButton
            onClick={deleteProject}
            className={classNames('ml-2', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Delete Project
          </DangerButton>
        </ConfirmationModal.Footer>
      </ConfirmationModal>
    </ActionSection>
  );
}
