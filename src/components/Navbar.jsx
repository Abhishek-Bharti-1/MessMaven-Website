import React, { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline'
import {  Link } from 'react-router-dom';
import { useNavigate, useNavigation } from 'react-router-dom'


const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className="menu bg-transparent flex justify-end items-end">
            <div className='bg-white rounded-lg py-4 px-4 shadow-xl ease-in-out duration-500'>
                <ul>
                    <li>Ajay Kumar Singh</li>
                    <li>MBH A Mess</li>
                    <li>NIT Jalandhar</li>
                </ul>
                <div className='flex justify-center'>

                <button onClick={()=>{navigate("/login")}} className=' mt-2 bg-blue-800 text-white w-full hover:bg-red-700 rounded-lg px-4 py-1'>Logout</button>
                </div>
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
                                    className={activeIndex === 'Home' ? 'active text-white font-semibold hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium'}
                                    
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/announcements"
                                    onClick={()=>handlePageChange("Announcements")}
                                    className={activeIndex === 'Announcements' ? 'active  text-white font-semibold hover:text-white px-3 py-2 text-sm   border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium  '}
                                >
                                    Announcements
                                </Link>
                                <Link
                                    to="/menu"
                                    onClick={()=>handlePageChange("Menu")}
                                   className={activeIndex === 'Menu' ? 'active text-white font-semibold hover:text-white px-3 py-2 text-sm font-medium border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium '}
                                >
                                    Menu
                                </Link>
                                <Link
                                    to="/extra"
                                    onClick={()=>handlePageChange("Extra")}
                                   className={activeIndex === 'Extra' ? 'active text-white font-semibold  hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium '}
                                >
                                    Extra Items
                                </Link>
                                <Link
                                    to="/leave"
                                    onClick={()=>handlePageChange("Leave")}
                                   className={activeIndex === 'Leave' ? 'active text-white font-semibold hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium  '}
                                >
                                    Leave
                                </Link>
                                <Link
                                    to="/order"
                                    onClick={()=>handlePageChange("Order")}
                                   className={activeIndex === 'Order' ? 'active text-white font-semibold hover:text-white px-3 py-2 text-sm font-medium  border-b-2 border-blue-600' : '  hover:text-white px-3 py-2 text-sm font-medium  '}
                                >
                                    Order
                                </Link>
                                <div onClick={toggleMenu} className='border-4 border-blue-500 bg-white rounded-full p-1 mt-3 mb-3'>
                                    <UserIcon height={35} className=' text-gray-600'></UserIcon>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {menuOpen && <Menu />}
        </nav>)
};

export default Navbar;
