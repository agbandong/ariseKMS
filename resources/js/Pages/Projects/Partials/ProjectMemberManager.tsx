import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import ActionMessage from '@/Components/ActionMessage';
import ActionSection from '@/Components/ActionSection';
import ConfirmationModal from '@/Components/ConfirmationModal';
import DangerButton from '@/Components/DangerButton';
import DialogModal from '@/Components/DialogModal';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
import SectionBorder from '@/Components/SectionBorder';
import {
  Nullable,
  Role,
  Project,
  ProjectInvitation,
  ProjectPermissions,
  User,
} from '@/types';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { useState } from 'react';

interface UserMembership extends User {
  membership: {
    role: string;
  };
}

interface Props {
  project: Project & {
    project_invitations: ProjectInvitation[];
    users: UserMembership[];
  };
  availableRoles: Role[];
  userPermissions: ProjectPermissions;
}

export default function ProjectMemberManager({
  project,
  availableRoles,
  userPermissions,
}: Props) {
  const route = useRoute();
  const addProjectMemberForm = useForm({
    email: '',
    role: null as Nullable<string>,
  });
  const updateRoleForm = useForm({
    role: null as Nullable<string>,
  });
  const leaveProjectForm = useForm({});
  const removeProjectMemberForm = useForm({});
  const [currentlyManagingRole, setCurrentlyManagingRole] = useState(false);
  const [managingRoleFor, setManagingRoleFor] = useState<Nullable<User>>(null);
  const [confirmingLeavingProject, setConfirmingLeavingProject] = useState(false);
  const [projectMemberBeingRemoved, setProjectMemberBeingRemoved] =
    useState<Nullable<User>>(null);
  const page = useTypedPage();

  function addProjectMember() {
    addProjectMemberForm.post(route('project-members.store', [project]), {
      errorBag: 'addProjectMember',
      preserveScroll: true,
      onSuccess: () => addProjectMemberForm.reset(),
    });
  }

  function cancelProjectInvitation(invitation: ProjectInvitation) {
    Inertia.delete(route('project-invitations.destroy', [invitation]), {
      preserveScroll: true,
    });
  }

  function manageRole(projectMember: UserMembership) {
    setManagingRoleFor(projectMember);
    updateRoleForm.setData('role', projectMember.membership.role);
    setCurrentlyManagingRole(true);
  }

  function updateRole() {
    if (!managingRoleFor) {
      return;
    }
    updateRoleForm.put(route('project-members.update', [project, managingRoleFor]), {
      preserveScroll: true,
      onSuccess: () => setCurrentlyManagingRole(false),
    });
  }

  function confirmLeavingProject() {
    setConfirmingLeavingProject(true);
  }

  function leaveProject() {
    leaveProjectForm.delete(
      route('project-members.destroy', [project, page.props.user]),
    );
  }

  function confirmProjectMemberRemoval(projectMember: User) {
    setProjectMemberBeingRemoved(projectMember);
  }

  function removeProjectMember() {
    if (!projectMemberBeingRemoved) {
      return;
    }
    removeProjectMemberForm.delete(
      route('project-members.destroy', [project, projectMemberBeingRemoved]),
      {
        errorBag: 'removeProjectMember',
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => setProjectMemberBeingRemoved(null),
      },
    );
  }

  function displayableRole(role: string) {
    return availableRoles.find(r => r.key === role)?.name;
  }

  return (
    <div>
      {userPermissions.canAddProjectMembers ? (
        <div>
          <SectionBorder />

          {/* <!-- Add Project Member --> */}
          <FormSection
            onSubmit={addProjectMember}
            title={'Add Project Member'}
            description={
              'Add a new project member to your project, allowing them to collaborate with you.'
            }
            renderActions={() => (
              <>
                <ActionMessage
                  on={addProjectMemberForm.recentlySuccessful}
                  className="mr-3"
                >
                  Added.
                </ActionMessage>

                <PrimaryButton
                  className={classNames({
                    'opacity-25': addProjectMemberForm.processing,
                  })}
                  disabled={addProjectMemberForm.processing}
                >
                  Add
                </PrimaryButton>
              </>
            )}
          >
            <div className="col-span-6">
              <div className="max-w-xl text-sm text-gray-600">
                Please provide the email address of the person you would like to
                add to this project.
              </div>
            </div>

            {/* <!-- Member Email --> */}
            <div className="col-span-6 sm:col-span-4">
              <InputLabel htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                className="mt-1 block w-full"
                value={addProjectMemberForm.data.email}
                onChange={e =>
                  addProjectMemberForm.setData('email', e.currentTarget.value)
                }
              />
              <InputError
                message={addProjectMemberForm.errors.email}
                className="mt-2"
              />
            </div>

            {/* <!-- Role --> */}
            {availableRoles.length > 0 ? (
              <div className="col-span-6 lg:col-span-4">
                <InputLabel htmlFor="roles" value="Role" />
                <InputError
                  message={addProjectMemberForm.errors.role}
                  className="mt-2"
                />

                <div className="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer">
                  {availableRoles.map((role, i) => (
                    <button
                      type="button"
                      className={classNames(
                        'relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200',
                        {
                          'border-t border-gray-200 rounded-t-none': i > 0,
                          'rounded-b-none':
                            i != Object.keys(availableRoles).length - 1,
                        },
                      )}
                      onClick={() =>
                        addProjectMemberForm.setData('role', role.key)
                      }
                      key={role.key}
                    >
                      <div
                        className={classNames({
                          'opacity-50':
                            addProjectMemberForm.data.role &&
                            addProjectMemberForm.data.role != role.key,
                        })}
                      >
                        {/* <!-- Role Name --> */}
                        <div className="flex items-center">
                          <div
                            className={classNames('text-sm text-gray-600', {
                              'font-semibold':
                                addProjectMemberForm.data.role == role.key,
                            })}
                          >
                            {role.name}
                          </div>

                          {addProjectMemberForm.data.role == role.key ? (
                            <svg
                              className="ml-2 h-5 w-5 text-green-400"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          ) : null}
                        </div>

                        {/* <!-- Role Description --> */}
                        <div className="mt-2 text-xs text-gray-600">
                          {role.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </FormSection>
        </div>
      ) : null}

      {project.project_invitations.length > 0 && userPermissions.canAddProjectMembers ? (
        <div>
          <SectionBorder />

          {/* <!-- Project Member Invitations --> */}
          <div className="mt-10 sm:mt-0" />

          <ActionSection
            title={'Pending Project Invitations'}
            description={
              'These people have been invited to your project and have been sent an invitation email. They may join the project by accepting the email invitation.'
            }
          >
            {/* <!-- Pending Project Member Invitation List --> */}
            <div className="space-y-6">
              {project.project_invitations.map(invitation => (
                <div
                  className="flex items-center justify-between"
                  key={invitation.id}
                >
                  <div className="text-gray-600">{invitation.email}</div>

                  <div className="flex items-center">
                    {/* <!-- Cancel Project Invitation --> */}
                    {userPermissions.canRemoveProjectMembers ? (
                      <button
                        className="cursor-pointer ml-6 text-sm text-red-500 focus:outline-none"
                        onClick={() => cancelProjectInvitation(invitation)}
                      >
                        Cancel
                      </button>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </ActionSection>
        </div>
      ) : null}

      {project.users.length > 0 ? (
        <div>
          <SectionBorder />

          {/* <!-- Manage Project Members --> */}
          <div className="mt-10 sm:mt-0" />

          <ActionSection
            title={'Project Members'}
            description={'All of the people that are part of this project.'}
          >
            {/* <!-- Project Member List --> */}
            <div className="space-y-6">
              {project.users.map(user => (
                <div
                  className="flex items-center justify-between"
                  key={user.id}
                >
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user.profile_photo_url}
                      alt={user.name}
                    />
                    <div className="ml-4">{user.name}</div>
                  </div>

                  <div className="flex items-center">
                    {/* <!-- Manage Project Member Role --> */}
                    {userPermissions.canAddProjectMembers &&
                    availableRoles.length ? (
                      <button
                        className="ml-2 text-sm text-gray-400 underline"
                        onClick={() => manageRole(user)}
                      >
                        {displayableRole(user.membership.role)}
                      </button>
                    ) : availableRoles.length ? (
                      <div className="ml-2 text-sm text-gray-400">
                        {displayableRole(user.membership.role)}
                      </div>
                    ) : null}

                    {/* <!-- Leave Project --> */}
                    {page.props.user.id === user.id ? (
                      <button
                        className="cursor-pointer ml-6 text-sm text-red-500"
                        onClick={confirmLeavingProject}
                      >
                        Leave
                      </button>
                    ) : null}

                    {/* <!-- Remove Project Member --> */}
                    {userPermissions.canRemoveProjectMembers ? (
                      <button
                        className="cursor-pointer ml-6 text-sm text-red-500"
                        onClick={() => confirmProjectMemberRemoval(user)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </ActionSection>
        </div>
      ) : null}

      {/* <!-- Role Management Modal --> */}
      <DialogModal
        isOpen={currentlyManagingRole}
        onClose={() => setCurrentlyManagingRole(false)}
      >
        <DialogModal.Content title={'Manage Role'}></DialogModal.Content>
        {managingRoleFor ? (
          <div>
            <div className="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer">
              {availableRoles.map((role, i) => (
                <button
                  type="button"
                  className={classNames(
                    'relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200',
                    {
                      'border-t border-gray-200 rounded-t-none': i > 0,
                      'rounded-b-none':
                        i !== Object.keys(availableRoles).length - 1,
                    },
                  )}
                  onClick={() => updateRoleForm.setData('role', role.key)}
                  key={role.key}
                >
                  <div
                    className={classNames({
                      'opacity-50':
                        updateRoleForm.data.role &&
                        updateRoleForm.data.role !== role.key,
                    })}
                  >
                    {/* <!-- Role Name --> */}
                    <div className="flex items-center">
                      <div
                        className={classNames('text-sm text-gray-600', {
                          'font-semibold':
                            updateRoleForm.data.role === role.key,
                        })}
                      >
                        {role.name}
                      </div>
                      {updateRoleForm.data.role === role.key ? (
                        <svg
                          className="ml-2 h-5 w-5 text-green-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      ) : null}
                    </div>

                    {/* <!-- Role Description --> */}
                    <div className="mt-2 text-xs text-gray-600">
                      {role.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <DialogModal.Footer>
          <SecondaryButton onClick={() => setCurrentlyManagingRole(false)}>
            Cancel
          </SecondaryButton>

          <PrimaryButton
            onClick={updateRole}
            className={classNames('ml-2', {
              'opacity-25': updateRoleForm.processing,
            })}
            disabled={updateRoleForm.processing}
          >
            Save
          </PrimaryButton>
        </DialogModal.Footer>
      </DialogModal>

      {/* <!-- Leave Project Confirmation Modal --> */}
      <ConfirmationModal
        isOpen={confirmingLeavingProject}
        onClose={() => setConfirmingLeavingProject(false)}
      >
        <ConfirmationModal.Content title={'Leave Project'}>
          Are you sure you would like to leave this project?
        </ConfirmationModal.Content>
        <ConfirmationModal.Footer>
          <SecondaryButton onClick={() => setConfirmingLeavingProject(false)}>
            Cancel
          </SecondaryButton>

          <DangerButton
            onClick={leaveProject}
            className={classNames('ml-2', {
              'opacity-25': leaveProjectForm.processing,
            })}
            disabled={leaveProjectForm.processing}
          >
            Leave
          </DangerButton>
        </ConfirmationModal.Footer>
      </ConfirmationModal>

      {/* <!-- Remove Project Member Confirmation Modal --> */}
      <ConfirmationModal
        isOpen={!!projectMemberBeingRemoved}
        onClose={() => setProjectMemberBeingRemoved(null)}
      >
        <ConfirmationModal.Content title={'Remove Project Member'}>
          Are you sure you would like to remove this person from the project?
        </ConfirmationModal.Content>
        <ConfirmationModal.Footer>
          <SecondaryButton onClick={() => setProjectMemberBeingRemoved(null)}>
            Cancel
          </SecondaryButton>

          <DangerButton
            onClick={removeProjectMember}
            className={classNames('ml-2', {
              'opacity-25': removeProjectMemberForm.processing,
            })}
            disabled={removeProjectMemberForm.processing}
          >
            Remove
          </DangerButton>
        </ConfirmationModal.Footer>
      </ConfirmationModal>
    </div>
  );
}
