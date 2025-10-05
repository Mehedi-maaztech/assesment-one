import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Frame.gif';
import './Navbar.css';
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { LuUserPlus } from "react-icons/lu";
import { IoMdGift } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {/* <li><NavLink to=''>Service</NavLink></li>
        <li><NavLink to=''>White label</NavLink></li>
        <li><NavLink to=''>Contact Us</NavLink></li> */}
    </>
    return (
        <div className="navbar shadow-sm text-white py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="logo" className='w-20' />
            </div>
            <div className="navbar-center hidden lg:flex bg-[#110C16] rounded-full py-3 ">
                <ul className="menu menu-horizontal px-5 gap-10">
                    {links}
                </ul>
            </div>
            <div className='navbar-end gap-3'>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <IoCartOutline />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <div className="profile">
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.pravatar.cc/100" alt="user avatar" />
                            </div>
                        </label>
                        <ul tabindex="0" className="dropdown-content menu shadow-lg bg-gradient-to-b from-[#1a0630] to-[#0e0118] rounded-2xl w-64 p-4">

                            <div className="flex flex-col items-center text-center mb-4">
                                <img src="https://i.pravatar.cc/100" className="w-16 h-16 rounded-full mb-2" />
                                <h3 className="text-white font-semibold text-base">Albert Flores</h3>
                                <p className="text-gray-400 text-sm">baker@example.com</p>
                            </div>

                            <div className="flex justify-center gap-2 mb-3">
                                <button className="px-3 py-1 text-sm text-white bg-gradient-to-r from-[#6a00ff] to-[#b800ff] rounded-full">
                                    Website
                                </button>
                                <button className="px-3 py-1 text-sm text-gray-300 bg-transparent border border-gray-700 rounded-full hover:border-[#6a00ff]">
                                    Dashboard
                                </button>
                            </div>

                            <div className="divider divider-neutral my-2"></div>

                            <li>
                                <a className="text-gray-300 hover:text-white flex items-center gap-2">
                                    <CiUser />
                                    User Profile
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-white flex items-center gap-2">
                                    <LuUserPlus />
                                    Referrals
                                </a>
                            </li>
                            <li className="flex justify-between w-full">
                                <a className="text-gray-300 hover:text-white flex items-center gap-2">
                                    <IoMdGift />
                                    Rewards
                                    <span className="badge bg-gradient-to-r from-[#6a00ff] to-[#b800ff] text-white border-0">468 Points</span>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-white flex items-center gap-2">
                                    <AiOutlineLogout />
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;