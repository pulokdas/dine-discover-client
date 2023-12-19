import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   



    const handleMenuToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

   

    const navbarClass = `bg-gray-800  w-full z-50`;

    return (
        <nav className={navbarClass}>
            <div className="container mx-auto flex  justify-around items-center">
                <div className="flex w-4/12 md:w-3/12 lg:w-2/12 items-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://i.ibb.co/dPqZ6rz/logo-transparent.png"
                            className="w-2/3 md:w-auto mr-3"
                            alt="Dine Discover Logo"
                        />
                    </Link>
                </div>
                <div
                    // ternary oparator and handeling the menunar for small devices
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } w-full md:flex md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/discover"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                            >
                                Discover
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Aboutus"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Contact"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                            >
                                profile
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    type="button"
                    onClick={handleMenuToggle}
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-600 ${isMenuOpen ? 'text-white' : 'text-gray-300'
                        }`}
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-8 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
