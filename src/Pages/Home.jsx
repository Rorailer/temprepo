import React from 'react'
import Hero from '../Components/Hero'
// import Navbar from '../Components/Navbar' // Removed redundant import
import Card from '../Components/Card'
import Title from '../Components/Title'
import Footer from '../Components/Footer' // Imported Footer component

// Placeholder data for demonstration - in a real app this should be fetched or from state
const homeProducts = [
  { imageUrl: "https://via.placeholder.com/300/A52A2A/FFFFFF?text=Product1", name: "My Product 1", oldPrice: "25.00", newPrice: "19.99" },
  { imageUrl: "https://via.placeholder.com/300/8B4513/FFFFFF?text=Product2", name: "My Product 2", oldPrice: "25.00", newPrice: "19.99" },
  { imageUrl: "https://via.placeholder.com/300/D2691E/FFFFFF?text=Product3", name: "My Product 3", oldPrice: "25.00", newPrice: "19.99" },
  { imageUrl: "https://i.etsystatic.com/61334236/r/il/c58dfd/7315435985/il_1588xN.7315435985_f02u.jpg", name: "Saiyan Battle Armour", oldPrice: "25.00", newPrice: "19.99" },
  { imageUrl: "https://via.placeholder.com/300/696969/FFFFFF?text=Product5", name: "My Product 5", oldPrice: "25.00", newPrice: "19.99" },
];


const Home = () => {
  return (
    <>
      <Hero />


      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="BestSellers min-h-[80vh] bg-gray-50 rounded-lg shadow-lg p-8 my-8">
          <Title text='Best Sellers' />

          <div className="cards flex flex-nowrap justify-center gap-3">
            {homeProducts.map((p, index) => (
              <Card
                key={`best-${index}`}
                imageUrl={p.imageUrl}
                name={p.name}
                oldPrice={p.oldPrice}
                newPrice={p.newPrice} 
              />
            ))}
          </div>
        </div>



        <div className="NewCollection min-h-[80vh] bg-gray-50 rounded-lg shadow-lg p-8 my-8">
          <Title text='New Collection' />

          <div className="cards flex flex-nowrap justify-center gap-3 mt-10">
            {homeProducts.map((p, index) => (
              <Card
                key={`new-${index}`}
                imageUrl={p.imageUrl}
                name={p.name}
                oldPrice={p.oldPrice}
                newPrice={p.newPrice} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home