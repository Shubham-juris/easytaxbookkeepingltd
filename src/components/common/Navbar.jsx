import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Navbar/logo.png';
import { Menu, X } from 'lucide-react'; // Optional, clean icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md py-4 px-6">
      <div className="flex justify-between md:justify-center items-center">
        {/* Logo */}
        <div className="w-25 md:w-40">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden md:flex justify-center mt-4">
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">HOME</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">ABOUT</Link></li>
          <li><Link to="/services" className="hover:text-blue-600">SERVICES</Link></li>
          <li><Link to="/AboutTax" className="hover:text-blue-600">ABOUT TAXES</Link></li>
          <li><Link to="/ContactUs" className="hover:text-blue-600">CONTACT US</Link></li>
        </ul>
      </nav>

      {/* Navigation Links - Mobile only */}
      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-600">HOME</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">ABOUT</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">SERVICES</Link></li>
            <li><Link to="/AboutTax" className="hover:text-blue-600">ABOUT TAXES</Link></li>
            <li><Link to="/ContactUs" className="hover:text-blue-600">CONTACT US</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
