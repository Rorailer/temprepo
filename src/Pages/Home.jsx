import React from 'react'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import Title from '../Components/Title'
import Footer from '../Components/Footer' 
import CardCarousel from '../Components/CardCarousel' // Imported CardCarousel

// Placeholder data for demonstration - in a real app this should be fetched or from state
const homeProducts = [
  { imageUrl: "https://via.placeholder.com/300/A52A2A/FFFFFF?text=Product1", name: "My Product 1", oldPrice: "25.00", newPrice: "19.99" },
  { imageUrl: "https://via.placeholder.com/300/8B4513/FFFFFF?text=Product2", name: "My Product 2", oldPrice: "25.00", newPrice: "19.99" },
  { imageUrl: "https://via.placeholder.com/300/D2691E/FFFFFF?text=Product3", name: "My Product 3", oldPrice: "25.00", newPrice: "19.99" },
  { imageUrl: "https://i.etsystatic.com/61334236/r/il/c58dfd/7315435985/il_1588xN.7315435985_f02u.jpg", name: "Saiyan Battle Armour", oldPrice: "249.99", newPrice: "199.99" }, 
  { imageUrl: "https://via.placeholder.com/300/696969/FFFFFF?text=Product5", name: "My Product 5", oldPrice: "25.00", newPrice: "19.99" },
];

// Map products to Card components once
const homeCards = homeProducts.map((p, index) => (
  <Card
    key={`card-${index}`}
    imageUrl={p.imageUrl}
    name={p.name}
    oldPrice={p.oldPrice}
    newPrice={p.newPrice} 
  />
));


const Home = () => {
  return (
    <>
      <Hero />


      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="BestSellers min-h-[80vh] bg-gray-50 rounded-lg shadow-lg p-8 my-8">
          <Title text='Best Sellers' />

          {/* MOBILE: Show Card Carousel, hidden on medium screens and up (md:hidden) */}
          <div className="md:hidden mt-10 max-w-6xl mx-auto">
            <CardCarousel cards={homeCards} />
          </div>

          {/* DESKTOP: Show static responsive grid, hidden on small screens (hidden md:grid) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 justify-items-center">
            {homeCards}
          </div>
        </div>



        <div className="NewCollection min-h-[80vh] bg-gray-50 rounded-lg shadow-lg p-8 my-8">
          <Title text='New Collection' />

          {/* MOBILE: Show Card Carousel, hidden on medium screens and up (md:hidden) */}
          <div className="md:hidden mt-10 max-w-6xl mx-auto">
            <CardCarousel cards={homeCards} />
          </div>

          {/* DESKTOP: Show static responsive grid, hidden on small screens (hidden md:grid) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 justify-items-center">
            {homeCards}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home