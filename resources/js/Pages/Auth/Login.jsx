import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Login({ status, canResetPassword }) {
    //Data
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    //HTML page
    return (
        <div className='grid grid-cols-2 px-4 py-5 px-md-5 text-center text-lg-start' style={{backgroundColor: 'hsl(0, 0%, 96%)'}}>

            {/*Left side*/}
            {/* <div className='hidden lg:block'>
                <h1>Welcome to Arise PH</h1>
                <p>This is the Knowledge Management System designed for the resiliency projects of Arise PH</p>
            </div> */}
            <div className="hidden lg:block col-lg-6 mb-5 mb-lg-0" style={{margin: '30px'}}>
                <div style={{
                    position: 'absolute', left: '25%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <h3 className="my-5 display-3 fw-bold ls-tight px-3" style={{fontSize: '30px'}}>
                Welcome to&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br/><br/>ARISE-Philippines</h3>
                <h1 className="my-5 display-3 fw-bold ls-tight px-3 bolded" style={{fontSize: '30px', color: '#2d3b9c'}}>Knowledge Management Portal</h1>

                <p style={{color: 'hsl(217, 10%, 50.8%)', paddingTop: '20px'}}>
                This is the Knowledge Management System<br/> designed for the resiliency projects of ARISE-Philippines.
                </p>
                </div>
            </div>
            
            
            {/*Right side*/}
            <div className="col-span-2 lg:col-span-1">
                <GuestLayout title='Arise-Philippines Knowledge Management Portal'>
                    <Head title="Log in" />

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel forInput="email" value="Email" />

                            <TextInput
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel forInput="password" value="Password" />

                            <TextInput
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                handleChange={onHandleChange}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ml-4" processing={processing}>
                                Log in
                            </PrimaryButton>
                            
                        </div>
                        <div className='float-right block'>
                            <Link href={route('register/organization')}>
                            <SecondaryButton className="my-2 ml-4 float-right">
                                Register Organization
                            </SecondaryButton>
                            </Link>
                            <p className='float-right'>Organization already registered?</p>
                            <Link href={route('register')}>
                                <SecondaryButton className="my-2 ml-4 float-right">
                                    Register as User
                                </SecondaryButton>
                            </Link>
                        </div>
                    </form>
                </GuestLayout>
            </div>
        </div>
    );
}
