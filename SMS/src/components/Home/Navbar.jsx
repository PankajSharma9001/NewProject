import React from "react";
import { Link } from "react-router-dom";
import logo from '../Auth/Images/rahul.jpg';

const Navbar = () => {
  return (
    <nav className="bg-[#253C59] text-white shadow-lg py-2 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 animate__animated animate__fadeIn animate__delay-0.5s">
          <img
            src={logo} // Using the imported logo
            alt="School Logo"
            className="w-16 h-16 rounded-full border-4 border-yellow-500 shadow-xl transform transition duration-300"
          />
          <span className="hidden sm:block font-bold text-2xl text-yellow-400">
            RPS
          </span>
        </div>

        {/* School Name */}
        <h1 className="text-3xl font-extrabold text-center uppercase tracking-wider text-yellow-300 animate__animated animate__fadeIn animate__delay-0.8s">
          Rahul Public School
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center text-lg animate__animated animate__fadeIn animate__delay-1s">
          <li>
            <Link
              to="/"
              className="text-yellow-300 focus:outline-none"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-yellow-300 focus:outline-none"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-yellow-300 focus:outline-none"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-yellow-300 focus:outline-none"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/admission"
              className="text-yellow-300 focus:outline-none"
            >
              Admissions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
