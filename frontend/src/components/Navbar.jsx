import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-red-50 shadow-md 2xl:container">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 2xl:px-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link to='/' className="flex items-center w-16 h-16">
            <img className="object-cover w-full h-full" src={logo} alt="Logo" />
          </Link>

          {/* Navigation Links */}
          <nav
            className={`absolute left-0 right-0 top-16 z-20 bg-red-50 p-5 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block" : "hidden"
            } md:static md:block md:p-0`}
          >
            <ul className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:gap-6">
              {[
                { to: '/', text: 'Home' },
                { to: '/about', text: 'About Us' },
                { to: '/faq', text: 'FAQ' },
                { to: '/register', text: 'Register' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    className={({isActive}) => 
                      `block py-2 text-gray-700 transition font-medium hover:text-red-600 hover:font-semibold 
                      ${isActive ? "text-red-600 font-semibold" : ""} 
                      transition-all duration-300 ease-in`
                    }
                    to={link.to}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
              <li className="md:hidden">
                <Link
                  className="block w-full rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out"
                  to='/login'
                >
                  Login
                </Link>
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
          </div>

          {/* Hamburger Button */}
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-red-600 md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
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

