import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-white fixed w-full h-16 md:h-18 left-0 top-0 px-4 md:px-6 shadow-md z-50'>
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 md:gap-3">
        <img src="MonoChromeLogo.svg" className='h-8 md:h-12' alt="Logo" />
        <h1 className='font-black text-lg md:text-xl'>DIGITALIVE</h1>
      </Link>

      {/* Centered Nav Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6 lg:gap-8 items-center">
        <Link to="/" className='text-gray-700 hover:text-black font-medium transition-colors duration-200'>Home</Link>
        <Link to="/shop" className='text-gray-700 hover:text-black font-medium transition-colors duration-200'>Shop</Link>
        <Link to="/about" className='text-gray-700 hover:text-black font-medium transition-colors duration-200'>About</Link>
        <Link to="/contact" className='text-gray-700 hover:text-black font-medium transition-colors duration-200'>Contact</Link>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-3 md:gap-4">
        <Link to="/profile" className='h-6 w-6 hover:opacity-70 transition-opacity duration-200'>
          <img className='h-full w-full' src="profile-icon.svg" alt="profile" />
        </Link>
        <Link to="/cart" className="relative flex items-center hover:opacity-70 transition-opacity duration-200">
          <img className='h-6 w-6' src="cart-icon.svg" alt="cart" />
          <span className='absolute -top-2 -right-2 bg-black text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center'>10</span>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar
