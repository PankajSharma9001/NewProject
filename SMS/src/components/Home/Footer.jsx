import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "animate.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-[#141414] text-white text-center py-12">
      {/* Footer Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* About Us Section */}
          <div className="animate__animated animate__fadeIn animate__delay-0.5s">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-3">About Us</h3>

            <p className="text-md text-white-200">
              Rahul Public School, founded in 1998, has been at the forefront of providing exceptional education. 
              Our institution focuses on holistic development, combining academic excellence with a rich array of extracurricular programs.
              With state-of-the-art facilities and experienced educators, we are committed to fostering an environment that nurtures future leaders.
            </p>
            <p className="text-md text-white-300 mt-4">
              We believe in the power of education to change lives and empower our students to excel in every aspect of life.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-2xl font-semibold text-yellow-300 text-teal-400 mb-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white-200 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white-300 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-white-300 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white-300 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="text-white-300 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  to="/event"
                  className="text-white-300 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  Events & Achievements
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white-300 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  Gallery
                </Link>
                <li>
                <Link
                  to="/academic"
                  className="text-white-300 hover:text-yellow-300 transition duration-200 text-lg"
                >
                  AcademicCalendar
                </Link>
              </li>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate__animated animate__fadeIn animate__delay-1.5s">
            <h3 className="text-2xl font-semibold text-yellow-300 text-teal-400 mb-3">Contact</h3>
            <p className="text-md text-white-200">
              Email: <a href="mailto:info@rahulpublicschool.com" className="text-yellow-300 hover:underline">info@rahulpublicschool.com</a> <br />
              Phone: <a href="tel:+911234567890" className="text-yellow-300 hover:underline">+91 123 456 7890</a> <br />
              Address: 123, School Lane, City, Country
            </p>
            <p className="text-md text-white-300 mt-4">
              For any inquiries, feel free to reach out to us. We would love to hear from you!
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mt-8 animate__animated animate__fadeIn animate__delay-2s">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-600 text-3xl transition duration-200 transform hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-600 text-3xl transition duration-200 transform hover:scale-110">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-600 text-3xl transition duration-200 transform hover:scale-110">
            <FaYoutube />
          </a>
          <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-600 text-3xl transition duration-200 transform hover:scale-110">
            <FaWhatsapp />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 animate__animated animate__fadeIn animate__delay-3s">
          <p className="text-sm text-white-400">&copy; {currentYear} Rahul Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
