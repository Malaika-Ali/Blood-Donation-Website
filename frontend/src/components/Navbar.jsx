import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
// import logo from '../assets/logo2.avif'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-white shadow-md 2xl:container">
      <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8 2xl:px-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link to='/' className="flex items-center w-16 h-16">
            <img className="object-cover w-full h-full"
            src={logo}></img>
          
          </Link>

          {/* Navigation Links */}
          <nav
            className={`absolute left-0 top-16 w-full bg-gray-100 text-lg md:bg-white p-5 md:static md:flex md:items-center md:justify-center md:p-0 ${
              isMenuOpen ? "block" : "hidden"
            } transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col gap-4 text-sm md:flex-row md:gap-6">
            <li>
                <NavLink
                  className={({isActive})=>`text-gray-700 transition font-medium hover:text-red-600 hover:font-semibold ${isActive ? "text-red-600 font-semibold": ""} transition-all duration-300 ease-in`}
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                to='/about'
                  className={({isActive})=>`text-gray-700 transition font-medium hover:text-red-600 hover:font-semibold ${isActive ? "text-red-600 font-semibold": ""} transition-all duration-300 ease-in`}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                to='/donors-list'
                  className={({isActive})=>`text-gray-700 transition font-medium hover:text-red-600 hover:font-semibold ${isActive ? "text-red-600 font-semibold": ""} transition-all duration-300 ease-in`}
                >
                  Find Blood
                </NavLink>
              </li>
              
              <li className="relative">
                <NavLink to='register'
                 className={({isActive})=>`text-gray-700 transition font-medium hover:text-red-600 hover:font-semibold ${isActive ? "text-red-600 font-semibold": ""} transition-all duration-300 ease-in`}
                >
                <button
                  className="flex items-center gap-1 text-gray-700 transition"
                  // className={({isActive})=>`flex flex-row items-center gap-1 text-gray-700 transition font-medium hover:text-red-600 hover:font-semibold ${isActive ? "text-red-600 font-semibold": ""} transition-all duration-300 ease-in`}
                  onClick={toggleDropdown}
                >
                  Register
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                </NavLink>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 rounded-lg bg-white shadow-lg">
                    <li>
                      <a
                        className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                        href="#"
                      >
                        Service 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                        href="#"
                      >
                        Service 2
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Login/Sign-up */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out"
             to='/login'
            >
              Login
            </Link>
            {/* <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              href="#"
            >
              Register
            </a> */}
          </div>

          {/* Hamburger Button */}
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-teal-600 md:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
