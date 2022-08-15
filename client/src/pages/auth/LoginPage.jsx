import React from "react";
import { LockClosedIcon } from '@heroicons/react/solid';
import { useStateForm, useAuth, useBase } from "../../hooks";
import { Navbar } from "../../components/ui";

const LoginPage = () => {
    const initialState = {
        username : '',
        password: '',
    }

    const { formState, onChange, resetForm } = useStateForm(initialState);
    const auth = useAuth();
    const notify = useBase();
    const onSubmit = (e) => 
    {
        e.preventDefault();
        auth.login(formState, (res) => {
            resetForm();
            notify.setModal({show: true, type: 'success', message: res});
        }, (err) => {
            notify.setModal({show: true, type: 'error', message: err});
        });
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
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                id="useraname"
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

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-[#00c49f] border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-[#00cc9f] hover:text-[#00cb9f]">
                                    Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00cc9f] hover:bg-[#00cd9f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c49f]"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-white group-hover:text-white" aria-hidden="true" />
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

export default LoginPage;