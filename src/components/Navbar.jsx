import React, { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline'
import {  Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div className="menu bg-transparent flex justify-end items-end inline-block">
            <div className='bg-white py-3 px-4'>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
                <button className='bg-gray-800 text-white rounded-lg px-4 py-1'>Logout</button>
            </div>
        </div>
    );
};

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

const Navbar = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [activeIndex, setActive] = useState("Home");

    const handlePageChange = (pageName) => {
       setActive(pageName);
      };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    let x = window.location.href


    return (x.includes("/signup") || x.includes("/login") ? null :
        <nav className="fixed w-full">
            <div className="bg-gray-800 max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-white text-2xl font-bold">Mess Maven</span>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:block">
                    
                            <div className="ml-10 flex items-center space-x-4 text-gray-300">
                                <Link
                                    to="/"
                                    onClick={()=>handlePageChange("Home")}
                                    className={activeIndex === 'Home' ? 'active  hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium'}
                                    
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/announcements"
                                    onClick={()=>handlePageChange("Announcements")}
                                    className={activeIndex === 'Announcements' ? 'active  hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium  '}
                                >
                                    Announcements
                                </Link>
                                <Link
                                    to="/menu"
                                    onClick={()=>handlePageChange("Menu")}
                                   className={activeIndex === 'Menu' ? 'active  hover:text-white px-3 py-2 text-sm font-medium border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium '}
                                >
                                    Menu
                                </Link>
                                <Link
                                    to="/extra"
                                    onClick={()=>handlePageChange("Extra")}
                                   className={activeIndex === 'Extra' ? 'active  hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium '}
                                >
                                    Extra Items
                                </Link>
                                <Link
                                    to="/leave"
                                    onClick={()=>handlePageChange("Leave")}
                                   className={activeIndex === 'Leave' ? 'active  hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium  '}
                                >
                                    Leave
                                </Link>
                                <div onClick={toggleMenu} className='border-2 border-grey-500 bg-white rounded-full p-1 mt-3 mb-3'>
                                    <UserIcon height={35} color='gray-500'></UserIcon>
                                </div>
                            </div>
                    
                    </div>
                </div>
            </div>
            {menuOpen && <Menu />}
        </nav>)
};

export default Navbar;
