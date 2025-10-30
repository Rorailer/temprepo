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
        <div className="BestSellers min-h-[80vh] bg-skin-tone rounded-lg shadow-lg p-8 my-8">
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



        <div className="NewCollection min-h-[80vh] bg-skin-tone rounded-lg shadow-lg p-8 my-8">
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
    </>
  )
}

export default Home
