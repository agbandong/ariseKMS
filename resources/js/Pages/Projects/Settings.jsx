import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import FormSection from '@/Components/FormSection';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Dropdown from '@/Components/Dropdown';
import { Head, Link , useForm} from '@inertiajs/inertia-react';

export default function Settings(props){
    const stages = [
        "Initial",
        "Ongoing",
        "Review",
        "Completed"
      ]

    const onHandleChange = (event) => {
        form.setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    
    const form /*{ data, setData, post, processing, errors, reset }*/ = useForm({
        name: props.project.name,
        description: props.project.description,
        location: props.project.location,
        stage: props.project.stage,
    });

    function updateProject() {
        form.patch(route('projects.update', props.project), {
          errorBag: 'createProject',
          preserveScroll: true,
        });
      }
    
    function deleteProject(){
        route('projects.delete', props.project);
    }

    return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Settings
            </h2>
        }
        head={`${props.project.name} - Settings`}
    >
        <FormSection
        onSubmit={updateProject}
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
                src={props.auth.user.profile_photo_url}
                alt={props.auth.user.name}
            />

            <div className="ml-4 leading-tight">
                <div>{props.auth.user.name}</div>
                <div className="text-gray-700 text-sm">{props.auth.user.email}</div>
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
            handleChange={onHandleChange}
            required
            />
            <InputError message={form.errors.name} className="mt-2" />
        </div>

        <div className="mt-4 col-span-6 sm:col-span-4">
            <InputLabel htmlFor="description" value="Project description" />
            <TextInput
            type="text"
            name="description"
            value={form.data.description}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
            required
            />
            <InputError message={form.errors.description} className="mt-2" />
        </div>
        
        <div className="mt-4 col-span-6 sm:col-span-4">
            <InputLabel htmlFor="stage" value="Project stage" />
            <Dropdown>
            <Dropdown.Trigger>
                <TextInput
                type="text"
                name="stage"
                value={form.data.stage}
                className="mt-1 block w-full"
                handleChange={()=>{}}
                required
            />
            </Dropdown.Trigger>
            <Dropdown.Content align="left" width="auto" height="48">
                {stages.map((choice, index)=>(
                <div key={index} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out" 
                    onClick={() => form.setData('stage', choice)}>
                    {choice}
                </div>
                ))}
            </Dropdown.Content>   
            </Dropdown>
            
            <InputError message={form.errors.stage} className="mt-2" />
        </div>

        <div className="mt-4 col-span-6 sm:col-span-4">
            <InputLabel htmlFor="location" value="Project Location" />
            <TextInput
            type="text"
            name="location"
            value={form.data.location}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
            required
            />
            <InputError message={form.errors.location} className="mt-2" />
        </div>
        <PrimaryButton
                className='opacity-25'
            >
                Save
            </PrimaryButton>
        </FormSection>
        <button onClick={deleteProject}>Delete</button>
    </AuthenticatedLayout>
    );
}