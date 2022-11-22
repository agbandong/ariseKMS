import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import SecondaryButton from '@/Components/SecondaryButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function PleaseWait(){
    return(
        <GuestLayout className="col-span-2 lg:col-span-1">
            <Head title='Please Wait'/>
            <h1>Please wait for confirmation</h1>
            <Link href={route('welcome')}>
            <SecondaryButton className="my-2 float-right">
                Return to home page
            </SecondaryButton>
            </Link>
        </GuestLayout>
    )
}