import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, toggleNavbar }) => {
  const handleToggle = () => {
    if (typeof toggleNavbar === 'function') {
      toggleNavbar();
    }
  };

  return (
    <div className={`bg-${isOpen ? 'green' : 'black'} ${isOpen ? 'text-black' : 'text-white'} p-6 shadow-lg top-0 sticky z-50 transition-colors`}>
      <div className="flex items-center justify-between">
        <div className="cursor-pointer" onClick={handleToggle}>
          <span className={`block h-2 w-8 bg-${isOpen ? 'black' : 'gray-700'} mb-2`}></span>
          <span className={`block h-2 w-8 bg-${isOpen ? 'black' : 'gray-700'} mb-2`}></span>
          <span className={`block h-2 w-8 bg-${isOpen ? 'black' : 'gray-700'}`}></span>
        </div>
        <ul className={`flex flex-row items-center space-x-6 ${isOpen ? 'flex-col  items-start' : 'hidden md:flex'}`}>
          <li>
            <Link
              to="/"
              className={`text-${isOpen ? 'black' : 'white'} hover:text-indigo-500 text-2xl mx-2 font-bold`}
              onClick={handleToggle}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`text-${isOpen ? 'black' : 'white'} hover:text-indigo-500 text-2xl mx-2 font-bold`}
              onClick={handleToggle}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`text-${isOpen ? 'black' : 'white'} hover:text-indigo-500 text-2xl mx-2 font-bold`}
              onClick={handleToggle}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-${isOpen ? 'black' : 'white'} hover:text-indigo-500 text-2xl mx-2 font-bold`}
              onClick={handleToggle}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
