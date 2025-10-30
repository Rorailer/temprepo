import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import Title from '../Components/Title'

const Home = () => {
  return (
    <>
      <Hero />


      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="BestSellers min-h-[80vh] bg-gray-50 rounded-lg shadow-lg p-8 my-8">
          <Title text='Best Sellers' />

          <div className="cards flex flex-row gap-3">
            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />

            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />

            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />

            <Card imageUrl="https://i.etsystatic.com/61334236/r/il/c58dfd/7315435985/il_1588xN.7315435985_f02u.jpg"
              name="Saiyan Battle Armour"
              oldPrice="25.00"
              newPrice="19.99" />
            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />


          </div>
        </div>



        <div className="NewCollection min-h-[80vh] bg-gray-50 rounded-lg shadow-lg p-8 my-8">
          <Title text='New Collection' />

          <div className="cards flex flex-row gap-3 mt-10">
            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />

            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />

            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />

            <Card imageUrl="https://i.etsystatic.com/61334236/r/il/c58dfd/7315435985/il_1588xN.7315435985_f02u.jpg"
              name="Saiyan Battle Armour"
              oldPrice="25.00"
              newPrice="19.99" />
            <Card imageUrl="https://via.placeholder.com/300"
              name="My Product"
              oldPrice="25.00"
              newPrice="19.99" />


          </div>
        </div>
      </div>


      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">DigitalIve</h2>
              <p className="text-gray-400">Your source for the best digital products.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Shop</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">About</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <p className="text-gray-400 mt-4">digitalive@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
            <p>&copy; 2025 DigitalIve. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
