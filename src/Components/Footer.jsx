import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 shadow-top">
      <div className="container mx-auto px-4">
        {/* Added text-center for mobile and md:text-left for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"> 
          {/* Section 1: Logo/Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">DigitalIve</h2>
            <p className="text-gray-400">Your source for the best digital products.</p>
          </div>
          {/* Section 2: Quick Links - added styling for better visibility */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/shop" className="hover:underline text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="/about" className="hover:underline text-gray-400 hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:underline text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          {/* Section 3: Follow Us/Contact Fix */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            {/* Fix: Used flex utilities (justify-center md:justify-start) to align the icons correctly */}
            <div className="flex justify-center md:justify-start space-x-4 mb-4"> 
              <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
            </div>
            {/* Adjusted spacing for email */}
            <p className="text-gray-400">digitalive@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">&copy; 2025 DigitalIve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;