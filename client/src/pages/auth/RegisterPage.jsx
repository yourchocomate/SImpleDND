import React, { useState } from "react";
import { LockClosedIcon } from '@heroicons/react/solid';
import { useStateForm, useAuth, useBase } from "../../hooks";
import { Navbar } from "../../components/ui";

const genders = [
    {label: "Male", value: "Male"},
    {label: "Female", value: "Female"}
]

const countries = [
    {label: "Bangladesh", value: "Bangladesh"},
    {label: "India", value: "India"},
    {label: "Japan", value: "Japan"},
    {label: "Iran", value: "Iran"},
]

const RegisterPage = () => {

    const initialState = {
        fullname: '',
        username : '',
        country: countries[0].value,
        gender: genders[0].value,
        password: '',
        password_confirmation: '',
    }

    const { formState, onChange, resetForm } = useStateForm(initialState);
    const auth = useAuth();
    const { setModal } = useBase();
    const onSubmit = (e) => {
        e.preventDefault();
        auth.register(formState, (res) => {
            resetForm();
            console.log(res)
            setModal({show: true, type: 'success', message: res.message});
        }, (err) => {
            console.log(err)
            setModal({show: true, type: 'error', message: err});
        });
    }

    const [passwordStatus, setPasswordStatus] = useState(true);

    const onKeyUP = (e) => {
        e.preventDefault();
        if(e.target.value!= formState.password) setPasswordStatus(false);
        else setPasswordStatus(true);
    }

    return (
        <Navbar>
            <div className="lg:h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm w-full space-y-8">
                    <div className="card rounded">
                        <div>
                            <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=dark"
                            alt="DND"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up new account</h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                autoComplete="fullname"
                                value={formState.fullname}
                                onChange={onChange}
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00c49f] focus:border-[#00c49f] focus:z-10 sm:text-sm"
                                placeholder="Full name"
                                />
                            </div>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                id="username"
                                name="username"
                                type="username"
                                autoComplete="username"
                                value={formState.username}
                                onChange={onChange}
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00c49f] focus:border-[#00c49f] focus:z-10 sm:text-sm"
                                placeholder="Username"
                                />
                            </div>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <select
                                name="gender"
                                value={formState.gender}
                                onChange={onChange}
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00c49f] focus:border-[#00c49f] focus:z-10 sm:text-sm"
                                >
                                    {genders.map(g=> (<option key={g.value} value={g.value}>{g.label}</option>))}
                                </select>
                            </div>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <select
                                name="country"
                                value={formState.country}
                                onChange={onChange}
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00c49f] focus:border-[#00c49f] focus:z-10 sm:text-sm"
                                >
                                    {countries.map(g=> (<option key={g.value} value={g.value}>{g.label}</option>))}
                                </select>
                            </div>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                                </label>
                                <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={formState.password}
                                onChange={onChange}
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00c49f] focus:border-[#00c49f] focus:z-10 sm:text-sm"
                                placeholder="Password"
                                />
                            </div>

                            <div className="mt-1 relative rounded-md shadow-sm">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                Confirm password
                                </label>
                                <input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                autoComplete="confirm-password"
                                value={formState.password_confirmation}
                                onChange={onChange}
                                onKeyUp={onKeyUP}
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00c49f] focus:border-[#00c49f] focus:z-10 sm:text-sm"
                                placeholder="Confirm password"
                                />
                                <p className={passwordStatus ? 'hidden' : '' + "text-red-400"}>Password not matched</p>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00cc9f] hover:bg-[#00cb9f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c49f]"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-white group-hover:text-white" aria-hidden="true" />
                                    </span>
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

export default RegisterPage;