import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-white text-2xl font-bold">Your Logo</span>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
