import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-100 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          <Link to="/">JuiceDelight</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16">
              </path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium text-md">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
          <li><Link to="/products" className="hover:text-green-600">Products</Link></li>
        </ul>

        {/* Auth & CTA for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-gray-700 hover:text-green-600">Login</Link>
          <Link to="/signup" className="text-gray-700 hover:text-green-600">Signup</Link>
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-2 text-gray-700 font-medium text-md">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
            <li><Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link></li>
            <li>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
