import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Navbar/logo.png';
import { Menu, X } from 'lucide-react'; // Nice icons!

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-20 md:w-20">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">HOME</Link>
          <Link to="/about" className="hover:text-blue-600">ABOUT</Link>
          <Link to="/services" className="hover:text-blue-600">SERVICES</Link>
          <Link to="/AboutTax" className="hover:text-blue-600">ABOUT TAXES</Link>
          <Link to="/career" className="hover:text-blue-600">CAREER</Link>
          <Link to="/ContactUs" className="hover:text-blue-600">CONTACT US</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-600">HOME</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">ABOUT</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">SERVICES</Link></li>
            <li><Link to="/AboutTax" className="hover:text-blue-600">ABOUT TAXES</Link></li>
              <li> <Link to="/career" className="hover:text-blue-600">CAREER</Link></li>  
            <li><Link to="/ContactUs" className="hover:text-blue-600">CONTACT US</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
