import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
      setIsSidebarOpen(false); // Close sidebar on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="text-white pt-10 px-6 pb-2 flex justify-end items-center shadow-lg top-0 z-50">
      <button
        className="text-white text-2xl md:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {isLargeScreen ? (
        <ul className="flex flex-row space-x-6 md:space-x-6">
          <li>
            <Link to="/" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
              Contact
            </Link>
          </li>
        </ul>
      ) : (
        <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 bg-opacity-45 text-white transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ zIndex: 1000 }}>
          <button className="absolute top-4 right-4 m-4 text-white" onClick={toggleSidebar}>
            &times;
          </button>
          <ul className="py-4 mt-8 space-y-8">
            <li>
              <Link to="/" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:animate-pulse hover:text-indigo-500 text-2xl font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
