import { NavLink } from "react-router-dom";

const Navbar = ({children}) => {
    return (
        <>
            <header className="bg-[#00c49f]">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="w-full py-6 flex items-center justify-between border-b border-[#00cc9f] lg:border-none">
                        <div className="flex items-center">
                            <a href="/">
                                <span className="sr-only">Tier5</span>
                                <img
                                    className="h-10 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="ml-10 space-x-4">
                            <NavLink
                            to="/"
                            className="inline-block bg-[#00cd9f] py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                            >
                            Sign in
                            </NavLink>
                            <NavLink
                            to="/register"
                            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-[#00cc9f] hover:text-white hover:bg-[#00c49f]"
                            >
                            Sign up
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </header>
            {children}
        </>
    );
}

export default Navbar;