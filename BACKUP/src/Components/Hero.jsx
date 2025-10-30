import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (

    <div className='flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-6 md:px-12 lg:px-20 bg-linear-to-br from-gray-50 to-white'>
      {/* Left Hero - Text Content */}
      <div className="flex flex-col gap-6 md:gap-8 flex-1 max-w-2xl">
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight'>
          Welcome to <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600'>LEATHERINE</span>
        </h1>
        <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
          We craft premium leatherwear, purses, and wallets—handmade for lasting style and functionality; custom and bulk orders available.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">

          <button
            className='px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl'
            onClick={() => navigate('/shop')}
          >
            Shop Now
          </button>
          <button
            className='px-8 py-3 bg-white text-black font-semibold rounded-lg border-2 border-black hover:bg-gray-50 transition-colors duration-200'
            onClick={() => navigate('/contact')}
          >
            Custom/Bulk Order
          </button>

        </div>


      </div>




      {/* Right Hero - Image/Visual */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
        <div className='flex flex-col gap-17 relative w-full max-w-lg aspect-square'>
          <div className='absolute inset-0 bg-linear-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl'></div>
          <div className='relative bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 flex items-center justify-center'>
            <div className='text-white text-center'>
              <div className='text-8xl mb-4'>
                <img src="ColoredLogo.svg" alt="" />
              </div>
              <p className='text-2xl font-bold'>Cosplay Costumes</p>
              <p className='text-lg opacity-90'>Custom designs</p>
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-4">
            <div>
              <p className='text-4xl font-bold text-gray-900'>10K+</p>
              <p className='text-sm text-gray-600'>Happy Customers</p>
            </div>
            <div>
              <p className='text-4xl font-bold text-gray-900'>500+</p>
              <p className='text-sm text-gray-600'>Products</p>
            </div>
            <div>
              <p className='text-4xl font-bold text-gray-900'>50+</p>
              <p className='text-sm text-gray-600'>Brands</p>
            </div>
          </div>


        </div>



      </div>

    </div>


  )
}

export default Hero
