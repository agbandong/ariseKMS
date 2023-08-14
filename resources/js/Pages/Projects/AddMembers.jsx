import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import {Link, useState, React} from 'react';
import { Combobox } from '@headlessui/react'



export default function AddMembers(props){
    const [selectedUser, setSelectedUser] = useState('')
    const [query, setQuery] = useState('')

    const filteredPeople =
    props.users.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase())
        })

    return(
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Add Members
          </h2>
        }
        head={`${props.project.name} - Add Members`}
      >
            <Combobox value={selectedUser} onChange={setSelectedUser}>
                <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                    <Combobox.Options>
                        {filteredPeople.map((person) => (
                        <Combobox.Option key={person} value={person.name}>
                            {person.name}
                        </Combobox.Option>
                        ))}
                </Combobox.Options>
            </Combobox>
            <PrimaryButton>Add member</PrimaryButton>
        </AuthenticatedLayout>
    )
}