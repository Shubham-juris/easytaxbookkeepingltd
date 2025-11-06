import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Navbar/logoParalegal.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-16 sm:w-20 md:w-28">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-10 items-center text-gray-700 font-medium text-sm lg:text-base">
          <Link to="/" className="hover:text-blue-600 transition">HOME</Link>
          <Link to="/about" className="hover:text-blue-600 transition">ABOUT</Link>
          <Link to="/services" className="hover:text-blue-600 transition">SERVICES</Link>
          <Link to="/paralegal" className="hover:text-blue-600 transition">PARALEGAL</Link>
          <Link to="/AboutTax" className="hover:text-blue-600 transition">ABOUT TAXES</Link>
          <Link to="/career" className="hover:text-blue-600 transition">CAREER</Link>
          <Link to="/ContactUs" className="hover:text-blue-600 transition">CONTACT US</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 sm:px-6 pb-4 animate-slide-down">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium text-base">
            <li>
              <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>HOME</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>ABOUT</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>SERVICES</Link>
            </li>
            <li>
              <Link to="/paralegal" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>PARALEGAL</Link>
            </li>
            <li>
              <Link to="/AboutTax" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>ABOUT TAXES</Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>CAREER</Link>
            </li>
            <li>
              <Link to="/ContactUs" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>CONTACT US</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
