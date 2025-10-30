import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 shadow-top">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">DigitalIve</h2>
            <p>Your source for the best digital products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
            </div>
            <p className="mt-4">digitalive@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2025 DigitalIve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
