import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-8 h-8 mr-2" src="https://i.ibb.co/dPqZ6rz/logo-transparent.png" alt="Dine Discover Logo" />
                    <p className="text-sm">© {new Date().getFullYear()} Dine Discover. All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
