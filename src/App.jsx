import { useState } from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Footer from './Components/Footer' // Imported Footer component
import About from './Pages/About'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Product from './Pages/Product'
import LoginSignup from './Pages/loginSignup' // Imported corrected loginSignup component

function App() {
  // const [count, setCount] = useState(0) // Removed unused state

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-18 min-h-screen"> {/* Added min-h-screen for layout */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} /> {/* Added Product route */}
          <Route path="/about" element={<About />} /> {/* Added About route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<LoginSignup />} /> {/* Used LoginSignup for profile/login route assumption */}
          <Route path="/cart" element={<Cart />} /> {/* Added Cart route */}
          <Route path="/checkout" element={<Checkout />} /> {/* Added Checkout route */}
        </Routes>
      </main>
      <Footer /> {/* Added Footer for site-wide consistency */}
    </>
  )
}

export default App