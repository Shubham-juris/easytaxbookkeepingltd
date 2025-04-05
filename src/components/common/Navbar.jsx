import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Navbar/logo.png';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex flex-col items-center">
      <div className="w-32 md:w-40 mb-3">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>

      <nav>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-11 text-gray-700 font-medium items-center">
          <li>
            <Link to="/" className="hover:text-blue-600">HOME</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">ABOUT</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-600">SERVICES</Link>
          </li>
          <li>
            <Link to="/AboutTax" className="hover:text-blue-600">ABOUT TAXES</Link>
          </li>
          <li>
            <Link to="/ContactUs" className="hover:text-blue-600">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
