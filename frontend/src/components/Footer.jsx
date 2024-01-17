// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 bg-opacity-50 text-white py-4 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-3xl font-bold">
        <Link to="/" className="hover:text-indigo-500">
          Home
        </Link>
        <Link to="/projects" className="hover:text-indigo-500">
          Projects
        </Link>
        <Link to="/skills" className="hover:text-indigo-500">
          Skills
        </Link>
        <Link to="/portfolio" className="hover:text-indigo-500">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:text-indigo-500">
          Contact
        </Link>
      </div>
      <p className="mt-4 font-thin">&copy; 2024 Sambhav Jain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
